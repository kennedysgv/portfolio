import { heroStats, profileImage } from '../data/content'
import type { SyntheticEvent } from 'react'

function HeartIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M32 56c-8-12-20-20-20-32a12 12 0 0 1 24 0 12 12 0 0 1 24 0c0 12-12 20-20 32z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 28v12M26 34h12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function handleImgError(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget as HTMLImageElement
  img.style.display = 'none'
  const next = img.nextElementSibling as HTMLElement | null
  next?.classList.add('hero__photo-fallback--visible')
}

export function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Fisioterapia cardiovascular e pulmonar</p>
          <h1>Kennedy Vieira</h1>
          <p className="hero__lead">
            Cuidado especializado em UTI e no conforto do seu lar — com o primeiro
            atendimento de fisioterapia cardiovascular da região.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              Agendar atendimento
            </a>
            <a className="btn btn--ghost" href="#sobre">
              Conheça meu trabalho
            </a>
          </div>
          <ul className="hero__stats" aria-label="Destaques">
            {heroStats.map(({ value, label }) => (
              <li key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__photo-wrap">
              <img
                className="hero__photo"
                src={profileImage}
                alt="Kennedy Vieira, fisioterapeuta"
                width={320}
                height={320}
                loading="lazy"
                onError={handleImgError}
              />
              <div className="hero__photo-fallback" aria-hidden="true">
                <HeartIcon />
              </div>
            </div>
            <p>Respiração, circulação e reabilitação com base em evidências.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
