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

const countries = [
    "Afeganistão", "África do Sul", "Albânia", "Alemanha", "Andorra", "Angola", "Argentina", "Armênia", "Aruba", "Arábia Saudita",
    "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bangladesh", "Barbados", "Barein", "Bélgica", "Belize", "Benin", "Bermudas",
    "Bielorrússia", "Bolívia", "Bósnia e Herzegovina", "Botswana", "Brasil", "Brunei", "Bulgária", "Burkina Faso", "Burundi",
    "Butão", "Cabo Verde", "Camarões", "Camboja", "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre", "Colômbia",
    "Comores", "Congo", "Coreia do Norte", "Coreia do Sul", "Costa do Marfim", "Costa Rica", "Croácia", "Cuba", "Dinamarca",
    "Dominica", "Egito", "El Salvador", "Emirados Árabes Unidos", "Equador", "Eritreia", "Eslováquia", "Eslovênia", "Espanha",
    "Estados Unidos", "Estônia", "Etiópia", "Fiji", "Filipinas", "Finlândia", "França", "Gâmbia", "Gabão", "Geórgia", "Gana",
    "Gibraltar", "Grécia", "Groenlândia", "Guatemala", "Guiana", "Guiné", "Guiné-Bissau", "Haiti", "Holanda", "Honduras", "Hungria",
    "Iêmen", "Ilhas Cayman", "Ilhas Cook", "Ilhas Faroé", "Ilhas Marshall", "Ilhas Maurício", "Ilhas Salomão", "Índia", "Indonésia",
    "Iraque", "Irã", "Irlanda", "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", "Kiribati", "Kosovo", "Kuweit",
    "Laos", "Lesoto", "Letônia", "Líbano", "Libéria", "Líbia", "Liechtenstein", "Lituânia", "Luxemburgo", "Macau", "Macedônia",
    "Madagáscar", "Malásia", "Malawi", "Maldivas", "Mali", "Malta", "Marrocos", "Martinica", "Mauritânia", "México", "Mianmar",
    "Micronésia", "Moçambique", "Moldávia", "Mônaco", "Mongólia", "Namíbia", "Nauru", "Nepal", "Nicarágua", "Níger", "Nigéria",
    "Noruega", "Nova Zelândia", "Oman", "Palau", "Panamá", "Papua Nova Guiné", "Paquistão", "Paraguai", "Peru", "Polônia",
    "Portugal", "Qatar", "Quênia", "Quirguistão", "Reino Unido", "República Centro-Africana", "República Tcheca", "Romênia",
    "Ruanda", "Rússia", "Samoa", "San Marino", "Santa Lúcia", "Senegal", "Serra Leoa", "Sérvia", "Síria", "Somália", "Sri Lanka",
    "Suazilândia", "Sudão", "Sudão do Sul", "Suécia", "Suíça", "Suriname", "Tailândia", "Taiwan", "Tajiquistão", "Tanzânia",
    "Timor-Leste", "Togo", "Tonga", "Trinidad e Tobago", "Tunísia", "Turquia", "Turcomenistão", "Tuvalu", "Ucrânia", "Uganda",
    "Uruguai", "Uzbequistão", "Vanuatu", "Vaticano", "Venezuela", "Vietnã", "Zâmbia", "Zimbábue"
];

const datalist = document.getElementById("countries");

countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    datalist.appendChild(option);
});

function mascaraTel(value) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
}

const tel = document.getElementById("telefone");
tel.addEventListener("input", () => {
    tel.value = mascaraTel(tel.value);
});