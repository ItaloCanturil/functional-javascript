function greet(gretting, name) {
  return `${gretting}, ${name}!`;
}

function curryGreet(greeting) {
  return function (name) {
    return `${greeting}, ${name}`;
  }
}

const greetItal = curryGreet("Ciao");
greetItal("Italo"); // "Ciao, Italo!"

const greetText = curryGreet("Hello");
greetText("Alonzo"); // "Hello, Alonzo!"
greetText("Hamilton"); // "Hello, Hamilton!"