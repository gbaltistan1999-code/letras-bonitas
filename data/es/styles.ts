import type { StylePageContent } from "@/types/content";
import type { StylePageKey } from "@/lib/routes";

const pages: Record<StylePageKey, StylePageContent> = {
  cursive: {
    metaTitle: "Letras Cursivas para Copiar y Pegar 𝓒𝓾𝓻𝓼𝓲𝓿𝓪 | LetrasHub",
    metaDescription:
      "Generador de letras cursivas: convierte tu texto en letra manuscrita elegante (𝒸𝓊𝓇𝓈𝒾𝓋𝒶 y 𝓬𝓾𝓻𝓼𝓲𝓿𝓪 negrita) y cópiala para tu bio, nombre o mensajes.",
    h1: "Letras cursivas para copiar y pegar",
    label: "Letras cursivas",
    intro:
      "Las letras cursivas imitan la escritura a mano con trazos inclinados y curvas. Escribe tu texto y elige entre cursiva fina, cursiva negrita o itálica.",
    sample: "Mariana",
    featured: ["script", "boldScript", "italic", "boldItalic", "sansItalic", "javanese", "starWaves"],
    sections: [
      {
        heading: "Qué son las letras cursivas de este generador",
        blocks: [
          {
            type: "p",
            text: "Hay dos estilos principales. La cursiva «script» (𝒜𝒷𝒸) recuerda a la caligrafía inglesa, con mayúsculas muy decoradas. La cursiva negrita (𝓐𝓫𝓬) tiene un trazo más grueso y se lee mejor en pantallas pequeñas. Además están las itálicas (𝐴𝑏𝑐), que solo se inclinan y resultan más sobrias.",
          },
          {
            type: "p",
            text: "Estos caracteres vienen del bloque «Mathematical Alphanumeric Symbols» de Unicode, creado para que los matemáticos pudieran escribir símbolos como ℒ o ℋ. Algunas letras cursivas ya existían antes en otro bloque (Letterlike Symbols), por eso la cursiva fina mezcla caracteres de dos bloques: es normal y no afecta al resultado.",
          },
        ],
      },
      {
        heading: "Ejemplos de letras cursivas",
        blocks: [{ type: "examples", text: "Mariana López", styles: ["script", "boldScript", "italic", "boldItalic"] }],
      },
      {
        heading: "Cuándo quedan bien",
        blocks: [
          {
            type: "ul",
            items: [
              "En el nombre visible de tu perfil, para darle un toque elegante sin perder legibilidad.",
              "En la primera línea de tu biografía, como título.",
              "En invitaciones o felicitaciones que envías por mensaje.",
              "Combinadas con símbolos para un nick, por ejemplo ★彡 𝓜𝓪𝓻𝓲 彡★.",
            ],
          },
          {
            type: "p",
            text: "Evita escribir párrafos largos en cursiva: cansa la vista y es difícil de leer para cualquiera, especialmente si usa un lector de pantalla.",
          },
        ],
      },
      {
        heading: "Cómo copiarlas y pegarlas",
        blocks: [
          {
            type: "ol",
            items: [
              "Escribe tu texto en el generador de arriba.",
              "Pulsa «Copiar» en la cursiva que prefieras.",
              "En la app de destino, mantén pulsado el campo de texto y elige «Pegar».",
              "Comprueba en la vista previa que no aparezcan cuadritos antes de guardar.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones de la cursiva",
        blocks: [
          {
            type: "p",
            text: "La cursiva fina es la que más diferencias muestra entre dispositivos, porque cada sistema dibuja estos caracteres con su propia fuente. Si en tu móvil se ve demasiado delgada o con cuadritos, prueba la cursiva negrita, que suele tener mejor soporte. Los números no tienen versión cursiva en Unicode, así que se mantienen normales.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Las letras cursivas tienen números?",
        a: "No. Unicode no incluye dígitos cursivos, por eso los números se quedan como los escribes. Si quieres números con estilo, prueba la negrita o el doble trazo.",
      },
      {
        q: "¿Cuál es la diferencia entre cursiva e itálica?",
        a: "La itálica solo inclina la letra; la cursiva imita la escritura a mano, con letras más redondeadas y mayúsculas decoradas.",
      },
      {
        q: "¿Se mantienen las tildes en cursiva?",
        a: "Sí, la tilde se añade como acento combinado sobre la letra cursiva. En algunas fuentes puede verse un poco desplazada.",
      },
    ],
    related: ["gothic", "small", "instagram", "nick"],
  },

  gothic: {
    metaTitle: "Letras Góticas para Copiar y Pegar 𝔊𝔬𝔱𝔦𝔠𝔞𝔰 | LetrasHub",
    metaDescription:
      "Convierte tu texto en letras góticas (𝔤𝔬𝔱𝔦𝔠𝔞𝔰 y 𝖌𝖔𝖙𝖎𝖈𝖆𝖘 negrita) estilo medieval. Cópialas gratis para nicks, perfiles y diseños.",
    h1: "Letras góticas para copiar y pegar",
    label: "Letras góticas",
    intro:
      "Las letras góticas tienen trazos angulosos y un aire medieval. Escribe tu texto y cópialo en gótica normal o en gótica negrita.",
    sample: "Dragón Negro",
    featured: ["fraktur", "boldFraktur", "kanjiFrame", "doubleStruck", "asian", "javanese"],
    sections: [
      {
        heading: "De dónde viene la letra gótica",
        blocks: [
          {
            type: "p",
            text: "La letra gótica, también llamada blackletter o Fraktur, se usó en manuscritos e imprentas de Europa durante siglos y siguió siendo común en los países de habla alemana hasta el siglo XX. Hoy se asocia con tatuajes, portadas de música, camisetas y, por supuesto, nicks de videojuegos con estilo «oscuro».",
          },
          {
            type: "p",
            text: "Los caracteres que usa este generador son las letras Fraktur del bloque matemático de Unicode. Cinco mayúsculas (ℭ, ℌ, ℑ, ℜ y ℨ) ya existían en otro bloque y se toman de ahí, como indica el propio estándar.",
          },
        ],
      },
      {
        heading: "Ejemplos de letras góticas",
        blocks: [{ type: "examples", text: "Dragón Negro", styles: ["fraktur", "boldFraktur", "kanjiFrame"] }],
      },
      {
        heading: "Consejos para que se lean bien",
        blocks: [
          {
            type: "ul",
            items: [
              "La gótica negrita (𝕬𝖇𝖈) se lee mejor que la fina en pantallas pequeñas.",
              "Las mayúsculas góticas son muy recargadas: un nick todo en mayúsculas puede volverse ilegible.",
              "Funciona muy bien en palabras cortas; en frases largas, mejor combínala con letras normales.",
              "Para un look más agresivo, prueba el marco 亗 o el estilo asiático en la sección de [letras para nick](nick).",
            ],
          },
        ],
      },
      {
        heading: "Cómo usarlas en tu perfil o juego",
        blocks: [
          {
            type: "ol",
            items: [
              "Escribe tu nombre o frase en el generador.",
              "Copia la versión gótica que más te guste.",
              "Pégala en el campo de nombre, apodo o biografía.",
              "Si la app la rechaza o salen cuadritos, prueba la otra variante gótica o un estilo con menos símbolos.",
            ],
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "Unicode no tiene números góticos, así que los dígitos se quedan normales. Algunas plataformas y juegos filtran los caracteres matemáticos en los nombres; en ese caso la única opción es usar letras normales con algún símbolo permitido. Revisa nuestras guías de [Free Fire](freefire) y [Discord](discord) para casos concretos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Las letras góticas son una fuente?",
        a: "No. Son caracteres Unicode independientes, por eso se mantienen al copiarlas a otra app, a diferencia de una fuente instalada.",
      },
      {
        q: "¿Puedo usar letras góticas para un tatuaje?",
        a: "Puedes usarlas como idea, pero un tatuador trabajará con una tipografía gótica real. Estos caracteres están pensados para pantalla.",
      },
      {
        q: "¿Por qué algunas mayúsculas góticas se ven diferentes?",
        a: "Porque ℭ, ℌ, ℑ, ℜ y ℨ pertenecen a otro bloque de Unicode y tu dispositivo puede dibujarlas con otra fuente.",
      },
    ],
    related: ["cursive", "freefire", "nick", "discord"],
  },

  small: {
    metaTitle: "Letras Pequeñas para Copiar y Pegar ᴍɪɴɪ ᵗᶦⁿʸ | LetrasHub",
    metaDescription:
      "Generador de letras pequeñas: versalitas (ʟᴇᴛʀᴀꜱ), superíndice (ˡᵉᵗʳᵃˢ) y subíndice. Copia texto pequeño para tu bio, nick o mensajes.",
    h1: "Letras pequeñas para copiar y pegar",
    label: "Letras pequeñas",
    intro:
      "Las letras pequeñas dan un aire discreto y minimalista. Escribe tu texto y elige entre versalitas, superíndice o subíndice.",
    sample: "Buenos días",
    featured: ["smallCaps", "superscript", "subscript", "sans", "monospace"],
    initialCategory: "small",
    sections: [
      {
        heading: "Tres tipos de letras pequeñas",
        blocks: [
          {
            type: "ul",
            items: [
              "Versalitas (ꜱᴍᴀʟʟ ᴄᴀᴘꜱ): mayúsculas del tamaño de una minúscula. Son las más legibles y completas.",
              "Superíndice (ˢᵘᵖᵉʳ): letras diminutas que flotan arriba, como un exponente.",
              "Subíndice (ₛᵤᵦ): letras diminutas por debajo de la línea. Unicode solo tiene algunas.",
            ],
          },
          {
            type: "p",
            text: "Muchas de estas letras vienen de alfabetos fonéticos, como el Alfabeto Fonético Internacional, donde se usan para representar sonidos. Por eso no todas las letras existen en todas las versiones.",
          },
        ],
      },
      {
        heading: "Ejemplos de letras pequeñas",
        blocks: [{ type: "examples", text: "buenos días", styles: ["smallCaps", "superscript", "subscript"] }],
      },
      {
        heading: "Qué letras faltan",
        blocks: [
          {
            type: "p",
            text: "Unicode no tiene una «q» en superíndice ni una «x» en versalita, y en subíndice faltan muchas letras (b, c, d, f, g, q, w, y, z, entre otras). Cuando una letra no existe, el generador la deja como la escribiste para que el texto no se rompa. Si buscas una palabra completa en tamaño mini, revisa el resultado antes de usarlo.",
          },
          {
            type: "note",
            text: "El superíndice convierte todo a minúsculas porque las mayúsculas en superíndice están muy incompletas en Unicode.",
          },
        ],
      },
      {
        heading: "Ideas de uso",
        blocks: [
          {
            type: "ul",
            items: [
              "Subtítulos discretos en tu biografía de [Instagram](instagram) o [TikTok](tiktok).",
              "Un «ᵒᶠᶦᶜᶦᵃˡ» o «ᴠɪᴘ» pequeño junto a tu nick.",
              "Notas al pie divertidas en mensajes.",
            ],
          },
        ],
      },
      {
        heading: "Compatibilidad",
        blocks: [
          {
            type: "p",
            text: "Las versalitas se ven bien en la mayoría de los móviles. El superíndice y el subíndice usan caracteres de bloques distintos y, según la fuente, algunas letras pueden aparecer a diferente altura. Es una limitación del dibujo de cada sistema, no del texto copiado.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué algunas letras no se hacen pequeñas?",
        a: "Porque no tienen versión pequeña en Unicode. En lugar de mostrar un símbolo roto, el generador mantiene la letra original.",
      },
      {
        q: "¿Las letras pequeñas funcionan en nicks?",
        a: "Las versalitas suelen funcionar en muchos juegos y apps; aun así, cada plataforma decide qué caracteres acepta, así que pruébalo antes de guardar.",
      },
      {
        q: "¿Hay números pequeños?",
        a: "Sí, en superíndice (⁰¹²³) y subíndice (₀₁₂₃). Las versalitas no cambian los números.",
      },
    ],
    related: ["cursive", "strike", "instagram", "tiktok"],
  },

  strike: {
    metaTitle: "Letras Tachadas para Copiar y Pegar (T̶a̶c̶h̶a̶d̶o̶) | LetrasHub",
    metaDescription:
      "Generador de letras tachadas, subrayadas y con barra: t̶a̶c̶h̶a̶d̶o̶, s̲u̲b̲r̲a̲y̲a̲d̲o̲ y más. Copia y pega en WhatsApp, Instagram, Discord y otras apps.",
    h1: "Letras tachadas para copiar y pegar",
    label: "Letras tachadas",
    intro:
      "Tacha, subraya o cruza tu texto con una línea que se mantiene al copiarlo. Ideal para bromas, listas y mensajes con doble sentido.",
    sample: "precio anterior",
    featured: ["strike", "shortStrike", "slash", "underline", "doubleUnderline", "overline", "crossAbove"],
    initialCategory: "lines",
    sections: [
      {
        heading: "Cómo se crea el texto tachado",
        blocks: [
          {
            type: "p",
            text: "A diferencia de los demás estilos, aquí las letras no se sustituyen. Después de cada letra se añade un «carácter combinante», un símbolo invisible por sí solo que se dibuja encima o debajo del carácter anterior. Por ejemplo, el tachado usa U+0336 (línea larga superpuesta) y el subrayado U+0332 (línea baja).",
          },
          {
            type: "p",
            text: "Como las letras originales no cambian, este estilo funciona con tildes, ñ, números y casi cualquier alfabeto.",
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Ya no me gusta", styles: ["strike", "slash", "underline", "doubleUnderline"] }],
      },
      {
        heading: "Usos habituales",
        blocks: [
          {
            type: "ul",
            items: [
              "Bromas tipo «t̶r̶a̶b̶a̶j̶o̶ siesta productiva».",
              "Tareas terminadas en una lista que compartes.",
              "Mostrar un cambio: «R̶e̶u̶n̶i̶ó̶n̶ ̶a̶ ̶l̶a̶s̶ ̶5̶» ahora a las 6.",
              "Decorar un nick con subrayado doble.",
            ],
          },
        ],
      },
      {
        heading: "Mejor opción en WhatsApp y Discord",
        blocks: [
          {
            type: "p",
            text: "Si solo quieres tachar texto en un mensaje, WhatsApp y Discord tienen su propio formato, que es más accesible: en WhatsApp escribe ~texto~ y en Discord ~~texto~~. Las letras tachadas de este generador son útiles donde no existe ese formato, como nombres de perfil o biografías. Más detalles en las guías de [WhatsApp](whatsapp) y [Discord](discord).",
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "La posición de la línea depende de la fuente de cada dispositivo: a veces queda algo alta, baja o con pequeños cortes entre letras. Además, el texto ocupa el doble de caracteres (letra + línea), algo a tener en cuenta en campos con límite de longitud.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué el tachado se ve cortado entre letras?",
        a: "Cada línea pertenece a una letra y la fuente decide su ancho. En algunos dispositivos quedan pequeños huecos; no se puede controlar desde el texto.",
      },
      {
        q: "¿El texto tachado cuenta más caracteres?",
        a: "Sí, cada letra lleva un carácter extra para la línea, así que ocupa aproximadamente el doble.",
      },
      {
        q: "¿Cómo quito el tachado?",
        a: "Vuelve a escribir el texto normal o bórralo y pégalo sin estilo; la línea forma parte del texto copiado.",
      },
    ],
    related: ["small", "whatsapp", "discord", "cursive"],
  },

  nick: {
    metaTitle: "Letras para Nick: Nicks con Letras Bonitas y Símbolos | LetrasHub",
    metaDescription:
      "Crea un nick con letras bonitas y símbolos para tus juegos y redes: ꧁༒ 𝓝𝓲𝓬𝓴 ༒꧂, 亗, ×͜×, 『』. Generador gratis con consejos para que tu nick se vea bien.",
    h1: "Letras para nick con símbolos",
    label: "Letras para nick",
    intro:
      "Un buen nick se reconoce de un vistazo. Escribe tu nombre de jugador y prueba marcos, símbolos y letras especiales hasta dar con el tuyo.",
    sample: "ShadowKing",
    featured: ["javanese", "smile", "kanjiFrame", "starWaves", "lenticular", "cornerBrackets", "asian", "greekish", "smallCaps", "boldFraktur"],
    sections: [
      {
        heading: "Qué hace que un nick se vea bien",
        blocks: [
          {
            type: "ul",
            items: [
              "Que se pueda leer: si tus amigos no saben cómo escribirlo, tampoco podrán buscarte.",
              "Un solo adorno principal: un marco (꧁꧂, 『』) o un símbolo (亗, ×͜×) basta.",
              "Pocos caracteres raros: cuantos más símbolos, más probabilidad de que el juego los rechace.",
              "Coherencia: usa el mismo estilo en tus juegos y redes para que te reconozcan.",
            ],
          },
        ],
      },
      {
        heading: "Ejemplos de nicks",
        blocks: [{ type: "examples", text: "ShadowKing", styles: ["javanese", "smile", "kanjiFrame", "starWaves", "asian", "lenticular"] }],
      },
      {
        heading: "Paso a paso para poner tu nick",
        blocks: [
          {
            type: "ol",
            items: [
              "Escribe tu nombre base, mejor si es corto.",
              "Filtra por «Con símbolos» o «Raras» y elige un estilo.",
              "Copia y pégalo primero en un mensaje o nota para comprobar cómo se ve.",
              "En el juego, ve a tu perfil y busca la opción de cambiar el nombre.",
              "Pega el nick y revisa la vista previa antes de confirmar, sobre todo si el cambio cuesta dinero o recursos del juego.",
            ],
          },
        ],
      },
      {
        heading: "Compatibilidad en juegos",
        blocks: [
          {
            type: "p",
            text: "Cada juego decide qué caracteres permite y cuántos. Algunos aceptan casi cualquier símbolo, otros solo letras y números básicos y otros cuentan los símbolos complejos como varios caracteres. No publicamos límites concretos porque cambian con las actualizaciones; la referencia fiable es lo que te deja guardar el propio juego. Para el caso más pedido, mira la guía de [letras para Free Fire](freefire).",
          },
          {
            type: "note",
            text: "No uses nicks para hacerte pasar por otra persona, por un administrador o por una marca: va contra las normas de casi todas las plataformas y contra nuestros términos de uso.",
          },
        ],
      },
      {
        heading: "Más ideas",
        blocks: [
          {
            type: "p",
            text: "Si tu nick es para un servidor de chat, la guía de [Discord](discord) explica la diferencia entre nombre de usuario y apodo. Para un look medieval, prueba las [letras góticas](gothic); para algo más limpio, las [letras pequeñas](small).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuál es el mejor símbolo para un nick?",
        a: "No hay uno mejor; los más populares son los marcos ꧁꧂ y 『』, y símbolos como 亗 o ×͜×. Elige uno que se vea bien en tu dispositivo y en el de tus amigos.",
      },
      {
        q: "El juego dice que mi nick tiene caracteres no válidos, ¿qué hago?",
        a: "Quita los símbolos uno por uno hasta que lo acepte, o prueba un estilo más simple como versalitas o letras normales con un marco.",
      },
      {
        q: "¿Mi nick se verá igual para todos?",
        a: "No siempre. Si otro jugador tiene un sistema sin esos caracteres, verá cuadritos. Los estilos más comunes reducen ese riesgo.",
      },
    ],
    related: ["freefire", "gothic", "discord", "tiktok"],
  },

  freefire: {
    metaTitle: "Letras para Free Fire: Nicks con Símbolos para Copiar | LetrasHub",
    metaDescription:
      "Nicks para Free Fire con letras bonitas y símbolos: ꧁༒ 𝓝𝓲𝓬𝓴 ༒꧂, 亗, ×͜×, 【】. Genera, copia y pega tu nick, con consejos para que el juego lo acepte.",
    h1: "Letras para Free Fire",
    label: "Letras para Free Fire",
    intro:
      "Crea un nick con estilo para Free Fire: escribe tu nombre, elige un marco o símbolo y cópialo. Te contamos también qué revisar antes de cambiar el nombre en el juego.",
    sample: "ProPlayer",
    featured: ["javanese", "smile", "kanjiFrame", "starWaves", "cornerBrackets", "lenticular", "asian", "boldFraktur", "wings", "smallCaps"],
    sections: [
      {
        heading: "Los estilos más usados en Free Fire",
        blocks: [
          {
            type: "p",
            text: "En la comunidad de Free Fire son muy populares los nicks con marcos simétricos (꧁ ꧂), símbolos orientales como 亗 o 乂, la «carita» ×͜× y las letras en estilo asiático (卂乃匚). Estos símbolos vienen de escrituras como la javanesa, la tibetana o la china, y Unicode los incluye para que esos idiomas se puedan escribir en cualquier dispositivo.",
          },
        ],
      },
      {
        heading: "Ejemplos de nicks para Free Fire",
        blocks: [{ type: "examples", text: "ProPlayer", styles: ["javanese", "smile", "kanjiFrame", "starWaves", "lenticular", "asian"] }],
      },
      {
        heading: "Cómo poner letras bonitas en tu nick de Free Fire",
        blocks: [
          {
            type: "ol",
            items: [
              "Crea tu nick en el generador y pulsa «Copiar».",
              "Abre Free Fire y entra en tu perfil.",
              "Toca el icono de editar junto a tu nombre (la ubicación puede cambiar entre versiones).",
              "Borra el nombre actual, mantén pulsado el campo y elige «Pegar».",
              "Revisa la vista previa con calma: en Free Fire el cambio de nombre normalmente requiere diamantes o un objeto de cambio de nombre, así que conviene acertar a la primera.",
            ],
          },
        ],
      },
      {
        heading: "Qué revisar antes de confirmar",
        blocks: [
          {
            type: "ul",
            items: [
              "Que el juego no muestre un aviso de caracteres no permitidos o de nombre demasiado largo.",
              "Que no haya cuadritos (□) en la vista previa.",
              "Que el nick se entienda: tus amigos deben poder encontrarte para agregarte.",
              "Que no imite el nombre de otro jugador conocido, de un creador o del equipo oficial.",
            ],
          },
          {
            type: "p",
            text: "El juego decide cuántos caracteres y qué símbolos acepta, y puede cambiarlo en cualquier actualización. Por eso no indicamos un límite exacto: si el nombre no cabe, prueba con un marco más corto (『』 en lugar de ꧁༒ ༒꧂) o quita espacios.",
          },
        ],
      },
      {
        heading: "Nicks para clanes (gremios)",
        blocks: [
          {
            type: "p",
            text: "Para un gremio, una opción es que todos los miembros usen el mismo símbolo o marco y cambien solo el nombre: por ejemplo 亗 Ana, 亗 Leo. Así se reconocen en la partida sin hacer el nick ilegible. Encuentra más ideas en [letras para nick](nick) y en las [letras góticas](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Free Fire acepta todos estos símbolos?",
        a: "Acepta muchos, pero no garantizamos todos. El juego puede rechazar algunos caracteres o cambiar sus reglas con una actualización. Comprueba siempre la vista previa.",
      },
      {
        q: "¿Cuántas letras puede tener un nick de Free Fire?",
        a: "El límite lo fija el juego y algunos símbolos pueden contar como más de un carácter. Si el campo no te deja escribir más, acorta el nick o usa un marco más pequeño.",
      },
      {
        q: "¿LetrasHub es parte de Free Fire?",
        a: "No. LetrasHub es un sitio independiente y no está afiliado ni respaldado por Garena ni por Free Fire.",
      },
    ],
    related: ["nick", "gothic", "cursive", "tiktok"],
  },

  instagram: {
    metaTitle: "Letras para Instagram: Bio y Nombre con Estilo | LetrasHub",
    metaDescription:
      "Letras bonitas para Instagram: cursivas, negritas, pequeñas y con símbolos para tu nombre y biografía. Copia y pega, y aprende dónde funcionan y dónde no.",
    h1: "Letras para Instagram",
    label: "Letras para Instagram",
    intro:
      "Dale personalidad a tu perfil de Instagram con letras diferentes en el nombre y la biografía. Escribe tu texto, copia el estilo y pégalo al editar tu perfil.",
    sample: "Fotografía y viajes",
    featured: ["script", "boldScript", "sansBold", "smallCaps", "spaced", "hearts", "starFrame", "doubleStruck"],
    sections: [
      {
        heading: "Dónde puedes usar letras bonitas en Instagram",
        blocks: [
          {
            type: "ul",
            items: [
              "Nombre (el texto en negrita que aparece en tu perfil): acepta caracteres Unicode.",
              "Biografía: el lugar ideal para títulos en cursiva o negrita.",
              "Descripciones de publicaciones, comentarios e historias.",
              "No en el nombre de usuario (@): Instagram solo permite letras, números, puntos y guiones bajos.",
            ],
          },
        ],
      },
      {
        heading: "Ejemplos para tu bio",
        blocks: [{ type: "examples", text: "Fotografía y viajes", styles: ["boldScript", "sansBold", "smallCaps", "hearts"] }],
      },
      {
        heading: "Cómo cambiar tu nombre o biografía",
        blocks: [
          {
            type: "ol",
            items: [
              "Copia el estilo que prefieras desde el generador.",
              "En Instagram, ve a tu perfil y toca «Editar perfil».",
              "Toca el campo «Nombre» o «Presentación» (biografía).",
              "Mantén pulsado y elige «Pegar». Añade texto normal si quieres.",
              "Guarda y revisa cómo se ve tu perfil.",
            ],
          },
        ],
      },
      {
        heading: "Consejos para una bio legible",
        blocks: [
          {
            type: "ul",
            items: [
              "Usa letras con estilo solo en una línea o palabra clave, no en toda la biografía.",
              "Escribe con letras normales lo que la gente pueda querer buscar o copiar, como tu ciudad o tu correo.",
              "Combina un estilo con emojis con moderación para no saturar.",
              "Revisa tu perfil desde otro móvil si puedes: no todos los dispositivos muestran los mismos caracteres.",
            ],
          },
        ],
      },
      {
        heading: "Búsqueda y accesibilidad",
        blocks: [
          {
            type: "p",
            text: "Instagram puede no relacionar «𝓐𝓷𝓪» con «Ana» al buscar, porque para el sistema son caracteres distintos. Si quieres que te encuentren por tu nombre, mantén tu nombre real en letras normales y usa el estilo como adorno. Los lectores de pantalla también pueden tener problemas con estos caracteres; más detalles en la sección de accesibilidad de la [página principal](home).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo poner letras bonitas en mi usuario de Instagram?",
        a: "No. El nombre de usuario solo admite letras normales, números, puntos y guiones bajos. Usa las letras con estilo en el campo Nombre o en la biografía.",
      },
      {
        q: "¿Por qué en mi bio se ven cuadritos?",
        a: "Tu dispositivo no tiene esos caracteres. Prueba con negrita o cursiva negrita, que tienen mejor soporte.",
      },
      {
        q: "¿Usar estas letras afecta a mi cuenta?",
        a: "Son caracteres de texto estándar. Aun así, respeta las normas de la comunidad de Instagram y no las uses para suplantar a nadie.",
      },
    ],
    related: ["cursive", "small", "tiktok", "whatsapp"],
  },

  tiktok: {
    metaTitle: "Letras para TikTok: Nombre, Bio y Comentarios | LetrasHub",
    metaDescription:
      "Letras para TikTok con estilo: negritas, versalitas, mini y con símbolos para tu nombre, bio y comentarios. Copia, pega y destaca en tu perfil.",
    h1: "Letras para TikTok",
    label: "Letras para TikTok",
    intro:
      "Haz que tu perfil de TikTok destaque con letras diferentes. Escribe tu nombre o frase, copia el estilo y pégalo al editar el perfil o en tus comentarios.",
    sample: "Bailes y humor",
    featured: ["sansBold", "smallCaps", "superscript", "script", "lightning", "starWaves", "bracketEach", "fullwidth"],
    sections: [
      {
        heading: "Qué partes de TikTok aceptan letras con estilo",
        blocks: [
          {
            type: "ul",
            items: [
              "Nombre (el nombre visible de tu perfil).",
              "Biografía.",
              "Descripciones de videos y comentarios.",
              "No el nombre de usuario (@), que solo admite letras, números, guiones bajos y puntos.",
            ],
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "Bailes y humor", styles: ["sansBold", "smallCaps", "lightning", "fullwidth"] }],
      },
      {
        heading: "Cómo ponerlas en tu perfil",
        blocks: [
          {
            type: "ol",
            items: [
              "Copia el estilo desde el generador.",
              "En TikTok, ve a tu perfil y toca «Editar perfil».",
              "Elige «Nombre» o «Biografía».",
              "Borra el texto actual, pega el nuevo y guarda.",
            ],
          },
        ],
      },
      {
        heading: "Estilos que funcionan bien en video",
        blocks: [
          {
            type: "p",
            text: "En TikTok la gente ve tu nombre por un segundo mientras pasa videos, así que gana lo que se lee rápido: negrita sin serifa, versalitas o un símbolo sencillo como ⚡ o ★. Los estilos muy recargados, como la [gótica](gothic) o la cursiva fina, quedan mejor en la biografía que en el nombre.",
          },
          {
            type: "p",
            text: "Para los textos que pones encima del video, TikTok tiene sus propias fuentes en el editor. Las letras de este generador son útiles sobre todo en el perfil, descripciones y comentarios.",
          },
        ],
      },
      {
        heading: "Limitaciones",
        blocks: [
          {
            type: "p",
            text: "Como en otras redes, la búsqueda puede no encontrar palabras escritas con letras especiales, y algunas personas verán cuadritos si su sistema es antiguo. Mantén las palabras importantes (tu nombre, tu tema) en letras normales. Si también usas Instagram, mira la guía de [letras para Instagram](instagram).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo usar letras bonitas en mi usuario de TikTok?",
        a: "No, el @ solo admite letras normales, números, guiones bajos y puntos. Sí puedes usarlas en tu nombre y biografía.",
      },
      {
        q: "¿Las letras bonitas funcionan en comentarios?",
        a: "Sí, puedes pegarlas como cualquier texto. Úsalas con moderación para que tu comentario se entienda.",
      },
      {
        q: "¿Puedo usar estas letras en el texto del video?",
        a: "Puedes pegarlas en la herramienta de texto, pero el resultado depende de la fuente que use el editor. Prueba antes de publicar.",
      },
    ],
    related: ["instagram", "small", "nick", "freefire"],
  },

  whatsapp: {
    metaTitle: "Letras para WhatsApp: Estilos y Formato para Copiar | LetrasHub",
    metaDescription:
      "Letras bonitas para WhatsApp: cursivas, con círculos y al revés para tu nombre, info y estados, más el formato propio de WhatsApp (negrita, cursiva, tachado).",
    h1: "Letras para WhatsApp",
    label: "Letras para WhatsApp",
    intro:
      "Personaliza tu nombre, tu info y tus mensajes de WhatsApp con letras diferentes. Además te explicamos el formato que WhatsApp ya trae, que a veces es la mejor opción.",
    sample: "Feliz cumpleaños",
    featured: ["script", "bold", "italic", "strike", "monospace", "circled", "hearts", "upsideDown"],
    sections: [
      {
        heading: "Primero: el formato propio de WhatsApp",
        blocks: [
          {
            type: "p",
            text: "WhatsApp permite dar formato a los mensajes sin caracteres especiales, escribiendo símbolos alrededor del texto:",
          },
          {
            type: "ul",
            items: [
              "*texto* para negrita.",
              "_texto_ para cursiva.",
              "~texto~ para tachado.",
              "```texto``` para monoespaciado.",
            ],
          },
          {
            type: "p",
            text: "Este formato es más accesible y no da problemas de compatibilidad, así que es la mejor opción para mensajes normales. Las letras de LetrasHub sirven para lo que ese formato no cubre: estilos como cursiva caligráfica, letras en círculos o texto al revés, y campos como tu nombre o tu info, donde el formato de WhatsApp no se aplica.",
          },
        ],
      },
      {
        heading: "Ejemplos para WhatsApp",
        blocks: [{ type: "examples", text: "Feliz cumpleaños", styles: ["script", "circled", "hearts", "upsideDown"] }],
      },
      {
        heading: "Dónde pegar las letras",
        blocks: [
          {
            type: "ul",
            items: [
              "Tu nombre de perfil y tu info: en Ajustes, toca tu foto o nombre y edita cada campo.",
              "Nombres y descripciones de grupos (si tienes permiso para editarlos).",
              "Estados y mensajes.",
            ],
          },
          {
            type: "ol",
            items: [
              "Copia el estilo desde el generador.",
              "Abre el campo que quieras editar en WhatsApp.",
              "Mantén pulsado, elige «Pegar» y guarda.",
            ],
          },
        ],
      },
      {
        heading: "Consejos",
        blocks: [
          {
            type: "ul",
            items: [
              "En grupos grandes, un nombre muy decorado puede dificultar que te mencionen con @.",
              "Si quieres que te encuentren por tu nombre, deja tu nombre real legible.",
              "El texto al revés (ʎɐɹʇxǝ) es divertido para bromas, pero cuesta leerlo; úsalo en mensajes cortos.",
              "Para tachar en un mensaje, usa ~texto~; para un nombre o estado, usa las [letras tachadas](strike).",
            ],
          },
        ],
      },
      {
        heading: "Compatibilidad",
        blocks: [
          {
            type: "p",
            text: "WhatsApp muestra los caracteres con la fuente del teléfono de cada persona. Si alguien en el grupo tiene un móvil antiguo, puede ver cuadritos en lugar de algunas letras. La negrita, la cursiva y los círculos son los más seguros.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cómo pongo negrita en WhatsApp sin usar otra web?",
        a: "Escribe la palabra entre asteriscos, por ejemplo *hola*. Al enviarlo, aparecerá en negrita.",
      },
      {
        q: "¿Puedo poner letras bonitas en mi nombre de WhatsApp?",
        a: "Sí, el nombre de perfil acepta caracteres Unicode. Recuerda que tus contactos normalmente ven el nombre con el que te guardaron.",
      },
      {
        q: "¿Las letras de colores funcionan en WhatsApp?",
        a: "No. El color del texto lo decide la app; los caracteres Unicode no tienen color propio, salvo los emojis.",
      },
    ],
    related: ["strike", "instagram", "cursive", "discord"],
  },

  discord: {
    metaTitle: "Letras para Discord: Nombre, Apodos y Formato | LetrasHub",
    metaDescription:
      "Letras para Discord: estilos góticos, cursivos y con símbolos para tu nombre visible y apodos de servidor, más el markdown de Discord para negrita, tachado y código.",
    h1: "Letras para Discord",
    label: "Letras para Discord",
    intro:
      "Personaliza tu nombre visible y tus apodos de servidor en Discord. Escribe tu nombre, elige un estilo y cópialo; abajo explicamos qué campos lo aceptan.",
    sample: "NightOwl",
    featured: ["fraktur", "boldScript", "monospace", "smallCaps", "doubleStruck", "negativeSquared", "cornerBrackets", "asian"],
    sections: [
      {
        heading: "Nombre de usuario, nombre visible y apodo",
        blocks: [
          {
            type: "ul",
            items: [
              "Nombre de usuario: es único y solo admite minúsculas, números, guiones bajos y puntos. Aquí no funcionan las letras bonitas.",
              "Nombre visible: se muestra en todos los servidores y acepta caracteres Unicode.",
              "Apodo de servidor: un nombre distinto solo para un servidor, si tienes permiso para cambiarlo.",
            ],
          },
        ],
      },
      {
        heading: "Ejemplos",
        blocks: [{ type: "examples", text: "NightOwl", styles: ["fraktur", "boldScript", "negativeSquared", "cornerBrackets"] }],
      },
      {
        heading: "Cómo cambiar tu nombre visible o apodo",
        blocks: [
          {
            type: "ol",
            items: [
              "Copia el estilo desde el generador.",
              "Nombre visible: abre Ajustes de usuario → Mi cuenta (o Perfiles) y edita el nombre visible.",
              "Apodo: en el servidor, abre el menú del servidor o tu perfil y elige «Editar perfil del servidor» o «Cambiar apodo».",
              "Pega el texto y guarda.",
            ],
          },
          {
            type: "note",
            text: "Los nombres de los menús pueden variar entre la app móvil, la de escritorio y las actualizaciones.",
          },
        ],
      },
      {
        heading: "Markdown de Discord para mensajes",
        blocks: [
          {
            type: "p",
            text: "En los mensajes, Discord tiene formato propio que es más accesible que los caracteres especiales: **negrita**, *cursiva*, __subrayado__, ~~tachado~~ y `código`. Úsalo para el texto del chat y deja las letras bonitas para nombres, roles o canales.",
          },
        ],
      },
      {
        heading: "Normas de los servidores",
        blocks: [
          {
            type: "p",
            text: "Muchos servidores tienen reglas sobre apodos: algunos piden nombres que se puedan mencionar fácilmente y otros usan bots que cambian los apodos con caracteres especiales o que empiezan con símbolos para aparecer primeros en la lista. Lee las reglas del servidor antes de usar un apodo muy decorado. Para más ideas, mira [letras para nick](nick) y [letras góticas](gothic).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué no puedo poner letras bonitas en mi usuario de Discord?",
        a: "El nombre de usuario único solo acepta minúsculas, números, guiones bajos y puntos. Usa el estilo en el nombre visible o en el apodo.",
      },
      {
        q: "¿Puedo usar estas letras en nombres de canales?",
        a: "Si tienes permisos de administración, puedes probar. Ten en cuenta que Discord puede transformar algunos caracteres en los nombres de canales de texto.",
      },
      {
        q: "Un bot cambió mi apodo, ¿por qué?",
        a: "Algunos servidores usan bots de moderación que limpian apodos con símbolos. Consulta las reglas del servidor o pregunta a los moderadores.",
      },
    ],
    related: ["gothic", "nick", "strike", "whatsapp"],
  },
};

export default pages;
