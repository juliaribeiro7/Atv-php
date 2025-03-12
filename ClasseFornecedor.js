class Fornecedor extends Pessoa {

    constructor(id, nome, contato, produtosFornecidos = []) {

        super(id, nome, contato);

        this.produtosFornecidos = produtosFornecidos;
        
    }
}
