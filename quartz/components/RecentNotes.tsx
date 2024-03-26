import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import style from "./styles/recentNotes.scss"
import { Date, getDate } from "./Date"
import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

interface Options {
  title?: string
  limit: number
  linkToMore: SimpleSlug | false
  filter: (f: QuartzPluginData) => boolean
  sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  limit: 3,
  linkToMore: false,
  filter: () => true,
  sort: byDateAndAlphabetical(cfg),
})

export default ((userOpts?: Partial<Options>) => {
  const RecentNotes: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }

    if (fileData.slug !== "index") {
      return <></>
    }

    const pages = allFiles.filter(opts.filter).sort(opts.sort)
    const remaining = Math.max(0, pages.length - opts.limit)
    return (
      <div class={classNames(displayClass, "recent-notes")}>
        <h2>{opts.title ?? i18n(cfg.locale).components.recentNotes.title}</h2>
        <ul class="recent-ul">
          {pages.slice(0, opts.limit).map((page) => {
            const title = page.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
            const tags = page.frontmatter?.tags ?? []

            return (
              <li class="recent-li">
                <Date date={getDate(cfg, page)!} locale={cfg.locale} /> —
                <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
        {opts.linkToMore && remaining > 0 && (
          <p>
            <a href={resolveRelative(fileData.slug!, opts.linkToMore)}>
              {i18n(cfg.locale).components.recentNotes.seeRemainingMore({ remaining })}
            </a>
          </p>
        )}

        <hr/>
      </div>
    )
  }

  RecentNotes.css = style
  return RecentNotes
}) satisfies QuartzComponentConstructor
