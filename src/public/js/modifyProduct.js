const params = new URLSearchParams(location.search)
const form = document.getElementById('modifyProductForm')
const inputTitle = document.getElementById('inputTitle')
const inputDescription = document.getElementById('inputDescription')
const inputCode = document.getElementById('inputCode')
const inputPrice = document.getElementById('inputPrice')
const inputStatus = document.getElementById('inputStatus')
const inputStock = document.getElementById('inputStock')
const inputCategory = document.getElementById('inputCategory')

const pid = params.get("pid")

document.addEventListener('DOMContentLoaded', async () => {
  await fetch(`/products/${pid}`)
  .then(response => response.json())
  .then((data) => {
    const { title, description, code, price, status, stock, category } = data.product
    inputTitle.value = title
    inputDescription.value = description
    inputCode.value = code
    inputPrice.value = price
    inputStatus.value = status
    inputStock.value = stock
    inputCategory.value = category
  })
  .catch(err => console.log(err))
})

form.addEventListener("submit", (event) => {
  event.preventDefault()

  let errores = ""

  const data = Object.fromEntries(new FormData(form))

  fetch(`/products/${pid}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
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