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
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__dot" />
      </span>
      <span className="theme-toggle__label">{isDark ? 'Escuro' : 'Claro'}</span>
    </button>
  )
}
