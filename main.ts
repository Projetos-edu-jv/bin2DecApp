const inputBin: HTMLInputElement = (<HTMLInputElement>document.querySelector('.decimal'));
const divDisplay: HTMLParagraphElement= (<HTMLParagraphElement>document.querySelector('.display'));
const pErr: HTMLParagraphElement = (<HTMLParagraphElement>document.querySelector('.err'));

const inputTratamento: RegExp = /[0-1]{8}/gi;

function teste() :void
{
    const sla = inputBin.value;

    inputBin.value.length < 2 && alert('Coloque essa por# diretio!');

    if(inputBin.value.length >= 8)
    {
        if(inputTratamento.test(sla))
        {
            pErr.classList.add('off');

            conversor(sla);
        }
        else
        {
            if ( !divDisplay.classList.contains('off') )
                divDisplay.classList.add('off');
            pErr.classList.remove('off');
        };
    };
};

function copiar(): void
{
    navigator.clipboard.writeText('Olá')
};

function colar(): void
{
    navigator.clipboard.readText()
        .then( text => inputBin.value = text );
};

function conversor(numeros: string): void
{
    const sla: string = numeros;
    let res = 0;

    for (let i = 0; i < sla.length; i++)
    {
        let tst: number = Number(sla[i]) * 2;

        res += tst ** (sla.length - i) / 2;
    };
    
    divDisplay.textContent = res.toString();
    divDisplay.classList.remove('off');
};