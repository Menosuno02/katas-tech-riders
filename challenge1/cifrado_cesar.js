// CIFRADO CESAR
// Alejandro López Labajo

function vowelReplacements(text) {
  return text
    .replace("á", "a")
    .replace("é", "e")
    .replace("í", "i")
    .replace("ó", "o")
    .replace(/[úü]/g, "u");
}

const alphabet = "abcdefghijklmnñopqrstuvwxyz";

/**
 * Cifrado Cesar (incluye ñ)
 */
function caesar(text, shift = 13, mode = "cipher") {
  text = vowelReplacements(text);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    let index = alphabet.indexOf(letter.toLowerCase());
    if (index != -1) {
      if (mode == "cipher") letter = alphabet[(index + shift) % 27];
      else if (mode == "decipher") {
        let pos = (index - shift) % 27;
        if (pos < 0) pos += 27;
        letter = alphabet[pos];
      }
      if (text[i].toUpperCase() === text[i]) letter = letter.toUpperCase();
    }
    result += letter;
  }
  return result;
}

console.log("CESAR");
console.log(caesar("El perro de San Roque no tiene rabo", 13, "cipher"));
console.log(caesar("Qx cqeeb pq Fnz Ebdhq zb guqzq enñb", 13, "decipher"));
console.log(caesar("Ñoquis, tarta de queso y plátano!", 29)); // si desplazamiento > 27 sigue funcionando
console.log(caesar("Pqswku, vctvc fg swguq a rncvcoq!", 29, "decipher")); // si desplazamiento > 27 sigue funcionando

/**
 * Cifrado Cesar con ASCII (no incluye ñ)
 */
function caesarASCII(text, shift = 13, mode = "cipher") {
  text = vowelReplacements(text);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      // mayúsculas
      if (mode == "cipher") code = ((code - 65 + shift) % 26) + 65;
      else if (mode == "decipher") {
        let pos = (code - 65 - shift) % 26;
        if (pos < 0) pos += 26;
        code = pos + 65;
      }
    } else if (code >= 97 && code <= 122) {
      // minúsculas
      if (mode == "cipher") code = ((code - 97 + shift) % 26) + 97;
      else if (mode == "decipher") {
        let pos = (code - 97 - shift) % 26;
        if (pos < 0) pos += 26;
        code = pos + 97;
      }
    }
    result += String.fromCharCode(code);
  }
  return result;
}

console.log("CESAR ASCII");
console.log(caesarASCII("El perro de San Roque no tiene rabo", 30, "cipher"));
console.log(caesarASCII("Ip tivvs hi Wer Vsuyi rs xmiri vefs", 30, "decipher"));
