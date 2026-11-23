# EcoGestor — Rede Circular

Experiência web interativa e mobile-first para apresentar o EcoGestor, ecossistema digital proposto para gestão de resíduos e economia circular. O site diferencia com clareza funcionalidades ilustrativas, proposta arquitetural, hipóteses de negócio e itens futuros do roadmap.

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Executar localmente

```bash
npm install
npm run dev
```

O Vite iniciará em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Os arquivos estáticos estarão em `dist/`.

As imagens usadas pelo site, a logo e as fontes estão incluídas localmente no projeto; a versão publicada não depende do armazenamento do preview.

## Deploy na Vercel

1. Envie o projeto ao GitHub.
2. Importe o repositório na Vercel.
3. Configure o preset **Vite**.
4. Use `npm install` para instalação e `npm run build` para build; diretório de saída `dist`.
5. Não são necessárias variáveis de ambiente nem backend para as demonstrações atuais.

## Interações

- Alternância entre jornadas empresa e catador.
- Etapas clicáveis da jornada de circularidade.
- Mapa esquemático clicável com rota visual simulada.
- Demonstração de pesagem, código ilustrativo, bipagem e registro sem ligação a hardware.
- Demonstração de voz com confirmação/edição, ampliação, leitura assistida e explicação do estado de Libras.
- Trajetória progressiva do exemplo “15 kg de papelão” indicado no relatório.
- Player de pitch que reproduz no navegador um arquivo de vídeo selecionado localmente; o arquivo não é enviado.
- Nico como interface textual demonstrativa, sem modelo remoto ou conversa enviada.

## Integridade dos dados

O mapa não contém localizações reais, distância, horário ou disponibilidade operacional; pontos e trajetos são esquemáticos. Os exemplos de voz e pesagem não são registros reais. O relatório não fornece indicadores realizados, portanto o site não apresenta contadores de impacto alcançado. Balanças IoT, bipadores físicos, APIs, IA preditiva e expansão territorial são identificados como evolução futura. O modelo de receita representa possibilidades descritas no relatório, não faturamento ou lucro obtidos.

O documento original usado como fonte está disponível em `public/relatorio-geral-ecogestor.pdf`.

## Acessibilidade e responsividade

HTML semântico, foco visível, navegação de teclado, rótulos ARIA em controles interativos, layout mobile-first, breakpoints para telas pequenas/tablet/desktop e suporte a `prefers-reduced-motion`.


## Pitch em vídeo

O player incorpora `Pitch_TCC_EcoGestor.mp4` pelo preview do Google Drive: https://drive.google.com/file/d/1A7AZPoo7eIpuB2SLXfgCNUkxlg5SF2qz/preview. A reprodução para visitantes depende das permissões de compartilhamento definidas no Drive. O botão “Abrir pitch no Google Drive” funciona como alternativa; também é possível substituir temporariamente o player por um vídeo local, que não é enviado ao servidor.
