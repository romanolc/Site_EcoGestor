import { useState } from 'react';
import { ArrowRight, AudioLines, Check, CircleHelp, Clock3, MapPin, Mic, Minus, Package, Route, ShieldCheck, Volume2, Waypoints, ZoomIn } from 'lucide-react';
import Reveal from '../components/Reveal';

function parseVoiceText(text: string) {
  const weight = text.match(/(\d+(?:[.,]\d+)?)\s*(?:quilos?|kg)/i);
  const material = /(papelão|papel|plástico|metal|vidro|alumínio|orgânico)/i.exec(text)?.[1];
  return {
    material: material ? material[0].toLocaleUpperCase('pt-BR') + material.slice(1) : 'Não identificado',
    weight: weight ? `${weight[1].replace('.', ',')} kg` : 'Não identificado',
  };
}

const points = [
  { id: 'a', x: 20, y: 28 }, { id: 'b', x: 48, y: 45 }, { id: 'c', x: 76, y: 24 },
  { id: 'd', x: 32, y: 70 }, { id: 'e', x: 68, y: 72 },
];

export function EcopointsDemo() {
  const [selected, setSelected] = useState('b');
  const [route, setRoute] = useState(false);
  return <section className="section ecopoints-section" id="ecopontos" aria-labelledby="ecopoints-title">
    <div className="wrap">
      <Reveal className="section-heading section-heading-row">
        <div><p className="eyebrow eyebrow-dark">ECOPONTOS · EXPLORAÇÃO DEMONSTRATIVA</p><h2 id="ecopoints-title">Encontre o próximo ponto<br /><em>da economia circular.</em></h2></div>
        <p>Os ecopontos são pensados como pontos físicos conectados à experiência digital. Toque em um ponto ilustrativo para explorar os dados que o sistema poderá apresentar.</p>
      </Reveal>
      <Reveal className="map-demo-shell">
        <div className="map-board" aria-label="Mapa esquemático demonstrativo, sem localização geográfica real">
          <div className="map-topline"><span><span className="map-loc-dot" /> EXPLORAÇÃO DO ECOSSISTEMA</span><span>VISUALIZAÇÃO ESQUEMÁTICA · SEM LOCAL REAL</span></div>
          <svg className="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="map-road road-a" d="M-3 50 C18 42 18 20 43 24 S71 36 103 14" />
            <path className="map-road road-b" d="M8 103 C16 78 30 79 39 57 S51 30 55 -3" />
            <path className="map-road road-c" d="M103 64 C75 58 73 49 59 56 S35 82 22 103" />
            <path className="map-road road-d" d="M-2 20 C21 27 28 32 46 40 S78 79 102 82" />
            <path className="map-greenway" d="M4 92 C23 79 27 66 41 54 S74 50 94 31" />
            {route && <path className="map-route-line" d="M48 45 C47 51 42 54 41 57 S35 65 32 70" />}
          </svg>
          <div className="map-river map-river-one" aria-hidden="true" /><div className="map-river map-river-two" aria-hidden="true" />
          {points.map((point) => <button key={point.id} type="button" className={`map-pin ${selected === point.id ? 'is-selected' : ''}`} style={{ left: `${point.x}%`, top: `${point.y}%` }} aria-label={`Selecionar ponto demonstrativo ${point.id.toUpperCase()}`} aria-pressed={selected === point.id} onClick={() => { setSelected(point.id); setRoute(false); }}><span><MapPin size={17} fill="currentColor" /></span><i /></button>)}
          <div className="map-compass" aria-hidden="true">N<span>↑</span></div>
          <div className="map-scale"><span /> MAPA CONCEITUAL · SEM ESCALA</div>
        </div>
        <aside className="map-details" aria-live="polite">
          <div className="map-card-top"><span className="map-card-index">PONTO SELECIONADO · {selected.toUpperCase()}</span><span className="map-demo-badge">DEMONSTRAÇÃO</span></div>
          <h3>Ponto demonstrativo<br /><em>{selected.toUpperCase()}</em></h3>
          <p className="map-no-data">Nenhum endereço ou ecoponto real foi fornecido para esta demonstração.</p>
          <div className="map-detail-list"><div><MapPin size={16} /><span>Distância<small>depende da localização real</small></span><b>—</b></div><div><Package size={16} /><span>Materiais aceitos<small>configuração do ponto</small></span><b>—</b></div><div><Clock3 size={16} /><span>Horário<small>informação não fornecida</small></span><b>—</b></div><div><ShieldCheck size={16} /><span>Status<small>sem dados operacionais</small></span><b>Demo</b></div></div>
          <button className="button button-dark map-route-button" type="button" onClick={() => setRoute(!route)}>{route ? 'Ocultar rota simulada' : 'Traçar rota'} <Route size={16} /></button>
          {route && <p className="route-disclaimer" role="status">Trajeto visual simulado; não representa uma rota geográfica.</p>}
        </aside>
      </Reveal>
      <Reveal className="flow-ribbon" delay={90}><span>LOCALIZAÇÃO</span><i /><span>ENTREGA</span><i /><span>REGISTRO</span><i /><span>VALORIZAÇÃO</span></Reveal>
    </div>
  </section>;
}

const scaleStages = [
  { title: 'PESAGEM', detail: 'A massa entra no fluxo como dado.' },
  { title: 'IDENTIFICAÇÃO', detail: 'O material é associado a um código demonstrativo.' },
  { title: 'BIPAGEM', detail: 'Leitura proposta por câmera ou dispositivo.' },
  { title: 'REGISTRO', detail: 'O evento compõe o histórico de rastreabilidade.' },
];
const qrPattern = ['111010111','101010101','111010111','000111000','101001101','011110010','111010111','101000101','111011111'];

export function ScaleDemo() {
  const [stage, setStage] = useState(-1);
  const nextStage = () => setStage((current) => current >= 3 ? -1 : current + 1);
  const reset = () => setStage(-1);
  return <section className="section scale-section" id="balanca" aria-labelledby="scale-title">
    <div className="wrap scale-wrap">
      <Reveal className="section-heading section-heading-row scale-heading">
        <div><p className="eyebrow">INTEGRAÇÃO FÍSICO-DIGITAL · PROPOSTA</p><h2 id="scale-title">O peso vira dado.<br /><em>O dado vira rastreabilidade.</em></h2></div>
        <p>Interaja com a demonstração do fluxo proposto. A integração com balanças IoT e bipadores físicos está prevista no roadmap, não em produção.</p>
      </Reveal>
      <Reveal className="scale-demo">
        <div className="scale-left">
          <div className="scale-label"><span><span className="scale-pulse" /> SIMULAÇÃO DO FLUXO PROPOSTO</span><span>ENTRADA DE MATERIAL</span></div>
          <div className={`scale-machine ${stage >= 0 ? 'scale-active' : ''}`}>
            <div className="scale-screen"><small>LEITURA DE PESO · EXEMPLO</small><strong>{stage >= 0 ? '15,0' : '0,0'}<i>kg</i></strong><span>{stage >= 0 ? 'PAPELÃO · DADO DE EXEMPLO' : 'AGUARDANDO MATERIAL'}</span></div>
            <div className="scale-platform"><div className="scale-platform-line" /><Package size={28} /></div>
            <div className="scale-foot"><span /><span /><span /></div>
          </div>
          <div className="scale-actions"><button className="button button-primary" type="button" onClick={nextStage}>{stage < 0 ? 'Adicionar exemplo · 15 kg' : stage < 3 ? 'Avançar etapa' : 'Reiniciar demonstração'} {stage < 3 ? <ArrowRight size={16} /> : <Minus size={16} />}</button>{stage >= 0 && stage < 3 && <button className="button button-outline-light" type="button" onClick={reset}>Reiniciar</button>}</div>
          <p className="scale-example-note">15 kg de papelão é um exemplo de interação descrito no relatório — não é um registro de coleta real.</p>
        </div>
        <div className="scale-right">
          <div className="scale-flow-head"><span>DO MATERIAL AO REGISTRO</span><span>0{Math.max(0, stage + 1)} / 04</span></div>
          <div className="scale-stage-list">
            {scaleStages.map((item, index) => <div className={`scale-stage ${stage >= index ? 'stage-done' : ''} ${stage === index ? 'stage-current' : ''}`} key={item.title}><span className="stage-check">{stage > index ? <Check size={15} /> : stage === index ? <span /> : <span className="stage-empty" />}</span><div><b>{item.title}</b><small>{item.detail}</small></div>{index === 1 && stage >= 1 && <div className="demo-code" aria-label="Ilustração de código não escaneável"><div className="qr-demo-grid">{qrPattern.join('').split('').map((cell, i) => <i className={cell === '1' ? 'dark' : ''} key={i} />)}</div><span>IDENTIFICAÇÃO<br />ILUSTRATIVA</span></div>}</div>)}
          </div>
          <div className={`scale-complete ${stage >= 3 ? 'is-complete' : ''}`} aria-live="polite"><span>{stage >= 3 ? <Check size={17} /> : <Waypoints size={17} />}</span><div><b>{stage >= 3 ? 'Registro demonstrativo concluído' : 'Histórico rastreável'}</b><small>{stage >= 3 ? 'Fluxo ilustrativo — sem conexão física.' : 'Origem · peso · data · responsável · destino'}</small></div></div>
        </div>
      </Reveal>
      <Reveal className="scale-flow-rail"><span>RESÍDUO</span><i /><span>PESAGEM</span><i /><span>CÓDIGO</span><i /><span>BIPAGEM</span><i /><span>REGISTRO</span></Reveal>
    </div>
  </section>;
}

export function AccessibilityDemo() {
  const [mode, setMode] = useState<'idle' | 'parsed' | 'edit' | 'confirmed'>('idle');
  const [text, setText] = useState('Registrei 15 quilos de papelão.');
  const [zoom, setZoom] = useState(false);
  const [notice, setNotice] = useState('');
  const parsedFields = parseVoiceText(text);
  const voiceDataComplete = parsedFields.material !== 'Não identificado' && parsedFields.weight !== 'Não identificado';
  const speak = () => {
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); window.speechSynthesis.speak(new SpeechSynthesisUtterance(text)); setNotice('Leitura assistida iniciada no dispositivo.'); }
    else setNotice('Leitura assistida não está disponível neste navegador.');
  };
  const simulate = () => { setMode('parsed'); setNotice(voiceDataComplete ? 'Exemplo interpretado. Confira os campos antes de confirmar.' : 'Não foi possível identificar material e peso. Edite a frase e confira novamente.'); };
  const handleOption = (name: string) => {
    if (name === 'Interface ampliada') { setZoom(!zoom); setNotice(!zoom ? 'Ampliação demonstrativa ativada.' : 'Ampliação demonstrativa desativada.'); }
    else if (name === 'Leitura assistida') speak();
    else if (name === 'Libras') setNotice('Suporte em Libras é citado no projeto; esta demonstração não contém vídeo ou tradução em Libras.');
    else if (name === 'Linguagem simples') setNotice('Linguagem simples: fale o material e o peso; confira antes de salvar.');
    else if (name === 'Apoio do Nico') setNotice('Nico é apresentado como assistente demonstrativo de orientação e navegação.');
    else simulate();
  };
  return <section className="section accessibility-section" id="acessibilidade" aria-labelledby="access-title">
    <div className="wrap access-layout">
      <Reveal className="access-copy"><p className="eyebrow eyebrow-dark">ACESSIBILIDADE É PARTE DA EXPERIÊNCIA</p><h2 id="access-title">Tecnologia que se adapta <em>a quem usa.</em></h2><p>Voz, leitura assistida, elementos claros e confirmação antes de registrar: a inclusão sociodigital começa nas escolhas da interface.</p>
        <div className="access-features" role="group" aria-label="Opções demonstrativas de acessibilidade">
          {[
            { name: 'Interação por voz', icon: <Mic size={16} /> }, { name: 'Leitura assistida', icon: <Volume2 size={16} /> }, { name: 'Libras', icon: <span className="sign-icon" aria-hidden="true">🤟</span> }, { name: 'Interface ampliada', icon: <ZoomIn size={16} /> }, { name: 'Linguagem simples', icon: <AudioLines size={16} /> }, { name: 'Apoio do Nico', icon: <CircleHelp size={16} /> },
          ].map((item) => <button type="button" key={item.name} onClick={() => handleOption(item.name)}>{item.icon}{item.name}</button>)}
        </div>
        <p className="access-note">Demonstração de interface. Recursos como Libras e transcrição estão descritos no projeto; esta página não substitui uma implementação validada com usuários.</p>
      </Reveal>
      <Reveal className="voice-demo-wrap" delay={120}>
        <div className={`voice-demo ${zoom ? 'voice-demo-zoom' : ''}`}>
          <div className="voice-demo-top"><div className="voice-demo-id"><span className="voice-spark"><Mic size={17} /></span><div><b>Registro acessível</b><small>DEMONSTRAÇÃO DE VOZ</small></div></div><span className="voice-status"><i /> {mode === 'confirmed' ? 'CONFIRMADO · SIMULAÇÃO' : mode === 'idle' ? 'SIMULAÇÃO · SEM SALVAR' : 'REVISE OS CAMPOS'}</span></div>
          <div className="voice-prompt"><span>EXEMPLO DE FALA</span><blockquote>“{text}”</blockquote><button className="simulate-voice" type="button" onClick={simulate}><Mic size={17} /> Simular fala</button></div>
          <div className="voice-divider"><span /><b>O SISTEMA INTERPRETA</b><span /></div>
          <div className="voice-fields" aria-live="polite"><div><small>MATERIAL</small><b>{mode === 'idle' ? 'Aguardando simulação' : parsedFields.material}</b></div><div><small>PESO</small><b>{mode === 'idle' ? 'Aguardando simulação' : parsedFields.weight}</b></div><div><small>DATA</small><b>{mode === 'idle' ? '—' : 'Agora · exemplo'}</b></div></div>
          {mode === 'edit' && <label className="voice-edit">Edite a frase demonstrativa<input value={text} onChange={(event) => setText(event.target.value)} /></label>}
          {mode === 'confirmed' ? <div className="voice-confirmed" role="status"><Check size={19} /> Confirmação demonstrativa concluída. Nada foi enviado ou salvo.</div> : <div className="voice-actions"><button className="button button-voice-primary" type="button" disabled={mode !== 'parsed' || !voiceDataComplete} onClick={() => { setMode('confirmed'); setNotice('Confirmação demonstrativa concluída. Nada foi enviado ou salvo.'); }}>Confirmar <Check size={16} /></button><button className="button button-voice-secondary" type="button" onClick={() => setMode(mode === 'edit' ? 'parsed' : 'edit')}>{mode === 'edit' ? 'Voltar' : 'Editar'}</button><button className="voice-read" type="button" aria-label="Ouvir a frase demonstrativa" onClick={speak}><Volume2 size={18} /></button></div>}
          <p className="voice-foot">Nada é enviado ou salvo. A confirmação ilustra o fluxo previsto.</p>
          {notice && <p className="access-live" role="status">{notice}</p>}
        </div>
        <div className="access-orbit access-orbit-a" aria-hidden="true" /><div className="access-orbit access-orbit-b" aria-hidden="true" />
      </Reveal>
    </div>
  </section>;
}

const traceSteps = [
  { name: 'Origem', text: 'De onde o material parte.' },
  { name: 'Pesagem', text: 'O peso se associa ao material.' },
  { name: 'Coleta', text: 'A movimentação é registrada.' },
  { name: 'Ecoponto / Cooperativa', text: 'A entrega pode ser validada.' },
  { name: 'Venda', text: 'A conexão comercial pode ser documentada.' },
  { name: 'Destinação', text: 'O histórico acompanha o ciclo.' },
];

export function TraceDemo() {
  const [active, setActive] = useState(0);
  return <section className="section trace-section" id="rastreabilidade" aria-labelledby="trace-title">
    <div className="wrap trace-layout">
      <Reveal className="trace-copy"><p className="eyebrow eyebrow-dark">RASTREABILIDADE · DO MATERIAL AO HISTÓRICO</p><h2 id="trace-title">E se o resíduo pudesse <em>contar sua história?</em></h2><p>Toque em cada etapa. O fluxo abaixo explica como um registro pode acompanhar a movimentação de um material pela cadeia.</p>
        <div className="trace-material"><span className="trace-material-icon"><Package size={20} /></span><span><small>EXEMPLO DO RELATÓRIO · NÃO É COLETA REAL</small><b>15 kg de papelão</b></span><span className="trace-material-tag">DEMONSTRAÇÃO</span></div>
      </Reveal>
      <Reveal className="trace-visual" delay={100}>
        <div className="trace-progress"><span className="trace-progress-line"><i style={{ width: `${(active / (traceSteps.length - 1)) * 100}%` }} /></span>
          {traceSteps.map((item, index) => <button key={item.name} className={`trace-point ${active === index ? 'current' : ''} ${active > index ? 'visited' : ''}`} type="button" aria-label={`Etapa ${index + 1}: ${item.name}`} aria-pressed={active === index} style={{ left: `${(index / (traceSteps.length - 1)) * 100}%` }} onClick={() => setActive(index)}><span>{active > index ? <Check size={13} /> : <i />}</span><small>{item.name}</small></button>)}
        </div>
        <div className="trace-card" aria-live="polite"><div className="trace-card-top"><span>ETAPA 0{active + 1} / 06</span><Waypoints size={18} /></div><h3>{traceSteps[active].name}</h3><p>{traceSteps[active].text}</p><div className="trace-card-bottom"><span><span className="trace-pulse" /> DADO DE FLUXO PROPOSTO</span><div><button type="button" aria-label="Etapa anterior" disabled={active === 0} onClick={() => setActive(active - 1)}><ArrowRight className="arrow-back" size={16} /></button><button type="button" aria-label="Próxima etapa" disabled={active === traceSteps.length - 1} onClick={() => setActive(active + 1)}><ArrowRight size={16} /></button></div></div></div>
        <p className="trace-disclaimer" role="status">{active === traceSteps.length - 1 ? 'Histórico apresentado como demonstração do conceito; não há evento real registrado.' : 'Cada evento depende de registro e integração operacional.'}</p>
      </Reveal>
    </div>
  </section>;
}
