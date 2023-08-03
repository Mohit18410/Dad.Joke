'use strict'

const jokes = document.querySelector('.joke')
const nextJoke = document.querySelector('.next')

nextJoke.addEventListener('click', getNewJoke)

getNewJoke()

async function getNewJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const req = await fetch('https://icanhazdadjoke.com', config)
  const data = await req.json()
  jokes.innerHTML = data.joke
}
