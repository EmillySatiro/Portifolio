import Icon from '../ui/Icon'
import './ProjectArchive.css'

// Lista compacta dos trabalhos acadêmicos menores.
export default function ProjectArchive({ items }) {
  return (
    <ul className="archive">
      {items.map((item) => (
        <li key={item.url}>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="archive__row">
            <span className="archive__lang">{item.lang}</span>
            <span className="archive__text">
              <span className="archive__name">{item.name}</span>
              <span className="archive__topic">
                {item.topic}
                {item.owner && <em> · com @{item.owner}</em>}
              </span>
            </span>
            <Icon name="arrowRight" size={18} className="archive__arrow" />
          </a>
        </li>
      ))}
    </ul>
  )
}
