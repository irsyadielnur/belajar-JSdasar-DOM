const newElement = document.createElement('li');
newElement.innerHTML = 'Selamat menikmati! ';

const daftar = document.getElementById('daftar');

daftar.appendChild(newElement);

const elementAwal = document.createElement('li');
elementAwal.innerHTML = 'Hidupkan Kompor. ';

const itemAwal = document.getElementById('awal');
daftar.insertBefore(elementAwal, itemAwal);
