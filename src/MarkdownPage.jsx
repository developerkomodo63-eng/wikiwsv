import ReactMarkdown from 'react-markdown'

const markdownModules = import.meta.glob('../docs_jerale/*.md', {
  eager: true,
  import: 'default',
})

function MarkdownPage({ file }) {
  const filePath = `../docs_jerale/${file}`
  const content = markdownModules[filePath] ?? ''

  const formattedContent = content
    .replace(/!\[([^\]]*)\]\(img_jerale\/([^)]+)\)/g, (match, alt, filename) => {
      return `![${alt}](/docs_jerale/img_jerale/${filename})`
    })

  return (
    <article className="markdown-content">
      <ReactMarkdown>{formattedContent}</ReactMarkdown>
    </article>
  )
}

export default MarkdownPage
