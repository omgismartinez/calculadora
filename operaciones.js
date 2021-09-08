let op;

//Operación
document.querySelector('#suma').addEventListener('click', () =>{
op = '+';

});
document.querySelector('#resta').addEventListener('click', () =>{
  op = '-';
});
document.querySelector('#multiplicacion').addEventListener('click', () =>{
  op = '*';
});
document.querySelector('#division').addEventListener('click', () =>{
  op = '/';
});
document.querySelector('#calcular').addEventListener('click', () =>{
const n1 = parseInt(document.querySelector('#n1').value);
const n2 = parseInt(document.querySelector('#n2').value);
//Validación de operación
let r;
if (op == '+'){
  r = n1 + n2;
} else if( op == '-'){
  r = n1 - n2;
} else if(op == '*'){
  r = n1 * n2;
} else if(op == '/'){
  r = n1 / n2;
}
document.querySelector('#r').innerHTML = r;
});