const form = document.getElementById('createProductForm')
const response = document.getElementById('response')

form.addEventListener("submit", (event) => {
  event.preventDefault()

  let errores = ""

  const data = Object.fromEntries(new FormData(form))

  fetch('/products', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if(data.errors){
      let errorsMessages = Object.values(data.errors)
      errorsMessages.forEach(item => {
        errores += `<p>${item.message}<p/>`
      })
      response.innerHTML = errores
    } else {
      response.innerHTML = data.message
    }
  })
  .catch(error => console.log(error.message))
})