export const brand = {
  eyebrow: 'ECOSSISTEMA DIGITAL PARA ECONOMIA CIRCULAR',
  manifesto: 'Onde o resíduo deixa de ser descarte e passa a ser oportunidade.',
  headline: 'A inteligência por trás de uma economia circular.',
  subheadline: 'Uma infraestrutura digital proposta para conectar quem gera, coleta, transforma e valoriza resíduos — com jornadas pensadas para cada pessoa da cadeia.',
  signature: 'Uma plataforma. Diferentes jornadas.',
};

export const circularSteps = [
  { title: 'Cadastro', detail: 'Registros organizados para iniciar cada operação.' },
  { title: 'Match', detail: 'Oferta e oportunidade se encontram no marketplace.' },
  { title: 'Coleta', detail: 'O material entra em movimento pela cadeia.' },
  { title: 'Entrega', detail: 'Peso, origem e responsáveis podem ser associados.' },
  { title: 'Venda', detail: 'A conexão entre oferta e demanda cria oportunidade.' },
  { title: 'Relatório', detail: 'Os registros se tornam informação e estimativas.' },
] as const;

export const chainActors = [
  { title: 'Empresa', subtitle: 'Gera e disponibiliza' },
  { title: 'Resíduo', subtitle: 'Material com potencial' },
  { title: 'Catador', subtitle: 'Coleta e movimenta' },
  { title: 'Cooperativa', subtitle: 'Organiza e transforma' },
  { title: 'Comprador', subtitle: 'Reintroduz no ciclo' },
] as const;

export const impactPillars = [
  { number: '01', label: 'Ambiental', text: 'Destinação adequada, rastreabilidade e estimativas de CO₂ evitado.' },
  { number: '02', label: 'Social', text: 'Valorização dos catadores, inclusão digital e acesso a oportunidades.' },
  { number: '03', label: 'Econômico', text: 'Conexão com compradores, eficiência operacional e novos fluxos comerciais.' },
] as const;

export const roadmap = [
  { stage: 'MVP', horizon: 'Curto prazo', state: 'Base planejada', detail: 'Cadastro, painel de relatórios com filtros temporais, marketplace, chat e arquitetura Flutter/API.' },
  { stage: 'Evolução', horizon: 'Médio prazo', state: 'Evolução prevista', detail: 'Cálculo dinâmico de CO₂, insights, treinamentos, EcoPontos e interface de acessibilidade por voz.' },
  { stage: 'Escala', horizon: 'Longo prazo', state: 'Roadmap futuro', detail: 'Balanças IoT e bipadores, expansão territorial, APIs para ERPs e IA preditiva para logística.' },
] as const;

export const revenuePaths = [
  { name: 'SaaS B2B', label: 'Acesso recorrente', detail: 'Empresas e organizações podem assinar recursos de gestão, dashboards e relatórios.' },
  { name: 'Marketplace', label: 'Conexão comercial', detail: 'Transações realizadas no ecossistema podem gerar taxas, conforme regras definidas.' },
  { name: 'Inteligência de dados', label: 'Serviços analíticos', detail: 'Recursos analíticos, consultoria e inteligência operacional são possibilidades de receita.' },
] as const;
