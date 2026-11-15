import type { InfoPages } from "@/types/content";

const info: InfoPages = {
  about: {
    metaTitle: "Sobre LetrasHub: Quiénes Somos y Cómo Funciona | LetrasHub",
    metaDescription:
      "Conoce LetrasHub, un generador de letras bonitas gratuito que funciona en tu navegador. Qué hacemos, cómo funciona y qué principios seguimos.",
    h1: "Sobre LetrasHub",
    label: "Sobre nosotros",
    intro:
      "LetrasHub es una herramienta gratuita para convertir texto normal en letras bonitas y diferentes que se pueden copiar y pegar en redes sociales, juegos y mensajes.",
    sections: [
      {
        heading: "Qué hacemos",
        blocks: [
          {
            type: "p",
            text: "Reunimos en un solo lugar más de 50 estilos de texto basados en caracteres Unicode, explicados en español, portugués e inglés. Cada estilo tiene su propia página con ejemplos, instrucciones y limitaciones reales, para que sepas qué esperar antes de pegar el texto en tu perfil.",
          },
        ],
      },
      {
        heading: "Cómo funciona por dentro",
        blocks: [
          {
            type: "p",
            text: "El generador usa tablas de equivalencias entre letras normales y caracteres Unicode, construidas a partir de las tablas oficiales del Unicode Consortium. Todo el proceso ocurre en tu navegador: no hay servidor que reciba tu texto, no hay cuentas y no hay inteligencia artificial generando nada. Cuando un estilo no tiene equivalente para una letra, la dejamos como está en lugar de mostrar un símbolo roto.",
          },
        ],
      },
      {
        heading: "Nuestros principios",
        blocks: [
          {
            type: "ul",
            items: [
              "Honestidad: explicamos qué funciona, qué no y por qué. No prometemos que todos los estilos se vean en todas las apps.",
              "Privacidad: no enviamos ni guardamos lo que escribes, y no usamos analítica ni publicidad.",
              "Accesibilidad: recordamos que estos caracteres pueden ser difíciles para los lectores de pantalla y recomendamos usarlos con moderación.",
              "Independencia: no estamos afiliados a ninguna de las plataformas que mencionamos.",
            ],
          },
        ],
      },
      {
        heading: "Quién está detrás",
        blocks: [{ type: "owner" }],
      },
      {
        heading: "Contacto y correcciones",
        blocks: [
          {
            type: "p",
            text: "Si encuentras un error en una explicación, un estilo que no funciona como describimos o tienes una sugerencia, escríbenos desde la página de [contacto](contact). Revisamos el contenido cuando cambian las plataformas o el estándar Unicode.",
          },
        ],
      },
    ],
  },

  contact: {
    metaTitle: "Contacto | LetrasHub",
    metaDescription:
      "Contacta con LetrasHub para sugerencias, correcciones o consultas sobre privacidad. Te explicamos cómo escribirnos por correo electrónico.",
    h1: "Contacto",
    label: "Contacto",
    intro:
      "¿Tienes una sugerencia, encontraste un error o quieres consultar algo sobre privacidad? Escríbenos por correo electrónico.",
    sections: [
      {
        heading: "Antes de escribir",
        blocks: [
          {
            type: "ul",
            items: [
              "Si un estilo se ve con cuadritos, revisa primero la sección de compatibilidad de la [página principal](home) y las [preguntas frecuentes](faq).",
              "No podemos ayudarte con cuentas de juegos o redes sociales (recuperar cuentas, cambios de nombre bloqueados, etc.): para eso contacta con el soporte de cada plataforma.",
              "No incluyas contraseñas ni datos sensibles en tu mensaje.",
            ],
          },
        ],
      },
    ],
  },

  faq: {
    metaTitle: "Preguntas Frecuentes sobre Letras Bonitas | LetrasHub",
    metaDescription:
      "Respuestas claras sobre letras bonitas: cómo copiarlas, por qué salen cuadritos, dónde funcionan, privacidad y accesibilidad.",
    h1: "Preguntas frecuentes",
    label: "Preguntas frecuentes",
    intro: "Reunimos aquí las dudas más comunes sobre el generador y sobre cómo usar letras bonitas en apps y juegos.",
    sections: [],
    groups: [
      {
        heading: "Uso del generador",
        faqs: [
          {
            q: "¿Cómo copio las letras en el móvil?",
            a: "Toca el botón «Copiar» de un estilo. Si tu navegador no permite copiar automáticamente, el texto quedará seleccionado para que lo copies manteniendo pulsado.",
          },
          {
            q: "¿Hay un límite de texto?",
            a: "Sí, 200 caracteres, para que la página siga siendo rápida. Para nicks, bios y frases es más que suficiente.",
          },
          {
            q: "¿Necesito descargar alguna fuente o app?",
            a: "No. Los resultados son caracteres Unicode que tu teléfono ya sabe mostrar en la mayoría de los casos.",
          },
          {
            q: "¿Puedo usar el generador sin internet?",
            a: "Una vez cargada la página, la conversión funciona sin conexión porque se hace en tu navegador.",
          },
        ],
      },
      {
        heading: "Compatibilidad",
        faqs: [
          {
            q: "¿Por qué veo cuadritos o signos de interrogación?",
            a: "Tu dispositivo no tiene un dibujo para ese carácter. Prueba otro estilo o actualiza el sistema; negrita, cursiva y gótica son los más compatibles.",
          },
          {
            q: "¿Por qué un juego no acepta mi nick?",
            a: "Cada juego decide qué caracteres permite y cuántos. Prueba un estilo con menos símbolos o quita los adornos. Más consejos en [letras para nick](nick).",
          },
          {
            q: "¿Por qué no puedo usar estas letras en mi @?",
            a: "Los nombres de usuario de muchas redes solo aceptan letras normales, números y algunos signos. Usa el estilo en el nombre visible o la biografía.",
          },
          {
            q: "¿Las letras se ven igual en iPhone y Android?",
            a: "No exactamente: cada sistema usa sus propias fuentes, así que la forma puede variar ligeramente o faltar algún símbolo.",
          },
        ],
      },
      {
        heading: "Privacidad y seguridad",
        faqs: [
          {
            q: "¿Guardan lo que escribo?",
            a: "No. El texto no sale de tu navegador y no se guarda. Consulta la [política de privacidad](privacy) para más detalles.",
          },
          {
            q: "¿Por qué hay un aviso de cookies si no usan cookies de seguimiento?",
            a: "Para ser transparentes y recordar tu elección. Solo usamos almacenamiento necesario; los detalles están en la [política de cookies](cookies).",
          },
        ],
      },
      {
        heading: "Accesibilidad",
        faqs: [
          {
            q: "¿Las letras bonitas son accesibles?",
            a: "No del todo: los lectores de pantalla pueden leerlas de forma extraña o saltárselas. Úsalas para adornos y deja la información importante en letras normales.",
          },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: "Política de Privacidad | LetrasHub",
    metaDescription:
      "Cómo trata LetrasHub tus datos: el texto se procesa en tu navegador, solo guardamos tu elección de cookies y no usamos analítica ni publicidad.",
    h1: "Política de privacidad",
    label: "Política de privacidad",
    showUpdated: true,
    intro:
      "Esta política explica qué datos trata LetrasHub (letrashub.com), para qué y qué derechos tienes. La hemos redactado según cómo funciona realmente el sitio.",
    sections: [
      {
        heading: "1. Responsable",
        blocks: [
          {
            type: "p",
            text: "El responsable del sitio es la persona propietaria de LetrasHub indicada en la página [Sobre nosotros](about). Puedes contactar por el correo publicado en la página de [contacto](contact).",
          },
        ],
      },
      {
        heading: "2. El texto que escribes en el generador",
        blocks: [
          {
            type: "p",
            text: "El texto que escribes se transforma con código que se ejecuta en tu navegador. No se envía a nuestros servidores ni a terceros, no se registra y no se guarda en tu dispositivo: al cerrar o recargar la página desaparece. Cuando pulsas «Copiar», el texto se coloca en el portapapeles de tu dispositivo, que controlas tú.",
          },
        ],
      },
      {
        heading: "3. Almacenamiento en tu navegador",
        blocks: [
          {
            type: "p",
            text: "Usamos el almacenamiento local (localStorage) del navegador para una única cosa: recordar tu elección en el aviso de cookies (categorías aceptadas y fecha). Este dato se queda en tu dispositivo, no lo recibimos nosotros y puedes borrarlo en cualquier momento desde la configuración de tu navegador o con el botón «Retirar consentimiento» en Configurar cookies.",
          },
          {
            type: "p",
            text: "No usamos cookies de analítica, de publicidad ni de redes sociales, y no cargamos scripts de terceros para seguimiento. Más detalles en la [política de cookies](cookies).",
          },
        ],
      },
      {
        heading: "4. Registros técnicos del alojamiento",
        blocks: [
          {
            type: "p",
            text: "Como cualquier sitio web, el servidor que entrega las páginas puede registrar datos técnicos de cada petición (dirección IP, fecha y hora, página solicitada, navegador) para seguridad y funcionamiento. Estos registros los gestiona el proveedor de alojamiento según su propia política.",
          },
          {
            type: "note",
            text: "PENDIENTE: el propietario debe indicar aquí el proveedor de alojamiento, el enlace a su política de privacidad y el plazo de conservación de sus registros.",
          },
        ],
      },
      {
        heading: "5. Si nos escribes por correo",
        blocks: [
          {
            type: "p",
            text: "Si nos envías un correo, recibiremos tu dirección y lo que incluyas en el mensaje. Lo usaremos solo para responderte y lo conservaremos el tiempo necesario para atender tu consulta, salvo que la ley obligue a conservarlo más. El formulario de contacto no envía datos desde la web: solo abre tu aplicación de correo.",
          },
        ],
      },
      {
        heading: "6. Base legal",
        blocks: [
          {
            type: "p",
            text: "El almacenamiento de tu elección de cookies es necesario para prestar el servicio que solicitas (interés legítimo y exención de consentimiento para almacenamiento estrictamente necesario). La respuesta a correos se basa en tu solicitud. Si en el futuro se añadiera analítica o publicidad, solo se activaría con tu consentimiento previo.",
          },
        ],
      },
      {
        heading: "7. Tus derechos",
        blocks: [
          {
            type: "p",
            text: "Según tu país, puedes tener derecho a acceder a tus datos, rectificarlos, suprimirlos, oponerte a su tratamiento, limitarlo y solicitar su portabilidad, así como a retirar tu consentimiento en cualquier momento.",
          },
          {
            type: "ul",
            items: [
              "En la Unión Europea y España (RGPD), puedes reclamar ante la autoridad de control, como la Agencia Española de Protección de Datos (aepd.es).",
              "En Brasil (LGPD), puedes dirigirte a la Autoridad Nacional de Protección de Datos (ANPD).",
              "En América Latina, las leyes de protección de datos de cada país reconocen derechos similares (por ejemplo, los derechos ARCO).",
            ],
          },
          {
            type: "p",
            text: "Como no recopilamos el texto que escribes ni datos de navegación, en la práctica los únicos datos que podríamos tener son los de los correos que nos envíes. Para ejercer tus derechos, escríbenos desde la página de [contacto](contact).",
          },
        ],
      },
      {
        heading: "8. Menores",
        blocks: [
          {
            type: "p",
            text: "El sitio no pide datos personales para usar el generador. Si eres menor de edad y quieres escribirnos, hazlo con conocimiento de tu madre, padre o tutor.",
          },
        ],
      },
      {
        heading: "9. Cambios",
        blocks: [
          {
            type: "p",
            text: "Si cambia el funcionamiento del sitio (por ejemplo, si se añade algún servicio externo), actualizaremos esta política y la fecha de la parte superior antes de aplicar el cambio.",
          },
        ],
      },
    ],
  },

  terms: {
    metaTitle: "Términos y Condiciones de Uso | LetrasHub",
    metaDescription:
      "Condiciones de uso de LetrasHub: uso aceptable del generador de letras, propiedad intelectual, compatibilidad y limitación de responsabilidad.",
    h1: "Términos y condiciones",
    label: "Términos y condiciones",
    showUpdated: true,
    intro: "Al usar LetrasHub aceptas estas condiciones. Si no estás de acuerdo, por favor no uses el sitio.",
    sections: [
      {
        heading: "1. El servicio",
        blocks: [
          {
            type: "p",
            text: "LetrasHub ofrece gratis una herramienta que transforma texto en caracteres Unicode con distintos estilos, junto con contenido informativo sobre su uso. No requiere registro.",
          },
        ],
      },
      {
        heading: "2. Uso aceptable",
        blocks: [
          {
            type: "p",
            text: "Puedes usar los resultados libremente para fines personales y comerciales legítimos. No está permitido usar el sitio ni el texto generado para:",
          },
          {
            type: "ul",
            items: [
              "Suplantar la identidad de otras personas, marcas, administradores o cuentas oficiales.",
              "Enviar spam, engañar a otras personas (por ejemplo, con enlaces o nombres que imitan a otros) o evadir filtros de moderación.",
              "Acosar, amenazar o publicar contenido ilegal.",
              "Sobrecargar, atacar o intentar interferir en el funcionamiento del sitio.",
            ],
          },
        ],
      },
      {
        heading: "3. Propiedad intelectual",
        blocks: [
          {
            type: "p",
            text: "Los caracteres Unicode no pertenecen a LetrasHub y el texto que creas es tuyo. Los textos explicativos, el diseño y el código del sitio pertenecen a su propietario; no puedes copiarlos de forma sustancial sin permiso. Los nombres de plataformas citadas son marcas de sus respectivos titulares y se usan solo de forma descriptiva.",
          },
        ],
      },
      {
        heading: "4. Compatibilidad y resultados",
        blocks: [
          {
            type: "p",
            text: "Cómo se ve el texto depende del dispositivo, el sistema, la app o el juego donde lo pegues. Algunas plataformas pueden rechazar caracteres, mostrar cuadritos o modificar el texto. Eres responsable de revisar el resultado antes de usarlo, especialmente en cambios de nombre que tengan coste o no se puedan deshacer.",
          },
        ],
      },
      {
        heading: "5. Disponibilidad",
        blocks: [
          {
            type: "p",
            text: "Intentamos que el sitio esté disponible y funcione bien, pero no garantizamos que no haya interrupciones o errores. Podemos cambiar, añadir o retirar estilos y contenidos en cualquier momento.",
          },
        ],
      },
      {
        heading: "6. Responsabilidad",
        blocks: [
          {
            type: "p",
            text: "El sitio se ofrece «tal cual». En la medida permitida por la ley, LetrasHub no se responsabiliza de daños derivados del uso del texto generado, de su rechazo por terceras plataformas ni de decisiones tomadas por esas plataformas sobre tu cuenta. Nada en estas condiciones limita derechos que la ley de tu país te reconozca como consumidor.",
          },
        ],
      },
      {
        heading: "7. Enlaces externos",
        blocks: [
          {
            type: "p",
            text: "Algunas páginas enlazan a sitios externos, como unicode.org. No controlamos su contenido ni sus políticas.",
          },
        ],
      },
      {
        heading: "8. Ley aplicable y cambios",
        blocks: [
          {
            type: "note",
            text: "PENDIENTE DE REVISIÓN LEGAL: el propietario debe indicar la ley aplicable y la jurisdicción según su país de residencia.",
          },
          {
            type: "p",
            text: "Podemos actualizar estas condiciones. La fecha de la parte superior indica la última versión. Para dudas, visita la página de [contacto](contact).",
          },
        ],
      },
    ],
  },

  cookies: {
    metaTitle: "Política de Cookies | LetrasHub",
    metaDescription:
      "Qué almacenamiento usa LetrasHub en tu navegador: solo lo necesario para recordar tu elección de cookies. Sin analítica ni publicidad.",
    h1: "Política de cookies",
    label: "Política de cookies",
    showUpdated: true,
    intro:
      "Las cookies y el almacenamiento local son pequeños datos que un sitio guarda en tu navegador. Aquí explicamos exactamente cuáles usa LetrasHub.",
    sections: [
      {
        heading: "Qué usamos",
        blocks: [
          {
            type: "ul",
            items: [
              "Nombre: letrashub-consent. Tipo: almacenamiento local (localStorage), no es una cookie HTTP. Categoría: necesario. Finalidad: recordar tu elección en el aviso de cookies y la fecha. Duración: hasta que lo borres o retires el consentimiento.",
            ],
          },
          {
            type: "p",
            text: "No usamos cookies HTTP propias, ni cookies de analítica, de publicidad o de redes sociales. El texto que escribes en el generador no se guarda en ningún almacenamiento.",
          },
        ],
      },
      {
        heading: "Categorías del aviso",
        blocks: [
          {
            type: "ul",
            items: [
              "Necesarias: siempre activas, porque sin ellas no podríamos recordar tu elección.",
              "Analítica: desactivada por defecto. Actualmente no usamos ningún servicio de analítica.",
              "Marketing: desactivada por defecto. Actualmente no mostramos publicidad.",
            ],
          },
          {
            type: "p",
            text: "Si en el futuro se añadiera algún servicio de estas categorías, se actualizaría esta política y el servicio solo se cargaría después de que des tu consentimiento.",
          },
        ],
      },
      {
        heading: "Cómo cambiar o retirar tu elección",
        blocks: [
          {
            type: "p",
            text: "Pulsa «Configurar cookies» en el pie de cualquier página para revisar las categorías, guardar otra elección o retirar el consentimiento. También puedes borrar el almacenamiento del sitio desde los ajustes de tu navegador; en ese caso el aviso volverá a aparecer.",
          },
        ],
      },
      {
        heading: "Más información",
        blocks: [
          {
            type: "p",
            text: "Consulta la [política de privacidad](privacy) para saber cómo tratamos los datos en general.",
          },
        ],
      },
    ],
  },

  disclaimer: {
    metaTitle: "Aviso Legal y Exención de Responsabilidad | LetrasHub",
    metaDescription:
      "LetrasHub genera caracteres Unicode con fines informativos y de entretenimiento. No está afiliado a Free Fire, Instagram, WhatsApp, TikTok ni Discord.",
    h1: "Aviso legal",
    label: "Aviso legal",
    showUpdated: true,
    sections: [
      {
        heading: "Naturaleza del contenido",
        blocks: [
          {
            type: "p",
            text: "LetrasHub genera caracteres Unicode con fines informativos y de entretenimiento. Los resultados no son fuentes tipográficas y su aspecto depende del dispositivo, el sistema operativo, la app o el juego en que se muestren.",
          },
        ],
      },
      {
        heading: "Sin afiliación",
        blocks: [
          {
            type: "p",
            text: "LetrasHub es un sitio independiente. No está afiliado, patrocinado ni respaldado por Garena (Free Fire), Meta (Instagram, WhatsApp), ByteDance (TikTok), Discord Inc. ni ninguna otra empresa o plataforma mencionada. Sus nombres son marcas de sus titulares y se citan únicamente para describir dónde se puede usar el texto. No usamos sus logotipos.",
          },
        ],
      },
      {
        heading: "Exactitud de la información",
        blocks: [
          {
            type: "p",
            text: "Las instrucciones sobre cada plataforma se basan en su funcionamiento general en el momento de escribirlas. Las plataformas cambian sus menús, normas y límites sin previo aviso; si algo ya no coincide, la referencia válida es la propia plataforma. Agradecemos que nos avises desde [contacto](contact).",
          },
        ],
      },
      {
        heading: "Uso bajo tu responsabilidad",
        blocks: [
          {
            type: "p",
            text: "Antes de usar un nombre con caracteres especiales, especialmente si cambiarlo tiene coste, comprueba que se vea bien y que la plataforma lo acepte. Consulta también los [términos y condiciones](terms).",
          },
        ],
      },
    ],
  },
};

export default info;
