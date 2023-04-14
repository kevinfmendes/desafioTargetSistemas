function verificaFibonacci (){
var numero = document.getElementById('numero').value;
let num = parseInt(numero);
let a = 0; // Define o primeiro número da sequência
let b = 1; // Define o segundo número da sequência
let c; // Variável auxiliar para armazenar a soma de a e b

    while (b <= num) { // Enquanto b for menor ou igual ao número informado
        if (b === num) { // Se b for igual ao número informado
            document.getElementById("result").textContent = `${num} pertence à sequência de Fibonacci!`;
            break;
        }
        c = a + b; // Soma os dois números anteriores para obter o próximo número da sequência
        a = b; // Atribui o valor de b para a
        b = c; // Atribui o valor de c para b
    }

    if (b > num) { // Se b for maior que o número informado
        document.getElementById("result").textContent = `${num} não pertence à sequência de Fibonacci.`;
    }
}

const faturamentoMensal = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

function exibirInformacoes() {
const tbody = document.querySelector('#tabela-faturamento');

  // Limpa o conteúdo do tbody
  tbody.innerHTML = '';

  // Variáveis para cálculo das informações
  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let somaValores = 0;
  let numDiasAcimaMedia = 0;
  let mediaMensal = 0;
  // Loop pelos itens do array
  for (let i = 0; i < faturamentoMensal.length; i++) {
    const item = faturamentoMensal[i];

    // Insere o item na tabela
    const tr = document.createElement('tr');
    const tdDia = document.createElement('td');
    const tdValor = document.createElement('td');
    tdDia.textContent = item.dia;
    tdValor.textContent = item.valor.toFixed(2);
    tr.appendChild(tdDia);
    tr.appendChild(tdValor);
    tbody.appendChild(tr);

    // Atualiza as informações
    if (item.valor < menorValor) {
      menorValor = item.valor;
    }
    if (item.valor > maiorValor) {
      maiorValor = item.valor;
    }
    if (item.valor > mediaMensal) {
      numDiasAcimaMedia++;
    }
    somaValores += item.valor;
  }

  // Exibe as informações finais
  const spanMenorValor = document.querySelector('#menor-valor');
  const spanMaiorValor = document.querySelector('#maior-valor');
  const spanDiasAcimaMedia = document.querySelector('#dias-acima-media');
  spanMenorValor.textContent = menorValor.toFixed(2);
  spanMaiorValor.textContent = maiorValor.toFixed(2);
  spanDiasAcimaMedia.textContent = numDiasAcimaMedia;

  // Calcula a média mensal (considerando apenas dias com valor de faturamento)
    mediaMensal = somaValores / faturamentoMensal.filter(item => item.valor > 0).length;
}

function exibirFaturamentoPorcento() {
    

const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

const faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

const percentualSP = (faturamentoSP / faturamentoTotal) * 100;
const percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
const percentualMG = (faturamentoMG / faturamentoTotal) * 100;
const percentualES = (faturamentoES / faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

document.getElementById("sp").innerHTML = `${percentualSP.toFixed(2)}%`;
document.getElementById("rj").innerHTML = `${percentualRJ.toFixed(2)}%`;
document.getElementById("mg").innerHTML = `${percentualMG.toFixed(2)}%`;
document.getElementById("es").innerHTML = `${percentualES.toFixed(2)}%`;
document.getElementById("outros").innerHTML = `${percentualOutros.toFixed(2)}%`;

}

function reverseString() {
    const inputString = document.getElementById("inputString").value;

    let stringReversa = "";
    
    // Percorrendo de tras pra frente
    for (let i = inputString.length - 1; i >= 0; i--) {
        stringReversa += inputString[i];
    }

    document.getElementById("output").textContent = stringReversa;
  }


  document.getElementById("fibo").addEventListener("click", function(){
    document.getElementById("fibonnaci").scrollIntoView({behavior: "smooth"});
  });
