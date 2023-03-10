const genRandomNum = (range) => {
  return Math.floor(Math.random() * range) + 1;
}

console.log(genRandomNum(10));