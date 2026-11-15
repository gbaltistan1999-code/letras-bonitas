import type { HomeContent } from "@/types/content";

const home: HomeContent = {
  metaTitle: "Letras Bonitas para Copiar y Pegar ✓ Generador de Letras | LetrasHub",
  metaDescription:
    "Escribe tu texto y conviértelo al instante en letras bonitas: cursivas, góticas, pequeñas, tachadas y con símbolos. Copia con un toque y pega en Instagram, Free Fire, TikTok o WhatsApp.",
  h1: "Letras bonitas para copiar y pegar",
  intro:
    "Escribe tu nombre, nick o frase y verás más de 50 tipos de letras diferentes al instante. Elige el que más te guste y cópialo con un solo toque.",
  sample: "Letras Bonitas",
  sections: [
    {
      heading: "Qué hace este generador de letras",
      blocks: [
        {
          type: "p",
          text: "LetrasHub convierte el texto normal que escribes en letras con estilo: cursivas elegantes, letras góticas, letras pequeñas, letras tachadas, letras en círculos y combinaciones con símbolos para nicks. No necesitas instalar nada ni crear una cuenta: el resultado es texto que puedes pegar donde normalmente escribirías, como tu biografía, tu nombre de perfil o un mensaje.",
        },
        {
          type: "p",
          text: "La conversión ocurre dentro de tu propio navegador. Lo que escribes no viaja a ningún servidor, así que el generador sigue funcionando aunque pierdas la conexión después de cargar la página.",
        },
      ],
    },
    {
      heading: "Cómo usar las letras bonitas en 4 pasos",
      blocks: [
        {
          type: "ol",
          items: [
            "Escribe tu texto en el cuadro de arriba. Los resultados cambian mientras escribes.",
            "Usa los filtros (Cursivas, Góticas, Con símbolos…) para encontrar más rápido el estilo que buscas.",
            "Pulsa «Copiar» en el estilo elegido. Verás un aviso de «¡Copiado!».",
            "Abre la app o el juego, mantén pulsado el campo de texto y elige «Pegar». Antes de guardar, revisa que todas las letras se vean bien.",
          ],
        },
      ],
    },
    {
      heading: "Dónde funcionan estas letras",
      blocks: [
        {
          type: "p",
          text: "Como son caracteres de texto y no imágenes, se pueden pegar en casi cualquier campo que acepte texto. Los usos más habituales son:",
        },
        {
          type: "ul",
          items: [
            "Biografía y nombre de perfil: guía para [letras de Instagram](instagram) y para [TikTok](tiktok).",
            "Nicks de videojuegos: consejos generales en [letras para nick](nick) y específicos para [Free Fire](freefire).",
            "Mensajes, estados y nombres de grupos en [WhatsApp](whatsapp).",
            "Apodos de servidor y nombre visible en [Discord](discord).",
            "Publicaciones, comentarios, presentaciones y cualquier lugar donde quieras destacar una palabra.",
          ],
        },
      ],
    },
    {
      heading: "Cómo funciona: no son fuentes, son caracteres Unicode",
      blocks: [
        {
          type: "p",
          text: "Una fuente cambia el dibujo de las letras que ya tienes, pero solo dentro de un programa concreto; si copias el texto a otra app, el estilo desaparece. Las letras de este generador funcionan de otra manera: cada letra se sustituye por un carácter distinto del estándar Unicode, el sistema que usan todos los dispositivos modernos para representar texto.",
        },
        {
          type: "p",
          text: "Unicode incluye más de 150.000 caracteres. Entre ellos hay alfabetos completos pensados para fórmulas matemáticas (negritas, cursivas, góticas o de doble trazo), letras fonéticas pequeñas, letras dentro de círculos y cuadros, y símbolos decorativos de muchas escrituras del mundo. Por ejemplo, «𝓐» no es una «A» con otra fuente: es el carácter U+1D4D0, «letra mayúscula A cursiva negrita matemática». Puedes consultar las tablas oficiales en [unicode.org](https://www.unicode.org/charts/).",
        },
        {
          type: "note",
          text: "Las tildes y la ñ se conservan añadiendo el acento como carácter combinado (por ejemplo, 𝐧̃). Si un estilo no tiene equivalente para alguna letra, esa letra se deja tal cual en lugar de mostrar un símbolo roto.",
        },
      ],
    },
    {
      heading: "Compatibilidad: por qué a veces aparecen cuadritos",
      blocks: [
        {
          type: "p",
          text: "Que un carácter exista en Unicode no garantiza que tu teléfono tenga un dibujo para él. Si el dispositivo no lo tiene, mostrará un cuadrito vacío (□) o un signo de interrogación. Los estilos negrita, cursiva y gótica suelen verse bien en móviles actuales; los estilos con símbolos poco comunes o con líneas combinadas pueden variar más.",
        },
        {
          type: "ul",
          items: [
            "Algunos juegos y apps solo aceptan letras y números básicos, o limitan el número de caracteres. Prueba siempre antes de guardar un nombre que no se pueda cambiar fácilmente.",
            "Los nombres de usuario (@) de muchas redes solo admiten letras sin estilo, números, puntos o guiones bajos; las letras bonitas suelen funcionar en el nombre visible y en la biografía.",
            "Lo que tú ves bien puede verse distinto en el móvil de otra persona si su sistema es más antiguo.",
            "Las búsquedas de algunas plataformas no encuentran texto escrito con estos caracteres.",
          ],
        },
      ],
    },
    {
      heading: "Accesibilidad: úsalas con moderación",
      blocks: [
        {
          type: "p",
          text: "Los lectores de pantalla que usan las personas ciegas o con baja visión no siempre interpretan estos caracteres como letras normales: algunos los leen uno por uno con nombres técnicos y otros los omiten. Por eso recomendamos usar letras bonitas para detalles, como un nick o una palabra destacada, y escribir con letras normales la información importante, como datos de contacto, precios o instrucciones.",
        },
      ],
    },
  ],
  stylesHeading: "Tipos de letras disponibles",
  stylesIntro:
    "Cada página tiene el generador ya filtrado en ese estilo, ejemplos y consejos específicos.",
  platformsHeading: "Letras para redes sociales y juegos",
  teasers: {
    cursive: "Letras manuscritas y elegantes para biografías y nombres.",
    gothic: "Estilo medieval, perfecto para nicks con carácter.",
    small: "Letras pequeñas, versalitas y superíndice.",
    strike: "Texto tachado, subrayado y con líneas.",
    nick: "Ideas y consejos para crear un nick que se vea bien en juegos.",
    freefire: "Nicks con símbolos y cómo cambiar el nombre en el juego.",
    instagram: "Nombre y biografía con estilo, sin tocar tu @.",
    tiktok: "Destaca tu nombre, biografía y comentarios.",
    whatsapp: "Estilos Unicode y el formato propio de WhatsApp.",
    discord: "Nombre visible, apodos de servidor y markdown.",
  },
  faqs: [
    {
      q: "¿Las letras bonitas son gratis?",
      a: "Sí. El generador es gratuito, no requiere registro y no tiene límite de usos.",
    },
    {
      q: "¿Por qué algunas letras se ven como cuadritos?",
      a: "Porque tu dispositivo, o el de quien lo ve, no tiene un dibujo para ese carácter Unicode. Prueba con otro estilo: negrita, cursiva y gótica son los más compatibles.",
    },
    {
      q: "¿Guardan lo que escribo?",
      a: "No. El texto se transforma en tu navegador y no se envía ni se almacena en ningún sitio. Puedes comprobarlo usando el generador sin conexión una vez cargada la página.",
    },
    {
      q: "¿Puedo usar estas letras en mi nombre de usuario (@)?",
      a: "Normalmente no. Instagram o TikTok, por ejemplo, solo admiten letras sin estilo, números, puntos y guiones bajos en el @. Sí suelen funcionar en el nombre visible y en la biografía.",
    },
    {
      q: "¿Funcionan con tildes y la letra ñ?",
      a: "Sí. Conservamos las tildes, la diéresis y la virgulilla como acentos combinados. En los pocos estilos que no tienen una letra concreta, se deja la letra original.",
    },
    {
      q: "¿Puedo pegar estas letras en Word o Google Docs?",
      a: "Sí, porque son texto. Ten en cuenta que el corrector ortográfico no las reconocerá como palabras y que algunas fuentes del documento pueden no incluir todos los símbolos.",
    },
  ],
  conclusion: {
    heading: "Elige tu estilo y pruébalo",
    blocks: [
      {
        type: "p",
        text: "Lo mejor es experimentar: escribe tu nombre, prueba varios estilos y pega el resultado en un borrador o en un mensaje para ti antes de usarlo en tu perfil. Si buscas algo concreto, empieza por las [letras cursivas](cursive), las [letras góticas](gothic) o las ideas de [letras para nick](nick). Y si tienes dudas, revisa las [preguntas frecuentes](faq).",
      },
    ],
  },
};

export default home;
