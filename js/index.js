const dataEntrada = document.getElementById("dataEntrada");
const dataSaida = document.getElementById("dataSaida");
const textoDiarias = document.getElementById("diariasTexto");

const hoje1 = new Date();
const amanha = new Date(hoje1);
amanha.setDate(hoje1.getDate() + 1);

const formatar = (d) => d.toISOString().split("T")[0];

// preenche os inputs
dataEntrada.value = formatar(hoje1);
dataSaida.value = formatar(amanha);

// bloqueia datas anteriores
dataEntrada.min = formatar(hoje1);
dataSaida.min = formatar(amanha);


// seta o mínimo da data de entrada (hoje)
const hoje2 = new Date().toISOString().split("T")[0];
dataEntrada.min = hoje2;
dataSaida.min = hoje2;

dataEntrada.addEventListener("change", () => {
    dataSaida.value = "";
    dataSaida.min = dataEntrada.value;
    calcularTotal();
});

dataSaida.addEventListener("change", () => {
    calcularTotal();
});

//BOTÃO HAMBURGUER

{
    const btnAbrir = document.querySelector('.btn-hamburger');
    const btnFechar = document.querySelector('.btn-fechar');
    const menu = document.querySelector('.menu-mobile');
    const overlay = document.querySelector('.overlay');

    btnAbrir.addEventListener('click', () => {
        menu.classList.add('ativo');
        overlay.classList.add('ativo');
    });

    btnFechar.addEventListener('click', () => {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
    });
}

// --- RESERVA HOTEL BRILHANTE ---

// pega todos os selects de quantidade
const selects = document.querySelectorAll(".qtd-quarto");

// pega o elemento onde mostra o total
const resultado = document.getElementById("resultado-total");

function calcularTotal() {
    let total = 0;
    const reservas = [];

    // calcula quantidade de dias
    let dias = 0;

    if (dataEntrada.value && dataSaida.value) {
        const inicio = new Date(dataEntrada.value);
        const fim = new Date(dataSaida.value);

        dias = (fim - inicio) / (1000 * 60 * 60 * 24);
        if (dias < 1) dias = 0;
    }

    // pega selects
    selects.forEach(select => {
        const preco = Number(select.dataset.preco);
        const qtd = Number(select.value);

        if (qtd > 0) {
            total += preco * qtd;
            reservas.push({
                nome: select.dataset.nome,
                qtd: qtd,
                preco: preco
            });
        }
    });

    // soma diária × dias
    let totalFinal = dias > 0 ? total * dias : total;

    // salva
    localStorage.setItem("totalReserva", totalFinal);
    localStorage.setItem("reservas", JSON.stringify(reservas));

    // mostra total
    if (dias > 0) {
        textoDiarias.textContent = `Total diárias: ${dias}`;
        resultado.textContent = `TOTAL: R$ ${totalFinal},00`;
    }

    // mostra ou esconde botão
    const box = document.querySelector(".botao-reserva");
    box.style.display = totalFinal > 0 ? "block" : "none";
}

// adiciona evento pra recalcular sempre que mudar a quantidade
selects.forEach(select => {
    select.addEventListener("input", calcularTotal);
});

// atualiza na abertura da página
calcularTotal();

localStorage.setItem("reservas", JSON.stringify(reservas));
localStorage.setItem("totalReserva", total);