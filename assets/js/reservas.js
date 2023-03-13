// Creamos un objeto para guardar la reserva
const reserva = {
  fechaEntrada: "",
  fechaSalida: "",
  cantPersonas: ""
};

// Función para enviar la reserva
function enviarReserva() {
  // Obtenemos la fecha y el horario seleccionados por el usuario
  reserva.fechaEntrada = document.getElementById("fechaEntrada").value;
  reserva.fechaSalida = document.getElementById("fechaSalida").value;
  reserva.cantPersonas = document.getElementById("cantPersonas").value;
  
  // Validamos que se haya seleccionado una fecha y un horario
  if (reserva.fechaEntrada == "" || reserva.cantPersonas == "" || reserva.fechaSalida == "") {
    document.getElementById("mensaje").innerHTML = "Por favor, selecciona una fecha y la cantidad de personas";
    return;
  }
  
  // Mostramos un mensaje de confirmación
  document.getElementById("mensaje").innerHTML = "¡Reserva realizada para el " + reserva.fechaEntrada + " hasta el " + reserva.fechaSalida + " para " + reserva.cantPersonas + " personas.";
  
  // Deshabilitamos el botón de enviar
  document.getElementById("enviar").disabled = true;
}