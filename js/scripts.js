const display = document.getElementById("display")

function digitar (tecla) {
    display.value = display.value + tecla;
}

function apagar () {
    display.value = ""
}

let operacao = ""
let valor1 =""

const definirOperador = (operador) => {
    operacao = operador
    valor1 = display.value
    display.value = ""
}

 const calcular = () => {
    switch (operacao) {
        case "+":
            display.value = Number(valor1) + Number(display.value)
            break
        case "-":
            display.value = Number(valor1) - Number(display.value)
            break
        case "*":
            display.value = Number(valor1) * Number (display.value)
            break
        case "/":
            display.value = Number(valor1) / Number(display.value)
            break
        default:
            display.value = display.value + "="
    }
    operacao = ""
 }








