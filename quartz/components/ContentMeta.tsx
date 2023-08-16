import { formatDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

export default (() => {
  function ContentMetadata({ fileData }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      const segments: string[] = []
      if (fileData.dates?.modified) {
        segments.push("Last updated " + formatDate(fileData.dates.modified))
      }

      return <p class="content-meta">{segments.join(", ")}</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
