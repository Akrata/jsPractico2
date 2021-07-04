console.log("hello, world!!");

let cupones = [
    {
        nombre:"cupon1",
        descuento: 15
    },
    
    {
        nombre:"cupon2",
        descuento: 25
    },
    
    {
        nombre:"cupon3",
        descuento: 50
    }
]


function descuento(precio,porcentaje){
    let precioFinal = (precio * (100 - porcentaje))/100;
    return precioFinal
}
function calcularDescuento(){
    const inputPrecio = document.getElementById("precioInput");
    const inputDescuento = document.getElementById("descuentoInput");
    const inputP = document.getElementById("precioFinal");

    const precioSinDescuento = inputPrecio.value;
    const porcentajeDescuento = inputDescuento.value;
    const total = descuento(precioSinDescuento, porcentajeDescuento);   
   
    inputP.innerHTML = total;
}

