const {
    createBot,
    createProvider,
    createFlow,
    addKeyword,
    } = require('@bot-whatsapp/bot')
    
    const QRPortalWeb = require('@bot-whatsapp/portal')
    const BaileysProvider = require('@bot-whatsapp/provider/baileys')
    const MockAdapter = require('@bot-whatsapp/database/mock')
    
    //-----

    const flowMenu = addKeyword(['inicio','menu','hola'])
        .addAnswer(
        '🙌 Bienvenido al Menú')
        .addAnswer(
        [        
        'marca 👉 1 para descargar los casos de uso de bots en PDF',
        'marca 👉 2 Cómo integrar el bot con Messenger y con Whatsapp',
        'marca 👉 3 Diferencias entre WHITE bot y BLACK bot',
        'marca 👉 4 Para agendar un meeting',
        '#Robots mas inteligentes para responder incansablemente',
        ], 
    );
 
    const flowMenuPDF = addKeyword('1')
        .addAnswer('Para que sirven exactamente?',)
        .addAnswer(
            'Te puedo enviar un resumen de lo que hace el servicio',
            { media: 'xxx.pdf' },)
        .addAnswer('Smarter porque ya fué pre programado!!',);

    const flowLocal = addKeyword('2').addAnswer(
        'Estamos en Chile y creamos BOTs para distintos usos!',
        ).addAnswer('Nuestra oficina física se encuentra en Vitacura',
        ).addAnswer('Nuestro horario es de oficina de 10 a 13hs.',
       /// ).addAnswer('Domingos de 11.30 a 14 hs y los Lunes descansamos',
      
    );
      const flowDelivery = addKeyword('3').addAnswer(
          'Se puede integrar con distintos servicios de pagos en línea',
          ).addAnswer('Los servicios se cobran de manera mensual o anual',
      //    ).addAnswer('Si es tu primera compra, podés canjear el descuento',
    );
    
    //   const flowLlamar = addKeyword('4').addAnswer(
    //       'Desde el botón se puede llamar para más información',
    //       { media: '+56 9 4868 3859'},
    //       ).addAnswer('Si es tu primera compra, podés canjear los descuentos',
    // );

    //    ----

    const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowMenu,flowMenuPDF,flowDelivery,flowLocal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}
main()