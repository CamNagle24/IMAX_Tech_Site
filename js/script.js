document.addEventListener("DOMContentLoaded", () => {
    const camera = document.getElementById("camera");

    camera.addEventListener("mouseover", () => {
        camera.style.transform = "scale(1.5)";
    });

    camera.addEventListener("mouseleave", () => {
        camera.style.transform = "scale(1)";
    });

    const input = document.querySelector("#input");

    const feet = document.querySelector("#feet");

    const cost = document.querySelector("#cost");

    input.addEventListener("input", function() {
        feet.textContent = input.value * 400 + " Feet of film";
        cost.textContent = "$" + input.value * 1000 + " Cost";
    });
});