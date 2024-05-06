
const Fila = (_locaSaida) =>{
    let locaSaida = _locaSaida; 
    let dados = [];
   const tamanho = () => dados.length;
   const estaVazia = () => dados.length < 1;
   const enfileirar = valor => {
       dados.push(valor);
       imprimir();
   }
   const desfileirar = () => {
       dados.splice(0,1);
       imprimir();
   }

   const imprimir = () => {
       console.log(dados);
       dado_saida="";
       for (let i = 0; i < tamanho(); i++){
       dado_saida += dados[i].id + "("+dados[i].itens+")";
       }
       document.getElementById(locaSaida).innerHTML = dado_saida; 
   }


   return {
       enfileirar, desfileirar
   }
}
const f1 = Fila('saidaFilaGeral');

    const Cliente = (_id, _itens) =>{
    return{
    id:_id,
   itens : _itens
   }
}

const chamarCx1 = () => {
    
}

const gerarItens = () =>Math.floor(Math.random() * (10 - 3) +2 ); 
const tamanhoInicialFila=15;
( function(){
   for(let i=1; i<=tamanhoInicialFila; i++ ){
       f1.enfileirar(Cliente("P"+i,gerarItens()));
   }

})();

