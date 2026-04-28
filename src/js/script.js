

// LIMPEZA 
// trim = um método que esta ligado ao ao objeto, ele remove espaços colocados 
// pelo usuário antes e depois da palavra 

const email ="   email@email.com";
const email_limpo = email.trim();
console.log(email_limpo)

// VALIDAÇÂO 
// includes = o que você colocar dentro, ve se tem ou não, se tiver é 
// válido, se não, é inválido
if(email_limpo.includes("@" && ".com")){
    console.log("E-mail válido")
}else{
    console.log("E-mail inválido")
}

// TRANSFORMAÇÃO DE TEXTO 

// LowerCase = transforma o teto para ,omisculo 
const titulo_artigo="Como aprender JAVA RAIZ"
const texto1 = titulo_artigo.toLowerCase()
console.log(texto1)

// split = transforma o etxto em arrays 
const texto2 = titulo_artigo.split(" ");
console.log(texto2)

// join = junto tudo em uma string (unico texto)
const texto3 = texto2.join(" ");
console.log(texto3)

// METODO TO FIXED 
// define o n depois da virgula

const preco_produto=199.99;
const desconto = 0.15;
const preco_final = preco_produto * (1 - desconto);
console.log(preco_final);
// template strings - concatenação 
console.log(`R${preco_final.tofixed(2)}`);

// dDOM DOCUMENT OBJECT MODEL
const titulo = document.getElementById("titulo")
titulo.innerText = "O DOM mudou o texto"

titulo.style.color="blue"