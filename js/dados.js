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
