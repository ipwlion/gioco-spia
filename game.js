
const nickname = sessionStorage.getItem('nickname');
const roomId = sessionStorage.getItem('roomId');
const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  ws.send(JSON.stringify({ action: 'confirmReady', nickname, roomId }));
};

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);

  if (msg.action === 'role') {
    const roleInfo = document.getElementById('roleInfo');
    if (msg.role === 'spy') {
      roleInfo.innerText = 'Sei la SPIA! ' + msg.intro;
    } else {
      roleInfo.innerText = 'Luogo: ' + msg.location;
    }
  }
};
