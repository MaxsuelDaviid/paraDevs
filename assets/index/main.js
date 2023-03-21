async function main() {
    let response = await fetch("../../assets/tools.json");

    if (response.ok) {
        let json = await response.json();

        json.forEach(element => {
            if (element.active === true) {
                $(".tools").append(`<a href="${element.url}">${element.icone} <span>${element.categoria} de ${element.descricao}</span></a>`);
            }
        });

    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

main();