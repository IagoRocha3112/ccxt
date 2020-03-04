'use strict';

// ---------------------------------------------------------------------------

const okex3 = require ('./okex3.js');

// ---------------------------------------------------------------------------

module.exports = class okcoinusd extends okex3 {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'okcoinusd',
            'name': 'OKCoin USD',
            'countries': [ 'CN', 'US' ],
            'hostname': 'okcoin.com',
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/27766791-89ffb502-5ee5-11e7-8a5b-c5950b68ac65.jpg',
                'referral': 'https://www.okcoin.com/account/register?flag=activity&channelId=600001513',
            },
            'fees': {
                'trading': {
                    'taker': 0.002,
                    'maker': 0.001,
                },
            },
            'options': {
                'fetchMarkets': [ 'spot' ],
            },
        });
    }
};
