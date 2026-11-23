import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BarChart3, Building2, CircleHelp, MapPin, MessageCircle, Package, Recycle, Route, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import Reveal from '../components/Reveal';

function CompanyView() {
  return <div className="product-window company-window">
    <div className="window-top"><div className="window-brand"><span className="window-brand-mark">E</span><b>ecogestor</b></div><span className="demo-label">VISUALIZAÇÃO DEMONSTRATIVA · SEM DADOS REAIS</span><span className="window-avatar"><Building2 size={16} /></span></div>
    <div className="window-body">
      <div className="window-sidebar"><span className="sidebar-active"><BarChart3 size={16} /> Visão geral</span><span><Package size={16} /> Resíduos</span><span><Recycle size={16} /> Marketplace</span><span><ShieldCheck size={16} /> Rastreabilidade</span><span><MessageCircle size={16} /> Relatórios</span></div>
      <div className="company-content"><div className="product-title-row"><div><small>JORNADA EMPRESA / GESTÃO</small><h3>Visão de operações</h3></div><span className="period-tag">Filtros temporais</span></div>
        <div className="metric-row"><article className="metric-tile"><span>Resíduos</span><b>Gestão</b><small>Registros organizados</small><div className="metric-icon"><Package size={19} /></div></article><article className="metric-tile"><span>Impacto</span><b>Estimativa</b><small>CO₂e conforme fatores</small><div className="metric-icon"><BarChart3 size={19} /></div></article><article className="metric-tile"><span>Conformidade</span><b>Histórico</b><small>Rastreabilidade e MTR</small><div className="metric-icon"><ShieldCheck size={19} /></div></article></div>
        <div className="chart-panel"><div className="chart-title"><span>Movimentação de materiais</span><small>Visão ilustrativa · sem séries de dados</small></div><div className="chart-abstract" aria-label="Visualização abstrata sem dados quantitativos"><span /><span /><span /><span /><span /><span /><span /><span /><div className="chart-path" /></div><div className="chart-legend"><span><i /> Resíduos</span><span><i /> Operações</span><b>Dados sujeitos a registros reais</b></div></div>
        <div className="product-footer-tags"><span><Recycle size={14} /> Marketplace</span><span><MapPin size={14} /> Geolocalização</span><span><CircleHelp size={14} /> Indicadores ESG</span></div>
      </div>
    </div>
  </div>;
}

function CollectorView() {
  return <div className="phone-stage">
    <div className="phone-glow" aria-hidden="true" />
    <div className="phone-frame" aria-label="Mockup demonstrativo da interface mobile do EcoGestor">
      <div className="phone-notch" /><div className="phone-status"><span>EcoGestor</span><span>●●●</span></div>
      <div className="phone-content"><div className="phone-brand"><img src="/ecogestor-logo.png" alt="" /><div><b>EcoGestor</b><small>Jornada mobile</small></div><button type="button" aria-label="Explorar acessibilidade" onClick={() => document.getElementById('acessibilidade')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}><Sparkles size={17} /></button></div>
        <div className="phone-greeting"><small>ÁREA DO CATADOR</small><h3>Seu caminho na<br />economia circular.</h3></div>
        <div className="phone-opportunity"><div className="opportunity-symbol"><Package size={20} /></div><div><small>EXEMPLO DO RELATÓRIO</small><b>Papelão · 15 kg</b><span>Exemplo de registro por voz</span></div><ArrowUpRight size={16} /></div>
        <div className="phone-quick-links"><span><MapPin size={18} />Mapa</span><span><Route size={18} />Rotas</span><span><Recycle size={18} />EcoPontos</span></div>
        <div className="phone-section-title"><b>Na sua jornada</b><small>recursos previstos</small></div>
        <div className="phone-list"><span><span><Package size={15} />Materiais e histórico</span><ArrowDownRight size={14} /></span><span><span><Sparkles size={15} />Acessibilidade por voz</span><ArrowDownRight size={14} /></span></div>
        <div className="phone-bottom-nav"><span className="active"><BarChart3 size={16} />Início</span><span><MapPin size={16} />Mapa</span><span><MessageCircle size={16} />Apoio</span></div>
      </div>
    </div>
    <div className="phone-orbit orbit-one" /><div className="phone-orbit orbit-two" />
  </div>;
}

export default function ExperienceSwitch() {
  const [role, setRole] = useState<'company' | 'collector'>('company');
  return <section className="section experience-section" id="experiencias" aria-labelledby="experience-title">
    <div className="wrap">
      <Reveal className="experience-heading"><p className="eyebrow">UMA PLATAFORMA · DIFERENTES JORNADAS</p><h2 id="experience-title">Quem está usando <em>o EcoGestor?</em></h2><p>O contexto muda. A experiência também.</p></Reveal>
      <Reveal className="role-switch" delay={100}>
        <span className="role-switch-label">ESCOLHA UMA JORNADA</span>
        <div className="role-switch-buttons" role="group" aria-label="Selecionar perfil de uso">
          <button type="button" aria-pressed={role === 'company'} className={role === 'company' ? 'selected' : ''} onClick={() => setRole('company')}><Building2 size={17} /> Sou empresa</button>
          <button type="button" aria-pressed={role === 'collector'} className={role === 'collector' ? 'selected' : ''} onClick={() => setRole('collector')}><Smartphone size={17} /> Sou catador</button>
        </div>
      </Reveal>
      <div className={`persona-stage persona-${role}`} aria-live="polite">
        <div className="persona-copy"><span className="persona-kicker">{role === 'company' ? 'WEB / PC · GESTÃO' : 'MOBILE · CAMPO'}</span><h3>{role === 'company' ? <>Visão ampla.<br /><em>Operação rastreável.</em></> : <>Informação no bolso.<br /><em>Oportunidade no caminho.</em></>}</h3><p>{role === 'company' ? 'Gestão de resíduos, indicadores ESG, relatórios, MTR, marketplace e histórico das operações em um ambiente de trabalho.' : 'Oportunidades de coleta, geolocalização, ecopontos, materiais, histórico e recursos de acessibilidade pensados para o contexto mobile.'}</p><div className="persona-pills">{(role === 'company' ? ['Dashboard ESG', 'Relatórios', 'MTR', 'Marketplace'] : ['Coletas', 'Rotas', 'EcoPontos', 'Acessibilidade']).map((label) => <span key={label}>{label}</span>)}</div></div>
        <div className="persona-visual">{role === 'company' ? <CompanyView /> : <CollectorView />}</div>
      </div>
      <div className="experience-note"><span><span className="note-pulse" /> Protótipos visuais demonstrativos</span><p>Os painéis e telas apresentados ilustram as jornadas do produto; não representam contas ou dados operacionais reais.</p></div>
    </div>
  </section>;
}
