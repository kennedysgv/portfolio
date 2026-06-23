import { navLinks } from '../data/content'
import { useNavMenu } from '../hooks/useNavMenu'

export function Header(): JSX.Element {
  const { open, toggle, close } = useNavMenu()

  return (
    <header className={`header${open ? ' header--menu-open' : ''}`} id="topo">
      <div className="header__bar">
        <div className="header__inner">
          <a className="logo" href="#topo" onClick={close}>
            <img
              src="/images/KV.png"
              alt="Kennedy Vieira - Fisioterapia"
              className="logo__image"
              width={48}
              height={48}
            />
          </a>
          <button
            className={`nav-toggle${open ? ' nav-toggle--open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={toggle}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </span>
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Fechar menu"
          onClick={close}
        />
      )}

      <nav
        className={`nav${open ? ' nav--open' : ''}`}
        id="menu-principal"
        aria-label="Principal"
        aria-hidden={!open}
      >
        <ul className="nav__list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={close}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a className="nav__cta" href="#contato" onClick={close}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
