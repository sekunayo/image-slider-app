let previous = document.getElementById("left");
let next = document.getElementById("right");
let count = 0;
let countryName = document.getElementById("name");
let progressCount = document.getElementById("progress").offsetWidth;

next.addEventListener("click", function () {
    count++;
    if (count > display.length - 1) {
        count = 0;
    }
    changeBackground(count);
    if (document.body.offsetWidth <= 575.98) {
        progressCount = progressCount + 20;
        switch (true) {
            case (progressCount > 100):
                progressCount = 20;
                document.getElementById("progress").style.width = progressCount + "px";
                break;
            default:
                document.getElementById("progress").style.width = progressCount + "px";
        }
    } else {
        progressCount = progressCount + 40;
        switch (true) {
            case (progressCount > 200):
                progressCount = 40;
                document.getElementById("progress").style.width = progressCount + "px";
                break;
            default:
                document.getElementById("progress").style.width = progressCount + "px";
        }
    }
})
previous.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = display.length - 1;
    }
    changeBackground(count);
    if (document.body.offsetWidth <= 575.98) {
        progressCount = progressCount - 20;
        switch (true) {
            case (progressCount < 20):
                progressCount = 100;
                document.getElementById("progress").style.width = progressCount + "px";
                break;
            default:
                document.getElementById("progress").style.width = progressCount + "px";

        }
    } else {
        progressCount = progressCount - 40;
        switch (true) {
            case (progressCount < 40):
                progressCount = 200;
                document.getElementById("progress").style.width = progressCount + "px";
                break;
            default:
                document.getElementById("progress").style.width = progressCount + "px";

        }
    }
})


let display = [{

        name: "SwitzerLand",
        img: "images/pexels-irina-iriser-1002222.jpg"
    },
    {
        name: "Japan",
        img: "images/pexels-aleksandar-pasaric-1510595.jpg"
    },
    {
        name: "Canada",
        img: "images/pexels-vincent-albos-1750754.jpg"
    },
    {
        name: "Germany",
        img: "images/pexels-pixabay-86456.jpg"
    },
    {
        name: "United-Kingdom",
        img: "images/pexels-john-smith-726484.jpg"
    }
];
window.addEventListener('DOMContentLoaded', function () {
    changeBackground(count);
})

function changeBackground(input) {
    let item = display[input];
    document.body.style.backgroundImage = "url('" + item.img + "')";
    countryName.innerHTML = item.name;
}
let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let header = document.querySelector("header");
let close = document.getElementById("close");
menu.addEventListener("click", function () {
    nav.style.display = "block";
    nav.style.color = "white";
    header.style.marginTop = "15px";
    close.style.display = "block";
    menu.style.display = "none";
})
close.addEventListener("click", function () {
    menu.style.display = "block";
    close.style.display = "none";
    nav.style.display = "none";

})