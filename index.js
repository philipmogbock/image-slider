
const imgContainerEl = document.querySelector(".img-container");
const prevIconEl = document.querySelector(".prev");
const nextIconEl = document.querySelector(".next");
let currentImg=1;
let timeout;

// create list of images 
for (let index = 0; index < 10; index++) {
    let newImg=document.createElement("img");
    newImg.classList.add("img");
    newImg.src=`https://picsum.photos/500/300?random=${(index+1)}`;
    imgContainerEl.appendChild(newImg);
    
}

//select all images
const allImgs = document.querySelectorAll(".img");


// add event listener to slider button
nextIconEl.addEventListener("click",()=>{
    currentImg++;
    // reset timer everytime button is clicked     
    clearTimeout(timeout);
    // update image 
    updadateImg();
})


prevIconEl.addEventListener("click", ()=>{
    currentImg--;
    // reset timer everytime button is clicked 
    clearTimeout(timeout);
    // update image    
    updadateImg();
})

//call update image function  to start
updadateImg();


function updadateImg(){
    // clicking forward on last image brings you back to first image 
    if(currentImg>allImgs.length){
        currentImg=1;
    }

    // clicking back doesnt do anything when on the first image  
    if(currentImg<1){
        currentImg=allImgs.length;
    }

    // translate image to starting spot along x axis to give the sensation of a sliding pic 
    imgContainerEl.style.transform = `translateX(-${(currentImg-1)*500}px)`;
    
    // automatically go to next pic every 3 seconds 
    timeout=setTimeout(()=>{
        currentImg++;
        updadateImg();

    },3000)
    

}



