//seleciona os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const expense = document.getElementById("expense")
const category = document.getElementById("category")

//Captura o evento de input para formatar o valor
amount.oninput = ()=>{
    //obter o valor atual do input e remove os caracteres não numéricos
   let value = amount.value.replace(/\D/g,"")

   //Transformar o valor em centavos
   value = Number(value)/100
   
   //atualiza o valor do input
   amount.value = formatCurrencyBRL(value)

}

function formatCurrencyBRL(value){
    //formata o valor no padrão BRL (real brasileiro)
    value = value.toLocaleString("pt-BR"),{
        style:"currency",
        currency:"BRL"
    }
    //Retorna o valor 
    return value
}


form.onsubmit=(e)=>{
    //Não deixa o form atualizar
    e.preventDefault()
}