import { i18n } from "../i18n"
import { JSResourceToScriptElement } from "../util/resources"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources
    const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`
    const appleTouchIconPath = `https://${cfg.baseUrl}/static/apple-touch-icon.png`
    const favicon32Path = `https://${cfg.baseUrl}/static/favicon-32x32.png`
    const favicon16Path = `https://${cfg.baseUrl}/static/favicon-16x16.png`
    const manifestPath = `https://${cfg.baseUrl}/static/site.webmanifest`

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="675" />
        {cfg.baseUrl && <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIconPath} />}
        {cfg.baseUrl && <link rel="icon" type="image/png" sizes="32x32" href={favicon32Path} />}
        {cfg.baseUrl && <link rel="icon" type="image/png" sizes="16x16" href={favicon16Path} />}
        {cfg.baseUrl && <link rel="manifest" href={manifestPath} />}
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
