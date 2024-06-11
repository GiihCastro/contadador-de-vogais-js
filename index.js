const contarVogais = (str) => {
   // Converte o string para minúsculas
   str = str.toLowerCase();
   // Definindo uma string que contém todas as vogais em minúsculas
   const vogais = "aeiou";
   // Variável para armazenar a contagem das vogais
   let contagem = 0;
   // Loop através de cada caractere na string fornecida
   for (let i = 0; i < str.length; i++) {
   // Se o caractere atual é uma vogal, incrementa a contagem
      if (vogais.includes(str[i])) {
         contagem++;
      }
   }
// Retorna a contagem total de vogais
   return contagem;
};

// Função para atualizar o resultado na página
const atualizarResultado = () => {
//Obtém o valor do input
   const inputString = document.getElementById('inputString').value;
//Chama a função contarVogais e obtém o resultado
   const resultado = contarVogais(inputString);
   document.getElementById('result').innerText = `O número de vogais em '${inputString}' é: ${resultado}`;
};

// Adiciona um evento de clique ao botão
document.getElementById('countButton').addEventListener('click', atualizarResultado);