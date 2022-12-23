let language = 'indonesian';
let greeting = null;

switch (language) {
  case 'english':
    greeting = 'Good Morning!';
    break;

  case 'indonesian':
    greeting = 'Selamat Pagi!';
    break;

  case 'japanese':
    greeting = 'Ohayou Gozaimasu!';
    break;

  default:
    greeting = 'Bonjour!';
}

console.log(greeting);
