"use strict"
document.body.style.backgroundImage = "url('hero.jpeg')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "1300px 800px";



const openModelButtons = document.getElementById("open");
const closeModelButtons = document.getElementById("cross"); 


openModelButtons.addEventListener('click', openBtn);
function openBtn()
{
    const model = document.getElementById("model-content");

    openModel(model);
}


closeModelButtons.addEventListener("click", closeBtn)
function closeBtn()
{
    const model = document.getElementById("model-content");
    document.body.classList.remove("act")
    closeModel(model);
}


function openModel(model)
{
    console.log(model);
    if(model == null)
    return
    
    model.classList.add('active');
   
   
}
function closeModel(model)
{
    if(model == null)
    return
    
    model.classList.remove('active');
}