let sliderImages = [
    'chichen-itza.webp',
    'christ-the-redeemer.webp',
    'colosseum.webp',
    'great-wall-china.webp',
    'machu-picchu.webp',
    'petra.webp',
    'taj-mahal.webp',
];
let sliderElement = document.getElementById("jumbotron-with-slider");
let sliderIndex = 0;

initSlider();

function initSlider(){
    drawIndicator();
    setInterval(function(){
        drawSlider();
        changeIndicator();
        sliderIndex = (sliderIndex >= sliderImages.length - 1) ? 0 : sliderIndex+1;
        console.log(sliderIndex);
    }, 1500);
}

function drawIndicator(){
    let sliderIndicator = document.getElementById("slider-indicator");
    for(let i = 0; i < sliderImages.length; i++){
        let indicator = document.createElement("div");
        indicator.setAttribute("class", "slider-indicator-item");
        sliderIndicator.appendChild(indicator);
    }
}

function drawSlider(){
    sliderElement.style.backgroundSize = "cover";
    sliderElement.style.backgroundImage = "url('./assets/images/"+sliderImages[sliderIndex]+"')";
}

function changeIndicator(){
    // remove active element
    let indicatorItems = document.querySelectorAll(".slider-indicator-item");
    indicatorItems.forEach((element, index) => {
        if(index == sliderIndex){
            element.classList.add("active");
        }else{
            element.classList.remove("active");
        }
    });
}