var screen = document.querySelector("#screen");
var items = document.getElementById('inner-container');
//Here Array.from return the objects in the form an array
var nums = Array.from(document.getElementsByClassName('grid-item'));
//console.log(nums);

nums.map( nums => {
    nums.addEventListener('click',function(event){

        //using switch case
        switch(event.target.innerText){
            case 'AC':
                screen.innerText = '';
                break;
            case '<':
                screen.innerText = screen.innerText.slice(0,-1);
                break;
                
            case '=':
                try {
                    //eval function to evaluate all the event which happen on the screen of calci
                    screen.innerText = eval(screen.innerText);
                    
                } catch {
                    screen.innerText = 'Error!';
                }
                break;


            default:
                screen.innerText += event.target.innerText;
        }
    });
});





