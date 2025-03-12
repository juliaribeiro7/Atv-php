class Produto extends Entidade {

    constructor(id, nome, quantidade, dataValidade) {

        super(id);

        this.nome = nome;
        this.quantidade = quantidade;
        this.dataValidade = dataValidade;
        
    }
}
