let mainImage = document.querySelector(".product__main-image")
const productImages = document.querySelectorAll(".product__images__image")

console.log(mainImage.style.transition)
for (let image of productImages) {
    image.addEventListener("click", () => {
        let currentImage = document.querySelector(".product__images__image.current")

        if (currentImage) {
            currentImage.classList.remove("current")
        }
        image.classList.add("current")
        mainImage.style.transition = "all 2s ease-in"
        mainImage.setAttribute("src", image.src)
    })
}