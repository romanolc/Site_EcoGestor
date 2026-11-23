import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, FileDown, Leaf, ShieldCheck, Upload, X } from 'lucide-react';
import Reveal from '../components/Reveal';

const drivePreviewUrl = 'https://drive.google.com/file/d/1A7AZPoo7eIpuB2SLXfgCNUkxlg5SF2qz/preview';
const driveViewUrl = 'https://drive.google.com/file/d/1A7AZPoo7eIpuB2SLXfgCNUkxlg5SF2qz/view?usp=sharing';

export function VideoSection() {
  const [videoUrl, setVideoUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => () => { if (videoUrl) URL.revokeObjectURL(videoUrl); }, [videoUrl]);

  const selectVideo = (file?: File) => {
    if (!file) return;
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    setVideoUrl(URL.createObjectURL(file));
    setFileName(file.name);
  };

  const removeLocalVideo = () => {
    if (videoUrl) URL.revokeObjectURL(videoUrl);
    setVideoUrl('');
    setFileName('');
    if (input.current) input.current.value = '';
  };

  return <section className="section video-section" id="video" aria-labelledby="video-title">
    <div className="wrap video-layout">
      <Reveal className="video-copy">
        <p className="eyebrow">UMA IDEIA EM MOVIMENTO</p>
        <h2 id="video-title">Veja o EcoGestor<br /><em>em ação.</em></h2>
        <p>Assista ao pitch do EcoGestor. O player incorpora o vídeo compartilhado no Google Drive; você também pode escolher um arquivo local neste dispositivo.</p>
        <label className="video-select button button-primary">
          <Upload size={16} /> Usar vídeo local
          <input ref={input} type="file" accept="video/*" aria-label="Selecionar arquivo local para substituir o pitch" onChange={(event) => selectVideo(event.currentTarget.files?.[0])} />
        </label>
        <a className="video-drive-link" href={driveViewUrl} target="_blank" rel="noopener noreferrer">Abrir pitch no Google Drive <ArrowUpRight size={14} /></a>
        <small className="video-privacy">A reprodução do Drive depende das permissões do arquivo. Vídeos locais são reproduzidos neste dispositivo e não são enviados.</small>
      </Reveal>
      <Reveal className="video-frame-wrap" delay={130}>
        <div className={`video-device ${videoUrl ? 'has-video' : ''}`}>
          <div className="video-device-top">
            <span className="video-device-brand"><span className="tiny-brand-mark">E</span> ECOGESTOR · PITCH</span>
            {fileName && <button className="remove-video" type="button" aria-label="Voltar ao pitch do Google Drive" onClick={removeLocalVideo}><X size={16} /></button>}
          </div>
          {videoUrl
            ? <video className="video-player" src={videoUrl} controls playsInline aria-label={`Vídeo local do projeto: ${fileName}`} />
            : <iframe className="video-player video-embed" src={drivePreviewUrl} title="Pitch do EcoGestor no Google Drive" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen loading="lazy" />}
          <div className="video-device-bottom">
            <span><i /> {videoUrl ? fileName : 'PITCH · GOOGLE DRIVE'}</span>
            <span>{videoUrl ? 'ARQUIVO LOCAL' : 'DRIVE'}</span>
          </div>
        </div>
        <div className="video-decoration video-deco-a" aria-hidden="true" />
        <div className="video-decoration video-deco-b" aria-hidden="true" />
      </Reveal>
    </div>
  </section>;
}

export default function ClosingSection() {
  return <section className="closing-section" id="conhecer" aria-labelledby="closing-title"><div className="closing-signal" aria-hidden="true"><span /><span /><span /></div>
    <div className="wrap closing-content"><Reveal><span className="closing-mark"><Leaf size={19} /></span><p className="eyebrow">TECNOLOGIA · CONEXÃO · CIRCULARIDADE</p><h2 id="closing-title">O futuro da reciclagem<br />não começa no descarte.<br /><em>Começa na conexão.</em></h2><p className="closing-signature">EcoGestor<br /><span>Tecnologia para conectar. Dados para transformar. Impacto para continuar.</span></p><div className="closing-actions"><a className="button button-primary" href="#experiencias">Conhecer o protótipo <ArrowUpRight size={16} /></a><a className="button button-outline-light" href="#demonstracoes">Explorar o EcoGestor <ArrowDownRight size={16} /></a><a className="closing-doc-link" href="/relatorio-geral-ecogestor.pdf" target="_blank" rel="noreferrer">Ver o projeto <FileDown size={16} /></a></div></Reveal></div>
    <footer className="site-footer"><div className="wrap footer-inner"><a className="footer-brand" href="#inicio"><img src="/ecogestor-logo.png" alt="" /> EcoGestor</a><span>Proposta de infraestrutura digital para a economia circular.</span><a href="#inicio" aria-label="Voltar ao início">Topo ↑</a><div className="footer-extra"><p className="footer-ods"><strong>ODS relacionados à proposta</strong><span>8 · Trabalho decente e crescimento econômico; 9 · Indústria, inovação e infraestrutura; 11 · Cidades e comunidades sustentáveis; 12 · Consumo e produção responsáveis; 13 · Ação contra a mudança global do clima.</span></p><p className="footer-privacy">O projeto prevê o tratamento de dados pessoais conforme as normas da LGPD.</p><div className="footer-audit"><ShieldCheck size={17} aria-hidden="true" /><span>© 2025 · Proteção e auditoria do projeto</span><small>Brahyan Dias, Ícaro Ricardo, João Guilehrme e Lucca Romano</small></div></div></div></footer>
  </section>;
}
