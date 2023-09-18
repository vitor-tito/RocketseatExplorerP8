//========== Variáveis da Aplicação ==========

//Seleciona a TAG requerida e guarda na variável
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10) //Gera um número aleatório

let xAttempts = 1 //Cria a variável de controle de tentativas

//========== Eventos ==========
//Entra na função indicada ao identificar o evento descrito, no caso "click"
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterVerification)

//========== Funções Callback ==========
function handleTryClick(event) {
  //Remove a atualização de tela ao clicar no botão, não executando o evento padrão
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber") //Busca a TAG com o id "#inputNumber"

  if(Number(inputNumber.value) == randomNumber) { //".value" -> Busca o valor dentro da caixa da TAG "input"
    
    //Adiciona a classe "hide"
    //screen1.classList.add("hide") <- Código antigo
    //Remove a classe "hide"
    //screen2.classList.remove("hide") <- Código antigo
    
    toggleScreen()

    //Seleciona a TAG requerida (.screen2 h2), e adiciona o texto
    //document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas <- Código com seleção diferente
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas
    `
    //Printa a informação no console do navegador
    console.log(`Acertou em ${xAttempts} tentativas`) 
  }

  inputNumber.value = "" //Limpa o valor da TAG "input"

  xAttempts++
}

function handleResetClick() {

  //Remove a classe "hide"
  //screen1.classList.remove("hide") <- Código antigo
  //Adiciona a classe "hide"
  //screen2.classList.add("hide") <- Código antigo
  toggleScreen()

  randomNumber = Math.round(Math.random() * 10) //Gera um número aleatório

  xAttempts = 1 //Reseta o número de tentativas
}

function toggleScreen() {
  //Adiciona ou remove a classe "hide"
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterVerification(event) {
  //Condição que verifica se a tecla enter foi pressionada, caso esteja na tela de reset
  if(event.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}
