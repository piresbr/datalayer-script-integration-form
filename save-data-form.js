document.addEventListener("DOMContentLoaded", function (event) {
    //save data form on local storage
    let forms = document.querySelectorAll(".grao");
    forms.forEach((form) => {
        form.addEventListener('submit', function () {
            let botoes = document.querySelectorAll(".enviar");
            botoes.forEach((e) => {
                let name = form.querySelector('input[name="lastname"]');
                let telefone = form.querySelector('input[name="mobile"]');
                let email = form.querySelector('input[name="email"]');
                let state = form.querySelector('select[name="state"]');
                let city = form.querySelector('select[name="city"]');

                localStorage.setItem("nome", name.value)
                localStorage.setItem("telefone", telefone.value)
                localStorage.setItem("email", email.value)
                localStorage.setItem("estado", state.options[state.selectedIndex].text)
                localStorage.setItem("city", city.options[city.selectedIndex].text)
            })

        })
    })

});