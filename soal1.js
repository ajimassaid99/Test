const readline = require('readline');

function findFactors(Input) {
  let factors = [];
  for (let i = 1; i <= Math.sqrt(Input); i++) {
    if (Input % i === 0) {
      factors.push(i);
      if (Input / i !== i) {
        factors.push(Input / i);
      }
    }
  }
  factors.sort(function(a, b) {
    return b - a;
  });
  return factors;
}

function printFactors(factors) {
  if(factors.length === 2){
    console.log("Bilangan Prima")
  }else{
  for (let i = 0; i < factors.length; i++) {
    console.log(factors[i]);
  }}
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan bilangan bulat Untuk Di cek: ", function(Input) {
  const factors = findFactors(parseInt(Input));
  printFactors(factors);
  rl.close();
});