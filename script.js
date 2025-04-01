
document.getElementById('createBtn').onclick = () => {
  const nickname = document.getElementById('nickname').value;
  const room = document.getElementById('room').value;
  sessionStorage.setItem('nickname', nickname);
  sessionStorage.setItem('roomId', room);
  sessionStorage.setItem('isOwner', 'true');
  window.location.href = 'room.html';
};

document.getElementById('joinBtn').onclick = () => {
  const nickname = document.getElementById('nickname').value;
  const room = document.getElementById('room').value;
  sessionStorage.setItem('nickname', nickname);
  sessionStorage.setItem('roomId', room);
  sessionStorage.setItem('isOwner', 'false');
  window.location.href = 'room.html';
};
