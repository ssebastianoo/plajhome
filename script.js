const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");
const lines = document.getElementsByClassName("line");
const title = document.getElementById("title");
const book = document.getElementById("book");

function setHeight() {
    document.documentElement.style.setProperty(
        "--scrolling-image-height",
        `${window.innerHeight / 5}px`
    );
}

document.addEventListener("DOMContentLoaded", setHeight);
window.addEventListener("resize", setHeight);

document.addEventListener("scroll", function () {
    const scrolled = document.documentElement.scrollTop;
    // scrolled : height*3 = x : 4

    book.style.fontSize = `${
        (scrolled / (window.innerHeight * 3 - window.innerHeight)) * 4
    }em`;

    if (scrolled < window.innerHeight - 39) {
        title.style.opacity = 1 - scrolled / (window.innerHeight / 2);
        scrollLeft.style.transform = `translateX(${
            window.innerHeight - 40 - scrolled
        }px)`;

        scrollRight.style.transform = `translateX(${
            0 - window.innerHeight + 40 + scrolled
        }px)`;

        scrollLeft.style.opacity = scrolled / 760;
        scrollRight.style.opacity = scrolled / 760;
    }

    if (scrolled > window.innerHeight && scrolled < window.innerHeight * 2) {
        console.log("a");
        // *1 = 0
        // *2 = 100
        // scrolled : window.innerHeight = x : 100
        // 0 : 800 = 0 : 100
        // 800 : 800 = 100 : 100

        // x = (scrolled / window.innerHeight) * 100 - 100
        document.documentElement.style.setProperty(
            "--scroll-odd",
            `${(scrolled / window.innerHeight) * 100 - 100}%`
        );
        document.documentElement.style.setProperty(
            "--scroll-even",
            `-${(scrolled / window.innerHeight) * 100 - 100}%`
        );
    }
});
