import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Search()
  ],
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
    Component.ContentMeta(),
    Component.TagList()
  ],
  afterBody: [
    Component.Graph(),
    Component.Backlinks()
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  afterBody: [
    Component.Backlinks()
  ],
  left: [],
  right: [],
}
