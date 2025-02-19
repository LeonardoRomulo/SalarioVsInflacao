import dados from 'readline-sync';

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

console.log("1 - Listar os salários minímos de 20010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial do IPCA");

let escolha = dados.question("Digite o número da sua escolha: ");


if(Number(escolha) == 1){
    for(let salarios of salarioMinimo){

        let salario = salarios.salario;
        let ano = salarios.ano;

        console.log(`Ano: ${ano}`);
        console.log(`Salário: ${salario},00`);
        console.log("\n");
    }
}else if(Number(escolha) == 2){
    for(let inflacoes of inflacao){
        let ano = inflacoes.ano;
        let ipca = inflacoes.ipca;

        console.log(`Ano:  ${ano}`);
        console.log(`IPCA: ${ipca}%`);
        console.log("\n")
    }
}else if(Number(escolha == 3)){

    console.log("\n");
    console.log("SALÁRIOS DE 2010 A 2020");
    console.log("\n");

    for(let salarios of salarioMinimo){

        let salario = salarios.salario;
        let ano = salarios.ano;

        console.log(`Ano: ${ano}`);
        console.log(`Salário: ${salario},00`);
        console.log("\n");
}

console.log("IPCA DE 2010 A 2020");
console.log("\n");

for(let inflacoes of inflacao){
    let ano = inflacoes.ano;
    let ipca = inflacoes.ipca;

    console.log(`Ano:  ${ano}`);
    console.log(`IPCA: ${ipca}%`);
    console.log("\n")
}

}else {
    console.log("Opção inválida");
}
