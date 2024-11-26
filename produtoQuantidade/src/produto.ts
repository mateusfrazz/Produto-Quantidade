//criando o modelo do objeto ( class)
class Produto {
    nome:string;
    preco:number;
    estoque:number;

    constructor(nome:string,preco:number,estoque:number){
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
    }

    info():void{
        console.log(`Quantidade:${this.estoque}`);
    }

    adicionarEstoque(addQuantidade:number):void{
          this.estoque += addQuantidade;
    }

    removerEstoque(remQuantidade:number):void{
         this.estoque -= remQuantidade;
    }
}

const productOne = new Produto ("Arroz",25,100);
const productTwo = new Produto ("Fejiao",40,100);
const productFour = new Produto ("Batata",50,100);


//chamando o metodo da classe Produto e adicionando valores ao estoque do produto
productOne.adicionarEstoque(10);

//chamando o metodo da classe Produto e removendo valores do estoque do produto 
productOne.removerEstoque(20)
productOne.info()

