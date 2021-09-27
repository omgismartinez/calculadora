// const app = document.getElementById('texto-inicial');
// const typewriter = new Typewriter(app, {
//   loop: true,
//   delay: 75
// });

// typewriter
//   .typeString('La calculadora mas simple')
//   .pauseFor(200)
//   .start();


//=======================================================



function insert(num) {
  // Por si hay un error, devuelve la función
  if (SyntaxError) {
    return
  }

  // Ingreso de numeros en la pantalla
  if (display.value.length < 20) {

    if (isNaN(num)) {
      display.value += num
    }
    else if (display.value.length == 1 && display.value[0] == 0) {
      display.value = num
    }
    else {
      display.value += num
    }
  }
  else {
    return
  }
}

function clean() {
  //Cuando haya un error de sintaxis
  SyntaxError = false
  //Se limpiara la pantalla
  display.value = "0";

}

function equal() {
  var exp = display.value
  var flag = false //Condicion buleana

  for (i = 0; i < exp.length; i++) {
    if (isNaN(exp[i]) && isNaN(exp[i + 1])) {
      if (exp[i] != "+" && exp[i] != "-") {
        //Cuando hay dos operaciones juntas, error de sintaxis
        display.value = "Error de sintaxis"
        SyntaxError = true
      }

    }
  }

  if (flag == false) { //Si no hay errores se ejecuta de manera normal
    var answer = eval(exp)

    if (isFinite(answer)) {
      display.value = answer
    }
    else {
      display.value = "Error Matemático" // Resultados infinitos
      SyntaxError = true
    }
  }


}

function back() {
  //Cuando hay errores de sintaxis regresa la función
  if (SyntaxError) {
    return
  }

  display.value = display.value.substring(0, display.value.length - 1)

  if (display.value == "") {
    display.value = "0"
  }

}

//Seleccion de pantalla
const display = document.querySelector('.display')
//Todos los numeros
const numbers = document.querySelectorAll('#number')
//evento de escucha de botones para numeros
numbers.forEach((button) => {
  button.addEventListener('click', calculate)
})
//Seleccion de todas las operaciones
const operators = document.querySelectorAll('#operator')
//Evento de escucha de botones para operaciones
operators.forEach((button) => {
  button.addEventListener('click', calculate)
})
// Evento de escucha de teclado
window.addEventListener('keypress', check)
function check(key) {
  let keyValue = key.key
  if (key.keyCode) {
    if (!isNaN(keyValue)) {
      insert(keyValue)
    } else {
      if (display.value.length == 1 && display.value[0] == 0) {
        return
      } else {
        for (i = 0; i < operators.length; i++) {
          if (keyValue == operators[i].value) {
            if (keyValue == "C") {
              clean()
            } else if (keyValue == ">") {
              back()
            } else if (keyValue == "=") {
              equal()
            } else {
              display.value += keyValue
            }
          }
        }
      }
    }
  }
}

//Variable buleana para checar si hay error de sintaxis
var SyntaxError = false

function calculate(event) {
  var buttonValue = event.target.value


  if (!isNaN(buttonValue) || (isNaN(buttonValue) && buttonValue != "=" && buttonValue != ">" && buttonValue != "C")) {
    if (buttonValue == "×") {
      buttonValue = "*" //cambio de x por * (Calcular de manera normal)
    }

    //Insertar el valor de boton
    insert(buttonValue)

  }
  else if (buttonValue == '=') {
    equal() //Llamando a la funcion de equal() (=)
  }
  else if (buttonValue == ">") {
    back() //Llamando a la funcion de back() (>)
  }
  else if (buttonValue == "C") {
    clean() //Llamando a la funcion de clean() (C)
  }
}