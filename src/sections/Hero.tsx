import { ArrowDown, ArrowUpRight, CircleDot } from 'lucide-react';
import Reveal from '../components/Reveal';
import { brand } from '../data/content';

const flow = ['Resíduo', 'Dado', 'Conexão', 'Valor'];
export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true"><img src="/images/hero-organic.webp" alt="" /></div>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-inner wrap">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{brand.eyebrow}</p>
          <p className="hero-manifesto">{brand.manifesto}</p>
          <h1 id="hero-title">A inteligência por trás de uma <em>economia circular.</em></h1>
          <p className="hero-description">{brand.subheadline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experiencias">Explore o ecossistema <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#historia">Entenda a proposta <ArrowDown size={15} /></a>
          </div>
        </Reveal>
        <Reveal className="hero-flow-wrap" delay={140}>
          <div className="hero-flow-head"><span>UM CICLO EM MOVIMENTO</span><span className="live-indicator"><i /> proposta de conexão</span></div>
          <div className="hero-flow" aria-label="Fluxo conceitual: Resíduo, Dado, Conexão e Valor">
            {flow.map((item, index) => <div className="hero-flow-step" key={item}><span className="flow-node"><CircleDot size={16} /></span><span>{item}</span>{index < flow.length - 1 && <span className="flow-link" aria-hidden="true" />}</div>)}
          </div>
          <p>Conexões que mantêm materiais e oportunidades em circulação.</p>
        </Reveal>
        <div className="hero-side-note"><span className="side-line" />PLATAFORMA · PESSOAS · CIRCULARIDADE</div>
      </div>
      <a className="scroll-cue" href="#historia" aria-label="Rolar para conhecer a história"><span>ROLE PARA EXPLORAR</span><ArrowDown size={15} /></a>
    </section>
  );
}
