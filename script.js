//seleciona os elementos do formulário.
const amount = document.getElementById("amount");

amount.oninput = ()=>{

   //Só aceita numeros 
   let value = amount.value.replace(/\D/g,"")
   amount.value = value

}
