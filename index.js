import got from 'got';
import WebSocket from 'ws';
import { io } from 'socket.io-client';

import { HttpsProxyAgent } from 'hpagent';

const testWebSocket = async () => {
  const ws = new WebSocket('ws://localhost:8082', {
    headers: {
      'Poptls-Url': 'wss://ws.ifelse.io',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
    },
  });

  ws.on('open', function open() {
    ws.send('something');
  });

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
};

const testSocketIO = async () => {
  const ws = new WebSocket('ws://localhost:8082', {
    headers: {
      'Poptls-Url': 'wss://ws.duelbits.com/socket.io/?EIO=4&transport=websocket',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
    },
  });

  const socket = io('ws://localhost:8082', {
    transports: ["websocket"],

    extraHeaders: {
      'Poptls-Url': 'wss://ws.duelbits.com/socket.io/?EIO=4&transport=websocket',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
    },
  });

  ws.on('open', function open() {
    ws.send('something');
  });

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
};

(async () => {
  await testWebSocket();
})();
