// CIFRADO CÉSAR
const alphabet = "abcdefghijklmnñopqrstuvwxyz";

function vowelReplacements(text) {
  return text
    .replace("á", "a")
    .replace("é", "e")
    .replace("í", "i")
    .replace("ó", "o")
    .replace(/[úü]/g, "u");
}

function cipher(text, shift) {
  text = vowelReplacements(text);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (alphabet.indexOf(letter.toLowerCase()) != -1) {
      letter.toUpperCase() === letter
        ? (letter =
            alphabet[
              (alphabet.indexOf(letter.toLowerCase()) + shift) % 27
            ].toUpperCase())
        : (letter = alphabet[(alphabet.indexOf(letter) + shift) % 27]);
    }
    result += letter;
  }
  return result;
}

function decipher(text, shift) {
  text = vowelReplacements(text);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (alphabet.indexOf(letter.toLowerCase()) != -1) {
      let index = (alphabet.indexOf(letter.toLowerCase()) - shift) % 27;
      if (index < 0) index += 27;
      letter.toUpperCase() === letter
        ? (letter = alphabet[index].toUpperCase())
        : (letter = alphabet[index]);
    }
    result += letter;
  }
  return result;
}

console.log(cipher("El perro de San Roque no tiene rabo", 13));
console.log(decipher("Qx cqeeb pq Fnz Ebdhq zb guqzq enñb", 13));
console.log(cipher("Ñoquis y tarta de queso, fresas y plátano!", 29)); // si desplazamiento > 27 sigue funcionando
console.log(decipher("Pqswku a vctvc fg swguq, htgucu a rncvcoq!", 29)); // si desplazamiento > 27 sigue funcionando
