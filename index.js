let navBtns = document.querySelectorAll(`.nav-btns`)

navBtns.forEach(btn => {
    btn.addEventListener(`click`, (e) => {
        switch (e.target.innerHTML) {
            case `Home`: removeActive()
                         document.querySelector(`.n_home`).classList.add(`active`)
                        break;

            case `About Me`: removeActive()
                        document.querySelector(`.n_aboutMe`).classList.add(`active`)
                        break;

            case `Form`: removeActive()
                        document.querySelector(`.n_form`).classList.add(`active`)
                        break;

            case `Contact`: removeActive()
                        document.querySelector(`.n_contact`).classList.add(`active`)
                        break;

            default: 
                    break;
        }
    })
})

function removeActive() {
    navBtns.forEach(btn => {
        btn.classList.remove(`active`)
    })
}
