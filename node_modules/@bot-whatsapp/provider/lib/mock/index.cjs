/** 
* NO TOCAR ESTE ARCHIVO: Es generado automaticamente, si sabes lo que haces adelante ;)
* de lo contrario mejor ir a la documentacion o al servidor de discord link.codigoencasa.com/DISCORD
*/
'use strict';

var require$$0 = require('@bot-whatsapp/bot');

const { ProviderClass } = require$$0;

class MockProvider extends ProviderClass {
    constructor() {
        super();
    }

    delaySendMessage = (miliseconds, eventName, payload) =>
        new Promise((res) =>
            setTimeout(() => {
                this.emit(eventName, payload);
            }, miliseconds)
        )

    sendMessage = async (userId, message) => {
        console.log(`Enviando... ${userId}, ${message}`);
        return Promise.resolve({ userId, message })
    }
}

var mock = MockProvider;

module.exports = mock;
