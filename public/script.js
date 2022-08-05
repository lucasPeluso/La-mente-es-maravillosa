

// ************** Menu *************

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".menu__a") && !e.target.matches(".menu__a-span"))
        return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    })
})(document);

// ************** Slider *************

let counter = 1;

setInterval(() => {
    document.getElementById('hero__radio' + counter).checked = true;
    counter++;
    if(counter > 3) {
        counter = 1;
    }
}, 8000)

// ************** Testimony Slider ******************

let counterTestimony = 1;

setInterval(() => {
    document.getElementById('testimony__radio' + counterTestimony).checked = true;
    counterTestimony++;
    if(counterTestimony > 3) {
        counterTestimony = 1;
    }
}, 5000)

// ************* Validar Correo **************

function validateEmail(email) {
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let isValid = expReg.test(email);
    if(isValid) {
        alert('¡Gracias por suscribirte!')
    } else {
        alert('El correo eléctronico NO es válido')
    }
}

