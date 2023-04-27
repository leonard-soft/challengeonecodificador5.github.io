"use strict";

window.addEventListener("load", () => {

  //variables
  let button = document.querySelector("#button");
  let e_button = document.querySelector('#e_button');
  let d_button = document.querySelector('#d_button');
  let textarea = document.querySelector('#message');
  let encrytpt = document.querySelector('#encrypt');
  let c_button = document.querySelector('#c_button');
  
  button.addEventListener("click", () => {
    Swal.fire({
      icon: "info",
      title: "Encriptador de texto",
      text: "Un programa de encriptación de texto difumina o borra el texto sensible de un documento para garantizar la seguridad del mismo. escribe un mensaje para ser encriptado.",
    });
  });
   
  e_button.addEventListener('click', () => {
    let message = document.querySelector('#message').value;
    if(message.length == 0){ //validando el valor del textarea
       textarea.classList.add('is-invalid');
       swal.fire(
         {
          icon: "error",
          title: "value_error",
          text: "usted no ha ingresado ningun valor."
         }
       );
    } else { // cuando message si tiene un valor
       textarea.classList.remove('is-invalid');
       textarea.classList.add('is-valid');
       swal.fire({
         icon: 'success',
         title: 'Good',
         text: 'el texto fue encriptado con exito!'
       });
      
       //encriptando el texto
       var text = message.replace(/e/gi, "enter")
                          .replace(/i/gi, "imes")
                          .replace(/a/gi, "ai")
                          .replace(/o/gi, 'ober')
                          .replace(/u/gi, 'ufat');
       document.getElementById('encrypt').value = '';
       var element = document.createElement('p');
       var textNode = document.createTextNode(text);
       element.appendChild(textNode);
       document.getElementById('encrypt').value = text;
    }
  });

  d_button.addEventListener('click', () => {
    let message = document.querySelector('#message').value;
    if(message.length == 0){ //validando el valor del textarea
       textarea.classList.add('is-invalid');
       swal.fire(
         {
          icon: "error",
          title: "value_error",
          text: "usted no ha ingresado ningun valor."
         }
       );
    } else { // cuando message si tiene un valor
       textarea.classList.remove('is-invalid');
       textarea.classList.add('is-valid');
       swal.fire({
         icon: 'success',
         title: 'Good',
         text: 'el texto fue desencriptado con exito!'
       });

        //desencriptando el texto
        let text = message.replace(/enter/gi, "e")
                          .replace(/imes/gi, "i")
                          .replace(/ai/gi, "a")
                          .replace(/ober/gi, 'o')
                          .replace(/ufat/gi, 'u');
        document.getElementById('encrypt').value = '';
        let element = document.createElement('p');
        let textNode = document.createTextNode(text);
        element.appendChild(textNode);
        document.getElementById('encrypt').value = text;
    }
  });

  c_button.addEventListener('click', () => {
     swal.fire(
      {
        icon: "success",
        title: "Copiado",
        text: "mensaje copiado con exito"
      }
     );
     
     var content = document.querySelector('#encrypt');
     content.select();
     document.execCommand('copy');

  });

  console.log(button);
});
