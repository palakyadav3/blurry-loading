const loadText = document.querySelector(".loading-text");
const image=document.querySelector(".bg");

let load=0;
let timer =setInterval(blurring, 25);
function blurring() {
    load++;

    loadText.innerText=load+"%";
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    if (load>99){
        clearInterval(timer);
    }
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
