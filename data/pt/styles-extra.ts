import type { StylePageContent } from "@/types/content";
import type { ExtraStylePageKey } from "@/lib/routes";

/** Pages added in the second keyword batch (merged into ./styles.ts). */
const pages: Record<ExtraStylePageKey, StylePageContent> = {
  bold: {
    metaTitle: "Letras em Negrito para Copiar e Colar 𝐍𝐞𝐠𝐫𝐢𝐭𝐨 | LetrasHub",
    metaDescription:
      "Transforme seu texto em letras em negrito (𝐧𝐞𝐠𝐫𝐢𝐭𝐨, 𝗻𝗲𝗴𝗿𝗶𝘁𝗼 e 𝙣𝙚𝙜𝙧𝙞𝙩𝙤) e cole onde não existe botão de negrito: bio, nome, LinkedIn e comentários.",
    h1: "Letras em negrito para copiar e colar",
    label: "Letras em negrito",
    intro:
      "Destaque um nome, um título ou uma palavra-chave com letras em negrito que continuam negritas quando você copia, até em apps sem botão de formatação.",
    sample: "Promoção especial",
    featured: ["bold", "sansBold", "boldItalic", "sansBoldItalic", "boldSerifFrame", "boldAesthetic", "boldMinimal", "boldSparkle"],
    sections: [
      {
        heading: "Negrito com serifa, sem serifa e itálico",
        blocks: [
          {
            type: "p",
            text: "O Unicode tem alfabetos em negrito criados para notação matemática: negrito com serifa (𝐀𝐛𝐜), negrito sem serifa (𝗔𝗯𝗰) e as versões inclinadas (𝑨𝒃𝒄, 𝘼𝙗𝙘). O com serifa lembra jornal; o sem serifa é mais moderno e mais fácil de ler no celular. Os dois têm números em negrito (𝟏𝟐𝟑).",
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Promoção 2 por 1", styles: ["bold", "sansBold", "boldItalic", "sansBoldItalic"] }],
      },
      {
        heading: "Onde o negrito Unicode ajuda",
        blocks: [
          {
            type: "ul",
            items: [
              "Bio e nome do perfil no [Instagram](instagram) e no [TikTok](tiktok), que não têm formatação.",
              "Posts do LinkedIn, onde o texto não tem botão de negrito.",
              "Comentários, avaliações e descrições de produtos, para destacar uma palavra.",
              "Títulos dentro da bio: uma linha em negrito e o resto normal.",
            ],
          },
          {
            type: "note",
            text: "No WhatsApp e no Discord, prefira a formatação deles (*texto* no WhatsApp, **texto** no Discord): é mais acessível e funciona na busca do chat. Veja os guias de [WhatsApp](whatsapp) e [Discord](discord).",
          },
        ],
      },
      {
        heading: "Como copiar e colar o negrito",
        blocks: [
          {
            type: "ol",
            items: [
              "Digite seu texto no gerador.",
              "Escolha negrito com ou sem serifa e toque em «Copiar».",
              "Cole no campo de destino e confira antes de publicar.",
            ],
          },
        ],
      },
      {
        heading: "Use com moderação",
        blocks: [
          {
            type: "p",
            text: "Um parágrafo inteiro em negrito Unicode cansa a leitura, e leitores de tela podem ler letra por letra. Além disso, a busca de muitas plataformas não liga «𝐩𝐫𝐨𝐦𝐨𝐜̧𝐚̃𝐨» a «promoção». O ideal é destacar só duas ou três palavras. Para um toque mais suave, teste as [letras em itálico](italic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Por que o negrito não aparece igual em todos os celulares?",
        a: "Cada sistema desenha esses caracteres com a própria fonte. O negrito é um dos estilos mais compatíveis, mas a espessura pode variar um pouco.",
      },
      {
        q: "O negrito funciona com acentos e ç?",
        a: "Sim: o acento ou a cedilha entram como marca combinada sobre a letra em negrito. Em algumas fontes ficam um pouco deslocados.",
      },
      {
        q: "Posso colocar negrito no meu @ do Instagram?",
        a: "Não. O nome de usuário só aceita letras comuns, números, pontos e underline. Use o negrito no nome de exibição ou na bio.",
      },
    ],
    related: ["italic", "cursive", "instagram", "whatsapp"],
  },

  italic: {
    metaTitle: "Letras em Itálico para Copiar e Colar 𝐼𝑡𝑎́𝑙𝑖𝑐𝑜 | LetrasHub",
    metaDescription:
      "Gerador de letras em itálico: 𝑖𝑡𝑎́𝑙𝑖𝑐𝑜, 𝘪𝘵𝘢́𝘭𝘪𝘤𝘰 sem serifa e 𝑵𝒆𝒈𝒓𝒊𝒕𝒐 itálico. Copie texto inclinado para bio, citações, títulos e mensagens.",
    h1: "Letras em itálico para copiar e colar",
    label: "Letras em itálico",
    intro:
      "O itálico inclina as letras para dar ênfase sem gritar. Digite seu texto e escolha entre itálico com serifa, sem serifa ou em negrito.",
    sample: "Uma frase especial",
    featured: ["italic", "sansItalic", "boldItalic", "sansBoldItalic", "italicHearts", "italicBow", "italicMix", "italicStarWave"],
    sections: [
      {
        heading: "O que é o itálico Unicode",
        blocks: [
          {
            type: "p",
            text: "Na tipografia, o itálico serve para citações, títulos de obras, palavras estrangeiras ou para destacar algo com delicadeza. O Unicode tem alfabetos itálicos no bloco matemático: itálico com serifa (𝐴𝑏𝑐), sem serifa (𝘈𝘣𝘤) e as versões em negrito (𝑨𝒃𝒄, 𝘼𝙗𝙘).",
          },
          {
            type: "note",
            text: "Curiosidade: o «h» itálico com serifa não está no bloco matemático, porque já existia como ℎ (a constante de Planck). O gerador usa esse caractere automaticamente.",
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Uma frase especial", styles: ["italic", "sansItalic", "boldItalic", "italicHearts"] }],
      },
      {
        heading: "Itálico, cursiva e negrito: qual escolher",
        blocks: [
          {
            type: "ul",
            items: [
              "Itálico: elegante e discreto, ótimo para citações ou a segunda linha da bio.",
              "[Cursiva](cursive): imita a letra de mão, mais decorativa.",
              "[Negrito](bold): para o que precisa aparecer primeiro, como um título ou uma promoção.",
            ],
          },
        ],
      },
      {
        heading: "Como usar",
        blocks: [
          {
            type: "ol",
            items: [
              "Digite a frase no gerador.",
              "Copie o itálico que preferir.",
              "Cole na bio, no post ou na mensagem. No WhatsApp você também pode escrever _texto_ para itálico nativo.",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "O itálico com serifa não tem números próprios, então os dígitos ficam normais. Como qualquer letra Unicode especial, evite usar em textos longos ou em informações que as pessoas precisem buscar ou copiar.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Itálico é a mesma coisa que cursiva?",
        a: "Não exatamente: o itálico só inclina a letra; a cursiva imita a escrita à mão, com letras ligadas e maiúsculas decoradas.",
      },
      {
        q: "Por que o «h» parece um pouco diferente?",
        a: "Porque é o caractere ℎ do bloco «Letterlike Symbols». O Unicode o reaproveita para o itálico matemático, e seu aparelho pode desenhá-lo com outra fonte.",
      },
      {
        q: "Funciona no Instagram e no TikTok?",
        a: "Sim, no nome de exibição, na bio, nas legendas e nos comentários. Não no nome de usuário (@).",
      },
    ],
    related: ["bold", "cursive", "small", "instagram"],
  },

  bubble: {
    metaTitle: "Letras em Bolha para Copiar ⓑⓞⓛⓗⓐ e 🅑🅞🅛🅗🅐 | LetrasHub",
    metaDescription:
      "Letras em bolha ou dentro de círculos: ⓑⓞⓛⓗⓐ brancas, 🅑🅞🅛🅗🅐 pretas e números ①②③. Copie e cole na bio, no nick ou nas mensagens.",
    h1: "Letras em bolha (círculos) para copiar e colar",
    label: "Letras em bolha",
    intro:
      "Coloque cada letra dentro de um círculo para um visual redondinho e divertido. Escolha entre bolhas brancas, bolhas pretas ou combinações com símbolos.",
    sample: "Oi galera",
    featured: ["circled", "negativeCircled", "bubbleMix", "bubbleDarkAesthetic", "bubbleDarkFrame", "bubbleDots", "parenthesized", "kaoLove"],
    initialCategory: "enclosed",
    sections: [
      {
        heading: "De onde vêm as letras em círculos",
        blocks: [
          {
            type: "p",
            text: "As bolhas brancas (ⓐⓑⓒ, ⒶⒷⒸ) fazem parte do bloco «Enclosed Alphanumerics» do Unicode, que também tem números em círculos de ① a ⑳. As bolhas pretas (🅐🅑🅒) ficam no bloco suplementar e só existem em maiúsculas, por isso o gerador mostra assim mesmo que você digite em minúscula.",
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Oi galera 123", styles: ["circled", "negativeCircled", "bubbleMix", "parenthesized"] }],
      },
      {
        heading: "Ideias de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Iniciais ou uma palavra curta na bio: ⓛⓞⓥⓔ, ⓢⓣⓨⓛⓔ.",
              "Listas numeradas com ① ② ③ em posts e descrições.",
              "Nicks redondos e fáceis de reconhecer; mais ideias em [nick bonito](nick).",
              "Mensagens carinhosas no [WhatsApp](whatsapp).",
            ],
          },
        ],
      },
      {
        heading: "Como colar",
        blocks: [
          {
            type: "ol",
            items: [
              "Digite seu texto e escolha bolhas brancas ou pretas.",
              "Toque em «Copiar».",
              "Cole no app e confira: as bolhas pretas podem não aparecer em sistemas antigos.",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "Acentos e cedilha entram por cima do círculo como marca combinada, o que pode ficar meio torto. As bolhas ocupam mais espaço que uma letra normal, então em nicks com limite vale usar só numa palavra. Se preferir quadrados, veja as [letras quadradas](square).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Por que as bolhas pretas saem em maiúsculas?",
        a: "Porque o Unicode só tem letras maiúsculas dentro de círculos pretos. Não existe versão minúscula.",
      },
      {
        q: "Tem números em bolha?",
        a: "Tem: ⓪ e de ① a ⑳ em círculos brancos, e de ❶ a ❾ em círculos pretos.",
      },
      {
        q: "Letras em bolha funcionam no Free Fire?",
        a: "Muitas vezes sim, mas cada jogo decide quais caracteres aceita. Confira a prévia antes de confirmar a troca de nome.",
      },
    ],
    related: ["square", "aesthetic", "symbols", "tiktok"],
  },

  square: {
    metaTitle: "Letras Quadradas para Copiar e Colar 🆀🆄🅰🅳🆁🅰🅳🅰 | LetrasHub",
    metaDescription:
      "Letras dentro de quadrados: 🄵🄾🅁🅃🄴 brancas, 🆀🆄🅰🅳🆁🅰🅳🅰 pretas, letras em caixas e blocos. Copie e cole em nicks, títulos e bios.",
    h1: "Letras quadradas para copiar e colar",
    label: "Letras quadradas",
    intro:
      "Letras dentro de quadrados brancos ou pretos, com cara de placa ou de teclado. Digite seu texto e escolha o tipo de caixa que mais combina com você.",
    sample: "GAME OVER",
    featured: ["squared", "negativeSquared", "boxed", "squareAesthetic", "blocks", "boldBlocks", "thickBox", "bracketEach", "layerBox", "crazyBoxes"],
    sections: [
      {
        heading: "Tipos de letras quadradas",
        blocks: [
          {
            type: "ul",
            items: [
              "Quadrados brancos (🄰🄱🄲): só maiúsculas, do bloco suplementar de alfanuméricos fechados.",
              "Quadrados pretos (🅰🅱🅲): também só maiúsculas, com bastante contraste.",
              "Letras em caixas (a⃞b⃞c⃞): a letra original com um quadrado combinado em volta; mantém as minúsculas.",
              "Colchetes por letra (【a】【b】) e blocos decorativos para títulos.",
            ],
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Game Over", styles: ["squared", "negativeSquared", "boxed", "bracketEach"] }],
      },
      {
        heading: "Atenção: algumas letras viram emoji",
        blocks: [
          {
            type: "p",
            text: "Quatro quadrados pretos também são emoji: 🅰 🅱 🅾 🅿 (os dos tipos sanguíneos e do estacionamento). Em muitos celulares essas quatro letras aparecem coloridas e maiores que as outras. Não é erro do gerador; é assim que o Unicode e os sistemas tratam esses caracteres.",
          },
        ],
      },
      {
        heading: "Onde ficam bonitas",
        blocks: [
          {
            type: "ul",
            items: [
              "Palavras curtas em maiúsculas: NEW, LIVE, VIP, PRO.",
              "Nomes de guilda e nicks chamativos; mais ideias em [letras gamer](gamer).",
              "Títulos em servidores do [Discord](discord) ou descrições de canais.",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "Os quadrados brancos e pretos não têm minúsculas nem acentos próprios, e os números não mudam. As letras em caixas dependem muito da fonte: em alguns aparelhos o quadrado fica deslocado. Para um visual redondo, teste as [letras em bolha](bubble).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Por que 🅰 🅱 🅾 🅿 aparecem coloridas?",
        a: "Porque esses quatro caracteres também são emoji. O sistema mostra o desenho de emoji em vez do quadrado preto simples.",
      },
      {
        q: "Existem letras quadradas minúsculas?",
        a: "Nos quadrados brancos e pretos, não. O estilo «letras em caixas» mantém as minúsculas porque coloca o quadrado sobre a letra original.",
      },
      {
        q: "Posso usar no meu nome do Discord?",
        a: "No nome de exibição e no apelido do servidor, sim. No nome de usuário único, não.",
      },
    ],
    related: ["bubble", "gamer", "symbols", "discord"],
  },

  underline: {
    metaTitle: "Letras Sublinhadas para Copiar e Colar (S̲u̲b̲l̲i̲n̲h̲a̲d̲o̲) | LetrasHub",
    metaDescription:
      "Gerador de letras sublinhadas: s̲u̲b̲l̲i̲n̲h̲a̲d̲o̲, sublinhado duplo, ondulado e pontilhado. Copie texto sublinhado para bio, títulos e mensagens.",
    h1: "Letras sublinhadas para copiar e colar",
    label: "Letras sublinhadas",
    intro:
      "Sublinhe seu texto com uma linha simples, dupla, ondulada ou pontilhada que continua lá quando você copia, até onde não existe botão de sublinhado.",
    sample: "Importante",
    featured: ["underline", "doubleUnderline", "dotBelow", "tildeBelow", "doubleMacronBelow", "seagullBelow", "bridgeBelow", "arrowBelow", "arrowsBelow", "overline"],
    sections: [
      {
        heading: "Como funciona o sublinhado Unicode",
        blocks: [
          {
            type: "p",
            text: "O Unicode não tem letras sublinhadas prontas. O efeito vem de um caractere combinante colocado depois de cada letra, que é desenhado embaixo dela: U+0332 para a linha simples, U+0333 para a dupla, e outros para pontos, ondas ou setas. Por isso funciona com acentos, ç, números e quase qualquer alfabeto.",
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Muito importante", styles: ["underline", "doubleUnderline", "dotBelow", "tildeBelow"] }],
      },
      {
        heading: "Para que usar",
        blocks: [
          {
            type: "ul",
            items: [
              "Marcar a palavra-chave da bio ou de um título.",
              "Assinaturas e cabeçalhos em mensagens.",
              "Enfeitar o nick com sublinhado duplo ou pontilhado.",
            ],
          },
          {
            type: "note",
            text: "No Discord dá para sublinhar escrevendo __texto__, e isso é mais acessível. As letras sublinhadas do LetrasHub servem para nomes, bios e apps sem formatação.",
          },
        ],
      },
      {
        heading: "Sublinhado e riscado",
        blocks: [
          {
            type: "p",
            text: "Se você quer uma linha que atravesse o texto, vá para as [letras riscadas](strike). Os dois estilos usam a mesma técnica de caracteres combinantes, então têm as mesmas vantagens e limitações.",
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "Os espaços não são sublinhados, para o texto continuar fácil de ler e copiar; por isso a linha para entre as palavras. Dependendo da fonte, a linha pode ter pequenos espaços entre letras ou ficar um pouco baixa. O texto ocupa o dobro de caracteres, o que importa em campos com limite.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Por que a linha para entre as palavras?",
        a: "Porque o gerador não adiciona a linha aos espaços. Assim o texto continua legível e os espaços não viram símbolos estranhos.",
      },
      {
        q: "O sublinhado funciona no Instagram?",
        a: "Sim, dá para colar no nome, na bio e nos comentários. A aparência depende da fonte do celular de cada pessoa.",
      },
      {
        q: "Texto sublinhado conta mais caracteres?",
        a: "Sim, cada letra leva um caractere extra para a linha, então ocupa mais ou menos o dobro.",
      },
    ],
    related: ["strike", "bold", "whatsapp", "discord"],
  },

  upsideDown: {
    metaTitle: "Letras de Cabeça para Baixo para Copiar (oxıɐq ɐɹɐd) | LetrasHub",
    metaDescription:
      "Escreva letras de cabeça para baixo: oxıɐq ɐɹɐd ɐçǝqɐɔ ǝp, texto espelhado e invertido. Copie e cole para zoeiras, nicks e mensagens.",
    h1: "Letras de cabeça para baixo para copiar e colar",
    label: "Letras de cabeça para baixo",
    intro:
      "Vire seu texto: de cabeça para baixo, espelhado ou só invertido. Perfeito para zoeiras e mensagens que obrigam a pessoa a girar o celular.",
    sample: "Oi pessoal",
    featured: ["upsideDown", "mirrored", "reversed", "kaoFlip"],
    initialCategory: "flip",
    sections: [
      {
        heading: "Três jeitos de virar o texto",
        blocks: [
          {
            type: "ul",
            items: [
              "De cabeça para baixo (lɐossǝd ıO): cada letra vira uma parecida girada e a ordem se inverte, então se lê girando o celular.",
              "Espelhado: as letras são refletidas como num espelho e a ordem também se inverte.",
              "Invertido: só muda a ordem das letras (laossep iO), sem mudar o formato.",
            ],
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Oi pessoal", styles: ["upsideDown", "mirrored", "reversed", "kaoFlip"] }],
      },
      {
        heading: "Como isso funciona sem fontes especiais",
        blocks: [
          {
            type: "p",
            text: "O Unicode não tem um alfabeto «de cabeça para baixo». O efeito usa caracteres de outros sistemas que, por coincidência, parecem letras giradas: muitos vêm do Alfabeto Fonético Internacional (ɐ, ǝ, ɹ, ʇ), outros do grego ou de símbolos matemáticos (∀, ⅄). Por isso algumas maiúsculas são aproximações.",
          },
        ],
      },
      {
        heading: "Ideias divertidas",
        blocks: [
          {
            type: "ul",
            items: [
              "Mensagens de zoeira no [WhatsApp](whatsapp): «seu celular caiu?».",
              "A clássica mesa virada: (╯°□°)╯︵ ɐsǝɯ. Mais carinhas em [kaomoji](kaomoji).",
              "Comentários chamativos no [TikTok](tiktok).",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "Texto de cabeça para baixo é difícil de ler e os leitores de tela não entendem. Use em frases curtas e nunca para informação importante. Para outros alfabetos curiosos, veja as [letras estranhas](weird).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Como leio um texto de cabeça para baixo?",
        a: "Gire o celular 180 graus. Como a ordem das letras também é invertida, girando você lê da esquerda para a direita.",
      },
      {
        q: "Por que algumas letras não ficam perfeitamente viradas?",
        a: "Porque o Unicode não tem versões giradas de todas as letras; o gerador usa os caracteres mais parecidos.",
      },
      {
        q: "Os acentos também viram?",
        a: "A letra vira e o acento fica como marca combinada, mas não vai para baixo. Dá para entender, mas não fica perfeito.",
      },
    ],
    related: ["weird", "kaomoji", "whatsapp", "tiktok"],
  },

  weird: {
    metaTitle: "Letras Estranhas para Copiar e Colar: 卂丂ㄒ丨卂, ₳₿, ᚱᚢᚾᚨ | LetrasHub",
    metaDescription:
      "Letras estranhas para copiar: estilo asiático 卂丂ㄒ丨卂, moedas ₳₿, runas ᚱᚢᚾᚨ, cirílico ДФЯ, glitch e mais. Perfeitas para um nick único.",
    h1: "Letras estranhas para copiar e colar",
    label: "Letras estranhas",
    intro:
      "Quer algo que ninguém mais tenha? Estas letras usam caracteres de outros alfabetos que lembram o nosso: asiático, runas, moedas, cirílico, glitch e mais.",
    sample: "Letras estranhas",
    featured: ["asian", "currency", "runic", "fauxCyrillic", "greekish", "hooked", "syllabic", "cherokee", "barred", "thai", "fairy", "glitch", "mixed"],
    initialCategory: "rare",
    sections: [
      {
        heading: "O que são letras estranhas",
        blocks: [
          {
            type: "p",
            text: "São letras «disfarçadas»: cada letra latina é trocada por um caractere de outro sistema de escrita que se parece com ela. O estilo asiático usa caracteres chineses e japoneses (卂 no lugar de A, 乃 no lugar de B), o de moedas usa símbolos como ₳ e ₦, e o rúnico usa runas germânicas antigas (ᚱ, ᚢ, ᚾ).",
          },
          {
            type: "note",
            text: "Se você procura letras diferentes em geral (cursivas, góticas, negrito…), o gerador completo está na [página inicial](home). Esta página reúne só os alfabetos mais estranhos.",
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Letras estranhas", styles: ["asian", "currency", "runic", "fauxCyrillic", "glitch"] }],
      },
      {
        heading: "Para que servem",
        blocks: [
          {
            type: "ul",
            items: [
              "Nicks únicos em jogos; dicas em [nick bonito](nick) e [Free Fire](freefire).",
              "Nomes de perfil que chamam atenção.",
              "Títulos com clima misterioso ou retrô, junto com as [letras góticas](gothic).",
            ],
          },
        ],
      },
      {
        heading: "Use com responsabilidade",
        blocks: [
          {
            type: "p",
            text: "Como essas letras imitam outras, alguns sistemas de segurança ficam de olho nelas: às vezes são usadas para enganar com nomes ou links que parecem legítimos. Não use para imitar outra pessoa, uma marca ou uma conta oficial. Além disso, buscadores e leitores de tela não leem como texto normal.",
          },
        ],
      },
      {
        heading: "Compatibilidade",
        blocks: [
          {
            type: "p",
            text: "Os estilos asiático e de moedas costumam aparecer bem nos celulares atuais. Runas, cherokee ou tailandês dependem de o aparelho ter fontes para esses alfabetos; se aparecer quadradinho, teste outro estilo. Para mais enfeites, combine com as [letras com símbolos](symbols).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Letras estranhas são de outro idioma?",
        a: "Usam caracteres de outros alfabetos, mas não formam palavras nesses idiomas: são escolhidos só porque lembram as nossas letras.",
      },
      {
        q: "Por que alguns jogos recusam?",
        a: "Muitos jogos limitam os caracteres permitidos no nome. Os estilos estranhos são os que mais correm risco de ser recusados.",
      },
      {
        q: "Qual o estilo estranho mais compatível?",
        a: "Em geral, o de moedas e o asiático, porque usam caracteres muito comuns nos sistemas atuais.",
      },
    ],
    related: ["symbols", "gothic", "upsideDown", "nick"],
  },

  symbols: {
    metaTitle: "Letras com Símbolos para Copiar e Colar ꧁★彡 | LetrasHub",
    metaDescription:
      "Letras com símbolos para nick e bio: ꧁꧂, ★彡, 亗, 『』, ♡ e centenas de enfeites. Gere seu texto decorado ou copie símbolos avulsos.",
    h1: "Letras com símbolos para copiar e colar",
    label: "Letras com símbolos",
    intro:
      "Enfeite seu nome ou frase com molduras, estrelas, corações e outros detalhes. Gere o texto completo ou copie os símbolos avulsos para montar do seu jeito.",
    sample: "Meu nome",
    featured: ["javanese", "starWaves", "kanjiFrame", "lenticular", "cornerBrackets", "wings", "hearts", "floralBorder", "crownBorder", "diamondsBetween", "arrows", "heartLine"],
    initialCategory: "decorated",
    sections: [
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Meu nome", styles: ["javanese", "starWaves", "kanjiFrame", "cornerBrackets", "hearts"] }],
      },
      {
        heading: "Símbolos avulsos para copiar",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Molduras", text: "꧁ ꧂ 『 』 【 】 「 」 ﴾ ﴿ ⟦ ⟧" },
              { label: "Estrelas", text: "★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⋆ 彡" },
              { label: "Corações", text: "♡ ♥ ❤ ❥ ❣ ღ" },
              { label: "Flores", text: "✿ ❀ ❁ ✾ ❃ ❋ ✽" },
              { label: "Para nick", text: "亗 乂 ツ ×͜× ☯ ♛ ♔ ⚔ ☠ ⚡ 么" },
              { label: "Setas e linhas", text: "➳ ➵ ➶ ➸ ➹ ➺ ⇝ ⇜ ━ ═ ─ ~ ≈" },
            ],
          },
        ],
      },
      {
        heading: "De onde vêm esses símbolos",
        blocks: [
          {
            type: "p",
            text: "O Unicode organiza os símbolos em blocos: os «Dingbats» (✿, ❀, ➳) e os «Símbolos diversos» (★, ☯, ♛) vêm de antigas fontes decorativas; 亗 e 乂 são caracteres chineses; ꧁ e ꧂ são sinais de pontuação da escrita javanesa; e 『』 e 【】 são aspas e colchetes do japonês e do chinês.",
          },
        ],
      },
      {
        heading: "Como combinar",
        blocks: [
          {
            type: "ol",
            items: [
              "Digite seu nome no gerador e escolha um estilo com símbolos, ou use o seletor «Enfeite».",
              "Para algo personalizado, copie símbolos avulsos da lista acima.",
              "Cole tudo numa nota, ajuste e copie o resultado final.",
            ],
          },
          {
            type: "note",
            text: "Menos é mais: uma moldura ou dois símbolos já resolvem. Enfeite demais deixa o texto ilegível e aumenta a chance de o jogo recusar.",
          },
        ],
      },
      {
        heading: "Compatibilidade",
        blocks: [
          {
            type: "p",
            text: "Quase todos esses símbolos aparecem bem nos celulares atuais, mas alguns (como ꧁꧂) precisam de fontes que nem todo sistema antigo tem. Para ideias de nick, veja [nick bonito](nick) e [Free Fire](freefire); para combinações fofas, as [letras aesthetic](aesthetic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Como coloco símbolos dos lados do meu nome?",
        a: "Digite seu nome no gerador e escolha um estilo com moldura, ou use o seletor «Enfeite» para envolver qualquer estilo com o símbolo que quiser.",
      },
      {
        q: "O que significa 亗?",
        a: "É um caractere chinês pouco usado. Na comunidade gamer ele é usado pelo formato decorativo, não pelo significado.",
      },
      {
        q: "Por que alguns símbolos aparecem como quadradinho?",
        a: "Seu aparelho não tem uma fonte com aquele símbolo. Teste outro ou atualize o sistema.",
      },
    ],
    related: ["weird", "nick", "freefire", "aesthetic"],
  },

  aesthetic: {
    metaTitle: "Letras Aesthetic e Fofas para Copiar e Colar ✧˖° | LetrasHub",
    metaDescription:
      "Letras aesthetic e fofas: cursivas delicadas, ✨ brilhos, 🌸 flores, 🎀 laços e estrelinhas ☆. Copie textos lindos para sua bio do Instagram ou TikTok.",
    h1: "Letras aesthetic e fofas para copiar e colar",
    label: "Letras aesthetic",
    intro:
      "Letras delicadas e fofas com brilhos, flores, laços e estrelinhas, perfeitas para uma bio com estética caprichada. Digite seu texto e escolha a sua vibe.",
    sample: "bom dia",
    featured: ["scriptStarsAesthetic", "scriptMoon", "scriptCloud", "boldAesthetic", "squareAesthetic", "bubbleDarkAesthetic", "cuteSakura", "cuteBow", "cuteButterfly", "smallMoon", "elegantStars", "tenderStars"],
    sections: [
      {
        heading: "O que significa «aesthetic»",
        blocks: [
          {
            type: "p",
            text: "Nas redes, «aesthetic» é usado para falar de uma estética visual caprichada e coerente: cores pastel, letras delicadas, brilhos e pequenos enfeites. No texto, isso vira cursivas suaves, letrinhas pequenas, emojis fofos e separadores bonitos.",
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "bom dia", styles: ["scriptStarsAesthetic", "cuteSakura", "cuteBow", "smallMoon"] }],
      },
      {
        heading: "Enfeites aesthetic para copiar",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Separadores", text: "˚ ༘ ♡ ⋆｡˚ ✧˖°" },
              { label: "Brilhos", text: "✨ ⋆ ˚｡⋆ ✧ ✦ ⊹" },
              { label: "Flores e laços", text: "🌸 🌷 🎀 🦋 🍓 🧸" },
              { label: "Linha para bio", text: "⋆｡‧˚ʚ♡ɞ˚‧｡⋆" },
            ],
          },
        ],
      },
      {
        heading: "Como montar uma bio aesthetic",
        blocks: [
          {
            type: "ol",
            items: [
              "Escolha um estilo principal (cursiva delicada ou letrinhas pequenas) para o nome ou a frase.",
              "Acrescente um ou dois enfeites da lista, sem exagero.",
              "Deixe em texto normal o que é importante, como cidade ou link.",
              "Cole na bio do [Instagram](instagram) ou do [TikTok](tiktok) e confira como ficou.",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "Emojis e enfeites ocupam espaço em bios com limite de caracteres, e alguns símbolos delicados (˚, ⊹) podem não aparecer em celulares antigos. Para mais estilos suaves, veja as [letras cursivas](cursive) ou as [letras em bolha](bubble); para carinhas fofas, os [kaomoji](kaomoji).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quais letras são mais aesthetic?",
        a: "As cursivas finas, as letrinhas pequenas (versalete) e as combinações com brilhos ou flores são as mais usadas para uma estética delicada.",
      },
      {
        q: "Posso usar letras aesthetic no meu nome de usuário?",
        a: "No @ do Instagram ou do TikTok, não. Use no nome de exibição, na bio, nas legendas e nos comentários.",
      },
      {
        q: "Emojis contam como vários caracteres?",
        a: "Em muitas plataformas, sim: alguns emojis contam como dois ou mais caracteres no limite da bio.",
      },
    ],
    related: ["cursive", "kaomoji", "instagram", "bubble"],
  },

  gamer: {
    metaTitle: "Letras Gamer para Copiar e Colar ▄︻デ 𝔊𝔞𝔪𝔢𝔯 ☠ | LetrasHub",
    metaDescription:
      "Letras gamer para nick, guilda ou canal: ▄︻デ, ⚔, ☠, ♛, ᴾᴿᴼ e estilos góticos. Copie e cole em jogos, Discord, Twitch ou YouTube.",
    h1: "Letras gamer para copiar e colar",
    label: "Letras gamer",
    intro:
      "Dê ao seu nome de jogador um estilo competitivo: fuzis, espadas, caveiras, coroas e letras góticas. Digite seu nick e escolha sua moldura gamer.",
    sample: "Sniper",
    featured: ["gameSniper", "gameSwords", "gameSkull", "gameCrown", "gamePro", "gameLightning", "gameRoyal", "gameProX", "gameSport", "gothicSkull", "javanese", "kanjiFrame"],
    initialCategory: "gaming",
    sections: [
      {
        heading: "Exemplos de letras gamer",
        blocks: [{ type: "examples", text: "Sniper", styles: ["gameSniper", "gameSwords", "gameSkull", "gameCrown", "gamePro"] }],
      },
      {
        heading: "Onde usar letras gamer",
        blocks: [
          {
            type: "ul",
            items: [
              "Seu nick no jogo (se ele permitir): dicas em [nick bonito](nick) e [Free Fire](freefire).",
              "Nome e apelidos de servidor no [Discord](discord).",
              "Títulos de lives e vídeos, descrição do canal e painéis.",
              "Nome de guilda: todo mundo com o mesmo símbolo e o próprio nome.",
            ],
          },
        ],
      },
      {
        heading: "Ideias de nick gamer",
        blocks: [
          {
            type: "copy",
            items: ["▄︻デ Sniper ══━一", "⚔ 𝕷𝖊𝖓𝖉𝖆 ⚔", "☠ ʙᴀʀᴀ̃ᴏ ☠", "♛ 𝗥𝗘𝗜 ♛", "ᴾᴿᴼ ɢᴀᴍᴇʀ ✓"],
          },
          {
            type: "note",
            text: "São exemplos para inspirar: troque pelo seu nome no gerador. Não copie o nick exato de um jogador ou criador famoso.",
          },
        ],
      },
      {
        heading: "Antes de trocar o nome",
        blocks: [
          {
            type: "ol",
            items: [
              "Confira se o jogo aceita os símbolos: muitos só aceitam letras e números comuns.",
              "Veja se o nick dá para ler e buscar; seus amigos precisam te achar.",
              "Se a troca custa dinheiro ou itens do jogo, teste antes em outro lugar.",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "O fuzil ▄︻デ e as linhas ══━ ocupam muitos caracteres, então nem sempre cabem num nick. O nome de usuário de muitas plataformas de streaming só aceita caracteres básicos; nesses casos, use o estilo em títulos e painéis. Para um visual medieval, veja as [letras góticas](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual o melhor símbolo gamer?",
        a: "Depende do seu estilo: ⚔ para algo épico, ☠ para algo agressivo, ♛ para algo de «rei». Escolha um que apareça bem também no celular dos seus amigos.",
      },
      {
        q: "Por que o jogo não aceita meu nick gamer?",
        a: "O jogo decide quais caracteres permite. Tire os símbolos um por um ou use um estilo mais simples, como versalete.",
      },
      {
        q: "Posso usar essas letras na Twitch ou no YouTube?",
        a: "Em títulos e descrições, normalmente sim. No nome de usuário, cada plataforma tem suas regras; veja o que ela deixa salvar.",
      },
    ],
    related: ["nick", "freefire", "gothic", "discord"],
  },

  kaomoji: {
    metaTitle: "Kaomoji e Carinhas para Copiar e Colar (◕‿◕) ʕ•ᴥ•ʔ | LetrasHub",
    metaDescription:
      "Kaomoji e carinhas japonesas para copiar: (◕‿◕), ʕ•ᴥ•ʔ, ¯\\_(ツ)_/¯, (╯°□°)╯︵ ┻━┻ e mais. Use sozinhas ou junto com seu texto estiloso.",
    h1: "Kaomoji e carinhas para copiar e colar",
    label: "Kaomoji",
    intro:
      "Kaomoji são carinhas feitas com caracteres: (◕‿◕), ʕ•ᴥ•ʔ, ¯\\_(ツ)_/¯. Copie uma da lista ou digite seu texto para combinar com uma carinha.",
    sample: "oi",
    featured: ["kaoHug", "kaoBear", "kaoSparkle", "kaoShrug", "kaoFlip", "kaoLove", "kaoCry", "kaoDance", "kaoLenny", "kaoConfused", "kaoHappy", "kaoHappySmall"],
    initialCategory: "kaomoji",
    sections: [
      {
        heading: "O que são kaomoji",
        blocks: [
          {
            type: "p",
            text: "«Kaomoji» vem do japonês: kao (rosto) e moji (caractere). Ao contrário dos emoticons ocidentais como :) que se leem de lado, os kaomoji se leem de frente: (^_^). Eles ficaram populares em fóruns e na internet japonesa a partir dos anos 80 e hoje são usados no mundo todo.",
          },
        ],
      },
      {
        heading: "Kaomoji para copiar",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Felizes", text: "(◕‿◕) (＾▽＾) (≧◡≦) ٩(◕‿◕)۶" },
              { label: "Amor", text: "(♡˙︶˙♡) (っ◔◡◔)っ ♥ (´｡• ᵕ •｡`) ♡" },
              { label: "Tristes", text: "(ಥ﹏ಥ) (╥﹏╥) (；￣Д￣)" },
              { label: "Raiva", text: "(╯°□°)╯︵ ┻━┻ (ಠ益ಠ) (￣^￣)" },
              { label: "Bichinhos", text: "ʕ•ᴥ•ʔ (=^･ω･^=) ▼・ᴥ・▼" },
              { label: "Sei lá", text: "¯\\_(ツ)_/¯" },
              { label: "Abraço", text: "(づ｡◕‿‿◕｡)づ" },
            ],
          },
        ],
      },
      {
        heading: "Kaomoji com o seu texto",
        blocks: [
          {
            type: "p",
            text: "O gerador acima junta carinhas com o seu texto estilizado: por exemplo, um abraço com letras cursivas ou a mesa virada com seu texto de cabeça para baixo. Digite e teste.",
          },
          { type: "examples", text: "oi", styles: ["kaoHug", "kaoBear", "kaoShrug", "kaoFlip"] },
        ],
      },
      {
        heading: "Onde usar",
        blocks: [
          {
            type: "ul",
            items: [
              "Mensagens no [WhatsApp](whatsapp) e no [Discord](discord), para mostrar emoção sem emoji.",
              "Bios e comentários com estilo [aesthetic](aesthetic).",
              "Nicks divertidos, embora muitos jogos não aceitem esses caracteres.",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "Alguns kaomoji usam caracteres de alfabetos pouco comuns (canarês, tailandês…) e podem aparecer como quadradinhos em celulares antigos. No Discord e em outros apps com markdown, underline e asterisco podem virar formatação: se o «¯\\_(ツ)_/¯» perder o braço, coloque mais uma barra invertida.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual a diferença entre kaomoji e emoji?",
        a: "Emoji são desenhos (😀); kaomoji são montados com caracteres de texto. Kaomoji funcionam até onde não existe emoji.",
      },
      {
        q: "Por que meu ¯\\_(ツ)_/¯ ficou sem braço?",
        a: "Em apps com markdown, a barra invertida e o underline têm significado especial. Escreva duas barras invertidas ou use o botão Copiar desta página.",
      },
      {
        q: "Kaomoji funcionam em todos os celulares?",
        a: "Os mais simples, sim. Os que usam caracteres de alfabetos pouco comuns podem falhar em sistemas antigos.",
      },
    ],
    related: ["aesthetic", "upsideDown", "whatsapp", "discord"],
  },
};

export default pages;
