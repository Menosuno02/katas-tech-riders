// CIFRADO CÉSAR
const alfabeto = "abcdefghijklmnñopqrstuvwxyz";

function quitarTildes(texto) {
  return texto
    .toLowerCase()
    .replace("á", "a")
    .replace("é", "e")
    .replace("í", "i")
    .replace("ó", "o")
    .replace(/[úü]/g, "u");
}

function cifrarCesar(texto, num) {
  texto = quitarTildes(texto);
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra !== " ") letra = alfabeto[(alfabeto.indexOf(letra) + num) % 27];
    resultado += letra;
  }
  return resultado;
}

function descifrarCesar(texto, num) {
  texto = quitarTildes(texto);
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra !== " ") {
      let index = (alfabeto.indexOf(letra) - num) % 27;
      if (index < 0) index += 27;
      letra = alfabeto[index];
    }
    resultado += letra;
  }
  return resultado;
}

console.log(cifrarCesar("El perro de San Roque no tiene rabo", 13));
console.log(descifrarCesar("qx cqeeb pq fnz ebdhq zb guqzq enñb", 13));
console.log(cifrarCesar("Ñoquis con queso y plátano", 45));
console.log(descifrarCesar("fgimzk tge imvkg p hcrlreg", 45));
