const url = "https://www.invertexto.com/ajax/gerar-cep.php"
const _data = { estado: '' , pontuacao : false};

fetch('url', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { 
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8" ,
    },
    mode : "no-cors"
}).then(response => console.log(response))
.catch (err => console.log(err));