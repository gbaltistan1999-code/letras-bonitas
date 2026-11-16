import type { HomeContent } from "@/types/content";

const home: HomeContent = {
  metaTitle: "Letras Bonitas e Diferentes para Copiar e Colar | LetrasHub",
  metaDescription:
    "Gerador de letras bonitas: digite seu texto e veja letras diferentes na hora — cursivas, góticas, pequenas, riscadas e com símbolos. Copie com um toque e cole no Free Fire, Instagram ou WhatsApp.",
  h1: "Letras bonitas e diferentes para copiar e colar",
  intro:
    "Digite seu nome, nick ou frase e veja mais de 80 estilos de letras diferentes na hora. Escolha o seu favorito e copie com um toque.",
  sample: "Letras Bonitas",
  sections: [
    {
      heading: "O que este gerador de letras faz",
      blocks: [
        {
          type: "p",
          text: "O LetrasHub transforma o texto comum que você digita em letras estilizadas: cursivas elegantes, letras góticas, letrinhas pequenas, texto riscado, letras em círculos e combinações com símbolos para nick. Não precisa instalar nada nem criar conta: o resultado é texto, que você cola onde escreveria normalmente — bio, nome do perfil, nick do jogo ou mensagem.",
        },
        {
          type: "p",
          text: "A conversão acontece dentro do seu navegador. O que você digita não vai para nenhum servidor, então o gerador continua funcionando mesmo se a internet cair depois que a página carregar.",
        },
      ],
    },
    {
      heading: "Como usar as letras diferentes em 4 passos",
      blocks: [
        {
          type: "ol",
          items: [
            "Digite seu texto na caixa lá em cima. Os resultados mudam enquanto você digita.",
            "Use os filtros (Cursivas, Góticas, Com símbolos…) para achar o estilo mais rápido.",
            "Toque em «Copiar» no estilo escolhido. Vai aparecer um aviso de «Copiado!».",
            "Abra o app ou jogo, toque e segure no campo de texto e escolha «Colar». Antes de salvar, confira se todas as letras aparecem certinho.",
          ],
        },
      ],
    },
    {
      heading: "Onde essas letras funcionam",
      blocks: [
        {
          type: "p",
          text: "Como são caracteres de texto, e não imagens, dá para colar em quase qualquer campo que aceite texto. Os usos mais comuns são:",
        },
        {
          type: "ul",
          items: [
            "Bio e nome do perfil: veja o guia de [letras para Instagram](instagram) e de [TikTok](tiktok).",
            "Nick de jogo: dicas gerais em [nick bonito](nick) e dicas específicas de [letras para Free Fire](freefire).",
            "Mensagens, recado e nome de grupo no [WhatsApp](whatsapp).",
            "Nome de exibição e apelido de servidor no [Discord](discord).",
            "Posts, comentários, apresentações e qualquer lugar onde você queira destacar uma palavra.",
          ],
        },
      ],
    },
    {
      heading: "Como funciona: não são fontes, são caracteres Unicode",
      blocks: [
        {
          type: "p",
          text: "Uma fonte muda o desenho das letras só dentro de um programa; se você copia o texto para outro app, o estilo some. As letras deste gerador funcionam de outro jeito: cada letra é trocada por um caractere diferente do padrão Unicode, o sistema que todos os aparelhos modernos usam para representar texto.",
        },
        {
          type: "p",
          text: "O Unicode tem mais de 150 mil caracteres. Entre eles há alfabetos completos criados para fórmulas matemáticas (negrito, cursivo, gótico, traço duplo), letrinhas fonéticas, letras dentro de círculos e quadrados e símbolos decorativos de várias escritas do mundo. Por exemplo, «𝓐» não é um «A» com outra fonte: é o caractere U+1D4D0, «letra maiúscula A cursiva negrito matemática». As tabelas oficiais estão em [unicode.org](https://www.unicode.org/charts/).",
        },
        {
          type: "note",
          text: "Acentos e cedilha são mantidos como marcas combinadas (por exemplo, 𝐜̧ e 𝐚̃). Se um estilo não tiver equivalente para alguma letra, ela fica como está, em vez de virar um símbolo quebrado.",
        },
      ],
    },
    {
      heading: "Compatibilidade: por que às vezes aparecem quadradinhos",
      blocks: [
        {
          type: "p",
          text: "Um caractere existir no Unicode não garante que o seu celular tenha um desenho para ele. Se não tiver, aparece um quadradinho vazio (□) ou um ponto de interrogação. Negrito, cursiva e gótica costumam funcionar bem nos celulares atuais; estilos com símbolos raros ou com linhas combinadas variam mais.",
        },
        {
          type: "ul",
          items: [
            "Alguns jogos e apps só aceitam letras e números comuns, ou limitam a quantidade de caracteres. Teste sempre antes de salvar um nome que não dá para trocar facilmente.",
            "O nome de usuário (@) de muitas redes só aceita letras comuns, números, pontos ou underline; as letras bonitas costumam funcionar no nome de exibição e na bio.",
            "O que aparece certo para você pode aparecer diferente no celular de outra pessoa, se o sistema dela for mais antigo.",
            "A busca de algumas plataformas não encontra texto escrito com esses caracteres.",
          ],
        },
      ],
    },
    {
      heading: "Acessibilidade: use com moderação",
      blocks: [
        {
          type: "p",
          text: "Os leitores de tela usados por pessoas cegas ou com baixa visão nem sempre entendem esses caracteres como letras normais: alguns leem um por um com nomes técnicos, outros simplesmente pulam. Por isso, recomendamos usar letras bonitas em detalhes, como o nick ou uma palavra de destaque, e deixar em letras normais as informações importantes, como contato, preços ou instruções.",
        },
      ],
    },
  ],
  stylesHeading: "Tipos de letras disponíveis",
  stylesIntro: "Cada página traz o gerador já filtrado no estilo, exemplos e dicas específicas.",
  platformsHeading: "Letras para redes sociais e jogos",
  platformsIntro:
    "Letras prontas para o seu perfil: cada página explica quais estilos o app aceita, onde colar e quais são os limites.",
  teasers: {
    cursive: "Letras manuscritas e elegantes para bio e nome.",
    gothic: "Visual medieval, perfeito para nick com atitude.",
    small: "Letrinhas pequenas, versalete e sobrescrito.",
    strike: "Texto riscado, sublinhado e com linhas.",
    nick: "Ideias e dicas para um nick bonito que funcione nos jogos.",
    freefire: "Nicks com símbolos e como trocar o nome no jogo.",
    instagram: "Nome e bio estilosos, sem mexer no seu @.",
    tiktok: "Destaque seu nome, bio e comentários.",
    whatsapp: "Estilos Unicode e a formatação do próprio WhatsApp.",
    discord: "Nome de exibição, apelidos e markdown.",
  },
  faqs: [
    {
      q: "As letras bonitas são grátis?",
      a: "Sim. O gerador é gratuito, não pede cadastro e não tem limite de uso.",
    },
    {
      q: "Por que algumas letras aparecem como quadradinhos?",
      a: "Porque o seu aparelho, ou o de quem está vendo, não tem desenho para aquele caractere Unicode. Teste outro estilo: negrito, cursiva e gótica são os mais compatíveis.",
    },
    {
      q: "Vocês guardam o que eu digito?",
      a: "Não. O texto é transformado no seu navegador e não é enviado nem salvo em lugar nenhum. Dá para comprovar usando o gerador offline depois que a página carregar.",
    },
    {
      q: "Posso usar essas letras no meu nome de usuário (@)?",
      a: "Normalmente não. Instagram e TikTok, por exemplo, só aceitam letras comuns, números, pontos e underline no @. No nome de exibição e na bio costuma funcionar.",
    },
    {
      q: "Funciona com acentos e ç?",
      a: "Sim. Mantemos acentos, til e cedilha como marcas combinadas. Nos poucos estilos que não têm alguma letra, a letra original é mantida.",
    },
    {
      q: "Dá para colar no Word ou no Google Docs?",
      a: "Sim, porque é texto. Só lembre que o corretor ortográfico não vai reconhecer as palavras e que algumas fontes do documento podem não ter todos os símbolos.",
    },
  ],
  conclusion: {
    heading: "Escolha seu estilo e teste",
    blocks: [
      {
        type: "p",
        text: "O melhor jeito é experimentar: digite seu nome, teste vários estilos e cole o resultado numa nota ou numa conversa com você mesmo antes de usar no perfil. Se você procura algo específico, comece pelas [letras cursivas](cursive), pelas [letras góticas](gothic) ou pelas ideias de [nick bonito](nick). Ficou com dúvida? Veja as [perguntas frequentes](faq).",
      },
    ],
  },
};

export default home;
