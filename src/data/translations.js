export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre mim",
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
        {
          title: "Suporte a vítima de violência doméstica disfarçado de controle de ciclo menstrual",
          thumb: "/projects/lua/thumb.png",
          summary:
            "Uma ferramenta que na superfície é um controle de ciclo menstrual e, por trás de uma autenticação separada, dá acesso a uma rede de apoio a vítimas de violência doméstica.",
          meta: {
            role: { label: "Atuando como", value: "UX/UI Design" },
            year: { label: "Ano", value: "2021–2022" },
            focus: { label: "Responsabilidades", value: ["UX Strategy", "UX Research", "UI Design", "UX Writer"] },
          },
          sections: [
            {
              type: "text", label: "Contexto",
              heading: "Projeto autoral para uma ONG, do zero",
              paragraphs: [
                "Projeto autoral em equipe de 4 designers, durante a pandemia. Uma proposta para uma ONG: criar uma ferramenta digital de apoio a vítimas, do zero.",
              ],
            },
            {
              type: "text", label: "Desafio",
              heading: "Suporte real sem que o app pareça o que é",
              paragraphs: [
                "No Brasil, a cada 2 minutos, 5 mulheres são agredidas. Em 80% dos casos, o agressor é o parceiro. Apps de apoio já existiam, mas todos eram identificáveis — o que aumenta o risco se o agressor vê.",
                "Como oferecer suporte real sem que o app pareça o que é, principalmente em um período de confinamento?",
              ],
            },
            {
              type: "text", label: "Solução",
              heading: "Um controle de ciclo por fora, uma rede de apoio por dentro",
              list: [
                "Na superfície, funciona como um controle de ciclo menstrual.",
                "Por trás de uma autenticação separada, dá acesso a rede de apoio, chat com voluntárias, contatos de ONGs e delegacias, seção de empregos e artigos informativos.",
                "Botão de socorro discreto, com envio automático de alerta.",
                "Com o passar das interações, a usuária passa a fazer parte de uma comunidade — e, quem sabe um dia, prestar ajuda a outras.",
              ],
            },
            {
              type: "text", label: "Processo",
              heading: "Da pesquisa ao segundo teste de usabilidade",
              list: [
                "Pesquisa quantitativa (45 respostas).",
                "Pesquisa qualitativa (24 respostas).",
                "Benchmarking de 3 apps existentes.",
                "Priorização por matriz impacto × esforço.",
                "Wireframes e crazy 8's.",
                "Primeiro teste com 6 usuárias.",
                "Análise do primeiro feedback para redesign.",
                "Protótipo de alta fidelidade.",
                "Segundo teste com 4 usuárias.",
              ],
            },
            { type: "image", src: "/projects/lua/processo.png", width: 1600, height: 845, caption: "Visão geral do processo do projeto." },
            {
              type: "links", label: "Material completo",
              heading: "Quer ver o projeto por inteiro?",
              links: [
                { label: "Material completo (Medium)", href: "https://medium.com/@natali.design97/lua-suporte-a-v%C3%ADtimas-de-viol%C3%AAncia-dom%C3%A9stica-discreto-e-na-palma-da-m%C3%A3o-8d1881f97c8f" },
                { label: "Teste de usabilidade", href: "https://medium.com/@natali.design97/teste-de-usabilidade-do-prot%C3%B3tipo-lua-6d44e8e06f65" },
                { label: "Benchmarking — App Lua", href: "https://medium.com/@natali.design97/benchmarking-app-lua-5c32b806f6a3" },
              ],
            },
            {
              type: "screens", heading: "Wireframes", columns: 3,
              items: [
                { src: "/projects/lua/wireframes/1.png", width: 1000, height: 1595 },
                { src: "/projects/lua/wireframes/2.png", width: 1000, height: 1595 },
                { src: "/projects/lua/wireframes/3.png", width: 1000, height: 1595 },
              ],
            },
            {
              type: "screens", heading: "Fluxos",
              items: [
                { src: "/projects/lua/fluxos/usuaria.png", width: 1600, height: 1038, caption: "Fluxo da usuária." },
                { src: "/projects/lua/fluxos/voluntaria.png", width: 1600, height: 1274, caption: "Fluxo da voluntária." },
              ],
            },
            {
              type: "results", label: "Impacto",
              heading: "O que a pesquisa e os testes revelaram",
              stats: [
                { value: "96,2%", label: "das entrevistadas nunca denunciaram o agressor" },
                { value: "100%", label: "das vítimas entrevistadas sofreram violência psicológica" },
                { value: "38,7%", label: "só reconheceram a violência após ler sobre os tipos no questionário" },
                { value: "42,9%", label: "descobriram a situação por conteúdo na internet — validando a solução digital" },
              ],
              paragraphs: [
                "Nos testes, o principal problema foi o botão de socorro — todas tiveram dificuldade —, o que levou ao redesenho no protótipo final. Uma das participantes já havia passado por situação semelhante e disse que o app seria necessário para mulheres em vulnerabilidade.",
              ],
            },
            {
              type: "text", label: "Decisões de design",
              heading: "O que sustenta o disfarce",
              list: [
                "Disfarce total: ícone, nome e home mostram um app de ciclo menstrual funcional — nada revela o propósito real.",
                "Dupla camada de acesso: o conteúdo de apoio só aparece após uma senha separada, com saída rápida que retorna ao disfarce.",
                "Botão de socorro com nome neutro: funciona sem chamar atenção, com etapa de confirmação para evitar acionamento acidental.",
                "Tom de voz acolhedor: linguagem casual, direta e respeitosa, com glossário próprio (palavras como “segura”, “apoio”, “rede”).",
                "Da vítima para voluntária: o app foi desenhado para que a usuária que se recupera possa se tornar voluntária e apoiar outras mulheres.",
              ],
            },
            {
              type: "screens", heading: "Todas as telas", columns: 4,
              items: [
                { src: "/projects/lua/telas/01.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/02.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/03.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/04.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/05.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/06.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/07.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/08.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/09.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/10.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/11.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/12.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/13.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/14.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/15.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/16.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/17.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/18.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/19.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/20.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/21.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/22.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/23.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/24.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/25.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/26.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/27.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/28.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/29.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/30.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/31.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/32.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/33.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/34.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/35.png", width: 640, height: 1137 },
              ],
            },
          ],
        },
        {
          title: "Painel de Métricas de Conteúdo para Franquias de Entretenimento",
          note: "(conceito)",
          thumb: "/projects/logoy/thumb.png",
          summary:
            "Uma interface conceitual para uma plataforma global de streaming acompanhar o que os influenciadores falam ou abordam os produtos do seu catálogo, cruzando isso com engajamento e audiência por título.",
          meta: {
            role: { label: "Atuando como", value: "UX/UI Design" },
            year: { label: "Ano", value: "2025" },
            focus: { label: "Responsabilidades", value: ["UX Research", "UX Strategy", "UI Design"] },
          },
          sections: [
            {
              type: "text", label: "Contexto",
              heading: "Uma conversa comercial que virou conceito",
              paragraphs: [
                "Projeto conceitual desenvolvido a pedido da liderança de um dos times de que eu fazia parte, no âmbito de uma conversa comercial entre a empresa e uma grande plataforma global de streaming — negociação que ficou em standby.",
                "Por questões de confidencialidade, não é possível identificar a plataforma. As imagens são reinterpretações conceituais.",
              ],
            },
            {
              type: "text", label: "Desafio",
              heading: "Cruzar a fala dos influenciadores com audiência por título",
              paragraphs: [
                "Criar uma interface que permitisse à plataforma acompanhar como influenciadores falavam sobre seu catálogo de conteúdo, cruzando isso com métricas de engajamento e audiência por título (ou franquia).",
              ],
            },
            {
              type: "text", label: "Solução",
              heading: "Uma página de análise por título, em blocos",
              paragraphs: [
                "Página de análise por título, estruturada em blocos sem sobreposição de informação: destaque do conteúdo mais engajador, métricas gerais, um painel unificado (distribuição por tema + nuvem de palavras + criadores em destaque), catálogo geral, e uma tela de detalhe por título com resumo por IA, dados de audiência e ranking de conteúdos.",
              ],
            },
            {
              type: "text", label: "Processo",
              heading: "De três camadas de navegação ao conceito",
              paragraphs: ["Pesquisa exploratória de conteúdo (social listening)."],
              listHeading: "Insights principais",
              list: [
                "As métricas precisavam de separação clara.",
                "A audiência de conteúdo digital é global — sem filtro geográfico.",
                "Engajamento recente é mais acionável que dados demográficos para criadores.",
                "Wireframes estruturados em 3 camadas de navegação (visão geral → detalhe → conteúdo individual), com a análise de fluxo guiando a estrutura.",
                "Sem teste de usabilidade — é uma ideação conceitual.",
              ],
            },
            {
              type: "screens", heading: "Wireframes", columns: 2,
              items: [
                { src: "/projects/logoy/wireframes/1.png", width: 1200, height: 1688, caption: "Tela 1 — estrutura da visão geral." },
                { src: "/projects/logoy/wireframes/2.png", width: 1200, height: 1457, caption: "Tela 2 — detalhe do título." },
              ],
            },
            {
              type: "text", label: "Decisões de design",
              heading: "O que separa navegação de reprodução",
              list: [
                "Consolidação de blocos redundantes (métricas duplicadas, seções vazias) em blocos únicos.",
                "Distinção entre navegação interna (sem play em thumbnails que levam a outra tela) e reprodução real (play só onde há conteúdo para assistir de fato).",
                "Separação entre conteúdo próprio da plataforma (trailer, player interno) e de terceiros (posts de criadores, com link externo).",
                "Fluxo de acesso facilitado (a “Tela 3”) para creators que usam a hashtag oficial da campanha — incentivo à participação oficial.",
              ],
            },
            {
              type: "screens", heading: "Fluxo",
              items: [
                { src: "/projects/logoy/fluxo.png", width: 1800, height: 1211, caption: "Fluxo de navegação completo." },
              ],
            },
            {
              type: "screens", heading: "Todas as telas",
              items: [
                { src: "/projects/logoy/telas/1.png", width: 1000, height: 911 },
                { src: "/projects/logoy/telas/2.png", width: 1000, height: 1382 },
                { src: "/projects/logoy/telas/3.png", width: 1000, height: 2128 },
              ],
            },
          ],
        },
        {
          title: "Menos sobrecarga e mais engajamento",
          note: "(sob NDA)",
          thumb: "/projects/viver/thumb.png",
          summary:
            "Analisando o fluxo e os hábitos para tornar o sistema de notificações de um app de saúde e bem-estar mais eficiente — sem sobrecarregar o usuário.",
          meta: {
            role: { label: "Atuação", value: "UX Research e UI Design" },
            year: { label: "Ano", value: "2024" },
            focus: { label: "Foco", value: ["Redesign de fluxo", "Alteração de etapa como resolução", "Engajamento com o produto"] },
          },
          sections: [
            { type: "text", label: "Contexto", heading: "Retenção travada pelas notificações",
              paragraphs: [
                "Projeto sob NDA (as imagens são recriações conceituais). Um app de saúde mental e física que ajuda usuários a monitorar humor, medicação e atividades saudáveis.",
                "Fui contratada como UX/UI Designer para resolver um problema crítico de retenção ligado diretamente às notificações.",
              ] },
            { type: "text", label: "Desafio", heading: "Tudo chegava com a mesma urgência",
              paragraphs: [
                "Usuários estavam desativando todas as notificações por sobrecarga — e com isso perdiam lembretes essenciais, como tomar medicação ou registrar o humor.",
                "O app mandava tudo com a mesma urgência e frequência, sem distinção. Resultado: irritação, abandono e, em consequência, um risco à saúde, já que envolvia medicação e controle de hábitos.",
              ] },
            { type: "text", label: "Solução", heading: "Personalização, hierarquia e menos ruído",
              paragraphs: [
                "Três frentes principais: personalização, hierarquia de importância e redução visual de sobrecarga.",
                "Personalização: o usuário escolhe como e quando receber, por três modos — por horários de pico de uso do celular, por horário definido (até 7 por dia) ou por rotina de apps vinculados (ex.: ao abrir o app de clima, recebe junto o lembrete do Viver Melhor).",
                "Lembrete como tela de importância: notificações críticas (medicação) funcionam como um alarme em tela cheia — overlay escuro, transparente e difuso sobre qualquer tela, com ícone, descrição e três ações (fechar, marcar como feito, adiar). Aparece mesmo com o app fechado; não dá para ignorar sem uma ação consciente.",
                "Widget inteligente: menos pop-ups e sons, e um widget na tela inicial que muda de cor conforme as pendências (atualizar humor, registrar diário, lembrete ativo). O usuário vê o que precisa fazer de relance, sem ansiedade.",
              ] },
            { type: "text", label: "Processo", heading: "Da desk research ao protótipo",
              list: [
                "Desk research (uso de apps de saúde mental, sobrecarga de notificações, frequência de uso de smartphones).",
                "Benchmarking (Calm, Happify, Cíngulo).",
                "Análise de necessidades.",
                "Definição de soluções.",
                "Wireframes.",
                "Protótipo de alta fidelidade.",
              ] },
            { type: "screens", heading: "Telas para ilustrar",
              items: [ { src: "/projects/viver/telas.png", width: 1600, height: 1170, caption: "Os três modos de notificação e o widget inteligente." } ] },
            { type: "text", label: "Decisões de design", heading: "Nem toda notificação é igual",
              list: [
                "Notificação não é tudo igual: separar o lembrete crítico (tela cheia, exige ação) da notificação informativa (widget silencioso) resolveu o problema de tudo parecer urgente.",
                "Controle na mão do usuário: em vez de decidir por ele quando notificar, o app oferece três modos de frequência e deixa ele escolher — respeito à autonomia reduz a irritação.",
                "Widget no lugar do pop-up: informação visual passiva em vez de interrupção ativa — o usuário checa quando quer, não quando o app decide.",
              ] },
            { type: "results", label: "Impacto", heading: "Quatro meses depois do lançamento",
              stats: [
                { value: "+22%", label: "de usuários atualizando diário, humor e registros com frequência" },
                { value: "−19%", label: "de esquecimento de horários de medicação e lembretes" },
              ] },
          ],
        },
        {
          title: "Solução para abastecimento e pagamento 100% autônomos",
          note: "(sob NDA)",
          thumb: "/projects/self/thumb.png",
          summary:
            "Um app para postos de combustível que elimina a dependência de um frentista para abastecer e pagar — do mapa ao pagamento, tudo pelo celular.",
          meta: {
            role: { label: "Atuando como", value: "Product Design e UX/UI Design" },
            year: { label: "Ano", value: "2022" },
            focus: { label: "Foco", value: ["Pesquisa", "Criação de fluxo baseado em autonomia", "Produto ponta a ponta", "MVP", "UI Design"] },
          },
          sections: [
            { type: "text", label: "Cenário do desafio", heading: "Postos operando com equipe reduzida",
              paragraphs: [
                "Nota de confidencialidade: projeto desenvolvido para uma empresa estrangeira do setor de varejo de combustíveis. Por conta de cláusula de NDA no contrato, não é possível identificar a marca nem exibir as telas reais entregues. As imagens são recriações conceituais.",
                "App para postos que elimina a dependência de um funcionário para abastecer e pagar, ou de um frentista para indicar bomba e caixa. Cenário real: postos operando com equipe reduzida, gerentes acumulando a função de caixa e bombas sem supervisão.",
              ] },
            { type: "links", label: "Material completo", heading: "Quer ver o projeto por inteiro?",
              links: [ { label: "Solução para postos de combustíveis (Medium)", href: "https://medium.com/@natali.design97/solu%C3%A7%C3%A3o-para-postos-de-combust%C3%ADveis-2841dcfdf5d2" } ] },
            { type: "text", label: "Desafio", heading: "Abastecer e pagar sem chip e sem atendente",
              paragraphs: [
                "Projetar um fluxo de abastecimento e pagamento 100% autônomo — sem chip e sem atendente. Simples o bastante para qualquer perfil de usuário, e que desse ao gestor do posto controle via dashboard integrado (ou facilmente integrável).",
              ] },
            { type: "text", label: "Processo", heading: "Duas personas em lados opostos do problema",
              paragraphs: ["Pesquisa com duas personas em lados opostos: o gestor de franquia (dores de gestão, rodízio de equipe, medo de golpe) e a usuária final (pouco tempo, prefere resolver tudo pelo celular)."],
              listHeading: "Benchmarking cruzado",
              list: [
                "Apps de posto de combustível.",
                "Apps de aluguel de bicicleta compartilhada, buscando o mesmo tipo de autonomia ponta a ponta.",
                "Duplo Diamante conduzindo da pesquisa ao MVP.",
              ] },
            { type: "image", src: "/projects/self/double-diamond.png", width: 1200, height: 535, caption: "Duplo Diamante — da pesquisa ao MVP." },
            { type: "text", label: "Decisões de design", heading: "Etapas visíveis e segurança psicológica",
              list: [
                "Fluxo em etapas visíveis (escolher bomba → tipo de combustível → quantidade → forma de pagamento → confirmação), para o usuário sempre saber onde está e poder voltar sem se perder.",
                "Paleta neutra e formas arredondadas, buscando transmitir segurança psicológica numa tarefa que envolve dinheiro e combustível.",
                "Pagamento com múltiplas opções (cartão salvo, QR code), resumido numa tela de confirmação antes de fechar.",
              ] },
            { type: "text", label: "Impacto no design", heading: "O MVP que resolve a dor central",
              list: [
                "Geolocalização e identificação do posto.",
                "Seleção de bomba e combustível.",
                "Pagamento integrado e status em tempo real das etapas — a base funcional que resolve a dor central: abastecer sem precisar de um terceiro.",
              ] },
            { type: "screens", heading: "Wireframes", columns: 4,
              items: [
                { src: "/projects/self/wireframes/01.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/02.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/03.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/04.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/05.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/06.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/07.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/08.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/09.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/10.png", width: 620, height: 1342 },
              ] },
            { type: "screens", heading: "Fluxo",
              items: [ { src: "/projects/self/fluxo.png", width: 1800, height: 1824, caption: "Fluxo completo do abastecimento." } ] },
            { type: "results", label: "Resultados", heading: "Mais de 3 meses no ar",
              stats: [
                { value: "11/28", label: "postos reorganizaram o rodízio de frentistas, com escalas mais espaçadas e sem novas contratações" },
                { value: "41%", label: "dos acessos aconteciam após as 20h — o app sustentando uso até de madrugada" },
              ],
              paragraphs: ["Gerentes passaram a ter visibilidade total: do fluxo de caixa integrado ao estoque de combustível em tempo real."] },
            { type: "screens", heading: "Todas as telas", columns: 4,
              items: [
                { src: "/projects/self/telas/01.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/02.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/03.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/04.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/05.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/06.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/07.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/08.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/09.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/10.png", width: 620, height: 1342 },
              ] },
          ],
        },
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
      about: "About me",
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
        {
          title: "Domestic violence victim support disguised as a menstrual cycle tracker",
          thumb: "/projects/lua/thumb.png",
          summary:
            "A tool that on the surface is a menstrual cycle tracker and, behind a separate authentication, gives access to a support network for domestic violence victims.",
          meta: {
            role: { label: "Role", value: "UX/UI Design" },
            year: { label: "Year", value: "2021–2022" },
            focus: { label: "Responsibilities", value: ["UX Strategy", "UX Research", "UI Design", "UX Writing"] },
          },
          sections: [
            {
              type: "text", label: "Context",
              heading: "An authorial project for an NGO, from scratch",
              paragraphs: [
                "An authorial project with a team of 4 designers, during the pandemic. A proposal for an NGO: to build a digital support tool for victims, from scratch.",
              ],
            },
            {
              type: "text", label: "Challenge",
              heading: "Real support without the app looking like what it is",
              paragraphs: [
                "In Brazil, every 2 minutes, 5 women are assaulted. In 80% of cases, the abuser is the partner. Support apps already existed, but they were all identifiable — which increases the risk if the abuser sees it.",
                "How do you offer real support without the app looking like what it is, especially during lockdown?",
              ],
            },
            {
              type: "text", label: "Solution",
              heading: "A cycle tracker on the outside, a support network inside",
              list: [
                "On the surface, it works as a menstrual cycle tracker.",
                "Behind a separate authentication, it opens a support network, chat with volunteers, contacts for NGOs and police stations, a jobs section and informative articles.",
                "A discreet panic button with automatic alert sending.",
                "Over time, the user becomes part of a community — and, one day, may offer help to others.",
              ],
            },
            {
              type: "text", label: "Process",
              heading: "From research to the second usability test",
              list: [
                "Quantitative research (45 responses).",
                "Qualitative research (24 responses).",
                "Benchmarking of 3 existing apps.",
                "Prioritisation with an impact × effort matrix.",
                "Wireframes and crazy 8's.",
                "First test with 6 users.",
                "Analysis of the first feedback for redesign.",
                "High-fidelity prototype.",
                "Second test with 4 users.",
              ],
            },
            { type: "image", src: "/projects/lua/processo.png", width: 1600, height: 845, caption: "Overview of the project process." },
            {
              type: "links", label: "Full material",
              heading: "Want to see the whole project?",
              links: [
                { label: "Full write-up (Medium)", href: "https://medium.com/@natali.design97/lua-suporte-a-v%C3%ADtimas-de-viol%C3%AAncia-dom%C3%A9stica-discreto-e-na-palma-da-m%C3%A3o-8d1881f97c8f" },
                { label: "Usability test", href: "https://medium.com/@natali.design97/teste-de-usabilidade-do-prot%C3%B3tipo-lua-6d44e8e06f65" },
                { label: "Benchmarking — Lua app", href: "https://medium.com/@natali.design97/benchmarking-app-lua-5c32b806f6a3" },
              ],
            },
            {
              type: "screens", heading: "Wireframes", columns: 3,
              items: [
                { src: "/projects/lua/wireframes/1.png", width: 1000, height: 1595 },
                { src: "/projects/lua/wireframes/2.png", width: 1000, height: 1595 },
                { src: "/projects/lua/wireframes/3.png", width: 1000, height: 1595 },
              ],
            },
            {
              type: "screens", heading: "Flows",
              items: [
                { src: "/projects/lua/fluxos/usuaria.png", width: 1600, height: 1038, caption: "User flow." },
                { src: "/projects/lua/fluxos/voluntaria.png", width: 1600, height: 1274, caption: "Volunteer flow." },
              ],
            },
            {
              type: "results", label: "Impact",
              heading: "What research and testing revealed",
              stats: [
                { value: "96.2%", label: "of interviewees had never reported the abuser" },
                { value: "100%", label: "of the victims interviewed had suffered psychological violence" },
                { value: "38.7%", label: "only recognised the violence after reading about the types in the survey" },
                { value: "42.9%", label: "found out about their situation through online content — validating the digital solution" },
              ],
              paragraphs: [
                "In testing, the main issue was the panic button — everyone struggled with it —, which led to a redesign in the final prototype. One participant had been through a similar situation and said the app would be necessary for women in vulnerable positions.",
              ],
            },
            {
              type: "text", label: "Design decisions",
              heading: "What keeps the disguise standing",
              list: [
                "Full disguise: icon, name and home show a working menstrual cycle tracker — nothing reveals the real purpose.",
                "Two-layer access: the support content only appears after a separate password, with a quick exit that returns to the disguise.",
                "Panic button with a neutral name: it works without drawing attention, with a confirmation step to avoid accidental triggers.",
                "Warm tone of voice: casual, direct and respectful language, with its own glossary (words like “safe”, “support”, “network”).",
                "From victim to volunteer: the app was designed so a recovering user can become a volunteer and support other women.",
              ],
            },
            {
              type: "screens", heading: "All screens", columns: 4,
              items: [
                { src: "/projects/lua/telas/01.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/02.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/03.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/04.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/05.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/06.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/07.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/08.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/09.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/10.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/11.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/12.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/13.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/14.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/15.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/16.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/17.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/18.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/19.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/20.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/21.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/22.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/23.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/24.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/25.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/26.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/27.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/28.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/29.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/30.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/31.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/32.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/33.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/34.png", width: 640, height: 1137 },
                { src: "/projects/lua/telas/35.png", width: 640, height: 1137 },
              ],
            },
          ],
        },
        {
          title: "Content Metrics Dashboard for Entertainment Franchises",
          note: "(concept)",
          thumb: "/projects/logoy/thumb.png",
          summary:
            "A concept interface for a global streaming platform to track what influencers say about — or how they cover — the products in its catalogue, cross-referencing that with engagement and audience per title.",
          meta: {
            role: { label: "Role", value: "UX/UI Design" },
            year: { label: "Year", value: "2025" },
            focus: { label: "Responsibilities", value: ["UX Research", "UX Strategy", "UI Design"] },
          },
          sections: [
            {
              type: "text", label: "Context",
              heading: "A commercial conversation that became a concept",
              paragraphs: [
                "A concept project developed at the request of the leadership of one of the teams I was part of, within a commercial conversation between the company and a large global streaming platform — a negotiation that went on standby.",
                "For confidentiality reasons, the platform cannot be identified. The images are conceptual reinterpretations.",
              ],
            },
            {
              type: "text", label: "Challenge",
              heading: "Cross influencer talk with audience per title",
              paragraphs: [
                "Build an interface that would let the platform track how influencers talked about its content catalogue, cross-referencing that with engagement and audience metrics per title (or franchise).",
              ],
            },
            {
              type: "text", label: "Solution",
              heading: "A per-title analysis page, in blocks",
              paragraphs: [
                "A per-title analysis page, structured in blocks with no information overlap: a highlight of the most engaging content, general metrics, a unified panel (theme distribution + word cloud + featured creators), the general catalogue, and a per-title detail screen with an AI summary, audience data and a content ranking.",
              ],
            },
            {
              type: "text", label: "Process",
              heading: "From three navigation layers to the concept",
              paragraphs: ["Exploratory content research (social listening)."],
              listHeading: "Key insights",
              list: [
                "Metrics needed clear separation.",
                "Digital content audiences are global — no geographic filter.",
                "Recent engagement is more actionable than demographics for creators.",
                "Wireframes structured across 3 navigation layers (overview → detail → individual content), with flow analysis guiding the structure.",
                "No usability test — it is a conceptual ideation.",
              ],
            },
            {
              type: "screens", heading: "Wireframes", columns: 2,
              items: [
                { src: "/projects/logoy/wireframes/1.png", width: 1200, height: 1688, caption: "Screen 1 — overview structure." },
                { src: "/projects/logoy/wireframes/2.png", width: 1200, height: 1457, caption: "Screen 2 — title detail." },
              ],
            },
            {
              type: "text", label: "Design decisions",
              heading: "What separates navigation from playback",
              list: [
                "Consolidating redundant blocks (duplicate metrics, empty sections) into single blocks.",
                "Distinguishing internal navigation (no play on thumbnails that lead to another screen) from real playback (play only where there is content to actually watch).",
                "Separating the platform's own content (trailer, internal player) from third-party content (creator posts, with an external link).",
                "A streamlined access flow (“Screen 3”) for creators who use the campaign's official hashtag — encouraging official participation.",
              ],
            },
            {
              type: "screens", heading: "Flow",
              items: [
                { src: "/projects/logoy/fluxo.png", width: 1800, height: 1211, caption: "Full navigation flow." },
              ],
            },
            {
              type: "screens", heading: "All screens",
              items: [
                { src: "/projects/logoy/telas/1.png", width: 1000, height: 911 },
                { src: "/projects/logoy/telas/2.png", width: 1000, height: 1382 },
                { src: "/projects/logoy/telas/3.png", width: 1000, height: 2128 },
              ],
            },
          ],
        },
        {
          title: "Less overload, more engagement",
          note: "(under NDA)",
          thumb: "/projects/viver/thumb.png",
          summary:
            "Analysing the flow and habits to make a health & wellbeing app's notification system more effective — without overloading the user.",
          meta: {
            role: { label: "Role", value: "UX Research & UI Design" },
            year: { label: "Year", value: "2024" },
            focus: { label: "Focus", value: ["Flow redesign", "Changing a step as the fix", "Product engagement"] },
          },
          sections: [
            { type: "text", label: "Context", heading: "Retention stuck by notifications",
              paragraphs: [
                "Project under NDA (the images are conceptual recreations). A mental and physical health app that helps users track mood, medication and healthy activities.",
                "I was hired as a UX/UI Designer to solve a critical retention problem directly tied to notifications.",
              ] },
            { type: "text", label: "Challenge", heading: "Everything arrived with the same urgency",
              paragraphs: [
                "Users were turning off all notifications from overload — and with that they missed essential reminders, like taking medication or logging their mood.",
                "The app sent everything with the same urgency and frequency, with no distinction. The result: irritation, churn and, as a consequence, a health risk, since it involved medication and habit tracking.",
              ] },
            { type: "text", label: "Solution", heading: "Personalisation, hierarchy and less noise",
              paragraphs: [
                "Three main fronts: personalisation, importance hierarchy and visual reduction of overload.",
                "Personalisation: the user chooses how and when to receive, in three modes — by phone-usage peak times, by set time (up to 7 a day), or by the routine of linked apps (e.g. opening the weather app also brings the Viver Melhor reminder).",
                "Reminder as an importance screen: critical notifications (medication) work as a full-screen alarm — a dark, transparent, blurred overlay over any screen, with icon, description and three actions (dismiss, mark as done, snooze). It appears even with the app closed; it can't be ignored without a conscious action.",
                "Smart widget: fewer pop-ups and sounds, and a home-screen widget that changes colour according to pending items (update mood, log the diary, active reminder). The user sees what to do at a glance, without anxiety.",
              ] },
            { type: "text", label: "Process", heading: "From desk research to prototype",
              list: [
                "Desk research (mental health app usage, notification overload, smartphone usage frequency).",
                "Benchmarking (Calm, Happify, Cíngulo).",
                "Needs analysis.",
                "Solution definition.",
                "Wireframes.",
                "High-fidelity prototype.",
              ] },
            { type: "screens", heading: "Illustrative screens",
              items: [ { src: "/projects/viver/telas.png", width: 1600, height: 1170, caption: "The three notification modes and the smart widget." } ] },
            { type: "text", label: "Design decisions", heading: "Not every notification is the same",
              list: [
                "Not every notification is equal: separating the critical reminder (full screen, requires action) from the informative notification (silent widget) solved the problem of everything looking urgent.",
                "Control in the user's hands: instead of deciding for them when to notify, the app offers three frequency modes and lets them choose — respecting autonomy reduces irritation.",
                "Widget instead of pop-up: passive visual information rather than active interruption — the user checks when they want, not when the app decides.",
              ] },
            { type: "results", label: "Impact", heading: "Four months after launch",
              stats: [
                { value: "+22%", label: "of users updating diary, mood and logs regularly" },
                { value: "−19%", label: "in missed medication times and reminders" },
              ] },
          ],
        },
        {
          title: "A 100% self-service refuelling and payment solution",
          note: "(under NDA)",
          thumb: "/projects/self/thumb.png",
          summary:
            "An app for gas stations that removes the need for an attendant to refuel and pay — from the map to the payment, all on the phone.",
          meta: {
            role: { label: "Role", value: "Product Design & UX/UI Design" },
            year: { label: "Year", value: "2022" },
            focus: { label: "Focus", value: ["Research", "Autonomy-based flow design", "End-to-end product", "MVP", "UI Design"] },
          },
          sections: [
            { type: "text", label: "The challenge scenario", heading: "Stations running with reduced staff",
              paragraphs: [
                "Confidentiality note: a project developed for a foreign fuel-retail company. Due to an NDA clause in the contract, the brand cannot be identified nor the real delivered screens shown. The images are conceptual recreations.",
                "An app for gas stations that removes the dependency on a worker to refuel and pay, or an attendant to assign a pump and till. Real scenario: stations running with reduced staff, managers doubling as cashiers, and unsupervised pumps.",
              ] },
            { type: "links", label: "Full material", heading: "Want to see the whole project?",
              links: [ { label: "Gas station solution (Medium)", href: "https://medium.com/@natali.design97/solu%C3%A7%C3%A3o-para-postos-de-combust%C3%ADveis-2841dcfdf5d2" } ] },
            { type: "text", label: "Challenge", heading: "Refuel and pay with no chip and no attendant",
              paragraphs: [
                "Design a 100% self-service refuelling and payment flow — no chip and no attendant. Simple enough for any user profile, and giving the station manager control via an integrated (or easily integrable) dashboard.",
              ] },
            { type: "text", label: "Process", heading: "Two personas on opposite sides of the problem",
              paragraphs: ["Research with two personas on opposite sides: the franchise manager (management pains, staff rotation, fear of fraud) and the end user (little time, prefers to solve everything on the phone)."],
              listHeading: "Cross benchmarking",
              list: [
                "Gas station apps.",
                "Bike-sharing rental apps, looking for the same kind of end-to-end autonomy.",
                "Double Diamond guiding from research to MVP.",
              ] },
            { type: "image", src: "/projects/self/double-diamond.png", width: 1200, height: 535, caption: "Double Diamond — from research to MVP." },
            { type: "text", label: "Design decisions", heading: "Visible steps and psychological safety",
              list: [
                "A flow in visible steps (choose pump → fuel type → quantity → payment method → confirmation), so the user always knows where they are and can go back without getting lost.",
                "A neutral palette and rounded shapes, to convey psychological safety in a task involving money and fuel.",
                "Payment with multiple options (saved card, QR code), summarised on a confirmation screen before finishing.",
              ] },
            { type: "text", label: "Design impact", heading: "The MVP that solves the core pain",
              list: [
                "Geolocation and station identification.",
                "Pump and fuel selection.",
                "Integrated payment and real-time step status — the functional base that solves the core pain: refuelling without needing a third party.",
              ] },
            { type: "screens", heading: "Wireframes", columns: 4,
              items: [
                { src: "/projects/self/wireframes/01.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/02.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/03.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/04.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/05.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/06.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/07.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/08.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/09.png", width: 620, height: 1342 },
                { src: "/projects/self/wireframes/10.png", width: 620, height: 1342 },
              ] },
            { type: "screens", heading: "Flow",
              items: [ { src: "/projects/self/fluxo.png", width: 1800, height: 1824, caption: "Full refuelling flow." } ] },
            { type: "results", label: "Results", heading: "Over 3 months live",
              stats: [
                { value: "11/28", label: "stations reorganised the attendant rotation, with more spaced-out shifts and no new hires" },
                { value: "41%", label: "of sessions happened after 8pm — the app sustaining use even late at night" },
              ],
              paragraphs: ["Managers gained full visibility: from integrated cash flow to real-time fuel stock."] },
            { type: "screens", heading: "All screens", columns: 4,
              items: [
                { src: "/projects/self/telas/01.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/02.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/03.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/04.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/05.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/06.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/07.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/08.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/09.png", width: 620, height: 1342 },
                { src: "/projects/self/telas/10.png", width: 620, height: 1342 },
              ] },
          ],
        },
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
