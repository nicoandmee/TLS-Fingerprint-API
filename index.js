import got from 'got';
import WebSocket from 'ws';
import { HttpsProxyAgent } from 'hpagent';

const testWebSocket = async () => {
    const ws = new WebSocket('ws://localhost:8082', {
      headers: {
        'Poptls-Url': 'wss://echo.websocket.events',
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
    await testWebSocket();
})();
