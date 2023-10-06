
const productos = document.querySelector(".productos")

let listaProductos = ""

function createCard(producto) {
  return `
    <div class="card__product" id=${producto._id}>
      <p>titulo: ${producto.title}</p>
      <p>descripción: ${producto.description}</p>
      <p>code: ${producto.code}</p>
      <p>price: ${producto.price}</p>
      <p>status: ${producto.status ? "activo" : "inactivo"}</p>
      <p>stock: ${producto.stock}</p>
      <p>category: ${producto.category}</p>

      <button class="borrar">Borrar</button>
      <button class="modificar">Modificar</button>
    </div>
  `
}

const consultProducts = async (estado) => {
  console.log('estado consultar productos: ', estado)
  await fetch(`/products/?estado=${estado}`)
  .then(response => response.json())
  .then((data) => {
    console.log('data eventListener: ', data.products)

    data.products.forEach(item => {
      listaProductos += createCard(item)
    })
  })
  .catch(err => console.log(err))

  return listaProductos
}

document.addEventListener('DOMContentLoaded', async () => {
  productos.innerHTML = await consultProducts(true)
})

productos.addEventListener("click", (event) => {
  if(event.target.className.includes("borrar")) {    
    const pid = event.target.parentNode.id
    //window.location.href = `/products/erase?id=${id}`
    fetch(`/products/${pid}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      location.reload()
    })
    .catch(error => console.log(error.message))
  }
})

productos.addEventListener("click", (event) => {
  if(event.target.className.includes("modificar")) {    
    const pid = event.target.parentNode.id
    console.log('id: ', pid)
    window.location.href = `/products/modify?pid=${pid}`
  }
})

const botonAlternarFiltro = document.getElementById("alternarFiltro")
let mostrarInactivos = false

botonAlternarFiltro.addEventListener("click", async () => {
  listaProductos = ""
  mostrarInactivos = !mostrarInactivos 
  if (mostrarInactivos) {
    botonAlternarFiltro.textContent = "Mostrar Activos"
    productos.innerHTML = await consultProducts(false)
  } else {
    botonAlternarFiltro.textContent = "Mostrar Inactivos"
    productos.innerHTML = await consultProducts(true)
  }
})




