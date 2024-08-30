// Cotação de moedas do dia 30/08/2024.
const USD = 5.65
const EUR = 6.25
const GBP = 7.42


// Obtendo os elementos do DOM
const form = document.querySelector("form")
const money = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")



// Manipulando o inpunt amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

currency.addEventListener("submit", () => {
    const currencyValue = currency.value
})

// Manipulando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(money.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(money.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(money.value, GBP, "£")
            break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrency(price)}`
        
        // Calcula o total da conversão
        let total = amount * price

        // Formata o total para exibir em Real Brasileiro
        total = formatCurrency(total).replace("R$", "")
        
        // Exibe o resultado total.
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer com o resultado
        footer.classList.add("show-result")


    } catch (error) {
        // Remove a classe que exibe o footer com o resultado
        footer.classList.remove("show-result")

        console.log(error)

        alert("Ocorreu um erro ao converter a moeda. Tente novamente mais tarde.")
    }
}

// Formata a moeda em Real Brasileiro.
function formatCurrency(value) {
    // Converte para numero para utilizar o toLocaleString para formartar o padrão BRL  
    return Number(value).toLocaleString("pt-BR", {
        style: "currency", 
        currency: "BRL" 
    })
}

