navIndex = document.getElementsByClassName("navIndex")

for (let i = 0; i < navIndex.length; i++) {
    const element = navIndex[i];
    element.addEventListener("click", () => {
        for (let i = 0; i < navIndex.length; i++) {
            const innerElement = navIndex[i];
            innerElement.classList.remove("active")
        }
        element.classList.add("active")
    })
}

function actualize() {
    url = window.location.toString()
    pagePosition = url.split("#")[1]
    for (let i = 0; i < navIndex.length; i++) {
        if ((navIndex[i].classList[1] === pagePosition) || ((pagePosition === "") && (navIndex[i].classList[1] === "home"))) {
            const element = navIndex[i];
            for (let i = 0; i < navIndex.length; i++) {
                const innerElement = navIndex[i];
                innerElement.classList.remove("active")
            }
            element.classList.add("active")
            break
        }
    }
}

function hoverSection(sectionName) {
    pageUrl = window.location.toString()
    hostUrl = pageUrl.split("#")[0]
    destination = hostUrl + "#" + sectionName

    if (window.location.toString().trim() !== destination) {
        window.location = destination
        actualize()
    }

}

function closeExtra() {
    document.getElementsByClassName('cv_extra')[0].classList.remove("active")
}

open_extra = document.getElementById('open_extra')
close_extra = document.getElementById('close_extra')

open_extra.addEventListener('click', () => document.getElementsByClassName('cv_extra')[0].classList.add("active"))
close_extra.addEventListener('click', () => document.getElementsByClassName('cv_extra')[0].classList.remove("active"))