const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");
const lines = document.getElementsByClassName("line");
const title = document.getElementById("title");

function setHeight() {
    document.documentElement.style.setProperty(
        "--scrolling-image-height",
        `${window.innerHeight / 5}px`
    );
}

document.addEventListener("DOMContentLoaded", setHeight);
window.addEventListener("resize", setHeight);

document.addEventListener("scroll", function () {
    const root = document.documentElement;
    const scrolled = root.scrollTop;
    // scrolled : height*3 = x : 4

    title.style.opacity = 1 - scrolled / (window.innerHeight / 2);
    if (scrolled < window.innerHeight / 2 - 39) {
        // x : 100 = scroll : h/2

        // 100 : x = scroll : h/2
        scrollLeft.style.transform = `translateX(${
            window.innerHeight / 2 - 40 - scrolled
        }px)`;

        scrollRight.style.transform = `translateX(${
            0 - window.innerHeight / 2 + 40 + scrolled
        }px)`;

        // scrollLeft.style.opacity = scrolled / 760;
        // scrollRight.style.opacity = scrolled / 760;
    }

    if (
        // (100 * scrolled) / root.scrollTopMax > 15.4 &&
        // scrolled < window.innerHeight * 3
        true
    ) {
        // 15 -> 0
        // 100 -> 1

        document.documentElement.style.setProperty(
            "--scroll-odd",
            `${(scrolled / root.scrollTopMax) * 100}%`
        );
        document.documentElement.style.setProperty(
            "--scroll-even",
            `-${(scrolled / root.scrollTopMax) * 100 - 15}%`
        );
    }
});
