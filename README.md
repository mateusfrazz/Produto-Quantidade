# Desafio - Classe Produto

Este repositório contém a implementação de uma classe `Produto` em **TypeScript**. A classe foi criada como parte de um desafio de codificação, com foco em conceitos de programação orientada a objetos (POO).

## Descrição

A classe `Produto` tem as seguintes propriedades e métodos:

### Propriedades:
- **nome** (string): Nome do produto.
- **preco** (número): Preço do produto.
- **estoque** (número): Quantidade disponível em estoque.

### Métodos:
- **adicionarEstoque(quantidade: number)**: Adiciona a quantidade especificada ao estoque.
- **removerEstoque(quantidade: number)**: Remove a quantidade especificada do estoque, se houver estoque suficiente.

## Como usar

### Exemplo de código

```typescript
class Produto {
    nome: string;
    preco: number;
    estoque: number;

    constructor(nome: string, preco: number, estoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    adicionarEstoque(quantidade: number): void {
        this.estoque += quantidade;
        console.log(`${quantidade} unidades de ${this.nome} adicionadas ao estoque.`);
    }

    removerEstoque(quantidade: number): void {
        if (quantidade <= this.estoque) {
            this.estoque -= quantidade;
            console.log(`${quantidade} unidades de ${this.nome} removidas do estoque.`);
        } else {
            console.log(`Estoque insuficiente para remover ${quantidade} unidades de ${this.nome}.`);
        }
    }
}

// Instanciando a classe Produto e realizando operações
const produto = new Produto("Arroz", 25.00, 100);

produto.adicionarEstoque(50); // Adicionando 50 unidades
produto.removerEstoque(30);  // Removendo 30 unidades
console.log(`Estoque atual de ${produto.nome}: ${produto.estoque} unidades.`);
