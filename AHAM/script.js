let opcao = Number(prompt(
    "ESCOLHA O EXERC\u00CDCIO\n\n" +
    "1 - Classifica\u00E7\u00E3o de idade\n" +
    "2 - Situa\u00E7\u00E3o do aluno\n" +
    "3 - Positivo, negativo ou zero\n" +
    "4 - Sistema de acesso\n" +
    "5 - Desconto da loja\n" +
    "6 - Classifica\u00E7\u00E3o do jogador\n" +
    "7 - Empr\u00E9stimo banc\u00E1rio\n" +
    "8 - Sistema de Cinema"
));

switch (opcao) {

    case 1:
        let idade = Number(prompt("Digite sua idade:"));

        if (idade < 12) {
            alert("Criança");
        } else {
            if (idade <= 17) {
                alert("Adolescente");
            } else {
                if (idade <= 59) {
                    alert("Adulto");
                } else {
                    alert("Idoso");
                }
            }
        }
        break;

    case 2:
        let nota1 = Number(prompt("Digite a primeira nota:"));
        let nota2 = Number(prompt("Digite a segunda nota:"));
        let media = (nota1 + nota2) / 2;

        if (media >= 7) {
            alert("Aprovado");

            if (media == 10) {
                alert("Parabéns! Desempenho excelente!");
            }
        } else {
            if (media >= 5) {
                alert("Recuperação");
            } else {
                alert("Reprovado");
            }
        }
        break;

    case 3:
        let numero = Number(prompt("Digite um número:"));

        if (numero > 0) {
            alert("O número é positivo.");

            if (numero % 2 == 0) {
                alert("O número é par.");
            } else {
                alert("O número é ímpar.");
            }
        } else {
            if (numero < 0) {
                alert("O número é negativo.");
            } else {
                alert("O número é zero.");
            }
        }
        break;

    case 4:
        let idade2 = Number(prompt("Digite sua idade:"));

        if (idade2 >= 18) {
            let senha = prompt("Digite sua senha:");

            if (senha == "1234") {
                alert("Acesso autorizado");
            } else {
                alert("Senha incorreta");
            }
        } else {
            alert("Acesso não permitido");
        }
        break;

    case 5:
        let valor = Number(prompt("Digite o valor da compra:"));

        if (valor >= 100) {
            let tipo = prompt("Você é cliente comum ou VIP?");

            if (tipo == "VIP") {
                alert("Desconto de 20%");
            } else {
                alert("Desconto de 10%");
            }
        } else {
            alert("Não há desconto.");
        }
        break;

    case 6:
        let pontos = Number(prompt("Digite a pontuação:"));

        if (pontos < 100) {
            alert("Iniciante");
        } else {
            if (pontos < 500) {
                alert("Intermediário");
            } else {
                if (pontos < 1000) {
                    alert("Avançado");
                } else {
                    if (pontos >= 2000) {
                        alert("Mestre Lendário");
                    } else {
                        alert("Mestre");
                    }
                }
            }
        }
        break;

    case 7:
        let salario = Number(prompt("Digite seu salário:"));
        let prestacao = Number(prompt("Digite o valor da prestação:"));

        if (salario > 2000) {
            if (prestacao <= salario * 0.30) {
                alert("Empréstimo aprovado");
            } else {
                alert("Prestação muito alta");
            }
        } else {
            alert("Renda insuficiente");
        }
        break;

    case 8:
        let idadeCinema = Number(prompt("Digite sua idade:"));

        if (idadeCinema >= 18) {
            alert("Entrada permitida.");

            let estudante = prompt("Você é estudante? (sim/não)");

            if (idadeCinema < 12) {
                alert("Preço: R$ 10,00");
            } else {
                if (estudante == "sim") {
                    alert("Preço: R$ 15,00");
                } else {
                    alert("Preço: R$ 30,00");
                }
            }
        } else {
            let responsavel = prompt(
                "Está acompanhado de um responsável? (sim/não)"
            );

            if (responsavel == "sim") {
                alert("Entrada permitida.");

                let estudante = prompt("Você é estudante? (sim/não)");

                if (idadeCinema < 12) {
                    alert("Preço: R$ 10,00");
                } else {
                    if (estudante == "sim") {
                        alert("Preço: R$ 15,00");
                    } else {
                        alert("Preço: R$ 30,00");
                    }
                }
            } else {
                alert("Entrada não permitida.");
            }
        }
        break;

    default:
        alert("Opção inválida!");
}