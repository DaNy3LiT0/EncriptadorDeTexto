const btnEncriptar = document.querySelector('.btn-encriptar');
const textoInput = document.querySelector('#texto');
const textoOutput = document.querySelector('#texto_out');
const contenidoVacio = document.querySelector('.contenido_vacio');
const contenidoOculto = document.querySelector('.contenido_oculto');
const btnCopiar = document.querySelector('#copiar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');

btnEncriptar.addEventListener('click', encriptarTexto);
btnCopiar.addEventListener('click', copiarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);

function encriptarTexto() {
  const textoOriginal = textoInput.value;
  let textoEncriptado = '';

  for (let i = 0; i < textoOriginal.length; i++) {
    const letra = textoOriginal[i];

    switch (letra) {
      case 'e':
        textoEncriptado += 'enter';
        break;
      case 'i':
        textoEncriptado += 'imes';
        break;
      case 'a':
        textoEncriptado += 'ai';
        break;
      case 'o':
        textoEncriptado += 'ober';
        break;
      case 'u':
        textoEncriptado += 'ufat';
        break;
      default:
        textoEncriptado += letra;
    }
  }

  textoOutput.value = textoEncriptado;
  contenidoVacio.style.display = 'none';
  contenidoOculto.style.display = 'flex';
  textoInput.value = '';
}

function desencriptarTexto() {
  const textoEncriptado = textoOutput.value;
  let textoDesencriptado = '';

  for (let i = 0; i < textoEncriptado.length; i++) {
    const letra = textoEncriptado[i];

    switch (letra) {
      case 'e':
        textoDesencriptado += 'e';
        i += 4; // Saltar los 4 caracteres de "enter"
        break;
      case 'i':
        textoDesencriptado += 'i';
        i += 3; // Saltar los 3 caracteres de "imes"
        break;
      case 'a':
        textoDesencriptado += 'a';
        i += 1; // Saltar los 1 caracteres de "ai"
        break;
      case 'o':
        textoDesencriptado += 'o';
        i += 3; // Saltar los 3 caracteres de "ober"
        break;
      case 'u':
        textoDesencriptado += 'u';
        i += 3; // Saltar los 3 caracteres de "ufat"
        break;
      default:
        textoDesencriptado += letra;
    }
  }

  textoOutput.value = textoDesencriptado;
  contenidoOculto.style.display = 'flex';
  contenidoVacio.style.display = 'none';
  textoInput.value = '';
}

function copiarTexto() {
  const textoOut = document.querySelector('#texto_out');
  const texto = textoOut.value;

  navigator.clipboard.writeText(texto).then(() => {
    console.log('Texto copiado al portapapeles');
  }).catch((error) => {
    console.error('Error al copiar texto:', error);
  });

  // Mostrar nuevamente el contenido vacío
  contenidoVacio.style.display = 'flex';
  contenidoOculto.style.display = 'none';
  textoInput.value = ''; // Vaciar el campo de texto de entrada
}