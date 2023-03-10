const btns = document.querySelectorAll('button');
let count = 0;

btns.forEach(btn => {
  btn.addEventListener('click', (eObj) => {
    eObj.target.classList.contains('increment') ?
      count++ : count--;

    document.querySelector('.count').innerText = count;
  });
});