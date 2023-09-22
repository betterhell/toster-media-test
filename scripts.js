// main slider
const productImages = document.querySelectorAll(".product__images__image")
const productLine = document.querySelector(".product__main-images__container")

productImages.forEach(image => {
    image.addEventListener("click", () => {
        let currentImage = document.querySelector(".product__images__image.current")
        let offset = image.dataset.offset

        if (currentImage) {
            currentImage.classList.remove("current")
        }
        image.classList.add("current")
        productLine.style.transform = `translateX(${offset}px)`
    })
})


// star rating
let stars = document.querySelectorAll(".star__item"),
    starsActive,
    starsSelect;

stars.forEach((element, index) => {

    element.addEventListener('mouseover', () => {
        starsActive = Array.prototype.slice.call(stars, 0, index + 1);
        starsActive.forEach((star) => {
            star.classList.add("star__item_active");
        });
    });

    element.addEventListener('mouseout', () => {
        stars.forEach((star) => {
            star.classList.remove("star__item_active");
        });
    });

    element.addEventListener('click', () => {
        stars.forEach((star) => {
            star.classList.remove("star__item_select");
        });
        starsActive.forEach((star) => {
            star.classList.add("star__item_select");
        });
        starsSelect = starsActive;
    });
});