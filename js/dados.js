const totalSalvo = localStorage.getItem("totalReserva");
const reservasSalvo = JSON.parse(localStorage.getItem("reservas")) || [];
const dataEntrada = localStorage.getItem("dataEntrada");
const dataSaida = localStorage.getItem("dataSaida");
const diarias = Number(localStorage.getItem("diarias")) || 0;

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

    const datas = document.getElementById("datas");

    if (dataEntrada && dataSaida && diarias > 0) {
        datas.innerHTML = `
        Entrada: ${dataEntrada}
        <br>Saída: ${dataSaida}<br>
        Diárias totais: ${diarias}
    `;
    }

}

montarResumo();

//paises
const paises = [
    "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola", "Antígua e Barbuda",
    "Arábia Saudita", "Argélia", "Argentina", "Armênia", "Austrália", "Áustria", "Azerbaijão",
    "Bahamas", "Bangladesh", "Barbados", "Barém", "Bélgica", "Belize", "Benim", "Bielorrússia",
    "Bolívia", "Bósnia e Herzegovina", "Botsuana", "Brasil", "Brunei", "Bulgária", "Burquina Faso",
    "Burundi", "Butão", "Cabo Verde", "Camarões", "Camboja", "Canadá", "Catar", "Cazaquistão", "Chade",
    "Chile", "China", "Chipre", "Colômbia", "Comores", "Congo-Brazzaville", "Congo-Kinshasa", "Coreia do Norte",
    "Coreia do Sul", "Costa do Marfim", "Costa Rica", "Croácia", "Cuba", "Dinamarca", "Djibuti", "Dominica",
    "Egito", "El Salvador", "Emirados Árabes Unidos", "Equador", "Eritreia", "Eslováquia",
    "Eslovênia", "Espanha", "Estados Unidos", "Estônia", "Eswatini", "Etiópia", "Fiji", "Filipinas",
    "Finlândia", "França", "Gabão", "Gâmbia", "Gana", "Geórgia", "Granada", "Grécia", "Guatemala",
    "Guiana", "Guiné", "Guiné-Bissau", "Guiné Equatorial", "Haiti", "Holanda", "Honduras", "Hungria",
    "Iêmen", "Ilhas Marshall", "Ilhas Maurício", "Ilhas Salomão", "Índia", "Indonésia", "Irã", "Iraque",
    "Irlanda", "Islândia", "Israel", "Itália",
    "Jamaica", "Japão", "Jordânia",
    "Kiribati", "Kosovo", "Kuwait", "Laos", "Lesoto", "Letônia", "Líbano", "Libéria", "Líbia", "Liechtenstein",
    "Lituânia", "Luxemburgo",
    "Macedônia do Norte", "Madagascar", "Malásia", "Maláui", "Maldivas", "Mali", "Malta", "Marrocos",
    "Mauritânia", "México", "Micronésia", "Moçambique", "Moldávia", "Mônaco", "Mongólia", "Montenegro",
    "Myanmar", "Namíbia", "Nauru", "Nepal", "Nicarágua", "Níger", "Nigéria", "Noruega", "Nova Zelândia",
    "Omã", "Panamá", "Papua-Nova Guiné", "Paquistão", "Paraguai", "Peru", "Polônia", "Portugal",
    "Quênia", "Quirguistão", "Reino Unido", "República Centro-Africana", "República Tcheca",
    "República Dominicana", "Romênia", "Ruanda", "Rússia", "Samoa", "San Marino", "Santa Lúcia",
    "São Cristóvão e Neves", "São Tomé e Príncipe", "São Vicente e Granadinas", "Senegal",
    "Serra Leoa", "Sérvia", "Síria", "Somália", "Sri Lanka", "Sudão", "Sudão do Sul", "Suécia", "Suíça",
    "Suriname", "Tailândia", "Taiwan", "Tajiquistão", "Tanzânia", "Timor-Leste", "Togo", "Tonga",
    "Trinidad e Tobago", "Tunísia", "Turcomenistão", "Turquia", "Tuvalu", "Ucrânia", "Uganda", "Uruguai",
    "Uzbequistão", "Vanuatu", "Vaticano", "Venezuela", "Vietnã", "Zâmbia", "Zimbábue"
];

const selectPais = document.getElementById("pais");

paises.forEach(p => {
    const option = document.createElement("option");
    option.value = p;
    option.textContent = p;
    selectPais.appendChild(option);
});


//CONFIRMAÇÃO DA RESERVA
const botao = document.getElementById("confirmar-reserva");

botao.addEventListener("click", function (e) {
    const form = document.getElementById("formulario");

    // força validação
    if (!form.reportValidity()) {
        return; // para se tiver erro
    }

    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("e-mail").value,
        nascimento: document.getElementById("nascimento").value,
        sexo: document.getElementById("sexo").value,
        pais: document.getElementById("pais").value,
        telefone: document.getElementById("telefone").value,
        cep: document.getElementById("cep").value,
        estado: document.getElementById("estado").value,
        cidade: document.getElementById("cidade").value,
        rua: document.getElementById("rua").value,
        numero: document.getElementById("numero").value,
        bairro: document.getElementById("bairro").value
    };

    enviarWhatsApp(dados);
});

function pegarReserva() {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const dataEntrada = localStorage.getItem("dataEntrada");
    const dataSaida = localStorage.getItem("dataSaida");
    const diarias = localStorage.getItem("diarias");
    const total = localStorage.getItem("totalReserva");

    return { reservas, dataEntrada, dataSaida, diarias, total };
}

function enviarWhatsApp(dados) {
    const reserva = pegarReserva();

    let texto = `*RESERVA HOTEL BRILHANTE*\n\n`;

    texto += `*Dados do hóspede:*\n`;
    texto += `Nome: ${dados.nome}\n`;
    texto += `Email: ${dados.email}\n`;
    texto += `Nascimento: ${dados.nascimento}\n`;
    texto += `Sexo: ${dados.sexo}\n`;
    texto += `País: ${dados.pais}\n`;
    texto += `Telefone: ${dados.telefone}\n\n`;

    texto += `*Endereço:*\n`;
    texto += `CEP: ${dados.cep}\n`;
    texto += `Estado: ${dados.estado}\n`;
    texto += `Cidade: ${dados.cidade}\n`;
    texto += `Rua: ${dados.rua}, Nº ${dados.numero}\n`;
    texto += `Bairro: ${dados.bairro}\n\n`;

    texto += `*Reserva do quarto:*\n`;

    reserva.reservas.forEach(r => {
        texto += `${r.qtd}x ${r.nome} — R$ ${r.preco}\n`;
    });

    texto += `\nEntrada: ${reserva.dataEntrada}`;
    texto += `\nSaída: ${reserva.dataSaida}`;
    texto += `\nDiárias: ${reserva.diarias}`;
    texto += `\n\n*Total: R$ ${reserva.total},00*\n`;

    // WhatsApp — telefone destino
    const telefoneDestino = "553836131170"; // <-- coloca o número do hotel

    const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}
