const root = document.documentElement;
const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");
const lines = document.getElementsByClassName("line");
const title = document.getElementById("title");
const header = document.querySelector("header");
const image = document.getElementById("image");

function setHeight() {
    document.documentElement.style.setProperty(
        "--scrolling-image-height",
        `${window.innerHeight / 5}px`
    );
}

document.addEventListener("DOMContentLoaded", setHeight);
window.addEventListener("resize", setHeight);

document.addEventListener("scroll", function () {
    const scrolled = root.scrollTop;

    title.style.opacity = 1 - scrolled / (window.innerHeight / 2);

    if (scrolled <= window.innerHeight / 2) {
        header.style.backgroundColor = `rgba(0, 0, 0, ${
            (scrolled * 0.3) / (window.innerHeight / 2)
        })`;
    }

    const transformImage =
        100 - (root.scrollTop * 100) / (window.innerHeight / 2.5);

    if (transformImage > 0) {
        image.style.transform = `translateY(${transformImage}%)`;
    }

    if (scrolled < window.innerHeight / 2 - 39) {
        scrollLeft.style.transform = `translateX(${
            window.innerHeight / 2 - 40 - scrolled
        }px)`;

        scrollRight.style.transform = `translateX(${
            0 - window.innerHeight / 2 + 40 + scrolled
        }px)`;
    }

    document.documentElement.style.setProperty(
        "--scroll-odd",
        `${(scrolled / root.scrollTopMax) * 100}%`
    );
    document.documentElement.style.setProperty(
        "--scroll-even",
        `-${(scrolled / root.scrollTopMax) * 100 - 15}%`
    );
});
