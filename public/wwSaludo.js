/**
 * @param {MessageEvent} evt mensaje recibido de la interfaz gráfica. La
 * property data tiene los datos enviados con hilo.postMessage(modelo). */
onmessage = evt => {
  // Calcula y envía de regreso la respuesta a la interfaz gráfica.
  // @ts-ignore
  var suma = parseInt(evt.data.nombre1)+parseInt(evt.data.nombre2)+parseInt(evt.data.nombre3)+parseInt(evt.data.nombre4)+parseInt(evt.data.nombre5);
  var prom = suma/5;
  postMessage(`El promedio de las calificaciones ${evt.data.nombre1}, ${evt.data.nombre2}, ${evt.data.nombre3}, ${evt.data.nombre4}, ${evt.data.nombre5} es: `+ prom);
};
