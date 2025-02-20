import dados from 'readline-sync';

let salarioMinimo = [
    {ano: 2010, salario:510.00 },
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

//declaração das funções
function exibir_salarios(ano, salario_formatado,label_ano, label_salario){
    console.log(String(label_ano).padEnd(25,".")+ " R$" + ano);
        console.log(String(label_salario).padEnd(25, ".")+ " R$" + salario_formatado);
        console.log("\n");
}

function exibir_ipca(ano, ipca_formatado, label_ano, label_ipca){
    console.log(String(label_ano).padEnd(25,".") + ano);
    console.log(String(label_ipca).padEnd(25,".") + ipca_formatado + "%");
    console.log("\n");
}


//menu para a escolha do usuário
console.log("1 - Listar os salários minímos de 20010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial do IPCA");

//entrada do usuário
let escolha = dados.question("Digite o número da sua escolha: ");

//estrutura condicional
if(Number(escolha) == 1){
    for(let salarios of salarioMinimo){
        let label_salario = "Salário mínimo: ";
        let label_ano = "Ano: ";
        let salario = salarios.salario;
        let ano = salarios.ano;

        let salario_formatado = salario.toFixed(2).replace(".", ",");
        exibir_salarios(ano, salario_formatado, label_ano, label_salario);
       
    }
}else if(Number(escolha) == 2){
    for(let inflacoes of inflacao){
        let ano = inflacoes.ano;
        let ipca = inflacoes.ipca;

        let label_ano = "Ano: ";
        let label_ipca = "Inflação IPCA: ";  
        
        let ipca_formatado = ipca.toFixed(2).replace(".", ","); 

        exibir_ipca(ano, ipca_formatado, label_ano, label_ipca);
    }
}else if(Number(escolha) == 3){
    for(let i=0; i < salarioMinimo.length; i++){

        let salario = salarioMinimo[i].salario;
        let ano = salarioMinimo[i].ano;
        let ipca = inflacao[i].ipca;
        
        
        
        if( i > 0){ //condição que faz os calculos só a partir do segundo ano
        let salario_anterior = salarioMinimo[i-1].salario; // criamos uma váriavel para pegar o salário do ano anterior
        let diferenca = salario - salario_anterior; // calculo da diferença
        let crescimento = (diferenca/salario_anterior)*100; // calculo do crescimento

        //Formatação das variáveis de saída
        let salario_formatado = salario.toFixed(2).replace(".", ",");
        let ipca_formatado = ipca.toFixed(2).replace(".", ",");
        let crescimento_formatado =String(crescimento.toFixed(2)).padStart(16, ".");
        // variaveis label
        let label_ano = "Ano: ";
        let label_salario = "Salário mínimo: ";
        let label_ipca = "Inflação IPCA: ";

       //saída de dados
        console.log(String(label_ano).padEnd(25,".") + ano);
        console.log(String(label_salario).padEnd(25,".") + "R$" + salario_formatado);
        console.log(String(label_ipca).padEnd(25,".") + ipca_formatado + "%");
        console.log("Crescimento: " + crescimento_formatado + "%");
        console.log("\n");
        }else {
            let salario_formatado = salario.toFixed(2).replace(".", ",");
            let ipca_formatado = ipca.toFixed(2).replace(".", ",");
            let label_ano = "Ano: ";
            let label_salario = "Salário mínimo: ";
            let label_ipca = "Inflação IPCA: ";
            console.log(String(label_ano).padEnd(25,".") + ano);
            console.log(String(label_salario).padEnd(25,".") + "R$" + salario_formatado);
            console.log(String(label_ipca).padEnd(25,".") + ipca_formatado + "%");  
            console.log("\n");
        }
    }

}else {
    console.log("Opção inválida");
}

