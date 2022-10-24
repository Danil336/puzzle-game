const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

const gameArea = document.querySelector('.grid')

numberButtons.forEach(elem => {
  const button = document.createElement('button')
  button.innerText = elem
  button.classList.add('number')
  gameArea?.append(button)
})


