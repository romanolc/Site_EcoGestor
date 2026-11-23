import { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';

const tips = [
  'No EcoGestor, voz e confirmação caminham juntas: a pessoa revisa o dado antes de registrar.',
  'Empresas e catadores têm jornadas diferentes dentro da mesma proposta de plataforma.',
  'A conexão com balanças físicas aparece como evolução futura, não como integração em produção.',
];

export default function Nico() {
  const [open, setOpen] = useState(false);
  const [tip, setTip] = useState(0);
  const next = () => setTip((value) => (value + 1) % tips.length);
  return (
    <div className="nico-widget">
      {open && <div className="nico-panel" role="dialog" aria-label="Dica demonstrativa do Nico">
        <div className="nico-panel-head"><span><span className="nico-mark"><Sparkles size={14} /></span> Nico <small>assistente demonstrativo</small></span><button type="button" aria-label="Fechar dica do Nico" onClick={() => setOpen(false)}><X size={16} /></button></div>
        <p>{tips[tip]}</p>
        <button className="nico-next" type="button" onClick={next}>Outra dica <span aria-hidden="true">↗</span></button>
      </div>}
      <button className="nico-launch" type="button" aria-expanded={open} aria-label={open ? 'Fechar assistente Nico' : 'Abrir uma dica do Nico'} onClick={() => setOpen(!open)}>
        <span className="nico-orb"><Sparkles size={19} /></span><span className="nico-launch-label">Nico</span><MessageCircle size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
