export default function ProjectCard({ title, description, tags, link }) {
  return (
    <article className="project-card">
      <div className="project-icon" aria-hidden="true">✦</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tag-list" aria-label={`${title} technologies`}>
        {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <a className="text-link" href={link}>View project <span aria-hidden="true">→</span></a>
    </article>
  )
}
