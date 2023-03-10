const btn = document.querySelector('.gen-password');

const genPassword = () => {
  const alphaNum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPRSTUVWXYZ0123456789!@#$%^&*';
  const passLength = document.querySelector('#num-char').value || 10;
  const err = document.querySelector('.error');
  let password = '';

  if (passLength < 10 || passLength == null){
    err.textContent = "Length must be at least 10 characters";
    return;    
  } 

  for (let i = 0; i < passLength; i++) {
    const randIndx = Math.floor(Math.random() * alphaNum.length);

    password += alphaNum[randIndx];
  }

  document.querySelector('.password').textContent = password;
  err.textContent = '';
}

btn.onclick =  genPassword;
document.querySelector('body').onload = genPassword;