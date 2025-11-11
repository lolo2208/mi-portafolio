document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbar");
    const footer = document.getElementById("footer");


    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY
        const pageHeight = document.documentElement.scrollHeight;

        console.log(window.innerHeight);
        console.log(window.scrollY);

        if (nav != null) {
            if (scrollPosition > 60) {
                nav.classList.add("fixed");
            } else {
                nav.classList.remove("fixed");
            }
        }

        if (footer != null) {
            if (scrollPosition + window.innerHeight >= pageHeight) {
                footer.classList.add("relative");
            } else {
                footer.classList.remove("relative")
            }
        }
    });
});