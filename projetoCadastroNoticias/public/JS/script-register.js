const form = document.getElementById('register-form')
const title = document.getElementById('register-title')
const text = document.getElementById('content')
const category = document.getElementById('category')
const registerButton = document.getElementById('register-button')
const backHomeButton = document.getElementById('back-home')



registerButton.addEventListener('click', async (e) => {
  e.preventDefault()

  const data = {
    title: title.value,
    text: text.value,
    category: category.value
  }

  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

  try {
    const response = await fetch('http://localhost:3000/register', options)
    alert('Notícia salva com sucesso!')
  } catch(e) {
    console.log(e)
  }

})

backHomeButton.addEventListener('click', (e) => {
  e.preventDefault()

  window.location.href = 'http://localhost:5500/projetoCadastroNoticias/public/PAGES/home.html'
})