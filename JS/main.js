
const observe = new IntersectionObserver((entries) => {
    for(const e of entries) {
       if(e.isIntersecting && !e.target.classList.contains("done")) {
        e.target.classList.add("done")
        console.log("@hi")
        const number = parseInt(e.target.textContent.trim().replace("%", ""))
        const x = Math.floor((number / 100) * 360)
        e.target.style.setProperty("--deg", `${x}deg`)
       }
    }
}, {
    root: null,
    threshold: 0
})

for(const el of document.querySelectorAll(".progress")) {
    observe.observe(el)
}
