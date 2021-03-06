// variables
let costoEnvio = 150;
let posibleProducto = "";
let correo = "";
let ContadorSugerencias = 0;
let quitarProducto = "";
let agregarProducto = "";
let opcionPropietario = "";

// Definicion de objetos
class producto {
  constructor(codigo, nombre, cantidad, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  precioConEnvio() {
    return this.precio + costoEnvio;
  }
}

// Menú
const lasagna1 = new producto("L01", "LASAGNA DE BOLOGNESA", 5, 500);
const lasagna2 = new producto("L02", "LASAGNA DE BERENJENA", 6, 400);
const lasagna3 = new producto("L03", "LASAGNA DE POLLO", 3, 450);
const lasagna4 = new producto("L04", "LASAGNA DE BONDIOLA", 8, 330);

const pastas1 = new producto("S01", "SORRENTINOS DE ESPINACA RICOTTA", 2, 480);
const pastas2 = new producto("S02", "SORRENTINOS DE JAMON Y QUESO", 7, 440);
const pastas3 = new producto("S03", "SORRENTINOS DE VERDURA", 4, 410);

//Funciones
// function precioCantidad(valor) {
//   let cantidad = parseInt(
//     prompt(
//       `Seleccionaste ${
//         stock[valor - 1].nombre
//       }, cuantos porciones quieres? Recuerda que cada combo trae ${
//         stock[valor - 1].cantidad
//       } unidades.`
//     )
//   );
//   return cantidad * stock[valor - 1].precio;
// }

function agregarStock(elemento) {
  if (codigosEnStock.includes(elemento.codigo) === false) {
    codigosEnStock.push(elemento.codigo);
    productosEnStock.push(elemento.nombre);
    codigosSinStock.splice(codigosSinStock.indexOf[elemento].codigo, 1);
    productoSinStock.splice(productoSinStock.indexOf[elemento].nombre);
    console.log(`Se agregó al stock exitosamente un producto.`);
  } else if (codigosEnStock.includes(elemento.codigo) === true) {
    console.log("Proceso interrumpido. El producto ya se encuentra en stock");
  } else {
    console.log(
      `El nombre ${elemento} no pertenece a ningun prducto de nuestra tienda.`
    );
  }
}

function quitarStock(elemento) {
  if (codigosSinStock.includes(elemento.codigo) === false) {
    productoSinStock.push(elemento.nombre);
    codigosSinStock.push(elemento.codigo);
    codigosEnStock.splice(codigosEnStock.indexOf(elemento.codigo), 1);
    productosEnStock.splice(productosEnStock.indexOf(elemento.nombre), 1);
    console.log(`Se quito del stock exitosamente un producto.`);
  } else if (codigosSinStock.includes(elemento.codigo) === true) {
    console.log(
      "Proceso interrumpido. El producto ya se encuentra fuera de stock"
    );
  } else {
    console.log(
      `El nombre ${elemento} no pertenece a ningun prducto de nuestra tienda.`
    );
  }
}

// array
let sugerenciasClientes = [];
let productosEnStock = [
  "SORRENTINOS DE JAMON Y QUESO",
  "LASAGNA DE BOLOGNESA",
  "LASAGNA DE BERENJENA",
  "LASAGNA DE POLLO",
  "LASAGNA DE BONDIOLA",
];
let codigosEnStock = ["S02", "L01", "L02", "L03", "L04"];
let productoSinStock = [
  "SORRENTINOS DE VERDURA",
  "SORRENTINOS DE ESPINACA RICOTTA",
];
let codigosSinStock = ["S03", "S01"];

//INICIO DEL PROGRAMA
//Se solicita nombre para ofrecer servicio mas personalizado.
let nombreCliente = prompt(
  "Bienvenida/o a LASAGNA ARGENTINA! Cuentanos como te llamas:"
);

while (nombreCliente != "Admin") {
  //OPCIONES DEL MENÚ
  let eleccionCliente = parseInt(
    prompt(`Hola ${nombreCliente}, gracias por elegirnos! Selecciona la opcion de lo que deseas comprar:
  1. para elegir nuestras Lasagna.
  2. para elegir nuestros Sorrentinos.
  3. para salir.`)
  );

  while (eleccionCliente != 1 && eleccionCliente != 2 && eleccionCliente != 3) {
    eleccionNueva = undefined;
    eleccionNueva = parseInt(
      prompt(`La información ingresada "${eleccionCliente}" no es válida, por favor elige una de estas 3 alternativas:
                1. para elegir nuestras Lasagnas.
                2. para elegir nuestros Sorrentinos.
                3. para salir.`)
    );
    eleccionCliente = eleccionNueva;
  }

  //DESARROLLO DE LA LASAGNA

  if (eleccionCliente == 1) {
    let opcionCliente = parseInt(
      prompt(`${nombreCliente} por favor seleccione el relleno que más te guste:
    
    1. ${lasagna1.nombre} - Stock ${lasagna1.cantidad} - Precio x unid $${lasagna1.precio}.
    2. ${lasagna2.nombre} - Stock ${lasagna2.cantidad} - Precio x unid $${lasagna2.precio}.
    3. ${lasagna3.nombre} - Stock ${lasagna3.cantidad} - Precio x unid $${lasagna3.precio}.
    4. ${lasagna4.nombre} - Stock ${lasagna4.cantidad} - Precio x unid $${lasagna4.precio}.`)
    );

    while (
      opcionCliente != 1 &&
      opcionCliente != 2 &&
      opcionCliente != 3 &&
      opcionCliente != 4
    ) {
      seleccione = undefined;
      seleccione = parseInt(
        prompt(`La información ingresada "${opcionCliente}" no es válida, por favor elige una de estas alternativas:
          1. ${lasagna1.nombre} - Stock ${lasagna1.cantidad} - Precio x unid $${lasagna1.precio}.
          2. ${lasagna2.nombre} - Stock ${lasagna2.cantidad} - Precio x unid $${lasagna2.precio}.
          3. ${lasagna3.nombre} - Stock ${lasagna3.cantidad} - Precio x unid $${lasagna3.precio}.
          4. ${lasagna4.nombre} - Stock ${lasagna4.cantidad} - Precio x unid $${lasagna4.precio}.`)
      );
      opcionCliente = seleccione;
    }

    //Cálculo del precio a pagar
    if (opcionCliente == 1) {
      precioLasagna = lasagna1.precio;
    } else if (opcionCliente == 2) {
      precioLasagna = lasagna2.precio;
    } else if (opcionCliente == 3) {
      precioLasagna = lasagna3.precio;
    } else if (opcionCliente == 4) {
      precioLasagna = lasagna4.precio;
    }

    precioConDeliveryLasagna = precioLasagna + costoEnvio;

    //DELIVERY DE LA LASAGNA

    if (opcionCliente >= 1 || opcionCliente <= 4) {
      let opcionDelivery = parseInt(
        prompt(`${nombreCliente} por favor seleccione la modalidad de envío:
        1. para obtener envio a domicilio (Delivery => ${precioLasagna} +$150 => Total a Pagar ${precioConDeliveryLasagna}).
        2. para retirar en el local (Take Away => ${precioLasagna} +$0 => Total a Pagar ${precioLasagna}).
        3. Cancelar compra.`)
      );

      while (
        opcionDelivery != 1 &&
        opcionDelivery != 2 &&
        opcionDelivery != 3
      ) {
        {
          eleccionNew = undefined;
          eleccionNew = parseInt(
            prompt(`La información ingresada "${opcionDelivery}" no es válida, por favor elige una de estas 3 alternativas:
            1. para obtener envio a domicilio (Delivery => ${precioLasagna} +$150 => Total a Pagar ${precioConDelivery}).
            2. para retirar en el local (Take Away => ${precioLasagna} +$0 => Total a Pagar ${precioLasagna}).
            3. Cancelar compra.`)
          );
          opcionDelivery = eleccionNew;
        }
      }

      //CONCLUSIÓN DE LA COMPRA

      if (opcionDelivery != 3) {
        alert(
          "Gracias por elegirnos! Tu pedido ya se encuentra de en preparación, estará listo en 10 minutos aproximadamente"
        );
      } else if (opcionDelivery == 3) {
        alert(
          "Llegaste tan lejos! Te estaremos esperando en una próxima oportunidad."
        );
      }
    }
    //DESARROLLO DE LOS SORRENTINOS
  } else if (eleccionCliente == 2) {
    let opcionCliente = parseInt(
      prompt(`${nombreCliente} por favor seleccione el relleno que más te guste:
      1. ${pastas1.nombre} - Stock ${pastas1.cantidad} - Precio x unid $${pastas1.precio}.
      2. ${pastas2.nombre} - Stock ${pastas2.cantidad} - Precio x unid $${pastas2.precio}.
      3. ${pastas3.nombre} - Stock ${pastas3.cantidad} - Precio x unid $${pastas3.precio}.`)
    );

    while (opcionCliente != 1 && opcionCliente != 2 && opcionCliente != 3) {
      seleccione = undefined;
      seleccione = parseInt(
        prompt(`La información ingresada "${opcionCliente}" no es válida, por favor elige una de estas alternativas:
        1. ${pastas1.nombre} - Stock ${pastas1.cantidad} - Precio x unid $${pastas1.precio}.
        2. ${pastas2.nombre} - Stock ${pastas2.cantidad} - Precio x unid $${pastas2.precio}.
        3. ${pastas3.nombre} - Stock ${pastas3.cantidad} - Precio x unid $${pastas3.precio}.`)
      );
      opcionCliente = seleccione;
    }

    //Cálculo del precio a pagar
    if (opcionCliente == 1) {
      precioSorrentino = pastas1.precio;
    } else if (opcionCliente == 2) {
      precioSorrentino = pastas2.precio;
    } else if (opcionCliente == 3) {
      precioSorrentino = pastas3.precio;
    } else if (opcionCliente == 4) {
      precioSorrentino = pastas4.precio;
    }

    precioConDeliverySorrentino = precioSorrentino + costoEnvio;

    //DELIVERY DE LA SORRENTINOS

    if (opcionCliente >= 1 || opcionCliente <= 3) {
      let opcionDelivery = parseInt(
        prompt(`${nombreCliente} por favor seleccione la modalidad de envío:
      
      
      1. para obtener envio a domicilio (Delivery => ${precioSorrentino} +$150 => Total a Pagar ${precioConDeliverySorrentino}).
      2. para retirar en el local (Take Away => ${precioSorrentino} +$0 => Total a Pagar ${precioSorrentino}).
      3. para salir.`)
      );

      while (
        opcionDelivery != 1 &&
        opcionDelivery != 2 &&
        opcionDelivery != 3
      ) {
        {
          eleccionNew = undefined;
          eleccionNew = parseInt(
            prompt(`La información ingresada "${opcionDelivery}" no es válida, por favor elige una de estas 3 alternativas:
            1. para obtener envio a domicilio (Delivery => ${precioSorrentino} +$150 => Total a Pagar ${precioConDeliverySorrentino}).
            2. para retirar en el local (Take Away => ${precioSorrentino} +$0 => Total a Pagar ${precioSorrentino}).
            3. para salir.`)
          );
          opcionDelivery = eleccionNew;
        }
      }
      //CONCLUSIÓN DE LA COMPRA

      if (opcionDelivery != 3) {
        alert(
          "Gracias por elegirnos! Tu pedido ya se encuentra de en preparación, estará listo en 10 minutos aproximadamente"
        );
      } else if (opcionDelivery == 3) {
        alert(
          "Llegaste tan lejos! Te estaremos esperando en una próxima oportunidad."
        );
      }
    }

    //SALIR DEL PROGRAMA
  } else if (eleccionCliente == 3) {
    // Tomar sugerencia del cliente
    posibleProducto = prompt(
      "¿Hay algún producto del cual no disponemos y quisieras comprar? Coloca aquí su nombre o de lo contrario deja el campo vacío para salir"
    );
    if (posibleProducto !== "") {
      correo = prompt(
        `Ingresa tu email y te avisaremos cuando tengamos a la venta el producto: ${posibleProducto}`
      );
      {
        if (correo !== "") {
          alert("Gracias por elegirnos! Tendremos en cuenta su opinión.");
          sugerenciasClientes.push("posibleProducto", "correo");
        } else {
          alert(`Gracias por visitarnos ${nombreCliente}. vuelve pronto!`);
        }
      }
    } else {
      alert(`Gracias por visitarnos ${nombreCliente}. vuelve pronto!`);
    }
  }

  //OPCIONES DEL DELIVERY

  while (
    eleccionDelivery != 1 &&
    eleccionDelivery != 2 &&
    eleccionDelivery != 3
  ) {
    eleccionNew = undefined;
    eleccionNew = parseInt(
      prompt(`La información ingresada "${eleccionDelivery}" no es válida, por favor elige una de estas 3 alternativas:
                1. para obtener envio a domicilio (Delivery).
                2. para retirar en el local (Take Away).
                3. para salir.`)
    );
    eleccionDelivery = eleccionNew;
  }

  if (eleccionDelivery == 1) {
    let valorTotalEnvio = precioCantidad(opcionCliente) + costoEnvio;
    prompt(
      `Su pedido fue realizado con éxito. Puede pasar a retirar sus ${
        stock[opcionCliente - 1].nombre
      } a partir de mañana abonando en tienda $ ${valorTotalEnvio}.`
    );
  } else if (eleccionDelivery == 2) {
    let valorTotal = precioCantidad(opcionCliente);
    prompt(
      `Su pedido fue realizado con éxito. Puede pasar a retirar sus ${
        stock[opcionCliente - 1].nombre
      } a partir de mañana abonando en tienda $ ${valorTotal}.`
    );
  } else {
    eleccionDelivery == 3;
  }
  {
    prompt(`Gracias por visitarnos ${nombreCliente}. vuelve pronto!`);
  }
}

// OPCIONES DEL ADMINISTRADOR
// Agregar o quitar productos del stock
eleccionAdmin =
  prompt(`Bienvenido al control de Stock! Qué acción desea realizar? Presione:
           1 para agregar un producto al tock.
           2 para quitar un producto del Stock.
           3 para salir.`);

while (eleccionAdmin != 1 && eleccionAdmin != 2 && eleccionAdmin != 3) {
  eleccionNewAdmin = undefined;
  eleccionNewAdmin = parseInt(
    prompt(`La información ingresada "${eleccionAdmin}" no es válida, por favor elige una de estas 3 alternativas:
                      1 para agregar un producto al tock.
                      2 para quitar un producto del Stock.
                      3 para salir.`)
  );
  eleccionAdmin = eleccionNewAdmin;
}

if (eleccionAdmin == 1) {
  agregarProducto = prompt(
    `Indique el nombre del producto que desea agregar al stock`
  ).toLowerCase();
  console.log(`Usted eligio ${agregarProducto}`);
  agregarStock(agregarProducto);
} else if (eleccionAdmin == 2) {
  quitarProducto = prompt(
    `Indique el nombre del producto que desea quitar del stock`
  ).toLowerCase();
  console.log(`Usted eligio ${quitarProducto}`);
  quitarStock(quitarProducto);
} else if (eleccionAdmin == 3) {
  console.log(`Gracias por actualizar el Stock.`);
}
