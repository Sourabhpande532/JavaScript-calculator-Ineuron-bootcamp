function insert(Valve){
document.querySelector('.textview').value += Valve;
}
function equals(){
let x = document.querySelector('.textview').value;
let y = eval(x);
document.querySelector('.textview').value = y;
}
function clean(){
  document.querySelector('.textview').value = "";

}
function back(){
  let backspace = document.querySelector('.textview').value;
  document.querySelector('.textview').value = backspace.substring(0,backspace.length - 1);
}
