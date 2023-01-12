//event//
document.querySelector("body").addEventListener("mousemove", canan);



function canan(e) {
    document.querySelector(".container1").style.backgroundColor = 
    `rgb(${e.screenX % 255}, ${e.screenY % 255}, ${(e.screenX + e.screenY) % 255})`

    document.querySelector(".container2").style.backgroundColor = 
    `rgb(${e.screenX % 200}, ${e.screenY % 200}, ${(e.screenX + e.screenY) % 200})`

    document.querySelector(".container3").style.backgroundColor = 
    `rgb(${e.screenX % 150}, ${e.screenY % 150}, ${(e.screenX + e.screenY) % 150})`

    document.querySelector(".container4").style.backgroundColor = 
    `rgb(${e.screenX % 100}, ${e.screenY % 100}, ${(e.screenX + e.screenY) % 100})`
    
    document.querySelector("body").style.backgroundColor = 
    `rgb(${e.screenX % 50}, ${e.screenY % 50}, ${(e.screenX + e.screenY) % 50})`
}
