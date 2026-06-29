import ReactMarkdown from 'react-markdown'

const markdownModules = import.meta.glob('../docs_jerale/*.md', {
  eager: true,
  import: 'default',
})

function MarkdownPage({ file }) {
  const filePath = `../docs_jerale/${file}`
  const content = markdownModules[filePath] ?? ''

  const formattedContent = content
    .replace(/!\[[^\]]*\]\((img_jerale\/[^)]+)\)/g, '![](/docs_jerale/$1)')
    .replace(/!\[[^\]]*\]\(([^)]+)\)/g, (match, p1) => {
      if (p1.startsWith('/') || p1.startsWith('http') || p1.includes('://')) {
        return match
      }

      const normalized = p1.replace(/^img_jerale\//, '')
      const isImage = /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(normalized)

      if (!isImage) {
        return match
      }

      return `![](/docs_jerale/img_jerale/${normalized})`
    })

  return (
    <article className="markdown-content">
      <ReactMarkdown>{formattedContent}</ReactMarkdown>
    </article>
  )
}

export default MarkdownPage
