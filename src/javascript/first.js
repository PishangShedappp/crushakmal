/** Loader Function **/
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut();

fetch('./src/data/data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('desc1').innerHTML = "My crush name start with " + data.cS
        document.getElementById('desc2').innerHTML = "My crush username is  " + data.cU
        document.getElementById('desc3').innerHTML = "My crush age is " + data.cA
    })

/*Popup function*/
document.getElementById("box1").addEventListener("click", function() {
    document.getElementsByClassName("popup-center1")[0].classList.add("active");
});

document.getElementById("box2").addEventListener("click", function() {
    document.getElementsByClassName("popup-center2")[0].classList.add("active");
});

document.getElementById("box3").addEventListener("click", function() {
    document.getElementsByClassName("popup-center3")[0].classList.add("active");
});

document.getElementById("okay-popup-btn1").addEventListener("click", function() {
    document.getElementsByClassName("popup-center1")[0].classList.remove("active");
});

document.getElementById("okay-popup-btn2").addEventListener("click", function() {
    document.getElementsByClassName("popup-center2")[0].classList.remove("active");
});

document.getElementById("okay-popup-btn3").addEventListener("click", function() {
    document.getElementsByClassName("popup-center3")[0].classList.remove("active");
});