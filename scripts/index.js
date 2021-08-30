const forwardButton = document.querySelector(".block__button_type_forward");
const backButton = document.querySelector(".block__button_type_back");
const slidesArray = Array.from(document.querySelectorAll(".slider__image"));
let slidesCount = 0;

function handleSlidesForward() {
    ++slidesCount;

    if(slidesCount >= slidesArray.length) {
        slidesArray[slidesCount-1].classList.remove("slider__image_visible");
        slidesCount = 0;
        slidesArray[slidesCount].classList.add("slider__image_visible");
    } else {
        slidesArray[slidesCount-1].classList.remove("slider__image_visible");
        slidesArray[slidesCount].classList.add("slider__image_visible");
    }
}

function handleSlidesBack() {
    --slidesCount;

    if(slidesCount < 0) {
        slidesArray[slidesCount + 1].classList.remove("slider__image_visible");
        slidesCount = slidesArray.length - 1;
        slidesArray[slidesCount].classList.add("slider__image_visible");
    } else {
        slidesArray[slidesCount+1].classList.remove("slider__image_visible");
        slidesArray[slidesCount].classList.add("slider__image_visible");
    }
}

forwardButton.addEventListener("click", handleSlidesForward);
backButton.addEventListener("click", handleSlidesBack);


