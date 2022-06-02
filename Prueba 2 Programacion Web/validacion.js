function validar()
{
    var rut = document.formulario.txt_rut.value
    var nombre = document.formulario.txt_nombre.value
    var telefono = document.formulario.txt_telefono.value
    var mail = document.formulario.txt_mail.value
    var desc = document.formulario.txt_descripcion.value
    if (nombre.length<2)
    {
        alert("Nombre debe tener 2 o más caracteres")
        document.formulario.txt_nombre.focus()
        return false
    }

    if (rut.length<9 || rut.length>10)
    {
        alert("RUT debe tener entre 9 y 10 caracteres")
        document.formulario.txt_rut.focus()
        return false
    }

    if (telefono.substring(0,1)!="9")
    {
        alert("Teléfono debe comenzar con 9")
        document.formulario.txt_telefono.focus()
        return false;
    }

    if (telefono.length!=9)
    {
        alert("Telefono debe tener 9 caracteres")
        document.formulario.txt_telefono.focus()
        return false
    }

    if (mail.length<6)
    {
        alert("mail debe tener 6 o más caracteres")
        document.formulario.txt_mail.focus()
        return false
    }
    if (desc.length<10)
    {
        alert("La descripcion debe ser mas larga")
        document.formulario.txt_descripcion.focus()
        return false
    }

   alert("Ingreso Correcto")
   document.formulario.action() = "..."
}
