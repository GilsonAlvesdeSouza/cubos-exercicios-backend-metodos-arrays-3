const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNum = numeros.reduce((acc, item) => {
  let maior = acc;
  if (maior < item) maior = item;
  return maior;
});

console.log(maiorNum);
