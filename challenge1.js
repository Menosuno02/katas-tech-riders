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
    if (alfabeto.indexOf(letra) != -1)
      letra = alfabeto[(alfabeto.indexOf(letra) + num) % 27];
    resultado += letra;
  }
  return resultado;
}

function descifrarCesar(texto, num) {
  texto = quitarTildes(texto);
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (alfabeto.indexOf(letra) != -1) {
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
console.log(cifrarCesar("Ñoquis y tarta de queso, fresas y plátano!", 29)); // si desplazamiento > 27 sigue funcionando
console.log(descifrarCesar("pqswku a vctvc fg swguq, htgucu a rncvcoq!", 29)); // si desplazamiento > 27 sigue funcionando
