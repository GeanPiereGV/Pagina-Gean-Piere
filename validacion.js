//Haz tú validación en javascript acá

const validarDatos = () => {
    window.event.preventDefault()

    if(document.form.nombre.value=="") {
        alert("El campo de nombre no puede estar vacio")
        document.form.nombre.focus()

    } else if(document.form.email.value=="") {
        alert("El campo de email no puede estar vacio")
        document.form.email.focus()

    } else if(document.form.asunto.value=="") {
        alert("El campo de asunto no puede estar vacio")
        document.form.asunto.focus()

    } else if (document.form.mensaje.value=="" || document.form.mensaje.value.length <= 50 ){
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres") 
        document.form.mensaje.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    };
};
 document.querySelector('form').addEventListener('submit', validarDatos);