// Mobilecontainer code
const button = document.getElementById('btn-mobile-unactive');
const button1 =  document.getElementById('btn-mobile-active');
const mobileContainer = document.querySelector('.mobile-container');
const desktopContainer = document.querySelector('.desktop-container');
const avatar = document.querySelector('.avatar');
button.addEventListener('click',function(){
    if(window.innerWidth<=600){
        if (mobileContainer.style.display="none"){
            avatar.style.display="none";
            mobileContainer.style.display="flex"
        }
    }else{
        if(desktopContainer.style.display==="none"){
            desktopContainer.style.display="flex";
        }else{
            desktopContainer.style.display="none";
        }
    }
})
button1.addEventListener('click',()=>{
    if(window.innerWidth<=600){
        if (mobileContainer.style.display==="flex"){
            mobileContainer.style.display="none";
            avatar.style.display="flex";
        }
    }
})