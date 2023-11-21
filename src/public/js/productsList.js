const productos = document.querySelector(".productos")

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
    .then(data => location.reload())
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