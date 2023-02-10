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
        '🙌 Bienvenido al bot de Gregoria Cocina')
        .addAnswer(
        [        
        'marca 👉 1 Para obtener la carta de terraza en PDF',
        'marca 👉 2 Para conocer la dirección y horarios',
        'marca 👉 3 Para pedir delivery o retirar en el local',
        '#EL VERDADERO RINCÓN 🇦🇷 EN SANTIAGO',
        ], 
    );
 
    const flowMenuPDF = addKeyword('1')
        .addAnswer('Nuestra Carta Menu de terraza',)
        .addAnswer(
            'Te envio una imagen',
            { media: 'https://botchile.000webhostapp.com/GREGORIA-COCINA.pdf' },)
        .addAnswer('no necesitás reservar mesa!',);

    const flowLocal = addKeyword('2').addAnswer(
        'Estamos en Vitacura!',
        ).addAnswer('AV Padre Hurtado Nº 1376, esquina Las Hualtatas.',
        ).addAnswer('Martes a Sabado de 10.30 hasta las 19.30 hs.',
        ).addAnswer('Domingos de 11.30 a 14 hs y los Lunes descansamos',
      
    );
      const flowDelivery = addKeyword('3').addAnswer(
          'Pedí con este link https://mipedido.gregoria.cl/pedir',
          ).addAnswer('Nuestro sitio web permite pedir a domicilio o retirar en el local',
          ).addAnswer('Si es tu primera compra, podés canjear los descuentos',
    );

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