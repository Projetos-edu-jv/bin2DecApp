var inputBin = document.querySelector('.decimal');
var divDisplay = document.querySelector('.display');
var pErr = document.querySelector('.err');
var inputTratamento = /[0-1]{8}/gi;
function teste() {
    var sla = inputBin.value;
    inputBin.value.length < 2 && alert('Coloque essa por# diretio!');
    if (inputBin.value.length >= 8) {
        if (inputTratamento.test(sla)) {
            pErr.classList.add('off');
            conversor(sla);
        }
        else {
            if (!divDisplay.classList.contains('off'))
                divDisplay.classList.add('off');
            pErr.classList.remove('off');
        }
        ;
    }
    ;
}
;
function copiar() {
    navigator.clipboard.writeText('Olá');
}
;
function colar() {
    navigator.clipboard.readText()
        .then(function (text) { return inputBin.value = text; });
}
;
function conversor(numeros) {
    var sla = numeros;
    var res = 0;
    for (var i = 0; i < sla.length; i++) {
        var tst = Number(sla[i]) * 2;
        res += Math.pow(tst, (sla.length - i)) / 2;
    }
    ;
    divDisplay.textContent = res.toString();
    divDisplay.classList.remove('off');
}
;
