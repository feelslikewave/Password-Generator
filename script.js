const passwordBox = document.getElementById('password');
const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '@#$%^&*()_+~|}{[]></?-=';
const allChars = 

function createPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random()*upperCase.length)];   
  password += lowerCase[Math.floor(Math.random()*lowerCase.length)];   
  password += number[Math.floor(Math.random()*number.length)];   
  password += symbols[Math.floor(Math.random()*symbols.length)];   

  while(length>password.length){

  }
}