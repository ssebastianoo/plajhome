const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");

document.addEventListener("scroll", function () {
    scrollLeft.style.transform = `translateX(${
        window.innerHeight - 40 - document.documentElement.scrollTop
    }px)`;

    scrollRight.style.transform = `translateX(${
        0 - window.innerHeight + 40 + document.documentElement.scrollTop
    }px)`;
});
