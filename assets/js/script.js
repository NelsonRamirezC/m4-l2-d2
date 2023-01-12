let productos = [
    {
        id: "p0001",
        nombre: "Televisor",
        descripcion: "Es un televisor.",
        precio: 100000,
        stock: 10
    },
    {
        id: "p0002",
        nombre: "Radio",
        descripcion: "Es una radio.",
        precio: 50000,
        stock: 5
    },
    {
        id: "p0003",
        nombre: "Notebook",
        descripcion: "Es un Notebook.",
        precio: 350000,
        stock: 3
    }
]


class Producto{
    constructor(id, nombre = "", descripcion = "Sin descripción", precio = 999999, stock = 0){
        this.id = id;
        this.nombre = nombre;
        this.descripcion= descripcion
        this.precio = precio;
        this.stock = stock;
    }

    getProducts(){
        return productos;
    }
    getProduct(){
        return productos.find(producto => producto.id == this.id);
    }
    deleteProduct(){
        productos = productos.filter(producto => producto.id != this.id)
        return productos;
    }
    updateProduct(){
        let producto = productos.find(producto => producto.id ==this.id)
        producto.nombre= this.nombre;
        producto.descripcion= this.descripcion;
        producto.precio = this.precio;
        producto.stock = this.stock;
        return producto;
    }
    addProduct(){
        productos.push(
            {
                id: this.id,
                nombre: this.nombre,
                descripcion: this.descripcion,
                precio: this.precio, 
                stock: this.stock
            }
            )
        return productos
    }

}

function cargarTabla(listaProductos){
    let cuerpoTabla = document.querySelector(".section_mantenedor_productos tbody");
    cuerpoTabla.innerHTML = "";

    let acumuladorFilas = "";
    listaProductos.forEach(producto => {
        acumuladorFilas += `
                <tr>
                    <th scope="row">${producto.id}</th>
                    <td>${producto.nombre}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.stock}</td>
                </tr>
        `
    });
    cuerpoTabla.innerHTML = acumuladorFilas;

}

function buscarProducto(id){
    let producto = new Producto(id);
    return producto.getProduct();
}


//funcion que capture evento del input crud_id

let inputId = document.getElementById("crud_id");
inputId.addEventListener("change", (event) =>{
    event.preventDefault();
    let id =  inputId.value;
    let producto = buscarProducto(id);
    if(producto){
        crud_nombre.value = producto.nombre;
        crud_descripcion.value = producto.descripcion;
        crud_precio.value = producto.precio;
        crud_stock.value = producto.stock;
    }else{
        crud_nombre.value = "";
        crud_descripcion.value = "";
        crud_precio.value = 0;
        crud_stock.value = 0;

    }
})


function main(){
    cargarTabla(productos);

}

main();