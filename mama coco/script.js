let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha != "1234");

alert("Acesso permitido!");

let opcao;
let total = 0;
let quantidade = 0;

while (opcao != 0) {

    opcao = Number(prompt(
        "1 - Hambúrguer - R$ 15,00\n" +
        "2 - Pizza - R$ 20,00\n" +
        "3 - Refrigerante - R$ 6,00\n" +
        "4 - Batata Frita - R$ 10,00\n" +
        "0 - Finalizar\n\n" +
        "Escolha:"
    ));

    switch (opcao) {
        case 1:
            total += 15;
            quantidade++;
            alert("Hambúrguer adicionado!");
            break;

        case 2:
            total += 20;
            quantidade++;
            alert("Pizza adicionada!");
            break;

        case 3:
            total += 6;
            quantidade++;
            alert("Refrigerante adicionado!");
            break;

        case 4:
            total += 10;
            quantidade++;
            alert("Batata frita adicionada!");
            break;

        case 0:
            break;

        default:
            alert("Opção inválida!");
    }
}

for (let i = 1; i <= quantidade; i++) {
    alert("Produto " + i + " registrado");
}

let desconto = total >= 50 ? total * 0.10 : 0;

alert("Subtotal: R$ " + total);
alert("Desconto: R$ " + desconto);
alert("Total: R$ " + (total - desconto));