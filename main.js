document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("form");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const numberA = parseFloat(document.getElementById("numberA").value);
        const numberB = parseFloat(document.getElementById("numberB").value);
        const sucessmessage = `O número B: <b>${numberB}</b>, é maior que o número A: <b>${numberA}</b>`
        const MensagemErro = `O número B: <b>${numberB}</b>, precisa ser maior que o número A: <b>${numberA}</b>`
        const containerSucessMessage = document.querySelector('.sucess-message');
        const containerError = document.querySelector('.error-message')


        if (numberB > numberA) {
            containerSucessMessage.innerHTML = sucessmessage;
            containerSucessMessage.style.display = 'block';
            containerError.style.display = 'none';
        } else if (numberB < numberA) {
            containerError.innerHTML = MensagemErro
            containerError.style.display = 'block';
            containerSucessMessage.style.display = 'none';
        }
        setTimeout(function() {
            location.reload();
            }, 8500)
    });
});
