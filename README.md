1. Por que o switch é adequado para o menu?

Porque o menu possui várias opções diferentes (1, 2, 3, 4 e 0). O switch permite verificar o valor escolhido e executar uma ação específica para cada opção.

2. Qual é a diferença entre while e do...while?
while: verifica a condição antes de executar o código. Pode executar zero vezes.
do...while: executa o código primeiro e só depois verifica a condição. Executa pelo menos uma vez.
3. Por que o do...while foi utilizado na validação da senha?

Porque o usuário precisa digitar a senha pelo menos uma vez. Se estiver errada, o do...while faz a pergunta novamente até que a senha seja "1234".

4. Em qual situação o break encerra o programa?

Na atividade, o break encerra o laço de pedidos quando o usuário escolhe a opção 0 - Finalizar. Ele não encerra o programa inteiro, apenas a repetição do menu.

5. O que aconteceria se retirássemos o continue da opção inválida?

A mensagem "Opção inválida!" ainda poderia aparecer, mas o continue serve para pular imediatamente para a próxima repetição do laço. Sem ele, o código continuaria executando as instruções que viessem depois do switch naquela repetição.

6. Por que o for é adequado quando sabemos previamente a quantidade de repetições?

Porque sabemos exatamente quantas vezes ele precisa repetir: uma vez para cada produto comprado.

Por exemplo, se foram comprados 3 produtos:

Produto 1 registrado
Produto 2 registrado
Produto 3 registrado

O for consegue controlar isso facilmente usando a variável i.

7. Reescreva a condição do desconto utilizando if/else

Com operador ternário:

let desconto = total >= 50 ? total * 0.10 : 0;

Com if/else:

let desconto;

if (total >= 50) {
    desconto = total * 0.10;
} else {
    desconto = 0;
}

Comparação: os dois códigos fazem a mesma coisa. O if/else ocupa mais linhas e deixa cada condição


