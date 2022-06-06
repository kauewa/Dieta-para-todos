//Variáveis recebidas do HTML
var sexualidade;
var altura;
var idade;
var peso;
var treinosemanal;
var dia;
var objetivo;

//variáveis de resultado
var resultadoIMC;
var gorduracorporal;
var gastocalorico;
var gastocaloricototal;
var qtdconsumo;
var Cproteina;
var Ccarboidrato;
var Cgordura;
var proteina;
var carboidrato;
var gordura;

//pegando os valores de input
function SEXO(x){
    if(x == 0){
        sexualidade = 0;
        document.querySelector('#female').classList.add('OP-click');
        document.querySelector('#male').classList.remove('OP-click');
    }else if(x == 1){
        sexualidade = 1;
        document.querySelector('#male').classList.add('OP-click')
        document.querySelector('#female').classList.remove('OP-click');
    }
}

function ALTURA(){
    altura = document.getElementById("altura").value;
}

function IDADE(){
    idade = document.getElementById("idade").value;
}

function PESO(){
    peso = document.getElementById("peso").value;
}

function TREINO(){
    treinosemanal = document.getElementById("semana").value;
}

function DIA(y){
    if(y == 1){
        dia = 1;
        document.querySelector('#option1').classList.add('OP-click');
        document.querySelector('#option2').classList.remove('OP-click');
        document.querySelector('#option3').classList.remove('OP-click');
    }else if(y == 2){
        dia = 2;
        document.querySelector('#option2').classList.add('OP-click');
        document.querySelector('#option1').classList.remove('OP-click');
        document.querySelector('#option3').classList.remove('OP-click');
    }else if(y == 3){
        dia = 3;
        document.querySelector('#option3').classList.add('OP-click');
        document.querySelector('#option2').classList.remove('OP-click');
        document.querySelector('#option1').classList.remove('OP-click');
    }
}

function OBJETIVO(h){
    if(h == 1){
        objetivo = 1;
        document.querySelector('#Perder').classList.add('OP-click');
        document.querySelector('#Manter').classList.remove('OP-click');
        document.querySelector('#Ganhar').classList.remove('OP-click');
    }else if(h == 2){
        objetivo = 2;
        document.querySelector('#Manter').classList.add('OP-click');
        document.querySelector('#Perder').classList.remove('OP-click');
        document.querySelector('#Ganhar').classList.remove('OP-click');
    }else if(h == 3){
        objetivo = 3;
        document.querySelector('#Ganhar').classList.add('OP-click');
        document.querySelector('#Perder').classList.remove('OP-click');
        document.querySelector('#Manter').classList.remove('OP-click');
    }
}

//Funções para cálculo
function IMC(){
    resultadoIMC = peso/(altura*altura);
}

function GORDURACORPORAL(){
    gorduracorporal = (1.20*resultadoIMC)+(0.23*idade)-(10.8*sexualidade)-5.4;
}

function BASAL(){
    switch(sexualidade)
    {    
        case 0:
        {
            if (idade>=18 && idade<=30)
            {
                gastocalorico = (0.062*peso+2.036)*239;
            }else if(idade>=31 && idade<=40)
            {
                gastocalorico = (0.034*peso+3.538)*239;
            }
            break
        }

        case 1:
        {
            if(idade>=18 && idade<=30)
            {
                gastocalorico = (0.063*peso+2.896)*239;
            }else if(idade>=31 && idade<=40)
            {
                gastocalorico = (0.048*peso+3.653)*239;
            }
            break
        }
    }    
}

function GASTOTOTAL(){
    if(dia==1)
        {
            gastocaloricototal = (0.9*(treinosemanal/7)*peso)+gastocalorico+50;
        }else if(dia==2)
        {
            gastocaloricototal = (0.9*(treinosemanal/7)*peso)+gastocalorico+100;
        }else if(dia==3)
        {
            gastocaloricototal = (0.9*(treinosemanal/7)*peso)+gastocalorico+150;
        }
}

function CONSUMO(){
    if(objetivo==1)
        {
            qtdconsumo = gastocaloricototal-300;
        }else if(objetivo==2)
        {
            qtdconsumo = gastocaloricototal;
        }else if(objetivo==3)
        {
            qtdconsumo = gastocaloricototal+300;
        }
}

function MACROS(){
    if(objetivo==1)
        {
            var Cproteina = (50*qtdconsumo)/100;
            var Ccarboidrato = (25*qtdconsumo)/100;
            var Cgordura = (25*qtdconsumo)/100;
        }else if(objetivo==2)
        {
            Cproteina = (40*qtdconsumo)/100;
            Ccarboidrato = (40*qtdconsumo)/100;
            Cgordura = (20*qtdconsumo)/100;
        }else if(objetivo==3)
        {
            Cproteina = (30*qtdconsumo)/100;
            Ccarboidrato = (50*qtdconsumo)/100;
            Cgordura = (20*qtdconsumo)/100;
        }
        
        proteina = (Cproteina/4);
        carboidrato = (Ccarboidrato/4);
        gordura = (Cgordura/9);
}

function estadofisico(){
    console.log("Resultado IMC: "+ resultadoIMC);

        if(resultadoIMC<18.5)
        {
            console.log("magreza");
        }else if(resultadoIMC>=18.5 && resultadoIMC<=24.9)
        {
            console.log("normal");
        }else if(resultadoIMC>=25 && resultadoIMC<=29.9)
        {
            console.log("sobrepeso");
        }else if(resultadoIMC>=30 && resultadoIMC<=39.9)
        {
            console.log("obesidade");
        }else if(resultadoIMC>=40)
        {
            console.log("obesidade grave");
        }
}

//função principal  CALCULO/RESULTADOS;
function finalbutton(){
    ALTURA();
    IDADE();
    PESO();
    TREINO();
    IMC(); 
    GORDURACORPORAL();
    BASAL();
    GASTOTOTAL();
    CONSUMO();
    MACROS();
    estadofisico();
    apresentarresultados();
    afterclick();
}

function afterclick(){
    document.getElementById('final-button').classList.add('final-button-click');
}
    
function apresentarresultados(){
    document.getElementById("IMC").value = resultadoIMC;
    document.getElementById("Gordura-corporal").value = gorduracorporal;
    document.getElementById("basal").value = ("Basal: " + gastocalorico);
    document.getElementById("total").value = ("Total: " + gastocaloricototal);
    document.getElementById("calorias-consumo").value = ("Calorias pra consumo: " + qtdconsumo);
    document.getElementById("carbo").value = ("Carboidrato: " + carboidrato);
    document.getElementById("proteina").value = ("Proteína: " + proteina);
    document.getElementById("gordura").value = ("Gordura: " + gordura);
}



