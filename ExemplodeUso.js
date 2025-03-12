const fornecedor1 = new Fornecedor(1, "Fornecedor XYZ", "(11) 99999-9999", ["Banana", "Maçã"]);

const produto1 = new Produto(1, "Banana", 100, "2025-04-10");

const movimentacao1 = new MovimentacaoEstoque(1, produto1, "Entrada", 50, "2025-03-12");


console.log(fornecedor1);

console.log(produto1);

console.log(movimentacao1);