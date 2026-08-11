export const translations = {
  pt: {
    nav: {
      home: "Início",
      projects: "Projetos",
      contact: "Contatos",
      whatIDo: "O que faço",
      resume: "Resume",
    },
    hero: {
      greetingLine1: "Olá, me chamo Natali, mas",
      greetingLine2: "pode me chamar de Nati!",
      paragraphs: [
        {
          text: "Carioca, morando em SC. 12 anos de carreira. Comecei no marketing, migrei pro design há 9 anos, focando nas necessidades dos usuários alinhadas à estratégia de negócios.",
        },
        {
          text: "Já trabalhei em times por trás de produtos para Lola Cosmetics, Airbnb, C6 Bank, P&G, Magazine Luiza, Imaginarium e Hering. Também passei por equipes menores (incluindo uma fábrica de chocolates).",
        },
        {
          text: "Me apaixono por problemas caóticos e os transformo em algo simples o suficiente até serem facilmente explicados.",
        },
        {
          text: "Uso a IA para potencializar meu trabalho, não como substituta. Ela me ajuda a organizar processos, desenhar features e otimizar minha stack de ferramentas. A estratégia, as decisões de negócio e a experiência do usuário continuam sendo minhas.",
        },
        {
          text: "Também faço ilustrações e estou estudando front-end e back-end para facilitar a vida.",
        },
      ],
    },
    projects: {
      title: "Projetos",
      previous: "Projeto anterior",
      next: "Próximo projeto",
      open: "Abrir projeto",
      close: "Fechar projeto",
      // Rótulo dos projetos ainda sem título, usado por leitores de tela.
      fallbackTitle: "Projeto",
      // `title`, `note` e `thumb` são opcionais: projeto ainda não
      // preenchido mostra só o número provisório no card.
      items: [
        {
          title: "Campanhas — Gestão operacional de marketing de influência",
          note: "(sob NDA)",
          thumb: "/projects/campanhas.png",
          // Abertura: frase-síntese + números em destaque + ficha técnica.
          summary:
            "De um processo espalhado por cinco ferramentas a um único ambiente de gestão de campanhas, desenhado a partir de como os times de curadoria realmente trabalham.",
          meta: {
            role: { label: "Cargo", value: "Product e UX/UI Design Pleno" },
            year: { label: "Ano", value: "2024–2025" },
            focus: {
              label: "Foco",
              // Separados por ponto na mesma linha.
              value: ["Gestão operacional", "Fluxos complexos", "Automação de relatórios"],
            },
          },
          // Cada bloco tem um rótulo curto e um subtítulo que já entrega
          // a conclusão da seção.
          sections: [
            {
              type: "text",
              label: "Contexto",
              heading: "A busca já existia: a operação da campanha, não",
              paragraphs: [
                "Funcionalidade desenvolvida para uma plataforma SaaS de busca e gestão de creators. A empresa já possuía uma ferramenta de busca consolidada, mas faltava um ambiente integrado para gerenciar o processo completo de campanhas, da curadoria ao relatório com resultados e métricas.",
                "Por estar sob acordo de confidencialidade, a marca e a identidade visual reais não são exibidas. As telas apresentadas são recriações anonimizadas.",
              ],
            },
            {
              type: "image",
              src: "/projects/campanhas-board.png",
              width: 1048,
              height: 640,
              caption: "Board de campanha com os creators organizados por etapa do funil.",
            },
            {
              type: "text",
              label: "Problema",
              heading: "Cada etapa do funil vivia numa ferramenta diferente",
              paragraphs: [
                "Os times de curadoria, gestão de campanhas e planejamento operavam com o processo fragmentado em múltiplos sistemas: ferramenta de busca, gerenciadores de projeto, WhatsApp, planilhas e e-mail.",
                "Isso gerava alto custo operacional, retrabalho manual e dificuldade de escalar — sem nenhuma integração entre as etapas.",
              ],
            },
            {
              type: "text",
              label: "Descoberta",
              heading: "O Kanban já era o modelo mental dos times",
              paragraphs: [
                "Conduzi pesquisa exploratória de mercado e benchmark das principais plataformas de marketing de influência, mapeando como profissionais de curadoria, planejamento e gestão organizavam o fluxo no dia a dia, quais ferramentas usavam, onde o processo travava e quais tarefas eram repetitivas.",
                "Tive muito acesso aos usuários, porque a própria agência tinha pessoas operando na curadoria.",
              ],
              list: [
                "O processo era fracionado em pelo menos 4–5 ferramentas diferentes, sem integração entre elas.",
                "Registrar negociação, acompanhar status e montar relatório eram tarefas manuais que consumiam muito tempo.",
                "A lógica de Kanban já era familiar aos times (muitos usavam Monday/Trello), mas nenhuma solução do mercado combinava Kanban + dados de creators + relatório num só ambiente.",
                "Hashtags genéricas demais contaminavam relatórios com posts de terceiros — era preciso alertar o usuário antes e durante a campanha.",
              ],
            },
            {
              type: "text",
              label: "Solução",
              heading: "Um Kanban que também negocia, mede e reporta",
              paragraphs: [
                "Uma funcionalidade de gestão de campanhas inspirada em Kanban, integrada à plataforma existente: o usuário cria campanhas e acompanha por hashtags e menções, organiza creators em colunas customizáveis, gerencia negociação e investimento por creator, e gera relatórios comparativos automaticamente ao mover um creator para a coluna principal.",
                "Tudo dentro de um único ambiente, eliminando a necessidade de ferramentas externas.",
              ],
            },
            {
              type: "screens",
              heading: "Wireframes",
              // 7 imagens numa grade de 4 colunas formam sozinhas duas
              // fileiras: 4 em cima, 3 embaixo.
              columns: 4,
              items: [
                {
                  src: "/projects/wireframes/1-lista-campanhas.png",
                  width: 2000,
                  height: 1422,
                  caption: "Home — lista de campanhas.",
                },
                {
                  src: "/projects/wireframes/2-criar-campanha.png",
                  width: 2000,
                  height: 1422,
                  caption: "Home — criação de campanha.",
                },
                {
                  src: "/projects/wireframes/3-board-creators.png",
                  width: 2000,
                  height: 1422,
                  caption: "Board Kanban, com os cards de creators.",
                },
                {
                  src: "/projects/wireframes/4-card-expandido.png",
                  width: 2000,
                  height: 1422,
                  caption: "Board Kanban, com o card do creator expandido.",
                },
                {
                  src: "/projects/wireframes/5-busca-resultados.png",
                  width: 2000,
                  height: 1422,
                  caption: "Busca de creators, com resultados.",
                },
                {
                  src: "/projects/wireframes/6-relatorio.png",
                  width: 2000,
                  height: 2464,
                  caption: "Relatório da campanha.",
                },
                {
                  src: "/projects/wireframes/7-relatorio-perfil.png",
                  width: 2000,
                  height: 1062,
                  caption: "Relatório — perfil detalhado do creator contratado.",
                },
              ],
            },
            {
              type: "text",
              label: "Decisões de design",
              heading: "O que mudou e por quê",
              list: [
                "Busca e filtro unificados numa única barra: menos espaço para controles auxiliares, priorizando a lista de campanhas, que é o conteúdo principal. Decisão de redesign pessoal — o formato anterior separava os dois, consumindo espaço vertical sem necessidade.",
                "Alerta preventivo de hashtag muito usada: ao criar a campanha, o sistema detecta hashtags populares e avisa que posts de terceiros podem contaminar o relatório. Antecipa um problema que antes só aparecia na análise final, e o alerta reaparece durante a campanha para o usuário poder trocar a hashtag.",
                "Card de creator como central única: consolida negociação (modelo, formatos, valores), anotações internas e desempenho num só lugar, eliminando a troca de contexto entre ferramentas.",
                "Relatório gerado automaticamente: ao mover um creator para “Aprovados/Em campanha”, o relatório começa a ser gerado e atualizado diariamente, sem ação manual. O sistema detecta as palavras-chave referentes ao início do contrato.",
                "Detecção de posts fora do período: o sistema encontra publicações relevantes fora da janela de datas e oferece incorporá-las ao relatório sem sair da tela.",
                "Antecipação da integração com a lista de planejamento: no roadmap original ela ficaria para uma fase futura. Reestruturei a priorização para trazê-la desde o MVP, porque a proposta da funcionalidade era justamente resolver a fragmentação — adiar a integração manteria exatamente o problema que ela se propunha a resolver.",
              ],
            },
            {
              type: "results",
              label: "Resultados",
              heading: "Menos ferramentas, menos trabalho manual",
              stats: [
                { value: "+52%", label: "de produtividade operacional dos times" },
                { value: "−3", label: "ferramentas externas fora do ecossistema" },
                { icon: "clock", value: "horas → min", label: "para montar um relatório" },
                { icon: "layers", value: "4", label: "subfuncionalidades após o lançamento" },
              ],
              paragraphs: [
                "Após o lançamento, conduzi workshop de apresentação e treinamento para os times. A funcionalidade evoluiu com subfuncionalidades integradas (central de mensagens, encurtador de links, importação de listas de planejamento e suporte a UGC), tudo a partir da escuta ativa das necessidades levantadas nos workshops e conversas com stakeholders.",
              ],
            },
            {
              type: "screens",
              heading: "Todas as telas",
              // 7 imagens numa grade de 4 colunas: 4 em cima, 3 embaixo.
              columns: 4,
              items: [
                {
                  src: "/projects/telas/1-lista-campanhas.png",
                  width: 2000,
                  height: 1348,
                  caption: "Home — lista de campanhas.",
                },
                {
                  src: "/projects/telas/2-criar-campanha.png",
                  width: 2000,
                  height: 1348,
                  caption: "Modal de criação de campanha, com o alerta de hashtag muito usada.",
                },
                {
                  src: "/projects/telas/3-board-influenciadores.png",
                  width: 2000,
                  height: 1348,
                  caption: "Dentro da campanha — aba Influenciadores, o board Kanban.",
                },
                {
                  src: "/projects/telas/4-adicionar-creator.png",
                  width: 2000,
                  height: 1302,
                  caption: "Modal de adicionar creator à campanha.",
                },
                {
                  src: "/projects/telas/5-negociacao-creator.png",
                  width: 2000,
                  height: 1348,
                  caption: "Card do creator expandido — aba Negociação.",
                },
                {
                  src: "/projects/telas/6-relatorio.png",
                  width: 2000,
                  height: 3111,
                  caption: "Dentro da campanha — aba Relatórios.",
                },
                {
                  src: "/projects/telas/7-relatorio-perfil.png",
                  width: 2000,
                  height: 1159,
                  caption: "Relatório — detalhe de publicações de um creator.",
                },
              ],
            },
          ],
        },
        {},
        {},
        {},
        {},
      ],
    },
    whatIDo: {
      title: "O que eu faço",
      items: [
        {
          title: "Product Design",
          content:
            "Conduzo o ciclo completo de produto, da descoberta à entrega. Defino requisitos, crio PRDs e regras de negócios, estruturo fluxos complexos e priorizo oportunidades. Conecto estratégia e visão de negócio para criar soluções escaláveis e centradas no usuário, sempre alinhando o que resolve o problema da pessoa com o que faz sentido para o negócio.",
        },
        {
          title: "UX/UI Design",
          content:
            "Desenho a experiência e a interface de ponta a ponta. Crio arquitetura de informação, jornadas, fluxos, wireframes e protótipos navegáveis de média e alta fidelidade. Componentizo interfaces, construo e mantenho Design Systems e organizo o handoff técnico para engenharia. Trago visão de negócio para dentro do design, usando benchmarks e dados para priorizar decisões. Uso IA como ferramenta de apoio no discovery e na ideação, nunca como resposta ou decisão final.",
        },
        {
          title: "UX Research",
          content:
            "Faço pesquisa como base de toda decisão e desenvolvimento de design. Conduzo Product Discovery, análise comportamental e atitudinal de usuários, benchmarks competitivos e estudos de referência. Planejo e executo testes de usabilidade com usuários reais para validar hipóteses e reduzir fricções antes de qualquer entrega.",
        },
        {
          title: "Design Gráfico",
          content:
            "Crio material de comunicação visual online e offline: peças para redes sociais, mídias tradicionais, papelaria, direção de arte e tratamento de imagem.",
        },
        {
          title: "Identidade Visual & Branding",
          content:
            "Construo identidades e marcas do zero. Desenho logos, defino paletas, sistemas visuais e a linguagem de cada projeto, dando a produtos e negócios uma personalidade própria e coerente em todos os pontos de contato.",
        },
      ],
    },
    contact: {
      title: "Vamos conversar?",
      // `label` é lido por leitores de tela; `display` é o que aparece na tela.
      items: [
        {
          label: "E-mail",
          display: "nati.design97@gmail.com",
          href: "mailto:nati.design97@gmail.com",
        },
        {
          label: "LinkedIn",
          display: "linkedin.com/in/natali-neves",
          href: "https://www.linkedin.com/in/natali-neves/",
        },
        {
          label: "Behance",
          display: "behance.net/nati97",
          href: "https://www.behance.net/nati97",
        },
        {
          label: "Medium",
          display: "medium.com/@natali.design97",
          href: "https://medium.com/@natali.design97",
        },
      ],
    },
    resume: {
      title: "Resume",
      subtitle: "Baixe meu currículo em PDF",
      download: "Baixar currículo",
    },
    themeToggle: "Alternar tema",
    languageToggle: "Alternar idioma",
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      whatIDo: "What I do",
      resume: "Resume",
    },
    hero: {
      greetingLine1: "Hi, I'm Natali, but",
      greetingLine2: "you can call me Nati!",
      paragraphs: [
        {
          text: "From Rio, living in Santa Catarina. 12 years of career. I started in marketing and moved into design 9 years ago, focusing on user needs aligned with business strategy.",
        },
        {
          text: "I've worked on the teams behind products for Lola Cosmetics, Airbnb, C6 Bank, P&G, Magazine Luiza, Imaginarium and Hering. I've also been part of smaller teams (including a chocolate factory).",
        },
        {
          text: "I fall in love with chaotic problems and turn them into something simple enough to be easily explained.",
        },
        {
          text: "I use AI to amplify my work, not to replace it. It helps me organise processes, design features and optimise my tool stack. The strategy, the business decisions and the user experience are still mine.",
        },
        {
          text: "I also do illustration, and I'm studying front-end and back-end to make life easier.",
        },
      ],
    },
    projects: {
      title: "Projects",
      previous: "Previous project",
      next: "Next project",
      open: "Open project",
      close: "Close project",
      fallbackTitle: "Project",
      items: [
        {
          title: "Campaigns — Influencer marketing operations",
          note: "(under NDA)",
          thumb: "/projects/campanhas.png",
          summary:
            "From a process scattered across five tools to a single campaign management environment, designed around how curation teams actually work.",
          meta: {
            role: { label: "Role", value: "Mid-level Product & UX/UI Design" },
            year: { label: "Year", value: "2024–2025" },
            focus: {
              label: "Focus",
              value: ["Operations design", "Complex flows", "Report automation"],
            },
          },
          sections: [
            {
              type: "text",
              label: "Context",
              heading: "The search existed: the campaign operation did not",
              paragraphs: [
                "A feature built for a SaaS platform for creator search and management. The company already had a solid search tool, but lacked an integrated environment to manage the full campaign process, from curation through to the report with results and metrics.",
                "Under a confidentiality agreement, the real brand and visual identity are not shown. The screens presented are anonymised recreations.",
              ],
            },
            {
              type: "image",
              src: "/projects/campanhas-board.png",
              width: 1048,
              height: 640,
              caption: "Campaign board with creators organised by funnel stage.",
            },
            {
              type: "text",
              label: "Problem",
              heading: "Every stage of the funnel lived in a different tool",
              paragraphs: [
                "The curation, campaign management and planning teams ran a process fragmented across multiple systems: search tool, project managers, WhatsApp, spreadsheets and email.",
                "That meant high operational cost, manual rework and difficulty scaling — with no integration between the stages.",
              ],
            },
            {
              type: "text",
              label: "Discovery",
              heading: "Kanban was already the teams' mental model",
              paragraphs: [
                "I ran exploratory market research and benchmarking of the main influencer marketing platforms, mapping how curation, planning and management professionals organised their day-to-day flow, which tools they used, where the process stalled and which tasks were repetitive.",
                "I had a lot of access to these users, since the agency itself had people working in curation.",
              ],
              list: [
                "The process was split across at least 4–5 different tools, with no integration between them.",
                "Recording negotiations, tracking status and putting reports together were manual tasks that took up a lot of time.",
                "Kanban logic was already familiar to the teams (many used Monday/Trello), but no solution on the market combined Kanban + creator data + reporting in one environment.",
                "Overly generic hashtags polluted reports with third-party posts — the user needed to be warned before and during the campaign.",
              ],
            },
            {
              type: "text",
              label: "Solution",
              heading: "A Kanban that also negotiates, measures and reports",
              paragraphs: [
                "A Kanban-inspired campaign management feature, integrated into the existing platform: users create campaigns and track them through hashtags and mentions, organise creators into customisable columns, manage negotiation and investment per creator, and automatically generate comparative reports when a creator is moved to the main column.",
                "All within a single environment, removing the need for external tools.",
              ],
            },
            {
              type: "screens",
              heading: "Wireframes",
              // 7 imagens numa grade de 4 colunas formam sozinhas duas
              // fileiras: 4 em cima, 3 embaixo.
              columns: 4,
              items: [
                {
                  src: "/projects/wireframes/1-lista-campanhas.png",
                  width: 2000,
                  height: 1422,
                  caption: "Home — campaign list.",
                },
                {
                  src: "/projects/wireframes/2-criar-campanha.png",
                  width: 2000,
                  height: 1422,
                  caption: "Home — creating a campaign.",
                },
                {
                  src: "/projects/wireframes/3-board-creators.png",
                  width: 2000,
                  height: 1422,
                  caption: "Kanban board, with the creator cards.",
                },
                {
                  src: "/projects/wireframes/4-card-expandido.png",
                  width: 2000,
                  height: 1422,
                  caption: "Kanban board, with the creator card expanded.",
                },
                {
                  src: "/projects/wireframes/5-busca-resultados.png",
                  width: 2000,
                  height: 1422,
                  caption: "Creator search, with results.",
                },
                {
                  src: "/projects/wireframes/6-relatorio.png",
                  width: 2000,
                  height: 2464,
                  caption: "Campaign report.",
                },
                {
                  src: "/projects/wireframes/7-relatorio-perfil.png",
                  width: 2000,
                  height: 1062,
                  caption: "Report — contracted creator's detailed profile.",
                },
              ],
            },
            {
              type: "text",
              label: "Design decisions",
              heading: "What changed and why",
              list: [
                "Unified search and filter in a single bar: less space for auxiliary controls, prioritising the campaign list, which is the main content. A personal redesign decision — the previous format split the two, using vertical space unnecessarily.",
                "Preventive alert for heavily used hashtags: when creating the campaign, the system detects popular hashtags and warns that third-party posts may pollute the report. It anticipates a problem that previously only surfaced in the final analysis, and the alert reappears during the campaign so the user can change the hashtag.",
                "Creator card as a single hub: consolidates negotiation (model, formats, values), internal notes and performance in one place, removing context switching between tools.",
                "Automatically generated report: when a creator moves to “Approved/In campaign”, the report starts being generated and updated daily, with no manual action. The system detects the keywords relating to the start of the contract.",
                "Detection of posts outside the period: the system finds relevant publications outside the date window and offers to add them to the report without leaving the screen.",
                "Bringing the planning list integration forward: in the original roadmap it was scheduled for a later phase. I restructured the prioritisation to bring it into the MVP, because the whole point of the feature was to solve fragmentation — postponing the integration would have kept exactly the problem it set out to solve.",
              ],
            },
            {
              type: "results",
              label: "Results",
              heading: "Fewer tools, less manual work",
              stats: [
                { value: "+52%", label: "in the teams' operational productivity" },
                { value: "−3", label: "external tools outside the ecosystem" },
                { icon: "clock", value: "hours → min", label: "to put together a report" },
                { icon: "layers", value: "4", label: "sub-features after launch" },
              ],
              paragraphs: [
                "After launch, I ran a presentation and training workshop for the teams. The feature evolved with integrated sub-features (message centre, link shortener, planning list import and UGC support), all coming from actively listening to the needs raised in those workshops and in conversations with stakeholders.",
              ],
            },
            {
              type: "screens",
              heading: "All screens",
              columns: 4,
              items: [
                {
                  src: "/projects/telas/1-lista-campanhas.png",
                  width: 2000,
                  height: 1348,
                  caption: "Home — campaign list.",
                },
                {
                  src: "/projects/telas/2-criar-campanha.png",
                  width: 2000,
                  height: 1348,
                  caption: "Create campaign modal, with the heavily-used-hashtag alert.",
                },
                {
                  src: "/projects/telas/3-board-influenciadores.png",
                  width: 2000,
                  height: 1348,
                  caption: "Inside the campaign — Influencers tab, the Kanban board.",
                },
                {
                  src: "/projects/telas/4-adicionar-creator.png",
                  width: 2000,
                  height: 1302,
                  caption: "Add creator to campaign modal.",
                },
                {
                  src: "/projects/telas/5-negociacao-creator.png",
                  width: 2000,
                  height: 1348,
                  caption: "Expanded creator card — Negotiation tab.",
                },
                {
                  src: "/projects/telas/6-relatorio.png",
                  width: 2000,
                  height: 3111,
                  caption: "Inside the campaign — Reports tab.",
                },
                {
                  src: "/projects/telas/7-relatorio-perfil.png",
                  width: 2000,
                  height: 1159,
                  caption: "Report — a creator's publication details.",
                },
              ],
            },
          ],
        },
        {},
        {},
        {},
        {},
      ],
    },
    whatIDo: {
      title: "What I do",
      items: [
        {
          title: "Product Design",
          content:
            "I run the full product cycle, from discovery to delivery. I define requirements, write PRDs and business rules, structure complex flows and prioritise opportunities. I connect strategy and business vision to build scalable, user-centred solutions, always aligning what solves the person's problem with what makes sense for the business.",
        },
        {
          title: "UX/UI Design",
          content:
            "I design the experience and the interface end to end. I build information architecture, journeys, flows, wireframes and mid-to-high fidelity navigable prototypes. I componentise interfaces, build and maintain Design Systems, and organise the technical handoff to engineering. I bring business vision into design, using benchmarks and data to prioritise decisions. I use AI as a support tool in discovery and ideation, never as the final answer or decision.",
        },
        {
          title: "UX Research",
          content:
            "I use research as the foundation for every design decision. I run Product Discovery, behavioural and attitudinal user analysis, competitive benchmarks and reference studies. I plan and run usability tests with real users to validate hypotheses and reduce friction before any delivery.",
        },
        {
          title: "Graphic Design",
          content:
            "I create visual communication material online and offline: social media pieces, traditional media, stationery, art direction and image treatment.",
        },
        {
          title: "Visual Identity & Branding",
          content:
            "I build identities and brands from the ground up. I design logos, define palettes, visual systems and each project's language, giving products and businesses a personality of their own that stays coherent across every touchpoint.",
        },
      ],
    },
    contact: {
      title: "Let's talk?",
      items: [
        {
          label: "Email",
          display: "nati.design97@gmail.com",
          href: "mailto:nati.design97@gmail.com",
        },
        {
          label: "LinkedIn",
          display: "linkedin.com/in/natali-neves",
          href: "https://www.linkedin.com/in/natali-neves/",
        },
        {
          label: "Behance",
          display: "behance.net/nati97",
          href: "https://www.behance.net/nati97",
        },
        {
          label: "Medium",
          display: "medium.com/@natali.design97",
          href: "https://medium.com/@natali.design97",
        },
      ],
    },
    resume: {
      title: "Resume",
      subtitle: "Download my resume in PDF",
      download: "Download resume",
    },
    themeToggle: "Toggle theme",
    languageToggle: "Toggle language",
  },
};
