export default function initFetchBitcoin() {
  fetch('https:blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcon) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / bitcon.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
