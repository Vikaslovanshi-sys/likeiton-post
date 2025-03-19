 let box = document.getElementById("mainbox")

let img = document.getElementById("mainimg")




const showimg = () =>{
 
     setTimeout(() => {
        img.style.display = "block"

     }, 1550);
}

box.addEventListener("dblclick",showimg)
    