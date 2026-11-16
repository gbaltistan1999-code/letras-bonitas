import type { InfoPages } from "@/types/content";

const info: InfoPages = {
  about: {
    metaTitle: "Sobre o LetrasHub: Quem Somos e Como Funciona | LetrasHub",
    metaDescription:
      "Conheça o LetrasHub, um gerador de letras bonitas gratuito que funciona no seu navegador. O que fazemos, como funciona e nossos princípios.",
    h1: "Sobre o LetrasHub",
    label: "Sobre nós",
    intro:
      "O LetrasHub é uma ferramenta gratuita para transformar texto comum em letras bonitas e diferentes, prontas para copiar e colar em redes sociais, jogos e mensagens.",
    sections: [
      {
        heading: "O que fazemos",
        blocks: [
          {
            type: "p",
            text: "Reunimos num só lugar mais de 80 estilos de texto baseados em caracteres Unicode, explicados em português, espanhol e inglês. Os principais estilos e plataformas têm página própria com exemplos, instruções e limitações reais, para você saber o que esperar antes de colar no seu perfil.",
          },
        ],
      },
      {
        heading: "Como funciona por dentro",
        blocks: [
          {
            type: "p",
            text: "O gerador usa tabelas de correspondência entre letras comuns e caracteres Unicode, montadas a partir das tabelas oficiais do Unicode Consortium. Tudo acontece no seu navegador: não existe servidor recebendo seu texto, não há contas e nenhuma inteligência artificial gera nada. Quando um estilo não tem equivalente para alguma letra, ela fica como está, em vez de virar um símbolo quebrado.",
          },
        ],
      },
      {
        heading: "Nossos princípios",
        blocks: [
          {
            type: "ul",
            items: [
              "Honestidade: explicamos o que funciona, o que não funciona e por quê. Não prometemos que todo estilo apareça em todo app.",
              "Privacidade: não enviamos nem guardamos o que você digita, e não usamos ferramentas de análise nem publicidade.",
              "Acessibilidade: lembramos que esses caracteres podem ser difíceis para leitores de tela e recomendamos usar com moderação.",
              "Independência: não temos ligação com nenhuma das plataformas citadas.",
            ],
          },
        ],
      },
      {
        heading: "Quem está por trás",
        blocks: [
          { type: "owner" },
          { type: "p", text: "Mais detalhes na página do [autor](author)." },
        ],
      },
      {
        heading: "Contato e correções",
        blocks: [
          {
            type: "p",
            text: "Se encontrar um erro numa explicação, um estilo que não funciona como descrevemos ou quiser sugerir algo, fale com a gente pela página de [contato](contact). Revisamos o conteúdo quando as plataformas ou o padrão Unicode mudam.",
          },
        ],
      },
    ],
  },

  author: {
    metaTitle: "Autor do LetrasHub: Quem Escreve e Revisa o Conteúdo | LetrasHub",
    metaDescription:
      "Conheça a pessoa por trás do LetrasHub: quem cria os estilos de letras, escreve os guias e confere se funcionam em cada plataforma.",
    h1: "Autor",
    label: "Autor",
    intro:
      "Esta página apresenta a pessoa responsável pelo LetrasHub: quem cria e testa os estilos de letras e escreve os guias do site.",
    sections: [
      {
        heading: "Sobre o autor",
        blocks: [{ type: "owner" }],
      },
      {
        heading: "O que faz no LetrasHub",
        blocks: [
          {
            type: "ul",
            items: [
              "Cria e mantém as tabelas de caracteres Unicode usadas pelo [gerador](home).",
              "Escreve os guias de cada estilo e plataforma, como as [letras cursivas](cursive) e as [letras para Free Fire](freefire).",
              "Testa os estilos nos apps que citamos e anota o que funciona e o que não funciona.",
              "Responde às correções e sugestões enviadas pela página de [contato](contact).",
            ],
          },
        ],
      },
      {
        heading: "Como o conteúdo é revisado",
        blocks: [
          {
            type: "p",
            text: "As explicações se baseiam nas tabelas oficiais do Unicode Consortium e em testes reais em cada plataforma. Quando um app muda o que permite em nomes ou bios, ou quando sai uma nova versão do Unicode, o conteúdo afetado é revisado e atualizado.",
          },
        ],
      },
      {
        heading: "Falar com o autor",
        blocks: [
          {
            type: "p",
            text: "Se encontrar um erro ou quiser sugerir um estilo novo, escreva pela página de [contato](contact). Você também pode ler mais sobre o projeto em [Sobre nós](about).",
          },
        ],
      },
    ],
  },

  contact: {
    metaTitle: "Contato | LetrasHub",
    metaDescription:
      "Fale com o LetrasHub para sugestões, correções ou dúvidas sobre privacidade. Veja como nos escrever por e-mail.",
    h1: "Contato",
    label: "Contato",
    intro: "Tem uma sugestão, achou um erro ou quer tirar uma dúvida sobre privacidade? Escreva para a gente por e-mail.",
    sections: [
      {
        heading: "Antes de escrever",
        blocks: [
          {
            type: "ul",
            items: [
              "Se um estilo aparece com quadradinhos, veja primeiro a parte de compatibilidade da [página inicial](home) e as [perguntas frequentes](faq).",
              "Não conseguimos ajudar com contas de jogos ou redes sociais (recuperar conta, troca de nome bloqueada etc.): para isso, fale com o suporte de cada plataforma.",
              "Não inclua senhas nem dados sensíveis na mensagem.",
            ],
          },
        ],
      },
    ],
  },

  faq: {
    metaTitle: "Perguntas Frequentes sobre Letras Bonitas | LetrasHub",
    metaDescription:
      "Respostas claras sobre letras bonitas e diferentes: como copiar, por que aparecem quadradinhos, onde funcionam, privacidade e acessibilidade.",
    h1: "Perguntas frequentes",
    label: "Perguntas frequentes",
    intro: "Juntamos aqui as dúvidas mais comuns sobre o gerador e sobre como usar letras bonitas em apps e jogos.",
    sections: [],
    groups: [
      {
        heading: "Usando o gerador",
        faqs: [
          {
            q: "Como copio as letras no celular?",
            a: "Toque no botão «Copiar» do estilo. Se o navegador não deixar copiar automaticamente, o texto fica selecionado para você copiar tocando e segurando.",
          },
          {
            q: "Tem limite de texto?",
            a: "Sim, 200 caracteres, para a página continuar rápida. Para nick, bio e frases é mais que suficiente.",
          },
          {
            q: "Preciso baixar alguma fonte ou app?",
            a: "Não. Os resultados são caracteres Unicode que o seu celular já sabe mostrar na maioria dos casos.",
          },
          {
            q: "Dá para usar o gerador sem internet?",
            a: "Depois que a página carrega, a conversão funciona offline porque é feita no seu navegador.",
          },
        ],
      },
      {
        heading: "Compatibilidade",
        faqs: [
          {
            q: "Por que vejo quadradinhos ou pontos de interrogação?",
            a: "Seu aparelho não tem desenho para aquele caractere. Teste outro estilo ou atualize o sistema; negrito, cursiva e gótica são os mais compatíveis.",
          },
          {
            q: "Por que o jogo não aceita meu nick?",
            a: "Cada jogo decide quais caracteres aceita e quantos. Teste um estilo com menos símbolos ou tire os enfeites. Mais dicas em [nick bonito](nick).",
          },
          {
            q: "Por que não posso usar essas letras no meu @?",
            a: "O nome de usuário de muitas redes só aceita letras comuns, números e alguns sinais. Use o estilo no nome de exibição ou na bio.",
          },
          {
            q: "As letras aparecem iguais no iPhone e no Android?",
            a: "Não exatamente: cada sistema usa suas próprias fontes, então o formato pode variar um pouco ou faltar algum símbolo.",
          },
        ],
      },
      {
        heading: "Privacidade e segurança",
        faqs: [
          {
            q: "Vocês guardam o que eu digito?",
            a: "Não. O texto não sai do seu navegador e não é salvo. Veja a [política de privacidade](privacy) para mais detalhes.",
          },
          {
            q: "Por que tem aviso de cookies se vocês não usam rastreamento?",
            a: "Por transparência e para lembrar a sua escolha. Usamos só armazenamento necessário; os detalhes estão na [política de cookies](cookies).",
          },
        ],
      },
      {
        heading: "Acessibilidade",
        faqs: [
          {
            q: "Letras bonitas são acessíveis?",
            a: "Não totalmente: leitores de tela podem ler de um jeito estranho ou pular. Use como enfeite e deixe as informações importantes em letras normais.",
          },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: "Política de Privacidade | LetrasHub",
    metaDescription:
      "Como o LetrasHub trata seus dados: o texto é processado no navegador, guardamos só sua escolha de cookies e não usamos análise nem publicidade.",
    h1: "Política de privacidade",
    label: "Política de privacidade",
    showUpdated: true,
    intro:
      "Esta política explica quais dados o LetrasHub (letrashub.com) trata, para quê e quais são seus direitos, inclusive pela Lei Geral de Proteção de Dados (LGPD). Ela foi escrita de acordo com o funcionamento real do site.",
    sections: [
      {
        heading: "1. Controlador",
        blocks: [
          {
            type: "p",
            text: "O controlador é a pessoa responsável pelo LetrasHub indicada na página [Sobre nós](about). O contato é feito pelo e-mail publicado na página de [contato](contact).",
          },
        ],
      },
      {
        heading: "2. O texto que você digita no gerador",
        blocks: [
          {
            type: "p",
            text: "O texto que você digita é transformado por um código que roda no seu navegador. Ele não é enviado para nossos servidores nem para terceiros, não é registrado e não é salvo no seu aparelho: ao fechar ou recarregar a página, ele some. Quando você toca em «Copiar», o texto vai para a área de transferência do seu aparelho, que você controla.",
          },
        ],
      },
      {
        heading: "3. Armazenamento no navegador",
        blocks: [
          {
            type: "p",
            text: "Usamos o armazenamento local (localStorage) do navegador para duas coisas: lembrar sua escolha no aviso de cookies (categorias aceitas e data) e, só se você tocar no coração ♡ de algum estilo, guardar sua lista de estilos favoritos (apenas os nomes dos estilos, nunca o texto digitado). Esses dados ficam no seu aparelho, não chegam até nós e podem ser apagados a qualquer momento nas configurações do navegador ou pelo botão «Retirar consentimento» em Configurar cookies.",
          },
          {
            type: "p",
            text: "Não usamos cookies de análise, de publicidade ou de redes sociais, e não carregamos scripts de terceiros para rastreamento. Mais detalhes na [política de cookies](cookies).",
          },
        ],
      },
      {
        heading: "4. Registros técnicos da hospedagem",
        blocks: [
          {
            type: "p",
            text: "Como em qualquer site, o servidor que entrega as páginas pode registrar dados técnicos de cada acesso (endereço IP, data e hora, página acessada, navegador) para segurança e funcionamento. Esses registros são geridos pelo provedor de hospedagem conforme a política dele.",
          },
          {
            type: "note",
            text: "PENDENTE: o responsável deve indicar aqui o provedor de hospedagem, o link para a política de privacidade dele e o prazo de guarda dos registros.",
          },
        ],
      },
      {
        heading: "5. Se você nos escrever por e-mail",
        blocks: [
          {
            type: "p",
            text: "Se você mandar um e-mail, vamos receber seu endereço e o que você escrever. Usaremos isso só para responder e guardaremos pelo tempo necessário para atender ao pedido, salvo obrigação legal. O formulário de contato não envia dados pelo site: ele só abre o seu aplicativo de e-mail.",
          },
        ],
      },
      {
        heading: "6. Bases legais",
        blocks: [
          {
            type: "p",
            text: "O armazenamento da sua escolha de cookies é necessário para prestar o serviço que você usa (legítimo interesse e armazenamento estritamente necessário). A resposta a e-mails se baseia no seu pedido. Se no futuro forem adicionadas ferramentas de análise ou publicidade, elas só serão ativadas com o seu consentimento prévio.",
          },
        ],
      },
      {
        heading: "7. Seus direitos",
        blocks: [
          {
            type: "p",
            text: "Pela LGPD (art. 18), você pode pedir confirmação de tratamento, acesso, correção, anonimização, bloqueio ou eliminação, portabilidade, informação sobre compartilhamento e revogação do consentimento. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD). Quem está na União Europeia tem direitos equivalentes pelo RGPD.",
          },
          {
            type: "p",
            text: "Como não coletamos o texto digitado nem dados de navegação, na prática os únicos dados que poderíamos ter são os de e-mails que você nos mandar. Para exercer seus direitos, use a página de [contato](contact).",
          },
        ],
      },
      {
        heading: "8. Crianças e adolescentes",
        blocks: [
          {
            type: "p",
            text: "O site não pede dados pessoais para usar o gerador. Se você for menor de idade e quiser nos escrever, faça isso com o conhecimento dos seus pais ou responsáveis.",
          },
        ],
      },
      {
        heading: "9. Mudanças",
        blocks: [
          {
            type: "p",
            text: "Se o funcionamento do site mudar (por exemplo, se algum serviço externo for adicionado), vamos atualizar esta política e a data no topo antes de aplicar a mudança.",
          },
        ],
      },
    ],
  },

  terms: {
    metaTitle: "Termos e Condições de Uso | LetrasHub",
    metaDescription:
      "Condições de uso do LetrasHub: uso aceitável do gerador de letras, propriedade intelectual, compatibilidade e limitação de responsabilidade.",
    h1: "Termos e condições",
    label: "Termos e condições",
    showUpdated: true,
    intro: "Ao usar o LetrasHub, você aceita estas condições. Se não concordar, por favor não use o site.",
    sections: [
      {
        heading: "1. O serviço",
        blocks: [
          {
            type: "p",
            text: "O LetrasHub oferece gratuitamente uma ferramenta que transforma texto em caracteres Unicode com diferentes estilos, além de conteúdo informativo sobre o uso. Não exige cadastro.",
          },
        ],
      },
      {
        heading: "2. Uso aceitável",
        blocks: [
          {
            type: "p",
            text: "Você pode usar os resultados livremente para fins pessoais e comerciais legítimos. Não é permitido usar o site ou o texto gerado para:",
          },
          {
            type: "ul",
            items: [
              "Se passar por outras pessoas, marcas, administradores ou contas oficiais.",
              "Enviar spam, enganar pessoas (por exemplo, com nomes ou links que imitam outros) ou burlar filtros de moderação.",
              "Assediar, ameaçar ou publicar conteúdo ilegal.",
              "Sobrecarregar, atacar ou tentar interferir no funcionamento do site.",
            ],
          },
        ],
      },
      {
        heading: "3. Propriedade intelectual",
        blocks: [
          {
            type: "p",
            text: "Os caracteres Unicode não pertencem ao LetrasHub e o texto que você cria é seu. Os textos explicativos, o design e o código do site pertencem ao seu responsável; não é permitido copiá-los de forma substancial sem autorização. Os nomes das plataformas citadas são marcas de seus titulares e são usados apenas de forma descritiva.",
          },
        ],
      },
      {
        heading: "4. Compatibilidade e resultados",
        blocks: [
          {
            type: "p",
            text: "A aparência do texto depende do aparelho, do sistema, do app ou do jogo onde você colar. Algumas plataformas podem recusar caracteres, mostrar quadradinhos ou alterar o texto. Você é responsável por conferir o resultado antes de usar, especialmente em trocas de nome pagas ou que não podem ser desfeitas.",
          },
        ],
      },
      {
        heading: "5. Disponibilidade",
        blocks: [
          {
            type: "p",
            text: "Tentamos manter o site disponível e funcionando bem, mas não garantimos ausência de interrupções ou erros. Podemos mudar, adicionar ou remover estilos e conteúdos a qualquer momento.",
          },
        ],
      },
      {
        heading: "6. Responsabilidade",
        blocks: [
          {
            type: "p",
            text: "O site é oferecido «como está». Na medida permitida pela lei, o LetrasHub não se responsabiliza por danos decorrentes do uso do texto gerado, da recusa por plataformas de terceiros ou de decisões dessas plataformas sobre sua conta. Nada nestes termos limita direitos garantidos a você pelo Código de Defesa do Consumidor ou por outra lei aplicável.",
          },
        ],
      },
      {
        heading: "7. Links externos",
        blocks: [
          {
            type: "p",
            text: "Algumas páginas têm links para sites externos, como unicode.org. Não controlamos o conteúdo nem as políticas deles.",
          },
        ],
      },
      {
        heading: "8. Lei aplicável e mudanças",
        blocks: [
          {
            type: "note",
            text: "PENDENTE DE REVISÃO JURÍDICA: o responsável deve indicar a lei aplicável e o foro de acordo com o país de residência.",
          },
          {
            type: "p",
            text: "Podemos atualizar estes termos. A data no topo indica a versão mais recente. Em caso de dúvida, use a página de [contato](contact).",
          },
        ],
      },
    ],
  },

  cookies: {
    metaTitle: "Política de Cookies e Armazenamento | LetrasHub",
    metaDescription:
      "Qual armazenamento o LetrasHub usa no seu navegador: só o necessário para lembrar sua escolha de cookies. Sem análise e sem publicidade.",
    h1: "Política de cookies",
    label: "Política de cookies",
    showUpdated: true,
    intro:
      "Cookies e armazenamento local são pequenos dados que um site guarda no seu navegador. Aqui explicamos exatamente quais o LetrasHub usa.",
    sections: [
      {
        heading: "O que usamos",
        blocks: [
          {
            type: "ul",
            items: [
              "Nome: letrashub-consent. Tipo: armazenamento local (localStorage), não é um cookie HTTP. Categoria: necessário. Finalidade: lembrar sua escolha no aviso de cookies e a data. Duração: até você apagar ou retirar o consentimento.",
              "Nome: letrashub-favorites. Tipo: armazenamento local. Categoria: funcional, solicitado por você. Finalidade: lembrar os estilos que você marca com ♡ (só os nomes). Só é criado quando você marca um favorito e é apagado ao remover todos ou apagar os dados do site.",
            ],
          },
          {
            type: "p",
            text: "Não usamos cookies HTTP próprios nem cookies de análise, publicidade ou redes sociais. O texto que você digita no gerador não é salvo em nenhum armazenamento.",
          },
        ],
      },
      {
        heading: "Categorias do aviso",
        blocks: [
          {
            type: "ul",
            items: [
              "Necessários: sempre ativos, porque sem eles não conseguiríamos lembrar sua escolha.",
              "Análise: desativado por padrão. Hoje não usamos nenhuma ferramenta de análise.",
              "Marketing: desativado por padrão. Hoje não exibimos publicidade.",
            ],
          },
          {
            type: "p",
            text: "Se algum serviço dessas categorias for adicionado no futuro, esta política será atualizada e o serviço só será carregado depois do seu consentimento.",
          },
        ],
      },
      {
        heading: "Como mudar ou retirar sua escolha",
        blocks: [
          {
            type: "p",
            text: "Toque em «Configurar cookies» no rodapé de qualquer página para rever as categorias, salvar outra escolha ou retirar o consentimento. Você também pode apagar o armazenamento do site nas configurações do navegador; nesse caso, o aviso aparece de novo.",
          },
        ],
      },
      {
        heading: "Mais informações",
        blocks: [{ type: "p", text: "Veja a [política de privacidade](privacy) para saber como tratamos os dados em geral." }],
      },
    ],
  },

  disclaimer: {
    metaTitle: "Aviso Legal e Isenção de Responsabilidade | LetrasHub",
    metaDescription:
      "O LetrasHub gera caracteres Unicode para fins informativos e de entretenimento. Não tem ligação com Free Fire, Instagram, WhatsApp, TikTok ou Discord.",
    h1: "Aviso legal",
    label: "Aviso legal",
    showUpdated: true,
    sections: [
      {
        heading: "Natureza do conteúdo",
        blocks: [
          {
            type: "p",
            text: "O LetrasHub gera caracteres Unicode para fins informativos e de entretenimento. Os resultados não são fontes tipográficas e a aparência depende do aparelho, do sistema operacional, do app ou do jogo em que forem exibidos.",
          },
        ],
      },
      {
        heading: "Sem afiliação",
        blocks: [
          {
            type: "p",
            text: "O LetrasHub é um site independente. Não é afiliado, patrocinado nem endossado pela Garena (Free Fire), Meta (Instagram, WhatsApp), ByteDance (TikTok), Discord Inc. ou qualquer outra empresa ou plataforma citada. Os nomes são marcas de seus titulares e aparecem só para descrever onde o texto pode ser usado. Não usamos os logotipos delas.",
          },
        ],
      },
      {
        heading: "Precisão das informações",
        blocks: [
          {
            type: "p",
            text: "As instruções sobre cada plataforma se baseiam no funcionamento geral no momento em que foram escritas. As plataformas mudam menus, regras e limites sem aviso; se algo não bater mais, vale o que a própria plataforma mostra. Agradecemos se você nos avisar pela página de [contato](contact).",
          },
        ],
      },
      {
        heading: "Uso por sua conta",
        blocks: [
          {
            type: "p",
            text: "Antes de usar um nome com caracteres especiais, principalmente se a troca for paga, confira se ele aparece bem e se a plataforma aceita. Veja também os [termos e condições](terms).",
          },
        ],
      },
    ],
  },
};

export default info;
