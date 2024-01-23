import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/therealmattdunn",
      LinkedIn: "https://www.linkedin.com/in/dunnm",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta({
      showReadingTime: false
    }),
    //Component.TagList()
  ],
  left: [
    Component.PageTitle(),
    //Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    //Component.Darkmode(),
    Component.DesktopOnly(Component.RecentNotes({
      title: "Most recent",
      limit: 5
    })),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.TagList(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
    Component.Backlinks(),
  ],
  afterBody: []
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta({
      showReadingTime: false
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
  afterBody: []
}
