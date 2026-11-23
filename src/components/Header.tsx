import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['A proposta', '#historia'],
  ['Jornadas', '#experiencias'],
  ['Demonstrações', '#demonstracoes'],
  ['Roadmap', '#roadmap'],
] as const;

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} href="#inicio" aria-label="EcoGestor, voltar ao início">
      <img src="/ecogestor-logo.png" alt="" width="44" height="44" />
      {!compact && <span>eco<span>gestor</span></span>}
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          <a className="nav-cta" href="#conhecer" onClick={close}>Explorar <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
