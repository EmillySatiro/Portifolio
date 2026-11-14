import Icon from './Icon'
import './ThemeToggle.css'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
    >
      <span className="theme-toggle__icon" key={theme}>
        <Icon name={isDark ? 'sun' : 'moon'} size={18} />
      </span>
    </button>
  )
}
