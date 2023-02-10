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
        '🙌 Bienvenido al bot de Instalación')
        .addAnswer(
        [        
        'marca 👉 1 Para obtener el PDF',
        'marca 👉 2 Para conocer la dirección y horarios',
        'marca 👉 3 Para pedir delivery o retirar en el local',
        'marca 👉 4 Para agendar un meeting',
        '#Robots mas inteligentes para responder preguntontas',
        ], 
    );
 
    const flowMenuPDF = addKeyword('1')
        .addAnswer('Nuestra Carta Menu de terraza',)
        .addAnswer(
            'Te puedo enviar un resumen de lo que hace el servicio',
            { media: 'xxx.pdf' },)
        .addAnswer('no necesitás ver el código porque es programable!!',);

    const flowLocal = addKeyword('2').addAnswer(
        'Estamos en Chile porque somos una plataforma de BOTs!',
        ).addAnswer('Nuestra oficina física se encuentra en Vitacura',
        ).addAnswer('Nuestro horario es de oficina de 10 a 13hs.',
       /// ).addAnswer('Domingos de 11.30 a 14 hs y los Lunes descansamos',
      
    );
      const flowDelivery = addKeyword('3').addAnswer(
          'Se puede pagar en linea con tarjetas o transferencia',
          ).addAnswer('Nuestros servicios se cobran de manera mensual o anual',
          ).addAnswer('Si es tu primera compra, podés canjear el descuento',
    );
    
      const flowLlamar = addKeyword('4').addAnswer(
          'Desde el botón se puede llamar para más información',
          { call: '+56 9 4868 3859'},
          ).addAnswer('Si es tu primera compra, podés canjear los descuentos',
    );

    //    ----

    const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowMenu,flowMenuPDF,flowDelivery,flowLocal,flowLlamar])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}
main()