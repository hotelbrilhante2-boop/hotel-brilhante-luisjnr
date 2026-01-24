const totalSalvo = localStorage.getItem("totalReserva");
const reservasSalvo = JSON.parse(localStorage.getItem("reservas")) || [];

console.log(totalSalvo);
console.log(reservasSalvo);

// --- DADOS DA RESERVA HOTEL BRILHANTE ---

// pega as informações do localStorage
const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
const totalReserva = Number(localStorage.getItem("totalReserva")) || 0;

// pega elementos da página
const lista = document.getElementById("lista-reservas");
const total = document.getElementById("total");

// exibe os dados
function montarResumo() {
    lista.innerHTML = ""; // limpa a lista

    if (reservas.length === 0) {
        lista.innerHTML = "<p>Nenhum quarto selecionado.</p>";
        total.textContent = `Total: R$ 0,00`;
        return;
    }

    reservas.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} — ${item.qtd} × R$ ${item.preco}`;
        lista.appendChild(li);
    });

    total.textContent = `Total: R$ ${totalReserva},00`;
}

montarResumo();
