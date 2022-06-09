import got from 'got';
import WebSocket from 'ws';
import { HttpsProxyAgent } from 'hpagent';

const testWebSocket = async () => {
    const ws = new WebSocket('ws://localhost:8082', {
      headers: {
          'poptls-url': 'wss://ws.ifelse.io',
      }
    });

    ws.on('open', function open() {
      ws.send('something');
    });

    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
}

(async () => {
    const response = await got.get('http://localhost:8082', {
        headers: {
            'poptls-url': 'wss://ws.ifelse.io',
        },
        throwHttpErrors: false,
    });

    console.log(response.statusCode);
    console.log(response.body);
})();
