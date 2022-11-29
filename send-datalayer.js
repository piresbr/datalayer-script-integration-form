    let localNome = localStorage.getItem("nome");
    let localTelefone = localStorage.getItem("telefone");
    let localEmail = localStorage.getItem("email");
    let localState = localStorage.getItem("estado");
    let localCity = localStorage.getItem("city");

    var payload = {}


    /*condição para ver se os campos foram preenchidos para serem enviados ao data layer
    Dentro do payload, se quiser pode criar todos os campos que serão enviados,
    atualmente só está sendo enviado o de email e telefone. */
    if (localTelefone && localEmail) {
        payload = {
            'event': 'user_data',
            'user_email': localEmail,
            'user_phone': '55' + localTelefone.replace(/[^\d]+/g, '')
        }
    }

    dataLayer.push(payload)