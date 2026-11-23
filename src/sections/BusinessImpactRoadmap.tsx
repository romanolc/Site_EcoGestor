import { ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness, CircleCheck, Database, Handshake, Leaf, Route, UsersRound } from 'lucide-react';
import Reveal from '../components/Reveal';
import { impactPillars, revenuePaths, roadmap } from '../data/content';

export function ComparisonSection() {
  return <section className="section compare-section" id="por-que" aria-labelledby="compare-title">
    <div className="wrap"><Reveal className="section-heading"><p className="eyebrow eyebrow-dark">POR QUE O ECOGESTOR?</p><h2 id="compare-title">Menos pontos cegos.<br /><em>Mais conexão entre os elos.</em></h2></Reveal>
      <Reveal className="compare-flow"><div className="compare-side compare-old"><span className="compare-label">QUANDO A CADEIA OPERA FRAGMENTADA</span><div className="fragment-bits"><span>GERA</span><i /><span>COLETA</span><i /><span>TRANSFORMA</span><i /><span>COMPRA</span></div><ul><li>Informações dispersas</li><li>Conexões difíceis</li><li>Baixa visibilidade do fluxo</li></ul></div><div className="compare-middle"><span>→</span><small>CONEXÃO</small></div><div className="compare-side compare-new"><span className="compare-label">A PROPOSTA ECOGESTOR</span><div className="connected-orbit"><span>EcoGestor</span><i /><i /><i /><i /></div><ul><li>Conexão entre atores</li><li>Rastreabilidade proposta</li><li>Dados para orientar ações</li></ul></div></Reveal>
      <Reveal className="compare-footer"><span>O EcoGestor é uma proposta de infraestrutura digital para organizar e conectar a cadeia.</span><a href="#experiencias">Conhecer as jornadas <ArrowUpRight size={15} /></a></Reveal>
    </div>
  </section>;
}

export function ImpactSection() {
  return <section className="section impact-section" id="impacto" aria-labelledby="impact-title">
    <div className="impact-orbit-bg" aria-hidden="true" />
    <div className="wrap impact-layout"><Reveal className="impact-intro"><p className="eyebrow">IMPACTO · O QUE A PLATAFORMA PRETENDE APOIAR</p><h2 id="impact-title">Impacto não se presume.<br /><em>Se acompanha.</em></h2><p>O relatório descreve impactos esperados, mas não apresenta métricas operacionais de resultados alcançados. Estes são os eixos previstos para acompanhamento.</p><span className="impact-no-data"><span /> SEM INDICADORES REAIS REPORTADOS</span></Reveal>
      <div className="impact-list">{impactPillars.map((item, index) => {
        const icons = [<Leaf size={19} />, <UsersRound size={19} />, <BarChart3 size={19} />];
        return <Reveal className="impact-item" key={item.label} delay={index * 90}><span className="impact-index">{item.number}</span><div className="impact-icon">{icons[index]}</div><div><h3>{item.label}</h3><p>{item.text}</p></div><span className="impact-status">IMPACTO ESPERADO</span></Reveal>;
      })}</div>
    </div>
  </section>;
}

export function BusinessSection() {
  return <section className="section business-section" id="modelo" aria-labelledby="business-title">
    <div className="wrap"><Reveal className="section-heading section-heading-row"><div><p className="eyebrow eyebrow-dark">MODELO DE NEGÓCIO · HIPÓTESE DE SUSTENTAÇÃO</p><h2 id="business-title">Como o EcoGestor <em>se sustenta?</em></h2></div><p>Três caminhos previstos no relatório. Receita projetada não é lucro; cada possibilidade depende de implementação, custos e adesão.</p></Reveal>
      <Reveal className="business-ecosystem">
        <div className="revenue-center"><div className="revenue-ring"><span className="revenue-logo"><img src="/ecogestor-logo.png" alt="" /></span><span className="revenue-orbit orbit-a" /><span className="revenue-orbit orbit-b" /><span className="revenue-orbit orbit-c" /></div><b>ECOSSISTEMA<br />DE VALOR</b><small>proposta de negócio</small></div>
        {revenuePaths.map((item, index) => <article className={`revenue-path revenue-path-${index + 1}`} key={item.name}><span className="revenue-path-line" /><span className="revenue-path-icon">{index === 0 ? <BriefcaseBusiness size={19} /> : index === 1 ? <Handshake size={19} /> : <Database size={19} />}</span><div><small>{item.label}</small><h3>{item.name}</h3><p>{item.detail}</p></div></article>)}
      </Reveal>
      <Reveal className="business-caveat"><span><CircleCheck size={17} /> Catadores: acesso proposto sem cobrança</span><p>Modelo descrito no relatório; não representa receita, clientes ou parcerias já contratadas.</p></Reveal>
    </div>
  </section>;
}

export function RoadmapSection() {
  return <section className="section roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
    <div className="wrap"><Reveal className="section-heading section-heading-row"><div><p className="eyebrow">ROADMAP · EVOLUÇÃO DA PROPOSTA</p><h2 id="roadmap-title">De uma base útil<br /><em>a uma cadeia conectada.</em></h2></div><span className="roadmap-status"><i /> HORIZONTES PLANEJADOS</span></Reveal>
      <div className="roadmap-track">{roadmap.map((item, index) => <Reveal className={`roadmap-card roadmap-card-${index + 1}`} key={item.stage} delay={index * 110}><div className="roadmap-card-top"><span className="roadmap-index">0{index + 1}</span><span className="roadmap-state">{item.state}</span></div><div className="roadmap-pin"><span /></div><small>{item.horizon.toUpperCase()}</small><h3>{item.stage}</h3><p>{item.detail}</p>{index < roadmap.length - 1 && <ArrowRight className="roadmap-arrow" size={20} aria-hidden="true" />}</Reveal>)}</div>
      <p className="roadmap-foot"><Route size={15} /> Integrações físicas, APIs abertas, IA preditiva e expansão aparecem no relatório como evolução futura.</p>
    </div>
  </section>;
}
