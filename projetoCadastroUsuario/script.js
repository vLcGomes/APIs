const form = document.getElementById('register-form')
const username = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')


function isNotEmpty(string) {
  return string ? true : false
}

function EmptyField() {
  alert("Preencha todos os campos!")
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  
  const usernameValue = username.value
  const emailValue = email.value
  const passwordValue = password.value
  
  const allFieldFill = isNotEmpty(usernameValue) && isNotEmpty(emailValue) && isNotEmpty(passwordValue)
  
  if (!allFieldFill) {
    EmptyField()
  }
})