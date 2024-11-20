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

//Captura o evento de submit do formulário para obter os valores
form.onsubmit=(e)=>{
    //Previne o comportamento padrão de recarregar a página
    e.preventDefault()

    //Cria um objeto com os detalhes na nova despesa
    const newExpense = {
        id: new Date().getTime(),//Gera um identificador único para o objeto
        expense: expense.value,//Armazena o valor do campo expense
        category_id: category.value,//Salva o valor do campo category, que geralmente representa o id da categoria
        category_name: category.options[category.selectedIndex].text,//Obtém o texto visível da opção selecionada no campo category
        amount: amount.value,// Armazena o valor do campo amount, que provavelmente contém o valor numérico da despesa.
        created_at: new Date(),//Registra a data e hora atuais como o momento de criação.
    }
   
}