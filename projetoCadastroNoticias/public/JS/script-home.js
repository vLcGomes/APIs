const button = document.getElementById('register-news')
const body = document.querySelector('body')

function newsDiv() {
  const div = document.createElement('div')
  div.className = 'news'
  return div
}

function newsText(text) {
  const p = document.createElement('p')
  p.className = 'news-text'
  p.textContent = text
  return p
}

function newsTitle(title) {
  const h3 = document.createElement('h3')
  h3.textContent = title
  return h3
}

function newsDate(date) {
  const footer = document.createElement('footer')
  footer.className = 'date'
  footer.innerText = date
  return footer
}

async function fullNews() {
  const content = await fetch('http://localhost:3000/home').then(data => data.json())
  
  for(let i = 0; i <= content.length; i++) {
    const div = newsDiv()
    div.appendChild(newsTitle(content[i].title))
    div.appendChild(newsText(content[i].content))
    div.appendChild(newsDate(content[i].date))
    body.append(div)
  }
}

fullNews()