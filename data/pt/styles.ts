import type { StylePageContent } from "@/types/content";
import type { StylePageKey } from "@/lib/routes";

const pages: Record<StylePageKey, StylePageContent> = {
  cursive: {
    metaTitle: "Letras Cursivas para Copiar e Colar 𝓒𝓾𝓻𝓼𝓲𝓿𝓪 | LetrasHub",
    metaDescription:
      "Gerador de letras cursivas: transforme seu texto em letra de mão elegante (𝒸𝓊𝓇𝓈𝒾𝓋𝒶 e 𝓬𝓾𝓻𝓼𝓲𝓿𝓪 negrito) e copie para bio, nome ou mensagens.",
    h1: "Letras cursivas para copiar e colar",
    label: "Letras cursivas",
    intro:
      "As letras cursivas imitam a escrita à mão, com traços inclinados e curvas. Digite seu texto e escolha entre cursiva fina, cursiva em negrito ou itálico.",
    sample: "Juliana",
    featured: ["script", "boldScript", "italic", "boldItalic", "sansItalic", "javanese", "starWaves"],
    sections: [
      {
        heading: "Como são as letras cursivas do gerador",
        blocks: [
          {
            type: "p",
            text: "São dois estilos principais. A cursiva fina (𝒜𝒷𝒸) lembra caligrafia, com maiúsculas bem enfeitadas. A cursiva em negrito (𝓐𝓫𝓬) tem traço mais grosso e fica mais legível em telas pequenas. Também tem o itálico (𝐴𝑏𝑐), que só inclina a letra e fica mais discreto.",
          },
          {
            type: "p",
            text: "Esses caracteres vêm do bloco «Mathematical Alphanumeric Symbols» do Unicode, criado para notação matemática, como ℒ e ℋ. Algumas maiúsculas cursivas já existiam em outro bloco (Letterlike Symbols), por isso a cursiva fina mistura caracteres de dois blocos — é normal e não muda nada na hora de colar.",
          },
        ],
      },
      {
        heading: "Exemplos de letras cursivas",
        blocks: [{ type: "examples", text: "Juliana Souza", styles: ["script", "boldScript", "italic", "boldItalic"] }],
      },
      {
        heading: "Quando ficam bonitas",
        blocks: [
          {
            type: "ul",
            items: [
              "No nome do perfil, para um toque elegante sem perder a leitura.",
              "Na primeira linha da bio, como título.",
              "Em convites e mensagens de parabéns.",
              "Junto com símbolos para montar um nick, tipo ★彡 𝓙𝓾 彡★.",
            ],
          },
          {
            type: "p",
            text: "Evite parágrafos inteiros em cursiva: cansa a vista e fica difícil de ler para qualquer pessoa, principalmente para quem usa leitor de tela.",
          },
        ],
      },
      {
        heading: "Como copiar e colar",
        blocks: [
          {
            type: "ol",
            items: [
              "Digite seu texto no gerador acima.",
              "Toque em «Copiar» na cursiva que preferir.",
              "No app de destino, toque e segure no campo de texto e escolha «Colar».",
              "Confira na prévia se não apareceram quadradinhos antes de salvar.",
            ],
          },
        ],
      },
      {
        heading: "Limitações da cursiva",
        blocks: [
          {
            type: "p",
            text: "A cursiva fina é a que mais muda de um aparelho para outro, porque cada sistema desenha esses caracteres com a própria fonte. Se no seu celular ela ficar fina demais ou com quadradinhos, use a cursiva em negrito, que tem suporte melhor. Números não têm versão cursiva no Unicode, então continuam normais.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Existem números em letra cursiva?",
        a: "Não. O Unicode não tem dígitos cursivos, então os números ficam como você digitou. Para números estilizados, teste o negrito ou o traço duplo.",
      },
      {
        q: "Qual a diferença entre cursiva e itálico?",
        a: "O itálico só inclina a letra; a cursiva imita a escrita à mão, com letras arredondadas e maiúsculas decoradas.",
      },
      {
        q: "Os acentos aparecem na cursiva?",
        a: "Sim, o acento é adicionado como marca combinada em cima da letra cursiva. Em algumas fontes ele pode aparecer um pouco deslocado.",
      },
    ],
    related: ["gothic", "small", "instagram", "nick"],
  },

  gothic: {
    metaTitle: "Letras Góticas para Copiar e Colar 𝔊𝔬𝔱𝔦𝔠𝔞𝔰 | LetrasHub",
    metaDescription:
      "Transforme seu texto em letras góticas (𝔤𝔬𝔱𝔦𝔠𝔞𝔰 e 𝖌𝖔𝖙𝖎𝖈𝖆𝖘 negrito) com visual medieval. Copie grátis para nick, perfil e artes.",
    h1: "Letras góticas para copiar e colar",
    label: "Letras góticas",
    intro:
      "As letras góticas têm traços angulosos e um clima medieval. Digite seu texto e copie em gótica normal ou gótica em negrito.",
    sample: "Lobo Sombrio",
    featured: ["fraktur", "boldFraktur", "kanjiFrame", "doubleStruck", "asian", "javanese"],
    sections: [
      {
        heading: "De onde vem a letra gótica",
        blocks: [
          {
            type: "p",
            text: "A letra gótica, também chamada de blackletter ou Fraktur, foi usada por séculos em manuscritos e impressos na Europa e continuou comum nos países de língua alemã até o século XX. Hoje ela lembra tatuagem, capa de banda, camiseta e, claro, nick de jogo com pegada mais sombria.",
          },
          {
            type: "p",
            text: "Os caracteres deste gerador são as letras Fraktur do bloco matemático do Unicode. Cinco maiúsculas (ℭ, ℌ, ℑ, ℜ e ℨ) já existiam em outro bloco e são usadas de lá, como o próprio padrão indica.",
          },
        ],
      },
      {
        heading: "Exemplos de letras góticas",
        blocks: [{ type: "examples", text: "Lobo Sombrio", styles: ["fraktur", "boldFraktur", "kanjiFrame"] }],
      },
      {
        heading: "Dicas para ficar legível",
        blocks: [
          {
            type: "ul",
            items: [
              "A gótica em negrito (𝕬𝖇𝖈) é mais fácil de ler que a fina em telas pequenas.",
              "As maiúsculas góticas são bem carregadas: um nick todo em maiúsculas pode ficar ilegível.",
              "Funciona melhor em palavras curtas; em frases longas, misture com letras normais.",
              "Para um visual mais agressivo, teste a moldura 亗 ou o estilo asiático na página de [nick bonito](nick).",
            ],
          },
        ],
      },
      {
        heading: "Como usar no perfil ou no jogo",
        blocks: [
          {
            type: "ol",
            items: [
              "Digite seu nome ou frase no gerador.",
              "Copie a versão gótica que mais curtir.",
              "Cole no campo de nome, apelido ou bio.",
              "Se o app recusar ou aparecer quadradinho, teste a outra variação gótica ou um estilo com menos símbolos.",
            ],
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "O Unicode não tem números góticos, então os dígitos ficam normais. Algumas plataformas e jogos bloqueiam caracteres matemáticos em nomes; nesse caso, a saída é usar letras normais com algum símbolo permitido. Veja os guias de [Free Fire](freefire) e [Discord](discord) para casos específicos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Letra gótica é uma fonte?",
        a: "Não. São caracteres Unicode independentes, por isso continuam góticos quando você copia para outro app, ao contrário de uma fonte instalada.",
      },
      {
        q: "Posso usar para tatuagem?",
        a: "Pode servir de ideia, mas o tatuador vai trabalhar com uma tipografia gótica de verdade. Esses caracteres foram feitos para tela.",
      },
      {
        q: "Por que algumas maiúsculas góticas parecem diferentes?",
        a: "Porque ℭ, ℌ, ℑ, ℜ e ℨ ficam em outro bloco do Unicode, e o seu aparelho pode desenhá-las com outra fonte.",
      },
    ],
    related: ["cursive", "freefire", "nick", "discord"],
  },

  small: {
    metaTitle: "Letras Pequenas para Copiar e Colar ᴍɪɴɪ ᵗᶦⁿʸ | LetrasHub",
    metaDescription:
      "Gerador de letras pequenas: versalete (ʟᴇᴛʀᴀꜱ), sobrescrito (ˡᵉᵗʳᵃˢ) e subscrito. Copie letrinhas para bio, nick e mensagens.",
    h1: "Letras pequenas para copiar e colar",
    label: "Letras pequenas",
    intro:
      "As letrinhas pequenas deixam o texto discreto e minimalista. Digite e escolha entre versalete, sobrescrito ou subscrito.",
    sample: "Bom dia",
    featured: ["smallCaps", "superscript", "subscript", "sans", "monospace"],
    initialCategory: "small",
    sections: [
      {
        heading: "Três tipos de letras pequenas",
        blocks: [
          {
            type: "ul",
            items: [
              "Versalete (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ): maiúsculas do tamanho de uma minúscula. É o mais legível e completo.",
              "Sobrescrito (ˢᵘᵖᵉʳ): letrinhas que ficam no alto, como um expoente.",
              "Subscrito (ₛᵤᵦ): letrinhas abaixo da linha. O Unicode só tem algumas.",
            ],
          },
          {
            type: "p",
            text: "Muitas dessas letras vêm de alfabetos fonéticos, como o Alfabeto Fonético Internacional, usados para representar sons. Por isso nem toda letra existe em todas as versões.",
          },
        ],
      },
      {
        heading: "Exemplos de letras pequenas",
        blocks: [{ type: "examples", text: "bom dia", styles: ["smallCaps", "superscript", "subscript"] }],
      },
      {
        heading: "Quais letras faltam",
        blocks: [
          {
            type: "p",
            text: "O Unicode não tem «q» sobrescrito nem «x» em versalete, e no subscrito faltam várias letras (b, c, d, f, g, q, w, y, z, entre outras). Quando uma letra não existe, o gerador mantém a original para o texto não quebrar. Se você quer uma palavra inteira em tamanho mini, confira o resultado antes de usar.",
          },
          {
            type: "note",
            text: "O sobrescrito transforma tudo em minúsculas porque as maiúsculas sobrescritas são muito incompletas no Unicode.",
          },
        ],
      },
      {
        heading: "Ideias de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Subtítulos discretos na bio do [Instagram](instagram) ou do [TikTok](tiktok).",
              "Um «ᵒᶠᶦᶜᶦᵃˡ» ou «ᴠɪᴘ» pequeno do lado do nick.",
              "Notinhas engraçadas em mensagens.",
            ],
          },
        ],
      },
      {
        heading: "Compatibilidade",
        blocks: [
          {
            type: "p",
            text: "O versalete aparece bem na maioria dos celulares. Sobrescrito e subscrito usam caracteres de blocos diferentes e, dependendo da fonte, algumas letras podem ficar em alturas diferentes. É uma limitação do desenho de cada sistema, não do texto copiado.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Por que algumas letras não ficam pequenas?",
        a: "Porque não têm versão pequena no Unicode. Em vez de mostrar um símbolo quebrado, o gerador mantém a letra original.",
      },
      {
        q: "Letra pequena funciona em nick?",
        a: "O versalete costuma funcionar em muitos jogos e apps, mas cada plataforma decide o que aceita. Teste antes de salvar.",
      },
      {
        q: "Tem número pequeno?",
        a: "Tem, em sobrescrito (⁰¹²³) e subscrito (₀₁₂₃). O versalete não muda os números.",
      },
    ],
    related: ["cursive", "strike", "instagram", "tiktok"],
  },

  strike: {
    metaTitle: "Letras Riscadas para Copiar e Colar (R̶i̶s̶c̶a̶d̶o̶) | LetrasHub",
    metaDescription:
      "Gerador de texto riscado, sublinhado e cortado: r̶i̶s̶c̶a̶d̶o̶, s̲u̲b̲l̲i̲n̲h̲a̲d̲o̲ e mais. Copie e cole no WhatsApp, Instagram, Discord e outros apps.",
    h1: "Letras riscadas para copiar e colar",
    label: "Letras riscadas",
    intro:
      "Risque, sublinhe ou corte seu texto com uma linha que continua lá quando você copia. Ótimo para piadas, listas e indiretas.",
    sample: "preço antigo",
    featured: ["strike", "shortStrike", "slash", "underline", "doubleUnderline", "overline", "crossAbove"],
    initialCategory: "lines",
    sections: [
      {
        heading: "Como o texto riscado é feito",
        blocks: [
          {
            type: "p",
            text: "Aqui as letras não são trocadas. Depois de cada letra entra um «caractere combinante», um símbolo que sozinho é invisível e se desenha em cima ou embaixo do caractere anterior. O riscado usa o U+0336 (traço longo sobreposto) e o sublinhado usa o U+0332 (linha baixa).",
          },
          {
            type: "p",
            text: "Como as letras originais continuam iguais, esse estilo funciona com acentos, ç, números e praticamente qualquer alfabeto.",
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Não gosto mais", styles: ["strike", "slash", "underline", "doubleUnderline"] }],
      },
      {
        heading: "Usos mais comuns",
        blocks: [
          {
            type: "ul",
            items: [
              "Piadas do tipo «t̶r̶a̶b̶a̶l̶h̶a̶r̶ cochilo produtivo».",
              "Tarefas concluídas numa lista compartilhada.",
              "Mostrar uma mudança: «R̶e̶u̶n̶i̶ã̶o̶ ̶à̶s̶ ̶5̶» agora às 6.",
              "Enfeitar o nick com sublinhado duplo.",
            ],
          },
        ],
      },
      {
        heading: "No WhatsApp e no Discord, use a formatação deles",
        blocks: [
          {
            type: "p",
            text: "Se você só quer riscar texto numa mensagem, WhatsApp e Discord têm formatação própria, que é mais acessível: no WhatsApp digite ~texto~ e no Discord ~~texto~~. As letras riscadas deste gerador servem onde essa formatação não existe, como nome de perfil e bio. Veja os guias de [WhatsApp](whatsapp) e [Discord](discord).",
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "A posição da linha depende da fonte de cada aparelho: às vezes fica um pouco alta, baixa ou com pequenos cortes entre as letras. E o texto passa a ocupar o dobro de caracteres (letra + linha), o que importa em campos com limite.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Por que o risco aparece cortado entre as letras?",
        a: "Cada linha pertence a uma letra e a fonte decide a largura. Em alguns aparelhos ficam pequenos espaços; isso não dá para controlar pelo texto.",
      },
      {
        q: "Texto riscado conta mais caracteres?",
        a: "Sim, cada letra leva um caractere extra para a linha, então ocupa mais ou menos o dobro.",
      },
      {
        q: "Como tiro o risco?",
        a: "Digite o texto de novo sem estilo; a linha faz parte do texto copiado.",
      },
    ],
    related: ["small", "whatsapp", "discord", "cursive"],
  },

  nick: {
    metaTitle: "Nick Bonito: Letras e Símbolos para Nick de Jogo | LetrasHub",
    metaDescription:
      "Crie um nick bonito com letras diferentes e símbolos: ꧁༒ 𝓝𝓲𝓬𝓴 ༒꧂, 亗, ×͜×, 『』. Gerador grátis de fontes para nick, com dicas para o jogo aceitar.",
    h1: "Nick bonito com letras e símbolos",
    label: "Nick bonito",
    intro:
      "Um nick bonito é reconhecido de longe. Digite seu nome de jogador e teste molduras, símbolos e letras especiais até achar o seu.",
    sample: "ReiDasSombras",
    featured: ["javanese", "smile", "kanjiFrame", "starWaves", "lenticular", "cornerBrackets", "asian", "greekish", "smallCaps", "boldFraktur"],
    sections: [
      {
        heading: "O que faz um nick ficar bonito",
        blocks: [
          {
            type: "ul",
            items: [
              "Dá para ler: se seus amigos não sabem como escrever, também não vão conseguir te achar.",
              "Um enfeite principal só: uma moldura (꧁꧂, 『』) ou um símbolo (亗, ×͜×) já resolve.",
              "Poucos caracteres raros: quanto mais símbolos, maior a chance de o jogo recusar.",
              "Identidade: use o mesmo estilo nos jogos e nas redes para ser reconhecido.",
            ],
          },
        ],
      },
      {
        heading: "Exemplos de nick",
        blocks: [{ type: "examples", text: "ReiDasSombras", styles: ["javanese", "smile", "kanjiFrame", "starWaves", "asian", "lenticular"] }],
      },
      {
        heading: "Passo a passo para colocar o nick",
        blocks: [
          {
            type: "ol",
            items: [
              "Digite seu nome base — curto é melhor.",
              "Filtre por «Com símbolos» ou «Diferentonas» e escolha um estilo.",
              "Copie e cole primeiro numa nota ou conversa para ver como fica.",
              "No jogo, vá ao perfil e procure a opção de trocar o nome.",
              "Cole o nick e confira a prévia antes de confirmar, principalmente se a troca custa dinheiro ou itens do jogo.",
            ],
          },
        ],
      },
      {
        heading: "Compatibilidade nos jogos",
        blocks: [
          {
            type: "p",
            text: "Cada jogo decide quais caracteres aceita e quantos. Uns aceitam quase qualquer símbolo, outros só letras e números comuns, e outros contam símbolos complexos como mais de um caractere. Não publicamos limites exatos porque eles mudam com as atualizações; a referência confiável é o que o próprio jogo deixa salvar. Para o caso mais procurado, veja o guia de [letras para Free Fire](freefire).",
          },
          {
            type: "note",
            text: "Não use nick para se passar por outra pessoa, por um administrador ou por uma marca: isso vai contra as regras de quase todas as plataformas e contra os nossos termos de uso.",
          },
        ],
      },
      {
        heading: "Mais ideias",
        blocks: [
          {
            type: "p",
            text: "Se o nick é para um servidor de chat, o guia de [Discord](discord) explica a diferença entre nome de usuário e apelido. Para um visual medieval, teste as [letras góticas](gothic); para algo mais clean, as [letras pequenas](small).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual o melhor símbolo para nick?",
        a: "Não existe um melhor; os mais populares são as molduras ꧁꧂ e 『』 e símbolos como 亗 e ×͜×. Escolha um que apareça bem no seu celular e no dos seus amigos.",
      },
      {
        q: "O jogo diz que meu nick tem caracteres inválidos. E agora?",
        a: "Tire os símbolos um por um até ele aceitar, ou teste um estilo mais simples, como versalete ou letras normais com moldura.",
      },
      {
        q: "Meu nick vai aparecer igual para todo mundo?",
        a: "Nem sempre. Se outro jogador tiver um sistema sem esses caracteres, vai ver quadradinhos. Estilos mais comuns diminuem esse risco.",
      },
    ],
    related: ["freefire", "gothic", "discord", "tiktok"],
  },

  freefire: {
    metaTitle: "Letras para Free Fire: Nick com Símbolos para Copiar | LetrasHub",
    metaDescription:
      "Nick para Free Fire com letras diferentes e símbolos: ꧁༒ 𝓝𝓲𝓬𝓴 ༒꧂, 亗, ×͜×, 【】. Gere, copie e cole seu nick, com dicas para o jogo aceitar.",
    h1: "Letras para Free Fire",
    label: "Letras para Free Fire",
    intro:
      "Monte um nick estiloso para o Free Fire: digite seu nome, escolha uma moldura ou símbolo e copie. Também mostramos o que conferir antes de trocar o nome no jogo.",
    sample: "BraboFF",
    featured: ["javanese", "smile", "kanjiFrame", "starWaves", "cornerBrackets", "lenticular", "asian", "boldFraktur", "wings", "smallCaps"],
    sections: [
      {
        heading: "Os estilos mais usados no Free Fire",
        blocks: [
          {
            type: "p",
            text: "Na comunidade brasileira de Free Fire fazem muito sucesso os nicks com molduras simétricas (꧁ ꧂), símbolos orientais como 亗 e 乂, a «carinha» ×͜× e as letras em estilo asiático (卂乃匚). Esses símbolos vêm de escritas como a javanesa, a tibetana e a chinesa, e o Unicode inclui todos para que esses idiomas possam ser escritos em qualquer aparelho.",
          },
        ],
      },
      {
        heading: "Exemplos de nick para Free Fire",
        blocks: [{ type: "examples", text: "BraboFF", styles: ["javanese", "smile", "kanjiFrame", "starWaves", "lenticular", "asian"] }],
      },
      {
        heading: "Como colocar letras diferentes no nick do Free Fire",
        blocks: [
          {
            type: "ol",
            items: [
              "Crie seu nick no gerador e toque em «Copiar».",
              "Abra o Free Fire e entre no seu perfil.",
              "Toque no ícone de editar ao lado do nome (o lugar pode mudar entre versões).",
              "Apague o nome atual, toque e segure no campo e escolha «Colar».",
              "Confira a prévia com calma: no Free Fire a troca de nome normalmente custa diamantes ou um item de troca de nome, então vale acertar de primeira.",
            ],
          },
        ],
      },
      {
        heading: "O que conferir antes de confirmar",
        blocks: [
          {
            type: "ul",
            items: [
              "Se o jogo não mostrou aviso de caractere inválido ou de nome longo demais.",
              "Se não tem quadradinho (□) na prévia.",
              "Se dá para entender o nick: seus amigos precisam te achar para adicionar.",
              "Se o nick não imita outro jogador famoso, um criador de conteúdo ou a equipe oficial.",
            ],
          },
          {
            type: "p",
            text: "É o jogo que decide quantos caracteres e quais símbolos aceita, e isso pode mudar em qualquer atualização. Por isso não indicamos um limite exato: se o nome não couber, use uma moldura menor (『』 no lugar de ꧁༒ ༒꧂) ou tire espaços.",
          },
        ],
      },
      {
        heading: "Nick para guilda",
        blocks: [
          {
            type: "p",
            text: "Numa guilda, uma ideia é todo mundo usar o mesmo símbolo ou moldura e mudar só o nome: 亗 Ana, 亗 Léo. Assim vocês se reconhecem na partida sem deixar o nick ilegível. Mais ideias em [nick bonito](nick) e nas [letras góticas](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "O Free Fire aceita todos esses símbolos?",
        a: "Aceita muitos, mas não garantimos todos. O jogo pode recusar alguns caracteres ou mudar as regras numa atualização. Confira sempre a prévia.",
      },
      {
        q: "Quantas letras pode ter um nick no Free Fire?",
        a: "O limite é definido pelo jogo, e alguns símbolos podem contar como mais de um caractere. Se o campo não deixar digitar mais, encurte o nick ou use uma moldura menor.",
      },
      {
        q: "O LetrasHub é do Free Fire?",
        a: "Não. O LetrasHub é um site independente e não tem nenhuma ligação com a Garena nem com o Free Fire.",
      },
    ],
    related: ["nick", "gothic", "cursive", "tiktok"],
  },

  instagram: {
    metaTitle: "Letras para Instagram: Bio e Nome Estilosos | LetrasHub",
    metaDescription:
      "Letras diferentes para Instagram: cursivas, negrito, pequenas e com símbolos para seu nome e bio. Copie, cole e veja onde funciona e onde não funciona.",
    h1: "Letras para Instagram",
    label: "Letras para Instagram",
    intro:
      "Deixe seu perfil do Instagram com a sua cara usando letras diferentes no nome e na bio. Digite, copie o estilo e cole ao editar o perfil.",
    sample: "Fotografia e viagens",
    featured: ["script", "boldScript", "sansBold", "smallCaps", "spaced", "hearts", "starFrame", "doubleStruck"],
    sections: [
      {
        heading: "Onde dá para usar letras bonitas no Instagram",
        blocks: [
          {
            type: "ul",
            items: [
              "Nome (o texto em negrito que aparece no perfil): aceita caracteres Unicode.",
              "Bio: o lugar perfeito para um título em cursiva ou negrito.",
              "Legendas, comentários e stories.",
              "Não no nome de usuário (@): o Instagram só permite letras, números, pontos e underline.",
            ],
          },
        ],
      },
      {
        heading: "Exemplos para a bio",
        blocks: [{ type: "examples", text: "Fotografia e viagens", styles: ["boldScript", "sansBold", "smallCaps", "hearts"] }],
      },
      {
        heading: "Como mudar nome ou bio",
        blocks: [
          {
            type: "ol",
            items: [
              "Copie o estilo que preferir no gerador.",
              "No Instagram, vá ao seu perfil e toque em «Editar perfil».",
              "Toque no campo «Nome» ou «Bio».",
              "Toque e segure e escolha «Colar». Complete com texto normal se quiser.",
              "Salve e veja como ficou o perfil.",
            ],
          },
        ],
      },
      {
        heading: "Dicas para uma bio fácil de ler",
        blocks: [
          {
            type: "ul",
            items: [
              "Use letras estilizadas só numa linha ou palavra-chave, não na bio inteira.",
              "Deixe em letra normal o que as pessoas podem querer buscar ou copiar, como cidade ou e-mail.",
              "Misture estilo e emojis com moderação para não poluir.",
              "Se puder, olhe seu perfil em outro celular: nem todo aparelho mostra os mesmos caracteres.",
            ],
          },
        ],
      },
      {
        heading: "Busca e acessibilidade",
        blocks: [
          {
            type: "p",
            text: "O Instagram pode não ligar «𝓐𝓷𝓪» a «Ana» na busca, porque para o sistema são caracteres diferentes. Se você quer ser encontrado pelo nome, mantenha o nome real em letras normais e use o estilo como enfeite. Leitores de tela também podem ter dificuldade com esses caracteres; veja a parte de acessibilidade na [página inicial](home).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Posso colocar letras bonitas no meu @ do Instagram?",
        a: "Não. O nome de usuário só aceita letras comuns, números, pontos e underline. Use as letras estilizadas no campo Nome ou na bio.",
      },
      {
        q: "Por que minha bio mostra quadradinhos?",
        a: "Seu aparelho não tem esses caracteres. Teste negrito ou cursiva em negrito, que têm suporte melhor.",
      },
      {
        q: "Usar essas letras prejudica minha conta?",
        a: "São caracteres de texto padrão. Mesmo assim, respeite as diretrizes da comunidade do Instagram e não use para se passar por ninguém.",
      },
    ],
    related: ["cursive", "small", "tiktok", "whatsapp"],
  },

  tiktok: {
    metaTitle: "Letras para TikTok: Nome, Bio e Comentários | LetrasHub",
    metaDescription:
      "Letras diferentes para TikTok: negrito, versalete, mini e com símbolos para nome, bio e comentários. Copie, cole e destaque seu perfil.",
    h1: "Letras para TikTok",
    label: "Letras para TikTok",
    intro:
      "Faça seu perfil do TikTok chamar atenção com letras diferentes. Digite seu nome ou frase, copie o estilo e cole ao editar o perfil ou nos comentários.",
    sample: "Dancinhas e humor",
    featured: ["sansBold", "smallCaps", "superscript", "script", "lightning", "starWaves", "bracketEach", "fullwidth"],
    sections: [
      {
        heading: "Quais partes do TikTok aceitam letras estilizadas",
        blocks: [
          {
            type: "ul",
            items: [
              "Nome (o nome de exibição do perfil).",
              "Bio.",
              "Legendas de vídeo e comentários.",
              "Não o nome de usuário (@), que só aceita letras, números, underline e pontos.",
            ],
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Dancinhas e humor", styles: ["sansBold", "smallCaps", "lightning", "fullwidth"] }],
      },
      {
        heading: "Como colocar no perfil",
        blocks: [
          {
            type: "ol",
            items: [
              "Copie o estilo no gerador.",
              "No TikTok, vá ao perfil e toque em «Editar perfil».",
              "Escolha «Nome» ou «Bio».",
              "Apague o texto atual, cole o novo e salve.",
            ],
          },
        ],
      },
      {
        heading: "Estilos que funcionam bem no feed",
        blocks: [
          {
            type: "p",
            text: "No TikTok a pessoa vê seu nome por um segundo enquanto rola o feed, então ganha quem é lido rápido: negrito sem serifa, versalete ou um símbolo simples como ⚡ ou ★. Estilos muito carregados, como a [gótica](gothic) ou a cursiva fina, ficam melhores na bio do que no nome.",
          },
          {
            type: "p",
            text: "Para o texto em cima do vídeo, o editor do TikTok tem as próprias fontes. As letras deste gerador são mais úteis no perfil, nas legendas e nos comentários.",
          },
        ],
      },
      {
        heading: "Limitações",
        blocks: [
          {
            type: "p",
            text: "Como em outras redes, a busca pode não achar palavras escritas com letras especiais, e algumas pessoas vão ver quadradinhos se o sistema for antigo. Deixe as palavras importantes (seu nome, seu tema) em letras normais. Se você também usa o Instagram, veja o guia de [letras para Instagram](instagram).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Posso usar letras bonitas no meu @ do TikTok?",
        a: "Não, o @ só aceita letras comuns, números, underline e pontos. No nome e na bio você pode usar.",
      },
      {
        q: "Funciona nos comentários?",
        a: "Sim, é só colar como qualquer texto. Use com moderação para o comentário continuar fácil de entender.",
      },
      {
        q: "Dá para usar no texto do vídeo?",
        a: "Você pode colar na ferramenta de texto, mas o resultado depende da fonte do editor. Teste antes de publicar.",
      },
    ],
    related: ["instagram", "small", "nick", "freefire"],
  },

  whatsapp: {
    metaTitle: "Letras para WhatsApp: Estilos e Formatação | LetrasHub",
    metaDescription:
      "Letras diferentes para WhatsApp: cursivas, em círculos e de cabeça para baixo para nome, recado e status, e a formatação nativa (negrito, itálico, riscado).",
    h1: "Letras para WhatsApp",
    label: "Letras para WhatsApp",
    intro:
      "Personalize seu nome, recado e mensagens do WhatsApp com letras diferentes. E explicamos a formatação que o WhatsApp já tem, que às vezes é a melhor opção.",
    sample: "Feliz aniversário",
    featured: ["script", "bold", "italic", "strike", "monospace", "circled", "hearts", "upsideDown"],
    sections: [
      {
        heading: "Primeiro: a formatação do próprio WhatsApp",
        blocks: [
          {
            type: "p",
            text: "O WhatsApp deixa formatar mensagens sem caracteres especiais, usando símbolos em volta do texto:",
          },
          {
            type: "ul",
            items: ["*texto* para negrito.", "_texto_ para itálico.", "~texto~ para riscado.", "```texto``` para monoespaçado."],
          },
          {
            type: "p",
            text: "Essa formatação é mais acessível e não tem problema de compatibilidade, então é a melhor escolha para mensagens comuns. As letras do LetrasHub servem para o que ela não cobre: estilos como cursiva caligráfica, letras em círculos ou texto de cabeça para baixo, e campos como nome e recado, onde a formatação do WhatsApp não funciona.",
          },
        ],
      },
      {
        heading: "Exemplos para WhatsApp",
        blocks: [{ type: "examples", text: "Feliz aniversário", styles: ["script", "circled", "hearts", "upsideDown"] }],
      },
      {
        heading: "Onde colar as letras",
        blocks: [
          {
            type: "ul",
            items: [
              "Seu nome de perfil e recado: em Configurações, toque na sua foto ou nome e edite cada campo.",
              "Nome e descrição de grupo (se você tiver permissão para editar).",
              "Status e mensagens.",
            ],
          },
          {
            type: "ol",
            items: ["Copie o estilo no gerador.", "Abra o campo que quer editar no WhatsApp.", "Toque e segure, escolha «Colar» e salve."],
          },
        ],
      },
      {
        heading: "Dicas",
        blocks: [
          {
            type: "ul",
            items: [
              "Em grupos grandes, um nome muito enfeitado pode atrapalhar na hora de te marcar com @.",
              "Se quer ser encontrado pelo nome, deixe o nome real legível.",
              "Texto de cabeça para baixo (ɐʇɐɯɹoɟ) é divertido para zoeira, mas cansa de ler; use em mensagens curtas.",
              "Para riscar numa mensagem, use ~texto~; para nome ou status, use as [letras riscadas](strike).",
            ],
          },
        ],
      },
      {
        heading: "Compatibilidade",
        blocks: [
          {
            type: "p",
            text: "O WhatsApp mostra os caracteres com a fonte do celular de cada pessoa. Se alguém do grupo tiver um aparelho antigo, pode ver quadradinhos no lugar de algumas letras. Negrito, cursiva e círculos são os mais seguros.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Como deixar em negrito no WhatsApp sem usar outro site?",
        a: "Escreva a palavra entre asteriscos, por exemplo *oi*. Quando enviar, ela aparece em negrito.",
      },
      {
        q: "Posso colocar letras bonitas no meu nome do WhatsApp?",
        a: "Sim, o nome de perfil aceita caracteres Unicode. Lembre que seus contatos normalmente veem o nome com que salvaram você.",
      },
      {
        q: "Existe letra colorida para WhatsApp?",
        a: "Não. A cor do texto é definida pelo app; caracteres Unicode não têm cor própria, a não ser os emojis.",
      },
    ],
    related: ["strike", "instagram", "cursive", "discord"],
  },

  discord: {
    metaTitle: "Letras para Discord: Nome, Apelidos e Formatação | LetrasHub",
    metaDescription:
      "Letras para Discord: estilos góticos, cursivos e com símbolos para nome de exibição e apelido de servidor, mais o markdown do Discord para negrito, riscado e código.",
    h1: "Letras para Discord",
    label: "Letras para Discord",
    intro:
      "Personalize seu nome de exibição e seus apelidos de servidor no Discord. Digite seu nome, escolha um estilo e copie; abaixo explicamos quais campos aceitam.",
    sample: "Corujinha",
    featured: ["fraktur", "boldScript", "monospace", "smallCaps", "doubleStruck", "negativeSquared", "cornerBrackets", "asian"],
    sections: [
      {
        heading: "Nome de usuário, nome de exibição e apelido",
        blocks: [
          {
            type: "ul",
            items: [
              "Nome de usuário: é único e só aceita letras minúsculas, números, underline e pontos. Aqui as letras bonitas não funcionam.",
              "Nome de exibição: aparece em todos os servidores e aceita caracteres Unicode.",
              "Apelido de servidor: um nome diferente só para um servidor, se você tiver permissão para mudar.",
            ],
          },
        ],
      },
      {
        heading: "Exemplos",
        blocks: [{ type: "examples", text: "Corujinha", styles: ["fraktur", "boldScript", "negativeSquared", "cornerBrackets"] }],
      },
      {
        heading: "Como mudar o nome de exibição ou apelido",
        blocks: [
          {
            type: "ol",
            items: [
              "Copie o estilo no gerador.",
              "Nome de exibição: abra Configurações de usuário → Minha conta (ou Perfis) e edite o nome de exibição.",
              "Apelido: no servidor, abra o menu do servidor ou seu perfil e escolha «Editar perfil do servidor» ou «Alterar apelido».",
              "Cole o texto e salve.",
            ],
          },
          { type: "note", text: "Os nomes dos menus podem variar entre o app do celular, o do computador e as atualizações." },
        ],
      },
      {
        heading: "Markdown do Discord para mensagens",
        blocks: [
          {
            type: "p",
            text: "Nas mensagens, o Discord tem formatação própria, mais acessível que caracteres especiais: **negrito**, *itálico*, __sublinhado__, ~~riscado~~ e `código`. Use isso no chat e deixe as letras bonitas para nomes, cargos e canais.",
          },
        ],
      },
      {
        heading: "Regras dos servidores",
        blocks: [
          {
            type: "p",
            text: "Muitos servidores têm regras para apelidos: alguns pedem nomes fáceis de mencionar e outros usam bots que mudam apelidos com caracteres especiais ou que começam com símbolos para aparecer no topo da lista. Leia as regras antes de usar um apelido muito enfeitado. Mais ideias em [nick bonito](nick) e [letras góticas](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Por que não consigo usar letras bonitas no meu usuário do Discord?",
        a: "O nome de usuário único só aceita minúsculas, números, underline e pontos. Use o estilo no nome de exibição ou no apelido.",
      },
      {
        q: "Posso usar essas letras em nome de canal?",
        a: "Se você tiver permissão de administrador, pode testar. Lembre que o Discord pode transformar alguns caracteres em nomes de canais de texto.",
      },
      {
        q: "Um bot mudou meu apelido. Por quê?",
        a: "Alguns servidores usam bots de moderação que limpam apelidos com símbolos. Veja as regras do servidor ou fale com a moderação.",
      },
    ],
    related: ["gothic", "nick", "strike", "whatsapp"],
  },
};

export default pages;
