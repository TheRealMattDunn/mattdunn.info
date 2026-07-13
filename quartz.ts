import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node) => node.slugSegments?.[0] === "moc",
  mapFn: (node) => {
    // Promote moc/'s children to the root so the "moc" folder itself isn't shown.
    if (node.slugSegments?.length === 0) {
      node.children = node.children.flatMap((c) => (c.slugSegment === "moc" ? c.children : [c]))
    }
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
