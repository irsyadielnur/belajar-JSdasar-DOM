function welcome() {
  alert('Sim salabim muncullah elemen-elemen HTML!');
  const contents = document.querySelector('.contents');
  contents.removeAttribute('hidden');
}

function increment() {
  document.getElementById('count').innerText++;

  if (document.getElementById('count').innerText == 3) {
    const hiddenMessage = document.createElement('h4');
    hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
    const contents = document.querySelector('.contents');
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}

window.addEventListener('load', welcome);
document.getElementById('incrementButton').addEventListener('click', increment);
