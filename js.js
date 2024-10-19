var dimi = document.getElementById("dimi");
var multi = document.getElementById("multi");
var ver = document.getElementById("ver");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

var op = [
    (valores) => {
        var num1 = Number(valores[0]);
        var num2 = Number(valores[1]);

        // Verifica se os valores são números
        if (isNaN(num1) || isNaN(num2)) {
            alert("Digite números!");
            input3.value = "";
            input1.focus();
            input2.value = "";
            input1.value = "";
            return; // Sai da função se não for um número
        }

        var resultado = Math.floor(num1 + num2);
        input3.value = resultado;
    },
    (valores) => {
        var num1 = Number(valores[0]);
        var num2 = Number(valores[1]);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Digite números!");
            input3.value = "";
            input1.focus();
            input2.value = "";
            input1.value = "";
            return;
        }

        var resultado = Math.floor(num1 - num2);
        input3.value = resultado;
    },
    (valores) => {
        var num1 = Number(valores[0]);
        var num2 = Number(valores[1]);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Digite números!");
            input3.value = "";
            input1.focus();
            input2.value = "";
            input1.value = "";
            return;
        }

        var resultado = Math.floor(num1 * num2);
        input3.value = resultado;
    }
];

ver.addEventListener("click", function() {
    var valores = [input1.value, input2.value];
    op[0](valores);
});

dimi.addEventListener("click", function() {
    var valores = [input1.value, input2.value];
    op[1](valores);
});

multi.addEventListener("click", function() {
    var valores = [input1.value, input2.value];
    op[2](valores);
});