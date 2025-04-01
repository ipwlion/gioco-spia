
const nickname = sessionStorage.getItem('nickname');
const roomId = sessionStorage.getItem('roomId');
const isOwner = sessionStorage.getItem('isOwner') === 'true';

document.getElementById('roomName').innerText = roomId;

const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  ws.send(JSON.stringify({ action: 'join', nickname, roomId }));
};

document.getElementById('startBtn').style.display = isOwner ? 'block' : 'none';
document.getElementById('startBtn').onclick = () => {
  ws.send(JSON.stringify({ action: 'start', roomId }));
};

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);

  if (msg.action === 'playerList') {
    const ul = document.getElementById('playerList');
    ul.innerHTML = '';
    msg.players.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p;
      ul.appendChild(li);
    });
  }

  if (msg.action === 'startGame') {
    window.location.href = 'game.html';
  }
};
