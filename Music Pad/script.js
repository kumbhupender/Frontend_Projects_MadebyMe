//Add keydown event on window


//create remove class function
function removeTransition(e){
    //taking transition property
    if(e.propertyName !== 'transform'){
        return;
    }
    e.target.classList.remove('playing');
}





window.addEventListener('keydown',function(e){
    // console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//    console.log(key);

    //there is some time take after keypress to get rid over this
    audio.currentTime = 0;

    //to adding class at runtime for transition effect and transform effect
    key.classList.add('playing');
    audio.play();
});



//Playing class is stuck at one place so we need to remove it after transition time form keys class

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
