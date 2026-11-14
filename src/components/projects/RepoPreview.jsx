import Icon from '../ui/Icon'
import './RepoPreview.css'

// "Foto" do repositório no estilo do GitHub, montada com os arquivos reais (para projetos sem imagens).
export default function RepoPreview({ repo, files, language }) {
  const [owner, name] = repo.split('/')
  return (
    <div className="repo" aria-hidden="true">
      <div className="repo__head">
        <Icon name="book" size={14} />
        <span>
          {owner} / <strong>{name}</strong>
        </span>
        <span className="repo__badge">Public</span>
      </div>
      <ul className="repo__files">
        {files.slice(0, 6).map((file) => {
          const isDir = file.endsWith('/')
          return (
            <li key={file}>
              <span className={`repo__icon${isDir ? ' is-dir' : ''}`} />
              {isDir ? file.slice(0, -1) : file}
            </li>
          )
        })}
      </ul>
      <div className="repo__lang">
        <span className="repo__bar" style={{ background: language.color }} />
        <span className="repo__lang-name">
          <i style={{ background: language.color }} />
          {language.name}
        </span>
      </div>
    </div>
  )
}
