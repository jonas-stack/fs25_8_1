import { v4 as uuidv4 } from 'uuid';

const clientID = uuidv4();
console.log(clientID);

const wsUrl = `ws://localhost:8181/?id=${clientID}`;
const socket = new WebSocket(wsUrl);

socket.onopen = function() {
    console.log('WebSocket connection opened with clientID:', clientID);
};

socket.onmessage = function(event) {
    console.log('Message from server:', event.data);
};

socket.onclose = function() {
    console.log('WebSocket connection closed');
};