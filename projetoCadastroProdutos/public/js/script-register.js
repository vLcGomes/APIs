// const submitBtn = document.getElementById('register-submit-button')
// const formContent = document.getElementById('register-form')

// async function registerUser(e) {
//   e.preventDefault()

//   const nome = document.getElementById('nome')
//   const sobrenome = document.getElementById('sobrenome')
//   const email = document.getElementById('email')
//   const senha =  document.getElementById('senha')

//   const data = {
//     "nome": nome.value,
//     "sobrenome": sobrenome.value,
//     "email": email.value,
//     "senha": senha.value
//   }
//   console.log('teste1')

//   const response = await fetch('http://localhost:3000/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
  
//   nome.value = ''
//   sobrenome.value = '' 
//   email.value = ''
//   senha.value = ''
// }

// submitBtn.addEventListener('click', registerUser)