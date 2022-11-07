const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const maiorNomeCidade = cidades.reduce((acc, item) => {
  let maior = acc;
  if (maior.length < item.length) maior = item;
  return maior;
});

console.log(`O maior nome de cidade é => `, maiorNomeCidade);
