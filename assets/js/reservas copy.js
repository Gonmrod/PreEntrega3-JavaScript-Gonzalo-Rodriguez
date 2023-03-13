//Creación de un objeto que contendrá las reservas

const reservas = {
  listaReservas : []
}

// Creación de un menú que llamará a diferentes funciones,Anunciamos el modo de entrada de datos por medio de una función  mostrarMenu() y la utilización de bucle while y un switch

function mostrarMenu() {
  let opcion = "";
  do {
    opcion = prompt(`Elija una opción:
      1. Agregar una reserva
      2. Eliminar una reserva
      3. Buscar una reserva
      4. Filtrar reservas
      5. Salir del sistema`);
      
      if (opcion == 1){
        agregarReserva();
        return;
      }else if (opcion == 2) {
        eliminarReserva();
      }else if (opcion == 3) {
        buscarReserva();
      }else if (opcion == 4) {
        filtrarReservas();
      }else if (opcion == 5) {
        alert("Gracias por utilizar nuestro sistema de reservas.")
      }else {
        alert("Opción incorrecta, intente nuevamente.")
      }
  } while (opcion !== "5");
}

// Creación de una función que permita agregar reservas

function agregarReserva(){
  let reserva = {
    fechaIngreso: "",
    fechaEgreso: "",
    cantPersonas: "",
    titularNombre: "",
    titularApellido: "",
    titularDNI: ""
  }

  reserva.fechaIngreso = prompt("Ingrese fecha de ingreso  - DD/MM/AAAA");
  reserva.fechaEgreso = prompt("Ingrese fecha de egreso - DD/MM/AAAA");
  reserva.cantPersonas = Number(prompt("Ingrese la cantidad de personas para hospedaje"));
  reserva.titularNombre = prompt("Ingrese su nombre");
  reserva.titularApellido = prompt("Ingrese su apellido");
  reserva.titularDNI = prompt("Ingrese su DNI (sin puntos)");

//Genero un bucle while en caso de completar un dato vacío
  while (reserva.fechaIngreso === "" || reserva.fechaEgreso === "" || reserva.cantPersonas === "" || reserva.titularNombre === "" || reserva.titularApellido === "" || reserva.titularDNI === ""){
    alert("No ha completado algún dato, por favor revea los ingresos.")
    reserva.fechaIngreso = prompt("Ingrese fecha de ingreso  - DD/MM/AAAA");
    reserva.fechaEgreso = prompt("Ingrese fecha de egreso - DD/MM/AAAA");
    reserva.cantPersonas = Number(prompt("Ingrese la cantidad de personas para hospedaje"));
    reserva.titularNombre = prompt("Ingrese su nombre");
    reserva.titularApellido = prompt("Ingrese su apellido");
    reserva.titularDNI = prompt("Ingrese su DNI (sin puntos)");
  }

  // Si contiene datos se utiliza el metodo push para añadir los elementos al Objeto array y se alerta que se ha agregado
    reservas.listaReservas.push(reserva);
    alert(`Registro de reserva exitoso - Datos - Titular: ${reserva.titularNombre}, ${reserva.titularApellido} con DNI: ${reserva.titularDNI}. Para la fecha: ${reserva.fechaIngreso} hasta el día ${reserva.fechaEgreso}. Cantidad de personas: ${reserva.cantPersonas}`);
return mostrarMenu();
}

// Creación de función para eliminar reserva del objeto reservas
function eliminarReserva() {
  let dni = prompt("Ingrese el DNI del titular de la reserva que desea eliminar");
  let index = -1

  for (let i = 0; i <reservas.listaReservas.length; i+=1) {
    if (reservas.listaReservas[i].titularDNI === dni) {
      index = i
      break;
    }
  }
  if (index === -1) {
    alert("No se encontró reserva alguna con ese DNI");
  }else {
    reservas.listaReservas.splice(index, 1);
    alert("Reserva eliminada exitosamente");
  }
return;
}


//Creación de función buscarReserva
function buscarReserva() {
  let dni = prompt("Ingrese el DNI del titular de la reserva que desea buscar");
  let index = -1;

  for (let i = 0; i < reservas.listaReservas.length; i+=1) {
    if(reservas.listaReservas[i].titularDNI === dni) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    alert("No se encontró ninguna reserva con ese DNI");
  }else {
    alert(`Registro de reserva - Datos - Titular: ${reservas.listaReservas[index].titularNombre}, ${reservas.listaReservas[index].titularApellido} con DNI: ${reservas.listaReservas[index].titularDNI}. Para la fecha: ${reservas.listaReservas[index].fechaIngreso} hasta el día ${reservas.listaReservas[index].fechaEgreso}. Cantidad de personas: ${reservas.listaReservas[index].cantPersonas}`);
  }
return;
}

//Creación de función filtrarReservas

function filtrarReservas() {
  let filtroFecha = prompt("Ingrese la fecha que desea buscar - DD/MM/AAAA");
  let reservasFiltradas = [];

  for (let i = 0; i < reservas.listaReservas.length; i++) {
    if (reservas.listaReservas[i].fechaIngreso === filtroFecha) {
      reservasFiltradas.push(reservas.listaReservas[i]);
    }
  }

  if (reservasFiltradas.length === 0) {
    alert("No se encontraron reservas para la fecha ingresada.");
  } else {
    let mensaje = `Reservas encontradas para la fecha ${filtroFecha}:\n\n`;
    for (let i = 0; i < reservasFiltradas.length; i++) {
      mensaje += `- Titular: ${reservasFiltradas[i].titularNombre}, ${reservasFiltradas[i].titularApellido} con DNI: ${reservasFiltradas[i].titularDNI}. Para la fecha: ${reservasFiltradas[i].fechaIngreso} hasta el día ${reservasFiltradas[i].fechaEgreso}. Cantidad de personas: ${reservasFiltradas[i].cantPersonas}\n\n`;
    }
    alert(mensaje);
  }

  return;
}

//comienza el programa, llamando a la función mostrarMenu()
mostrarMenu()
