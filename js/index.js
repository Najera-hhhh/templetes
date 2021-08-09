AOS.init({ once: true });

document.getElementById("openCloseButton").addEventListener("click", () => {
    document.getElementById("options").classList.toggle("nav__options--close")
})