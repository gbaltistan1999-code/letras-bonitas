import type { StylePageContent } from "@/types/content";
import type { ExtraStylePageKey } from "@/lib/routes";

/** Pages added in the second keyword batch (merged into ./styles.ts). */
const pages: Record<ExtraStylePageKey, StylePageContent> = {
  bold: {
    metaTitle: "Letras en Negrita para Copiar y Pegar 𝐍𝐞𝐠𝐫𝐢𝐭𝐚 | LetrasHub",
    metaDescription:
      "Convierte tu texto en letras en negrita (𝐧𝐞𝐠𝐫𝐢𝐭𝐚, 𝗻𝗲𝗴𝗿𝗶𝘁𝗮 y 𝙣𝙚𝙜𝙧𝙞𝙩𝙖) y pégalas donde no hay botón de negrita: bios, nombres, LinkedIn o comentarios.",
    h1: "Letras en negrita para copiar y pegar",
    label: "Letras en negrita",
    intro:
      "Resalta un nombre, un título o una palabra clave con letras en negrita que se mantienen al copiarlas, incluso en apps que no tienen botón de formato.",
    sample: "Oferta especial",
    featured: ["bold", "sansBold", "boldItalic", "sansBoldItalic", "boldSerifFrame", "boldAesthetic", "boldMinimal", "boldSparkle"],
    sections: [
      {
        heading: "Negrita con serifa, sin serifa e itálica",
        blocks: [
          {
            type: "p",
            text: "Unicode incluye varios alfabetos en negrita creados para la notación matemática: negrita con serifa (𝐀𝐛𝐜), negrita sin serifa (𝗔𝗯𝗰) y sus versiones inclinadas (𝑨𝒃𝒄, 𝘼𝙗𝙘). La negrita con serifa recuerda a un periódico; la sin serifa se ve más moderna y se lee mejor en pantallas pequeñas. Ambas incluyen números en negrita (𝟏𝟐𝟑).",
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Oferta especial 2x1", styles: ["bold", "sansBold", "boldItalic", "sansBoldItalic"] }],
      },
      {
        heading: "Dónde sirve la negrita Unicode",
        blocks: [
          {
            type: "ul",
            items: [
              "Bios y nombres de perfil de [Instagram](instagram) y [TikTok](tiktok), que no permiten dar formato.",
              "Publicaciones de LinkedIn, donde no existe botón de negrita en el texto del post.",
              "Comentarios, reseñas y descripciones de productos para destacar una palabra.",
              "Títulos dentro de una biografía: una línea en negrita y el resto normal.",
            ],
          },
          {
            type: "note",
            text: "En WhatsApp y Discord es mejor usar su formato propio (*texto* en WhatsApp, **texto** en Discord): es más accesible y lo entienden los buscadores del chat. Detalles en las guías de [WhatsApp](whatsapp) y [Discord](discord).",
          },
        ],
      },
      {
        heading: "Cómo copiar y pegar la negrita",
        blocks: [
          {
            type: "ol",
            items: [
              "Escribe tu texto en el generador.",
              "Elige entre negrita con o sin serifa y pulsa «Copiar».",
              "Pégalo en el campo de destino y revisa cómo se ve antes de publicar.",
            ],
          },
        ],
      },
      {
        heading: "Úsala con moderación",
        blocks: [
          {
            type: "p",
            text: "Un párrafo entero en negrita Unicode es difícil de leer y los lectores de pantalla pueden leerlo letra por letra. Además, los buscadores de muchas plataformas no relacionan «𝐨𝐟𝐞𝐫𝐭𝐚» con «oferta». Lo ideal es poner en negrita solo dos o tres palabras importantes y dejar el resto en texto normal. Si quieres un toque más suave, prueba las [letras en itálica](italic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué la negrita no se ve igual en todos los móviles?",
        a: "Cada sistema dibuja estos caracteres con su propia fuente. La negrita es de los estilos más compatibles, pero el grosor y la forma pueden variar un poco.",
      },
      {
        q: "¿La negrita funciona con tildes y ñ?",
        a: "Sí: la tilde se añade como acento combinado sobre la letra en negrita (por ejemplo 𝐧̃). En algunas fuentes queda ligeramente desplazada.",
      },
      {
        q: "¿Puedo poner negrita en mi @ de Instagram?",
        a: "No. Los nombres de usuario solo aceptan letras normales, números, puntos y guiones bajos. Usa la negrita en el nombre visible o en la biografía.",
      },
    ],
    related: ["italic", "cursive", "instagram", "whatsapp"],
  },

  italic: {
    metaTitle: "Letras en Itálica para Copiar y Pegar 𝐼𝑡𝑎́𝑙𝑖𝑐𝑎 | LetrasHub",
    metaDescription:
      "Generador de letras en itálica: 𝑖𝑡𝑎́𝑙𝑖𝑐𝑎, 𝘪𝘵𝘢́𝘭𝘪𝘤𝘢 sin serifa y 𝑵𝒆𝒈𝒓𝒊𝒕𝒂 itálica. Copia texto inclinado para bios, citas, títulos y mensajes.",
    h1: "Letras en itálica para copiar y pegar",
    label: "Letras en itálica",
    intro:
      "La itálica inclina las letras para dar énfasis sin gritar. Escribe tu texto y elige entre itálica con serifa, sin serifa o en negrita.",
    sample: "Una frase especial",
    featured: ["italic", "sansItalic", "boldItalic", "sansBoldItalic", "italicHearts", "italicBow", "italicMix", "italicStarWave"],
    sections: [
      {
        heading: "Qué es la itálica Unicode",
        blocks: [
          {
            type: "p",
            text: "En tipografía, la itálica se usa para citas, títulos de obras, palabras extranjeras o para destacar algo con suavidad. Unicode tiene alfabetos itálicos en su bloque matemático: itálica con serifa (𝐴𝑏𝑐), itálica sin serifa (𝘈𝘣𝘤) y sus versiones en negrita (𝑨𝒃𝒄, 𝘼𝙗𝙘).",
          },
          {
            type: "note",
            text: "Detalle curioso: la «h» itálica con serifa no está en el bloque matemático, porque ya existía como ℎ (la constante de Planck). El generador usa ese carácter automáticamente.",
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Una frase especial", styles: ["italic", "sansItalic", "boldItalic", "italicHearts"] }],
      },
      {
        heading: "Itálica, cursiva y negrita: cuál elegir",
        blocks: [
          {
            type: "ul",
            items: [
              "Itálica: elegante y discreta, ideal para citas o una segunda línea en la bio.",
              "[Cursiva](cursive): imita la escritura a mano, más decorativa.",
              "[Negrita](bold): para lo que tiene que verse primero, como un título o una oferta.",
            ],
          },
        ],
      },
      {
        heading: "Cómo usarla",
        blocks: [
          {
            type: "ol",
            items: [
              "Escribe la frase en el generador.",
              "Copia la itálica que prefieras.",
              "Pégala en tu bio, publicación o mensaje. En WhatsApp también puedes escribir _texto_ para cursiva nativa.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "La itálica con serifa no tiene números propios, así que los dígitos se quedan normales. Como con cualquier letra Unicode especial, evita usarla en textos largos o en información que la gente necesite buscar o copiar.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿La itálica es lo mismo que la cursiva?",
        a: "No exactamente: la itálica solo inclina la letra; la cursiva imita la escritura a mano con letras enlazadas y mayúsculas decoradas.",
      },
      {
        q: "¿Por qué la «h» se ve un poco distinta?",
        a: "Porque es el carácter ℎ del bloque «Letterlike Symbols». Unicode lo reutiliza para la itálica matemática y tu dispositivo puede dibujarlo con otra fuente.",
      },
      {
        q: "¿Funciona en Instagram y TikTok?",
        a: "Sí, en el nombre visible, la biografía, las descripciones y los comentarios. No en el nombre de usuario (@).",
      },
    ],
    related: ["bold", "cursive", "small", "instagram"],
  },

  bubble: {
    metaTitle: "Letras en Burbuja para Copiar ⓑⓤⓡⓑⓤⓙⓐ y 🅑🅤🅡🅑🅤🅙🅐 | LetrasHub",
    metaDescription:
      "Letras en burbuja o dentro de círculos: ⓑⓤⓡⓑⓤⓙⓐ blancas, 🅑🅤🅡🅑🅤🅙🅐 negras y números ①②③. Copia y pega en tu bio, nick o mensajes.",
    h1: "Letras en burbuja (círculos) para copiar y pegar",
    label: "Letras en burbuja",
    intro:
      "Encierra cada letra en un círculo para un look redondo y divertido. Elige entre burbujas blancas, burbujas negras o combinaciones con símbolos.",
    sample: "Hola amigos",
    featured: ["circled", "negativeCircled", "bubbleMix", "bubbleDarkAesthetic", "bubbleDarkFrame", "bubbleDots", "parenthesized", "kaoLove"],
    initialCategory: "enclosed",
    sections: [
      {
        heading: "De dónde salen las letras en círculos",
        blocks: [
          {
            type: "p",
            text: "Las burbujas blancas (ⓐⓑⓒ, ⒶⒷⒸ) pertenecen al bloque «Enclosed Alphanumerics» de Unicode, que también incluye números en círculos del ① al ⑳. Las burbujas negras (🅐🅑🅒) están en el bloque suplementario y solo existen en mayúsculas, por eso el generador las muestra así aunque escribas en minúscula.",
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Hola amigos 123", styles: ["circled", "negativeCircled", "bubbleMix", "parenthesized"] }],
      },
      {
        heading: "Ideas para usarlas",
        blocks: [
          {
            type: "ul",
            items: [
              "Iniciales o una palabra corta en tu bio: ⓛⓞⓥⓔ, ⓢⓣⓨⓛⓔ.",
              "Listas numeradas con ① ② ③ en publicaciones y descripciones.",
              "Nicks redondos y fáciles de reconocer; más ideas en [letras para nick](nick).",
              "Mensajes cariñosos en [WhatsApp](whatsapp).",
            ],
          },
        ],
      },
      {
        heading: "Cómo pegarlas",
        blocks: [
          {
            type: "ol",
            items: [
              "Escribe tu texto y elige burbujas blancas o negras.",
              "Pulsa «Copiar».",
              "Pega en la app y revisa: las burbujas negras pueden no verse en sistemas antiguos.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "Las tildes y la ñ se añaden encima del círculo como acento combinado, lo que puede verse algo descolocado. Las burbujas ocupan más espacio que una letra normal, así que en nicks con límite de longitud conviene usarlas solo en una palabra. Si prefieres cuadros en vez de círculos, mira las [letras cuadradas](square).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué las burbujas negras salen en mayúsculas?",
        a: "Porque Unicode solo incluye letras mayúsculas dentro de círculos negros. No existe una versión en minúscula.",
      },
      {
        q: "¿Hay números en burbuja?",
        a: "Sí: ⓪ y del ① al ⑳ en círculos blancos, y ❶ a ❾ en círculos negros.",
      },
      {
        q: "¿Las letras en burbuja funcionan en Free Fire?",
        a: "Muchas veces sí, pero cada juego decide qué caracteres acepta. Prueba la vista previa antes de confirmar el cambio de nombre.",
      },
    ],
    related: ["square", "aesthetic", "symbols", "tiktok"],
  },

  square: {
    metaTitle: "Letras Cuadradas para Copiar y Pegar 🅲🆄🅰🅳🆁🅾 | LetrasHub",
    metaDescription:
      "Letras dentro de cuadros: 🄲🅄🄰🄳🅁🄾 blancos, 🅲🆄🅰🅳🆁🅾 negros, letras en cajas y bloques. Copia y pega para nicks, títulos y bios.",
    h1: "Letras cuadradas para copiar y pegar",
    label: "Letras cuadradas",
    intro:
      "Letras encerradas en cuadros blancos o negros, con un look de cartel o de teclado. Escribe tu texto y elige el estilo de caja que más te guste.",
    sample: "GAME OVER",
    featured: ["squared", "negativeSquared", "boxed", "squareAesthetic", "blocks", "boldBlocks", "thickBox", "bracketEach", "layerBox", "crazyBoxes"],
    sections: [
      {
        heading: "Tipos de letras cuadradas",
        blocks: [
          {
            type: "ul",
            items: [
              "Cuadros blancos (🄰🄱🄲): solo mayúsculas, del bloque suplementario de alfanuméricos encerrados.",
              "Cuadros negros (🅰🅱🅲): también solo mayúsculas, con mucho contraste.",
              "Letras en cajas (a⃞b⃞c⃞): la letra original con un cuadro combinado alrededor; conserva minúsculas.",
              "Corchetes por letra (【a】【b】) y bloques decorativos para títulos.",
            ],
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Game Over", styles: ["squared", "negativeSquared", "boxed", "bracketEach"] }],
      },
      {
        heading: "Ojo: algunas letras se convierten en emoji",
        blocks: [
          {
            type: "p",
            text: "Cuatro cuadros negros son también emoji: 🅰 🅱 🅾 🅿 (los de los grupos sanguíneos y el aparcamiento). En muchos móviles esas cuatro letras aparecen en color y más grandes que el resto. No es un error del generador; es como Unicode y los sistemas tratan esos caracteres.",
          },
        ],
      },
      {
        heading: "Dónde quedan bien",
        blocks: [
          {
            type: "ul",
            items: [
              "Palabras cortas en mayúsculas: NEW, LIVE, VIP, PRO.",
              "Nombres de clanes y nicks llamativos; más ideas en [letras gamer](gamer).",
              "Encabezados en servidores de [Discord](discord) o descripciones de canales.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "Los cuadros blancos y negros no tienen minúsculas ni tildes propias, y los números no cambian. Las letras en cajas (con el cuadro combinado) dependen mucho de la fuente: en algunos dispositivos el cuadro queda desplazado. Para un look redondo, prueba las [letras en burbuja](bubble).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué 🅰 🅱 🅾 🅿 salen en color?",
        a: "Porque esos cuatro caracteres también son emoji. El sistema los muestra con su diseño de emoji en lugar del cuadro negro simple.",
      },
      {
        q: "¿Hay letras cuadradas en minúscula?",
        a: "No en los cuadros blancos y negros. El estilo «letras en cajas» sí conserva las minúsculas porque añade el cuadro sobre la letra original.",
      },
      {
        q: "¿Puedo usarlas en mi nombre de Discord?",
        a: "En el nombre visible y en el apodo del servidor, sí. En el nombre de usuario único, no.",
      },
    ],
    related: ["bubble", "gamer", "symbols", "discord"],
  },

  underline: {
    metaTitle: "Letras Subrayadas para Copiar y Pegar (S̲u̲b̲r̲a̲y̲a̲d̲o̲) | LetrasHub",
    metaDescription:
      "Generador de letras subrayadas: s̲u̲b̲r̲a̲y̲a̲d̲o̲, doble subrayado, subrayado ondulado y con puntos. Copia texto subrayado para bios, títulos y mensajes.",
    h1: "Letras subrayadas para copiar y pegar",
    label: "Letras subrayadas",
    intro:
      "Subraya tu texto con una línea simple, doble, ondulada o de puntos que se mantiene al copiarlo, incluso donde no existe el botón de subrayado.",
    sample: "Importante",
    featured: ["underline", "doubleUnderline", "dotBelow", "tildeBelow", "doubleMacronBelow", "seagullBelow", "bridgeBelow", "arrowBelow", "arrowsBelow", "overline"],
    sections: [
      {
        heading: "Cómo funciona el subrayado Unicode",
        blocks: [
          {
            type: "p",
            text: "Unicode no tiene letras subrayadas como tales. El efecto se consigue añadiendo después de cada letra un carácter combinante que se dibuja debajo: U+0332 para la línea simple, U+0333 para la doble, y otros para puntos, ondas o flechas. Por eso funciona con tildes, ñ, números y casi cualquier alfabeto.",
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Muy importante", styles: ["underline", "doubleUnderline", "dotBelow", "tildeBelow"] }],
      },
      {
        heading: "Para qué usarlas",
        blocks: [
          {
            type: "ul",
            items: [
              "Marcar la palabra clave de una bio o un título.",
              "Firmas y encabezados en mensajes.",
              "Decorar un nick con doble subrayado o puntos.",
            ],
          },
          {
            type: "note",
            text: "En Discord puedes subrayar escribiendo __texto__ y es más accesible. Las letras subrayadas de LetrasHub son útiles en nombres, bios y apps sin formato.",
          },
        ],
      },
      {
        heading: "Subrayado y tachado",
        blocks: [
          {
            type: "p",
            text: "Si lo que buscas es una línea que atraviese el texto, ve a las [letras tachadas](strike). Ambos estilos usan la misma técnica de caracteres combinantes, así que comparten ventajas y limitaciones.",
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "Los espacios no se subrayan, para que el texto se pueda leer y copiar mejor; por eso la línea se corta entre palabras. Según la fuente, la línea puede quedar con pequeños huecos entre letras o algo baja. El texto ocupa el doble de caracteres, algo a tener en cuenta en campos con límite.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué la línea se corta entre palabras?",
        a: "Porque el generador no añade la línea a los espacios. Así el texto sigue siendo legible y los espacios no se convierten en símbolos extraños.",
      },
      {
        q: "¿El subrayado funciona en Instagram?",
        a: "Sí, puedes pegarlo en el nombre, la bio y los comentarios. Cómo se ve depende de la fuente del móvil de cada persona.",
      },
      {
        q: "¿Cuenta más caracteres el texto subrayado?",
        a: "Sí, cada letra lleva un carácter extra para la línea, así que ocupa aproximadamente el doble.",
      },
    ],
    related: ["strike", "bold", "whatsapp", "discord"],
  },

  upsideDown: {
    metaTitle: "Letras al Revés para Copiar y Pegar (ʇxǝʇ ɐ ʍoɹɹǝ) | LetrasHub",
    metaDescription:
      "Escribe letras al revés y boca abajo: sǝʌǝɹ lɐ sɐɹʇǝl, texto en espejo e invertido. Copia y pega para bromas, nicks y mensajes.",
    h1: "Letras al revés para copiar y pegar",
    label: "Letras al revés",
    intro:
      "Da la vuelta a tu texto: boca abajo, en espejo o simplemente invertido. Perfecto para bromas y mensajes que obligan a girar el móvil.",
    sample: "Hola mundo",
    featured: ["upsideDown", "mirrored", "reversed", "kaoFlip"],
    initialCategory: "flip",
    sections: [
      {
        heading: "Tres formas de poner el texto al revés",
        blocks: [
          {
            type: "ul",
            items: [
              "Boca abajo (ɐpunɯ ɐloH): cada letra se cambia por una parecida girada y el orden se invierte, así se lee girando el móvil.",
              "Espejo: las letras se reflejan como en un espejo y también se invierte el orden.",
              "Invertido: solo cambia el orden de las letras (odnum aloH), sin cambiar su forma.",
            ],
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Hola mundo", styles: ["upsideDown", "mirrored", "reversed", "kaoFlip"] }],
      },
      {
        heading: "Cómo se consigue sin fuentes especiales",
        blocks: [
          {
            type: "p",
            text: "Unicode no tiene un alfabeto «al revés». El efecto usa caracteres de otros sistemas que, por casualidad, parecen letras giradas: muchos vienen del Alfabeto Fonético Internacional (ɐ, ǝ, ɹ, ʇ), otros del griego o de símbolos matemáticos (∀, ⅄). Por eso algunas mayúsculas son aproximaciones.",
          },
        ],
      },
      {
        heading: "Ideas divertidas",
        blocks: [
          {
            type: "ul",
            items: [
              "Mensajes de broma en [WhatsApp](whatsapp): «¿se te cayó el móvil?».",
              "La clásica mesa volteada: (╯°□°)╯︵ ɐsǝɯ. Más caritas en [kaomoji](kaomoji).",
              "Comentarios llamativos en [TikTok](tiktok).",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "El texto al revés es difícil de leer y los lectores de pantalla no lo interpretan. Úsalo en frases cortas y nunca para información importante. Si buscas otros alfabetos curiosos, mira las [letras raras](weird).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo leo un texto boca abajo?",
        a: "Gira el móvil 180 grados. Como el orden de las letras también se invierte, al girarlo se lee de izquierda a derecha.",
      },
      {
        q: "¿Por qué algunas letras no se ven exactamente giradas?",
        a: "Porque Unicode no tiene versiones giradas de todas las letras; se usan los caracteres más parecidos disponibles.",
      },
      {
        q: "¿Funcionan las tildes al revés?",
        a: "La letra se gira y la tilde se mantiene como acento combinado, pero no se coloca debajo. El resultado se entiende, aunque no es perfecto.",
      },
    ],
    related: ["weird", "kaomoji", "whatsapp", "tiktok"],
  },

  weird: {
    metaTitle: "Letras Raras para Copiar y Pegar: 卂丂ㄒ丨卂, ₥Ø₦ɆĐ₳, ᚱᚢᚾᚨ | LetrasHub",
    metaDescription:
      "Letras raras y diferentes para copiar: estilo asiático 卂丂ㄒ丨卂, monedas ₳₿, runas ᚱᚢᚾᚨ, cirílico ДФЯ, glitch y más. Ideales para nicks únicos.",
    h1: "Letras raras para copiar y pegar",
    label: "Letras raras",
    intro:
      "¿Buscas algo que nadie más tenga? Estas letras usan caracteres de otros alfabetos que se parecen al nuestro: asiático, runas, monedas, cirílico, glitch y más.",
    sample: "Letras raras",
    featured: ["asian", "currency", "runic", "fauxCyrillic", "greekish", "hooked", "syllabic", "cherokee", "barred", "thai", "fairy", "glitch", "mixed"],
    initialCategory: "rare",
    sections: [
      {
        heading: "Qué son las letras raras",
        blocks: [
          {
            type: "p",
            text: "Son letras «disfrazadas»: cada letra latina se sustituye por un carácter de otro sistema de escritura que se le parece. Por ejemplo, el estilo asiático usa caracteres chinos y japoneses (卂 por A, 乃 por B), el estilo de monedas usa símbolos como ₳ o ₦, y el rúnico usa runas germánicas antiguas (ᚱ, ᚢ, ᚾ).",
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Letras raras", styles: ["asian", "currency", "runic", "fauxCyrillic", "glitch"] }],
      },
      {
        heading: "Para qué se usan",
        blocks: [
          {
            type: "ul",
            items: [
              "Nicks únicos en juegos; consejos en [letras para nick](nick) y [Free Fire](freefire).",
              "Nombres de perfil que llaman la atención.",
              "Títulos con estética misteriosa o retro, junto a [letras góticas](gothic).",
            ],
          },
        ],
      },
      {
        heading: "Úsalas con responsabilidad",
        blocks: [
          {
            type: "p",
            text: "Como estas letras imitan a otras, algunos sistemas de seguridad las vigilan: a veces se usan para engañar con nombres o enlaces que parecen legítimos. No las uses para imitar a otra persona, a una marca o a una cuenta oficial. Además, los buscadores y lectores de pantalla no las leen como texto normal.",
          },
        ],
      },
      {
        heading: "Compatibilidad",
        blocks: [
          {
            type: "p",
            text: "Los estilos asiático y de monedas suelen verse bien en móviles modernos. Las runas, el estilo cheroqui o el tailandés dependen de que el dispositivo tenga fuentes para esos alfabetos; si ves cuadritos, prueba otro estilo. Para más adornos, combina con las [letras con símbolos](symbols).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Las letras raras son de otro idioma?",
        a: "Usan caracteres de otros alfabetos, pero no forman palabras en esos idiomas: solo se eligen porque se parecen a nuestras letras.",
      },
      {
        q: "¿Por qué algunos juegos las rechazan?",
        a: "Muchos juegos limitan los caracteres permitidos en los nombres. Los estilos raros son los que más probabilidades tienen de ser rechazados.",
      },
      {
        q: "¿Cuál es el estilo raro más compatible?",
        a: "En general, el estilo de monedas y el asiático, porque usan caracteres muy comunes en los sistemas actuales.",
      },
    ],
    related: ["symbols", "gothic", "upsideDown", "nick"],
  },

  symbols: {
    metaTitle: "Letras con Símbolos para Copiar y Pegar ꧁★彡 | LetrasHub",
    metaDescription:
      "Letras con símbolos para nicks y bios: ꧁꧂, ★彡, 亗, 『』, ♡ y cientos de adornos. Genera tu texto decorado o copia símbolos sueltos.",
    h1: "Letras con símbolos para copiar y pegar",
    label: "Letras con símbolos",
    intro:
      "Decora tu nombre o frase con marcos, estrellas, corazones y adornos. Genera el texto completo o copia los símbolos sueltos para combinarlos a tu gusto.",
    sample: "Mi nombre",
    featured: ["javanese", "starWaves", "kanjiFrame", "lenticular", "cornerBrackets", "wings", "hearts", "floralBorder", "crownBorder", "diamondsBetween", "arrows", "heartLine"],
    initialCategory: "decorated",
    sections: [
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Mi nombre", styles: ["javanese", "starWaves", "kanjiFrame", "cornerBrackets", "hearts"] }],
      },
      {
        heading: "Símbolos sueltos para copiar",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Marcos", text: "꧁ ꧂ 『 』 【 】 「 」 ﴾ ﴿ ⟦ ⟧" },
              { label: "Estrellas", text: "★ ☆ ✦ ✧ ✩ ✪ ✫ ✬ ✭ ✮ ✯ ✰ ⋆ 彡" },
              { label: "Corazones", text: "♡ ♥ ❤ ❥ ❣ ღ" },
              { label: "Flores", text: "✿ ❀ ❁ ✾ ❃ ❋ ✽" },
              { label: "Para nicks", text: "亗 乂 ツ ×͜× ☯ ♛ ♔ ⚔ ☠ ⚡ 么" },
              { label: "Flechas y líneas", text: "➳ ➵ ➶ ➸ ➹ ➺ ⇝ ⇜ ━ ═ ─ ~ ≈" },
            ],
          },
        ],
      },
      {
        heading: "De dónde vienen estos símbolos",
        blocks: [
          {
            type: "p",
            text: "Unicode agrupa los símbolos por bloques: los «Dingbats» (✿, ❀, ➳) y los «Símbolos misceláneos» (★, ☯, ♛) vienen de antiguas fuentes decorativas; 亗 y 乂 son caracteres chinos; ꧁ y ꧂ son signos de puntuación de la escritura javanesa; y 『』 o 【】 son comillas y corchetes del japonés y el chino.",
          },
        ],
      },
      {
        heading: "Cómo combinarlos",
        blocks: [
          {
            type: "ol",
            items: [
              "Escribe tu nombre en el generador y elige un estilo con símbolos, o usa el selector «Adorno».",
              "Si quieres algo personalizado, copia símbolos sueltos de la lista de arriba.",
              "Pégalo todo en un borrador, ajusta y copia el resultado final.",
            ],
          },
          {
            type: "note",
            text: "Menos es más: un marco o un par de símbolos bastan. Demasiados adornos hacen el texto ilegible y aumentan las probabilidades de que un juego lo rechace.",
          },
        ],
      },
      {
        heading: "Compatibilidad",
        blocks: [
          {
            type: "p",
            text: "Casi todos estos símbolos se ven bien en móviles actuales, pero algunos (como ꧁꧂) necesitan fuentes que no todos los sistemas antiguos tienen. Para ideas de nicks, mira [letras para nick](nick) y [Free Fire](freefire); para combinaciones suaves, las [letras aesthetic](aesthetic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo pongo símbolos a los lados de mi nombre?",
        a: "Escribe tu nombre en el generador y elige un estilo con marco, o usa el selector «Adorno» para envolver cualquier estilo con el símbolo que quieras.",
      },
      {
        q: "¿Qué significa 亗?",
        a: "Es un carácter chino poco común. En la comunidad gamer se usa por su forma decorativa, no por su significado.",
      },
      {
        q: "¿Por qué algunos símbolos salen como cuadritos?",
        a: "Tu dispositivo no tiene una fuente con ese símbolo. Prueba otro o actualiza el sistema.",
      },
    ],
    related: ["weird", "nick", "freefire", "aesthetic"],
  },

  aesthetic: {
    metaTitle: "Letras Aesthetic y Tiernas para Copiar y Pegar ✧˖° | LetrasHub",
    metaDescription:
      "Letras aesthetic y tiernas: cursivas suaves, ✨ brillos, 🌸 flores, 🎀 lazos y estrellas ☆. Copia textos bonitos para tu bio de Instagram o TikTok.",
    h1: "Letras aesthetic y tiernas para copiar y pegar",
    label: "Letras aesthetic",
    intro:
      "Letras suaves y tiernas con brillos, flores, lazos y estrellitas, perfectas para una bio con estética cuidada. Escribe tu texto y elige tu vibe.",
    sample: "buenos días",
    featured: ["scriptStarsAesthetic", "scriptMoon", "scriptCloud", "boldAesthetic", "squareAesthetic", "bubbleDarkAesthetic", "cuteSakura", "cuteBow", "cuteButterfly", "smallMoon", "elegantStars", "tenderStars"],
    sections: [
      {
        heading: "Qué significa «aesthetic»",
        blocks: [
          {
            type: "p",
            text: "En redes sociales, «aesthetic» se usa para hablar de una estética visual cuidada y coherente: colores pastel, tipografías delicadas, brillos y pequeños adornos. En texto, eso se traduce en cursivas suaves, letras pequeñas, emojis tiernos y separadores bonitos.",
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "buenos días", styles: ["scriptStarsAesthetic", "cuteSakura", "cuteBow", "smallMoon"] }],
      },
      {
        heading: "Adornos aesthetic para copiar",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Separadores", text: "˚ ༘ ♡ ⋆｡˚ ✧˖°" },
              { label: "Brillos", text: "✨ ⋆ ˚｡⋆ ✧ ✦ ⊹" },
              { label: "Flores y lazos", text: "🌸 🌷 🎀 🦋 🍓 🧸" },
              { label: "Línea de bio", text: "⋆｡‧˚ʚ♡ɞ˚‧｡⋆" },
            ],
          },
        ],
      },
      {
        heading: "Cómo armar una bio aesthetic",
        blocks: [
          {
            type: "ol",
            items: [
              "Elige un estilo principal (cursiva suave o letras pequeñas) para tu nombre o frase.",
              "Añade uno o dos adornos de la lista, sin pasarte.",
              "Mantén en texto normal lo importante, como tu ciudad o un enlace.",
              "Pégalo en tu bio de [Instagram](instagram) o [TikTok](tiktok) y revisa cómo se ve.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "Los emojis y adornos ocupan espacio en bios con límite de caracteres, y algunos símbolos delicados (˚, ⊹) pueden no verse en móviles antiguos. Para más estilos suaves, mira las [letras cursivas](cursive) o las [letras en burbuja](bubble); para caritas tiernas, los [kaomoji](kaomoji).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué letras son las más aesthetic?",
        a: "Las cursivas finas, las letras pequeñas (versalitas) y las combinaciones con brillos o flores son las más usadas para una estética suave.",
      },
      {
        q: "¿Puedo usar letras aesthetic en mi nombre de usuario?",
        a: "No en el @ de Instagram o TikTok. Úsalas en el nombre visible, la bio, las descripciones y los comentarios.",
      },
      {
        q: "¿Los emojis cuentan como varios caracteres?",
        a: "En muchas plataformas sí: algunos emojis se cuentan como dos o más caracteres en el límite de la bio.",
      },
    ],
    related: ["cursive", "kaomoji", "instagram", "bubble"],
  },

  gamer: {
    metaTitle: "Letras Gamer para Copiar y Pegar ▄︻デ 𝔊𝔞𝔪𝔢𝔯 ☠ | LetrasHub",
    metaDescription:
      "Letras gamer para tu nick, clan o canal: ▄︻デ, ⚔, ☠, ♛, ᴾᴿᴼ y estilos góticos. Copia y pega en juegos, Discord, Twitch o YouTube.",
    h1: "Letras gamer para copiar y pegar",
    label: "Letras gamer",
    intro:
      "Dale a tu nombre de jugador un estilo competitivo: rifles, espadas, calaveras, coronas y letras góticas. Escribe tu nick y elige tu marco gamer.",
    sample: "Sniper",
    featured: ["gameSniper", "gameSwords", "gameSkull", "gameCrown", "gamePro", "gameLightning", "gameRoyal", "gameProX", "gameSport", "gothicSkull", "javanese", "kanjiFrame"],
    initialCategory: "gaming",
    sections: [
      {
        heading: "Ejemplos de letras gamer",
        blocks: [{ type: "examples", text: "Sniper", styles: ["gameSniper", "gameSwords", "gameSkull", "gameCrown", "gamePro"] }],
      },
      {
        heading: "Dónde usar letras gamer",
        blocks: [
          {
            type: "ul",
            items: [
              "Tu nick dentro del juego (si lo permite): consejos en [letras para nick](nick) y [Free Fire](freefire), o elige uno de nuestros [nombres para Free Fire](/nombres-para-free-fire).",
              "Nombre y apodos de servidor en [Discord](discord).",
              "Títulos de directos y vídeos, descripciones de canal y paneles.",
              "Nombre de clan o gremio: todos con el mismo símbolo y su nombre.",
            ],
          },
        ],
      },
      {
        heading: "Ideas de nicks gamer",
        blocks: [
          {
            type: "copy",
            items: ["▄︻デ Sniper ══━一", "⚔ 𝕷𝖊𝖞𝖊𝖓𝖉𝖆 ⚔", "☠ ʙᴀʀᴏɴ ☠", "♛ 𝗥𝗘𝗬 ♛", "ᴾᴿᴼ ɢᴀᴍᴇʀ ✓"],
          },
          {
            type: "note",
            text: "Son ejemplos para inspirarte: cámbialos por tu propio nombre en el generador. No copies el nick exacto de un jugador o creador conocido.",
          },
        ],
      },
      {
        heading: "Antes de cambiar tu nombre",
        blocks: [
          {
            type: "ol",
            items: [
              "Comprueba que el juego acepta los símbolos: muchos solo admiten letras y números básicos.",
              "Revisa que el nick se pueda leer y buscar; tus amigos tienen que poder encontrarte.",
              "Si el cambio cuesta dinero o recursos del juego, pruébalo antes en otra plataforma.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "El rifle ▄︻デ y las líneas ══━ ocupan muchos caracteres, así que no siempre caben en un nick. Los nombres de usuario de muchas plataformas de streaming solo admiten caracteres básicos; ahí usa el estilo en títulos y paneles. Para un look medieval, mira las [letras góticas](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es el mejor símbolo gamer?",
        a: "Depende de tu estilo: ⚔ para algo épico, ☠ para algo agresivo, ♛ para algo de «rey». Elige uno que se vea bien también en el móvil de tus amigos.",
      },
      {
        q: "¿Por qué el juego no acepta mi nick gamer?",
        a: "El juego decide qué caracteres permite. Quita símbolos uno a uno o usa un estilo más simple como versalitas.",
      },
      {
        q: "¿Puedo usar estas letras en Twitch o YouTube?",
        a: "En títulos y descripciones normalmente sí. En el nombre de usuario, cada plataforma tiene sus reglas; revisa qué te deja guardar.",
      },
    ],
    related: ["nick", "freefire", "gothic", "discord"],
  },

  kaomoji: {
    metaTitle: "Kaomoji y Caritas para Copiar y Pegar (◕‿◕) ʕ•ᴥ•ʔ | LetrasHub",
    metaDescription:
      "Kaomoji y caritas japonesas para copiar: (◕‿◕), ʕ•ᴥ•ʔ, ¯\\_(ツ)_/¯, (╯°□°)╯︵ ┻━┻ y más. Úsalas solas o junto a tu texto con estilo.",
    h1: "Kaomoji y caritas para copiar y pegar",
    label: "Kaomoji",
    intro:
      "Los kaomoji son caritas hechas con caracteres: (◕‿◕), ʕ•ᴥ•ʔ, ¯\\_(ツ)_/¯. Copia una de la lista o escribe tu texto para combinarlo con una carita.",
    sample: "hola",
    featured: ["kaoHug", "kaoBear", "kaoSparkle", "kaoShrug", "kaoFlip", "kaoLove", "kaoCry", "kaoDance", "kaoLenny", "kaoConfused", "kaoHappy", "kaoHappySmall"],
    initialCategory: "kaomoji",
    sections: [
      {
        heading: "Qué son los kaomoji",
        blocks: [
          {
            type: "p",
            text: "«Kaomoji» viene del japonés: kao (cara) y moji (carácter). A diferencia de los emoticonos occidentales como :) que se leen de lado, los kaomoji se leen de frente: (^_^). Se popularizaron en foros e internet japonés desde los años 80 y hoy se usan en todo el mundo.",
          },
        ],
      },
      {
        heading: "Kaomoji para copiar",
        blocks: [
          {
            type: "copy",
            items: [
              { label: "Felices", text: "(◕‿◕) (＾▽＾) (≧◡≦) ٩(◕‿◕)۶" },
              { label: "Amor", text: "(♡˙︶˙♡) (っ◔◡◔)っ ♥ (´｡• ᵕ •｡`) ♡" },
              { label: "Tristes", text: "(ಥ﹏ಥ) (╥﹏╥) (；￣Д￣)" },
              { label: "Enfado", text: "(╯°□°)╯︵ ┻━┻ (ಠ益ಠ) (￣^￣)" },
              { label: "Animales", text: "ʕ•ᴥ•ʔ (=^･ω･^=) ▼・ᴥ・▼" },
              { label: "Encogerse de hombros", text: "¯\\_(ツ)_/¯" },
              { label: "Abrazo", text: "(づ｡◕‿‿◕｡)づ" },
            ],
          },
        ],
      },
      {
        heading: "Kaomoji con tu texto",
        blocks: [
          {
            type: "p",
            text: "El generador de arriba combina caritas con tu texto en estilo: por ejemplo un abrazo con letras cursivas o la mesa volteada con tu texto boca abajo. Escribe y prueba.",
          },
          { type: "examples", text: "hola", styles: ["kaoHug", "kaoBear", "kaoShrug", "kaoFlip"] },
        ],
      },
      {
        heading: "Dónde usarlos",
        blocks: [
          {
            type: "ul",
            items: [
              "Mensajes en [WhatsApp](whatsapp) y [Discord](discord), donde aportan emoción sin emojis.",
              "Bios y comentarios con estilo [aesthetic](aesthetic).",
              "Nicks divertidos, aunque muchos juegos no aceptan estos caracteres.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "Algunos kaomoji usan caracteres de alfabetos poco comunes (canarés, tailandés…) y pueden verse como cuadritos en móviles antiguos. En Discord y otras apps con markdown, los guiones bajos y asteriscos pueden interpretarse como formato: si «¯\\_(ツ)_/¯» pierde el brazo, añade otra barra invertida.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia entre kaomoji y emoji?",
        a: "Los emoji son dibujos (😀); los kaomoji se forman combinando caracteres de texto. Los kaomoji funcionan incluso donde no hay emojis.",
      },
      {
        q: "¿Por qué a mi ¯\\_(ツ)_/¯ le falta un brazo?",
        a: "En apps con markdown, la barra invertida y los guiones bajos tienen significado especial. Escribe dos barras invertidas o usa el botón Copiar de esta página.",
      },
      {
        q: "¿Los kaomoji funcionan en todos los móviles?",
        a: "Los más sencillos sí. Los que usan caracteres de alfabetos poco comunes pueden fallar en sistemas antiguos.",
      },
    ],
    related: ["aesthetic", "upsideDown", "whatsapp", "discord"],
  },
};

export default pages;
