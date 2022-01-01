let corSite = "amarelo";
function resetaCor(cor, tonalidade){ // adicionado outra cor
    corSite = cor + '' + tonalidade;

};

console.log(corSite);
resetaCor("azul", "escuro"); 
console.log(corSite);