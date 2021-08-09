document.getElementById("openCloseButton").addEventListener("click", () => {
    document.getElementById("options").classList.toggle("nav__options--close")
})

AOS.init({ once: true });