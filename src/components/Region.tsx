import { cities } from '../data/content'

export function Region(): JSX.Element {
  return (
    <section className="section section--alt" id="regiao">
      <div className="container region">
        <div className="region__map">
          <iframe
            title="Mapa da Zona da Mata - locais de atendimento"
            src="https://www.google.com/maps?q=Zona%20da%20Mata%2C%20Minas%20Gerais&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            aria-label="Mapa mostrando a região onde há atendimento"
          />
        </div>
        <div>
          <h2 className="section__title">Onde atendo</h2>
          <p className="section__intro">
            Atendimento domiciliar e consultas na região da Zona da Mata de Minas Gerais:
          </p>
          <ul className="region__cities">
            {cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <p className="region__note">
            Entre em contato para confirmar disponibilidade, deslocamento e modalidade
            de atendimento (domiciliar ou combinada com instituição parceira).
          </p>
        </div>
      </div>
    </section>
  )
}
