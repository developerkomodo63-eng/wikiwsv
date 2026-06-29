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
    .replace(/!\[[^\]]*\]\(([^)]+\.png)\)/g, (match, p1) => {
      if (p1.startsWith('/') || p1.startsWith('http')) {
        return match
      }
      return `![](/docs_jerale/img_jerale/${p1})`
    })

  return (
    <article className="markdown-content">
      <ReactMarkdown>{formattedContent}</ReactMarkdown>
    </article>
  )
}

export default MarkdownPage
