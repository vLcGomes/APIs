const button = document.getElementById('register-news')
const body = document.querySelector('body') // Criar um Sub elemento para as notícias

function newsDiv(content) {
  const div = document.createElement('div')
  div.className('news')
  return div
}

function newsText(content) {
  const p = document.createAttribute('p')
  p.className('news-text')
  p.innerText = content.p.text
  return p
}

function newsTitle(content) {
  const h3 = document.createAttribute('h3')
  title.innerText = content.title.text
  return h3
}

function newsDate(content) {
  const footer = document.createElement('footer')
  footer.className('date')
  footer.innerText = content.footer.text
  return footer
}

function fullNews() {
  const content = fetch(API)

  const div = newsDiv(content)
  div.appendChild(newsTitle(content))
  div.appendChild(newsText(content))
  div.appendChild(newsfooter(content))

  body.append(newsDiv)
}

