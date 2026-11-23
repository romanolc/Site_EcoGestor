# Plano — EcoGestor: experiência digital interativa

## Produto e implementação
Site de apresentação de produto (não landing page genérica), com storytelling de economia circular e demonstrações interativas de jornada, app mobile, mapa esquemático de ecopontos, fluxo de pesagem e rastreabilidade, acessibilidade/voz e assistente Nico. Construir em React + Vite com TypeScript, conteúdo separado em `src/data`, componentes reutilizáveis em `src/components`, seções em `src/sections`, estilos globais em `src/styles` e assets locais em `src/assets`. Sem backend, contas, APIs secretas ou dados persistentes; interações puramente demonstrativas no navegador. Preparar build estático, Vercel, `.gitignore`, README e ZIP.

## Integridade factual
Usar o Relatório Geral EcoGestor e a logo fornecida como fontes. Não inventar usuários, clientes, parceiros reais, métricas de impacto alcançado, estatísticas ou validações. Valores de TAM/SAM/SOM, break-even e payback só aparecem quando marcados explicitamente como estimativas do relatório. Fluxo da balança identificado como simulação/proposta; conexão física, Bluetooth, bipador integrado, API/IA preditiva e expansão como roadmap. Indicadores reais não documentados não serão exibidos como números. Ecopontos e rotas em mapa esquemático serão declaradamente demonstração, sem localização, horários, materiais, distâncias ou status inventados. Pitch em player acessível que aceita arquivo de vídeo selecionado pelo visitante/equipe, sem vídeo fictício embutido.

## Design
- Movimento: editorial de produto digital premium, orgânico-tecnológico, com a marca verde/azul da logo e interfaces de alto contraste.
- Princípios: rede viva, humanidade antes do efeito, informação factual, interação com propósito.
- Paleta: verde profundo e esmeralda da logo para regeneração; ciano/azul para dados; carvão e off-white para contraste; luminosidade apenas em acentos.
- Layout: sequência narrativa de telas com alternância escura/clara, composições assimétricas e camadas de rede; mobile-first, navegação compacta e sem grid repetitivo de cards.
- Elementos de assinatura: linhas de conexão inspiradas no símbolo da logo; trilhas circulares/material; moldura de dispositivo para jornadas mobile.
- Interação/animação: reveal leve no scroll, estados de seleção e fluxo animado nas demos; CSS/SVG sem bibliotecas pesadas; suporte a teclado e `prefers-reduced-motion`.
- Tipografia: `Manrope` para títulos e `Inter`/system sans para interface, com alternativas locais/sistema e hierarquia responsiva.
- Essência da marca: infraestrutura digital para conectar pessoas, resíduos, dados e oportunidades na economia circular; atributos: conectada, acessível, regenerativa.
- Voz: frases diretas, humanas e propositivas; exemplos: “Onde o resíduo deixa de ser descarte e passa a ser oportunidade.” / “Uma plataforma. Diferentes jornadas.”
- Logo: usar arquivo oficial sem redesenhar nem deformar; favicon derivado do símbolo original.
- Cor assinatura: verde-esmeralda vivo, equilibrado por azul profundo/ciano.

## Seções / comportamento
Hero cinematográfico com logo, frase, headline e fluxo Resíduo→Dado→Conexão→Valor; problema como elos desconectados e solução conectando a cadeia; jornada Cadastro→Match→Coleta→Entrega→Venda→Relatório; alternância de jornadas “Sou empresa/Sou catador” com representação visual de dashboard e app; smartphone mockup responsivo; exploração esquemática de pontos com painel explicativo sem dados reais; balança simulada clicável com sequência de etapas e aviso visível de simulação; seção própria de acessibilidade com transcrição de exemplo e confirmação/edição; Nico como apoio interativo discreto; trajetória de material; comparação concisa entre fragmentação e proposta conectada; modelo SaaS/Marketplace/serviços analíticos sem lucro garantido; roadmap MVP/médio/longo prazo; player para vídeo fornecido pelo usuário via seleção local; conclusão/CTAs sem links quebrados ou QR inventado.

## Estrutura
`src/components/` (navigation, buttons, device mockup, Nico, motion/reveal), `src/sections/` (Hero, Story, Journey, Personas, CatadorApp, Ecopoints, ScaleDemo, Accessibility, Traceability, Business, Roadmap, Video, Closing), `src/data/` (textos e fatos do relatório), `src/assets/` (logo e visuais), `src/styles/` (tokens e responsividade), `public/` (favicon, `manus-routes.json`). Projeto Vite estático compatível com GitHub/Vercel; README documenta instalação, dev e build.