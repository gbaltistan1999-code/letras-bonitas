import type { BlogPosts } from "@/types/content";

const posts: BlogPosts = {
  instagramBio: {
    metaTitle: "Como Colocar Letras Bonitas na Bio do Instagram | LetrasHub",
    metaDescription:
      "Passo a passo para colocar letras bonitas no nome e na bio do Instagram: onde funcionam, onde não funcionam e como manter o perfil fácil de ler.",
    title: "Como colocar letras bonitas na bio do Instagram",
    excerpt:
      "Onde dá para usar letras bonitas no Instagram, como colar passo a passo e quais erros evitar para o seu perfil continuar fácil de ler.",
    published: "2026-11-17",
    readMinutes: 4,
    intro:
      "As letras bonitas são um jeito rápido de dar personalidade ao seu perfil do Instagram sem baixar nenhum app. Elas funcionam porque não são uma fonte: são caracteres Unicode que você copia e cola como qualquer outro texto.",
    sections: [
      {
        heading: "Onde funcionam e onde não",
        blocks: [
          {
            type: "ul",
            items: [
              "Nome do perfil: sim. É o campo que aparece em negrito acima da sua bio.",
              "Bio: sim. É o lugar mais comum para usar estilos e símbolos.",
              "Legendas, comentários e stories: sim, mas nos stories depende da fonte escolhida.",
              "Nome de usuário (@): não. O Instagram só aceita letras, números, pontos e sublinhados.",
            ],
          },
        ],
      },
      {
        heading: "Passo a passo",
        blocks: [
          {
            type: "ol",
            items: [
              "Abra o [gerador de letras para Instagram](instagram) e digite seu nome ou frase.",
              "Toque em «Copiar» no estilo que mais gostar.",
              "No Instagram, vá ao seu perfil e toque em «Editar perfil».",
              "Toque e segure no campo de nome ou de bio e escolha «Colar».",
              "Salve as alterações e, se puder, confira o perfil em outro aparelho.",
            ],
          },
        ],
      },
      {
        heading: "Estilos que costumam ficar bons",
        blocks: [
          {
            type: "p",
            text: "Os estilos baseados em letras matemáticas, como a cursiva ou o negrito, aparecem bem na maioria dos celulares atuais. Alguns exemplos:",
          },
          { type: "examples", text: "Seu Nome", styles: ["boldScript", "sansBold", "smallCaps", "scriptMoon"] },
          {
            type: "p",
            text: "Para mais opções, veja as [letras cursivas](cursive) ou as [letras góticas](gothic).",
          },
        ],
      },
      {
        heading: "Dicas para o perfil continuar fácil de ler",
        blocks: [
          {
            type: "ul",
            items: [
              "Use o estilo em uma palavra ou no nome, não na bio inteira.",
              "Leitores de tela podem ler esses caracteres de forma estranha ou pulá-los, então deixe as informações importantes em texto normal.",
              "A busca do Instagram nem sempre encontra texto estilizado: mantenha seu nome real em algum lugar se quiser ser encontrado.",
              "Se aparecerem quadradinhos no lugar das letras, veja [por que isso acontece e como evitar](faq).",
            ],
          },
        ],
      },
    ],
    related: ["squareBoxes", "freeFireNick"],
  },

  squareBoxes: {
    metaTitle: "Por Que Algumas Letras Aparecem como Quadradinhos e Como Evitar | LetrasHub",
    metaDescription:
      "Se suas letras bonitas aparecem como quadradinhos ou pontos de interrogação, este artigo explica a causa e quais estilos falham menos em cada aparelho.",
    title: "Por que algumas letras aparecem como quadradinhos (e como evitar)",
    excerpt:
      "Quadradinhos vazios não significam que o texto quebrou: o aparelho não tem um desenho para aquele caractere. Explicamos por que acontece e quais estilos falham menos.",
    published: "2026-11-17",
    readMinutes: 3,
    intro:
      "Você copia um estilo que parecia perfeito e, ao colar, aparecem quadradinhos vazios (□) ou pontos de interrogação. Você não fez nada errado: o texto está certo, mas o aparelho que o mostra não sabe desenhá-lo.",
    sections: [
      {
        heading: "A causa: caracteres sem desenho",
        blocks: [
          {
            type: "p",
            text: "As letras bonitas são caracteres Unicode reais. O Unicode define mais de 150.000 caracteres, mas cada celular ou computador só traz fontes com desenhos para parte deles. Quando o desenho falta, o sistema mostra um quadradinho no lugar.",
          },
          {
            type: "note",
            text: "O texto não muda: se você copiá-lo em um aparelho que tem o desenho, ele aparece corretamente.",
          },
        ],
      },
      {
        heading: "Quais estilos falham menos",
        blocks: [
          {
            type: "p",
            text: "Os estilos mais antigos e populares têm melhor suporte. Estes costumam aparecer bem em celulares atuais:",
          },
          { type: "examples", text: "Olá", styles: ["bold", "italic", "script", "fraktur", "doubleStruck"] },
          {
            type: "p",
            text: "Estilos com símbolos pouco comuns, alfabetos raros ou várias marcas combinadas em cada letra são os que mais variam entre aparelhos.",
          },
        ],
      },
      {
        heading: "Como conferir antes de publicar",
        blocks: [
          {
            type: "ol",
            items: [
              "Cole o texto no app onde vai usá-lo e veja a pré-visualização.",
              "Se puder, confira em outro aparelho (por exemplo, um Android e um iPhone).",
              "Se aparecerem quadradinhos, teste um estilo mais simples ou use o estilo só em parte do texto.",
            ],
          },
        ],
      },
      {
        heading: "Outras causas possíveis",
        blocks: [
          {
            type: "ul",
            items: [
              "Alguns jogos e apps só aceitam letras básicas e removem ou bloqueiam símbolos.",
              "Celulares com sistemas muito antigos têm menos caracteres disponíveis.",
              "Certos campos limitam o número de caracteres, e um único símbolo pode contar como dois.",
            ],
          },
          { type: "p", text: "Veja mais detalhes nas [perguntas frequentes](faq)." },
        ],
      },
    ],
    related: ["instagramBio", "freeFireNick"],
  },

  freeFireNick: {
    metaTitle: "Ideias de Nick para Free Fire com Símbolos e Letras Bonitas | LetrasHub",
    metaDescription:
      "Ideias e dicas para criar um nick de Free Fire com símbolos e letras bonitas que fique bom no jogo, com exemplos prontos para copiar.",
    title: "Ideias de nick para Free Fire com símbolos",
    excerpt:
      "Como criar um nick estiloso para Free Fire: exemplos prontos para copiar, quais símbolos combinam bem e o que conferir antes de trocar o nome.",
    published: "2026-11-17",
    readMinutes: 4,
    intro:
      "Um bom nick é reconhecido numa partida num piscar de olhos. Com letras bonitas e alguns símbolos, você deixa o seu em destaque sem perder a leitura.",
    sections: [
      {
        heading: "Ideias prontas para copiar",
        blocks: [
          {
            type: "p",
            text: "Estes exemplos são gerados pelo mesmo motor da ferramenta. Troque «Shadow» pelo seu nome no [gerador para Free Fire](freefire):",
          },
          { type: "examples", text: "Shadow", styles: ["gameSwords", "gameCrown", "gameProX", "gameRoyal", "gothicSkull", "javanese"] },
        ],
      },
      {
        heading: "Como combinar símbolos sem exagerar",
        blocks: [
          {
            type: "ul",
            items: [
              "Escolha um único estilo de letra e, no máximo, um símbolo de cada lado.",
              "Símbolos de coroa, espadas ou caveira combinam bem com nicks de jogo.",
              "Evite estilos com muitas marcas acima e abaixo: no jogo podem ficar borrados ou cortados.",
              "Leia o nick em tamanho pequeno: se for difícil de entender, simplifique.",
            ],
          },
        ],
      },
      {
        heading: "Antes de trocar o nome",
        blocks: [
          {
            type: "ol",
            items: [
              "Confira o limite de caracteres do jogo: muitos símbolos ocupam mais de um espaço.",
              "Cole o nick na tela de troca de nome e veja a pré-visualização antes de confirmar.",
              "Lembre que trocar o nome pode ter um custo dentro do jogo, então teste bem antes.",
              "Se o jogo recusar algum símbolo, tire-o e teste outro mais comum.",
            ],
          },
        ],
      },
      {
        heading: "Mais ideias",
        blocks: [
          {
            type: "p",
            text: "Veja mais estilos no [nick bonito](nick) e nas [letras góticas](gothic), que são muito populares em nomes de jogo.",
          },
        ],
      },
    ],
    related: ["squareBoxes", "instagramBio"],
  },
};

export default posts;
