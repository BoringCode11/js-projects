const genHexColor = () => {
  const main = document.querySelector('.container');
  const hexVal = document.querySelector('.hex-value');
  const hexVals = '01234567abcdef';
  let hexColor = '#';

  while (true) {
    const randIdx = Math.floor(Math.random() * hexVals.length); // get new randIdx
    hexColor += hexVals[randIdx];

    if (hexColor.length > 6) {
      break;
    }
  }

  console.log(hexVal);

  main.style.backgroundColor = hexColor;
  hexVal.innerText = hexColor;
};

document.querySelector('button').onclick = genHexColor;
document.querySelector('body').onload = genHexColor;