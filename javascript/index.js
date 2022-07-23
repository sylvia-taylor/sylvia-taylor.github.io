let headingColour = document.getElementsByTagName('h4')
let textColour = document.getElementsByTagName('h1')

for (let i = 0; i < headingColour.length; i++) {
  let btnViewJava = document.querySelector('#btnViewJS')
  console.log(btnViewJava)
  btnViewJava.addEventListener('click', () => {
    headingColour[i].style.backgroundColor = '#DDCC88'
    headingColour[i].style.padding = '2%'
    headingColour[i].style.textShadow = '2px 2px 2px #ff8855, 5px 2px #F1F1F1'
    headingColour[i].style.fontSize = '130%'
    headingColour[i].style.boxShadow = '0px 0px 30px 5px rgb(200,100,50)'

    textColour[i].style.textShadow = '2px 2px 2px #DD5733, 5px 2px #FFFF8F'
  })
}

let btnRemoveJava = document.querySelector('#btnRemoveJS')
let removeJava = () => {
  location.reload()
}

btnRemoveJava.addEventListener('click', removeJava)
