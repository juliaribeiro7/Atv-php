class MovimentacaoEstoque extends Entidade {

    constructor(id, produto, tipo, quantidade, data) {

        super(id);

        this.produto = produto;
        this.tipo = tipo; // "Entrada" ou "Saída"
        this.quantidade = quantidade;
        this.data = data;
        
    }
}
