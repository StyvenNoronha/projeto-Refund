//seleciona os elementos do formulário.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

//seleciona os elementos da lista
const expenseList = document.querySelector("ul");
const expenseQuantity = document.querySelector("aside header p span")
//Captura o evento de input para formatar o valor
amount.oninput = () => {
  //obter o valor atual do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g, "");

  //Transformar o valor em centavos
  value = Number(value) / 100;

  //atualiza o valor do input
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  //formata o valor no padrão BRL (real brasileiro)
  (value = value.toLocaleString("pt-BR")),
    {
      style: "currency",
      currency: "BRL",
    };
  //Retorna o valor
  return value;
}

//Captura o evento de submit do formulário para obter os valores
form.onsubmit = (e) => {
  //Previne o comportamento padrão de recarregar a página
  e.preventDefault();

  //Cria um objeto com os detalhes na nova despesa
  const newExpense = {
    id: new Date().getTime(), //Gera um identificador único para o objeto
    expense: expense.value, //Armazena o valor do campo expense
    category_id: category.value, //Salva o valor do campo category, que geralmente representa o id da categoria
    category_name: category.options[category.selectedIndex].text, //Obtém o texto visível da opção selecionada no campo category
    amount: amount.value, // Armazena o valor do campo amount, que provavelmente contém o valor numérico da despesa.
    created_at: new Date(), //Registra a data e hora atuais como o momento de criação.
  };

  //chama a função irá adicionar o item na lista
  expenseAdd(newExpense);
};

//adiciona m novo item na lista
function expenseAdd(newExpense) {
  try {
    //cria o elemento para adicionar na lista.
    //cria o elemento
    const expenseItem = document.createElement("li");
    //adiciona uma classe  do css
    expenseItem.classList.add("expense");

    //cria o ícone da categoria
    const expenseIcon = document.createElement("img");
    //coloca o ícone dinamicamente
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    //cria a info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    //cria o nome da despesa
    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    //cria a categoria da despesa
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    //adiciona name e category em expense info(div)
    expenseInfo.append(expenseName, expenseCategory);

    //Cria o valor da despesa
    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");
    expenseAmount.innerHTML = `<small>R$</small> ${newExpense.amount
      .toUpperCase()
      .replace("R$", "")}`;


      //cria o ícone de remover
      const removeIcon = document.createElement("img")
      removeIcon.classList.add("remove-icon")
      removeIcon.setAttribute("src","img/remove.svg")
      removeIcon.setAttribute("alt","remover")

    //adiciona as informações no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

    //adiciona o item na lista
    expenseList.append(expenseItem);

    //Atualiza os totais 
    updateTotals()
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.log(error);
  }
}

//atualizar os totais
function updateTotals(){
  try {
    //Recuperar todos os itens (li) da lista (ul)
    const items = expenseList.children
    
    //atualiza a quantidade de itens da lista
    expenseQuantity.textContent = `${items.length} ${items.length > 1 ? " despesas":"despesa"}`
  } catch (error) {
    alert("Não foi passível atualizar o total")
    console.log(error)
  }
}