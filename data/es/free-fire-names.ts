import type { FAQ, Section } from "@/types/content";

/** Copy for the Spanish-only page /nombres-para-free-fire. Name lists live in lib/free-fire-names.ts. */
export const ffPage = {
  metaTitle: "Nombres para Free Fire ✓ +400 Nicks con Símbolos para Copiar | LetrasHub",
  metaDescription:
    "+400 nombres para Free Fire con símbolos listos para copiar y pegar: para hombre, mujer, clan, parejas y gamer. Generador gratis con contador de 12 caracteres.",
  h1: "Nombres para Free Fire",
  label: "Nombres para Free Fire",
  intro: [
    "¿Buscas un nombre para Free Fire que destaque en el lobby? Aquí tienes más de 400 nombres con símbolos listos para copiar y pegar, ordenados por estilo: para hombre, para mujer, gamer, aesthetic, para clan, para parejas y más. También puedes escribir tu propio nombre en el generador y obtener al instante decenas de versiones decoradas que caben en el límite de 12 caracteres del juego.",
    "Todos los nombres de esta página usan caracteres Unicode, no fuentes. Funcionan en Android, iPhone y PC (emulador), y solo tienes que tocar uno, copiarlo y pegarlo en tu perfil.",
  ],
  howTo: {
    heading: "Cómo usar el generador de nombres para Free Fire",
    blocks: [
      {
        type: "ol",
        items: [
          "Escribe tu nombre o apodo en el recuadro. Mejor si es corto: entre 3 y 6 letras.",
          "Elige un estilo. Verás tu nombre con marcos, coronas, calaveras, estrellas y otros símbolos.",
          "Revisa el contador. Si pasa de 12 caracteres, Free Fire no lo aceptará.",
          "Toca «Copiar» y pégalo en Free Fire.",
        ],
      },
      {
        type: "note",
        text: "💡 Consejo: algunos símbolos cuentan como 2 caracteres. El contador ya los cuenta así, pero si el juego no te deja confirmar el nombre, quita un adorno y vuelve a intentarlo.",
      },
    ],
  } satisfies Section,
  listsNote: "Toca cualquier nombre para copiarlo.",
  symbols: {
    heading: "Símbolos para nombres de Free Fire",
    intro: "Copia estos símbolos y combínalos con tu nombre:",
    outro:
      "El espacio invisible sirve para separar palabras o para crear un nombre «en blanco». Si quieres más, mira nuestras [letras con símbolos](symbols) y [letras gamer](gamer).",
  },
  sections: [
    {
      heading: "Cómo cambiar tu nombre en Free Fire",
      blocks: [
        {
          type: "ol",
          items: [
            "Abre Free Fire y toca tu perfil (arriba a la izquierda).",
            "Toca el icono del lápiz junto a tu nombre.",
            "Pega el nombre que copiaste de LetrasHub.",
            "Confirma con una Tarjeta de cambio de nombre o con diamantes.",
          ],
        },
        {
          type: "p",
          text: "El precio en diamantes cambia según la región y las promociones de Garena. Revisa en la tienda del juego si tienes una tarjeta gratis de eventos antes de gastar diamantes.",
        },
      ],
    },
    {
      heading: "Consejos para elegir un buen nombre de Free Fire",
      blocks: [
        {
          type: "ul",
          items: [
            "Respeta el límite de 12 caracteres. Los espacios y los símbolos también cuentan.",
            "Usa uno o dos adornos como máximo. Un nombre limpio se lee mejor en el killfeed.",
            "Evita los emojis de bandera y los símbolos poco comunes. A veces el juego no los acepta o se ven como cuadritos ([te explicamos por qué aquí](blog:squareBoxes)).",
            "Cada nombre es único. Si alguien ya lo usa, añade un símbolo distinto o cambia una letra.",
            "Si tienes clan, pónganse el mismo símbolo para que se les reconozca como equipo.",
          ],
        },
        {
          type: "p",
          text: "Si quieres más ideas para combinar símbolos, lee nuestros [consejos para crear tu nick de Free Fire con símbolos](blog:freeFireNick).",
        },
      ],
    },
  ] satisfies Section[],
  faqs: [
    {
      q: "¿Cuántos caracteres puede tener un nombre en Free Fire?",
      a: "Hasta 12 caracteres, contando los espacios y los símbolos. Algunos símbolos especiales cuentan como 2, así que usa el contador del generador antes de copiar.",
    },
    {
      q: "¿Por qué Free Fire no acepta mi nombre?",
      a: "Puede pasar por tres razones: el nombre tiene más de 12 caracteres, usa un símbolo que el juego no admite, o ya lo tiene otro jugador. Prueba a quitar un adorno o cambiar un símbolo.",
    },
    {
      q: "¿Cómo pongo un espacio invisible en mi nombre de Free Fire?",
      a: "Usa el botón «Espacio invisible» del generador, o copia el espacio invisible de la sección de símbolos, y pégalo donde quieras el espacio.",
    },
    {
      q: "¿Se puede cambiar el nombre gratis en Free Fire?",
      a: "Solo si tienes una Tarjeta de cambio de nombre. Garena a veces la regala en eventos o al empezar el juego. Si no tienes, el cambio cuesta diamantes.",
    },
    {
      q: "¿Dos jugadores pueden tener el mismo nombre?",
      a: "No. Cada nombre es único, así que si el que quieres está ocupado, cambia un símbolo o una letra.",
    },
    {
      q: "¿Estos nombres funcionan en iPhone y Android?",
      a: "Sí. Son caracteres Unicode que funcionan en los dos sistemas y también en PC con emulador.",
    },
    {
      q: "¿Qué diferencia hay con «Letras para Free Fire»?",
      a: "Aquí tienes nombres completos listos para copiar. En [Letras para Free Fire](freefire) puedes convertir tu propio texto en más de 200 estilos de letras.",
    },
  ] satisfies FAQ[],
  explore: [
    { key: "freefire", text: "Convierte tu texto en más de 200 estilos." },
    { key: "nick", text: "Ideas y consejos para nicks de juegos." },
    { key: "gamer", text: "Rifles, espadas, calaveras y coronas." },
    { key: "symbols", text: "Marcos, estrellas y adornos para copiar." },
    { key: "gothic", text: "Estilo medieval para nicks con carácter." },
  ] as const,
};
