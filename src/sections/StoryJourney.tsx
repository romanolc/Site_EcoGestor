import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Circle, Recycle } from 'lucide-react';
import Reveal from '../components/Reveal';
import { chainActors, circularSteps } from '../data/content';

export function StorySection() {
  return (
    <section className="section story-section" id="historia" aria-labelledby="story-title">
      <div className="wrap story-grid">
        <Reveal className="story-intro">
          <p className="eyebrow eyebrow-dark">O DESAFIO NÃO É SÓ O DESCARTE</p>
          <h2 id="story-title">O problema é quando <em>as pontas não se encontram.</em></h2>
          <p>Quem gera, quem coleta, quem transforma e quem compra fazem parte do mesmo ciclo. Mas sem conexão, materiais e oportunidades podem se perder no caminho.</p>
          <span className="story-tag"><Circle size={8} /> uma cadeia a conectar</span>
        </Reveal>
        <Reveal className="chain-visual" delay={120}>
          <div className="chain-art" aria-hidden="true"><img src="/images/chain-organic.webp" alt="" /></div>
          <div className="chain-list">
            {chainActors.map((actor, index) => <div className={`chain-node chain-node-${index + 1}`} key={actor.title}>
              <span className="chain-index">{String(index + 1).padStart(2, '0')}</span><div><b>{actor.title}</b><small>{actor.subtitle}</small></div>{index < chainActors.length - 1 && <span className="chain-gap" aria-hidden="true">· · ·</span>}
            </div>)}
          </div>
          <div className="chain-stamp"><Recycle size={19} /><span>O CICLO PRECISA<br />SE CONECTAR</span></div>
        </Reveal>
      </div>
      <Reveal className="bridge-line wrap"><div className="bridge-wordmark"><span className="bridge-mark">E</span><span>O EcoGestor conecta a cadeia.</span><ArrowRight size={19} /></div></Reveal>
    </section>
  );
}

export function JourneySection() {
  const [active, setActive] = useState(0);
  const step = circularSteps[active];
  return (
    <section className="section journey-section" id="jornada" aria-labelledby="journey-title">
      <div className="wrap">
        <Reveal className="section-heading section-heading-row">
          <div><p className="eyebrow eyebrow-dark">A JORNADA DA CIRCULARIDADE</p><h2 id="journey-title">Cada etapa deixa <em>um rastro.</em></h2></div>
          <p>Toque ou selecione uma etapa para acompanhar como o fluxo proposto transforma movimentação em informação.</p>
        </Reveal>
        <Reveal className="journey-interaction">
          <div className="journey-track" role="group" aria-label="Etapas da jornada circular">
            {circularSteps.map((item, index) => <button key={item.title} type="button" aria-pressed={active === index} className={`journey-step ${active === index ? 'is-active' : ''}`} onClick={() => setActive(index)}>
              <span className="journey-dot">{index === active ? <span /> : null}</span><b>{item.title}</b>{index < circularSteps.length - 1 && <span className="journey-connector" aria-hidden="true" />}
            </button>)}
          </div>
          <div className="journey-detail" id="journey-detail" aria-live="polite">
            <div className="journey-detail-icon"><span>0{active + 1}</span><ArrowUpRight size={21} /></div>
            <div><p className="eyebrow eyebrow-dark">ETAPA 0{active + 1}</p><h3>{step.title}</h3><p>{step.detail}</p></div>
            <div className="journey-next">{active < circularSteps.length - 1 ? <button type="button" onClick={() => setActive(active + 1)} aria-label={`Avançar para ${circularSteps[active + 1].title}`}><ArrowRight size={20} /></button> : <span className="journey-complete"><Recycle size={19} /> ciclo conectado</span>}</div>
          </div>
        </Reveal>
        <Reveal><p className="journey-outro">Do resíduo ao dado. <em>Do dado ao valor.</em><ArrowDown size={16} /></p></Reveal>
      </div>
    </section>
  );
}
