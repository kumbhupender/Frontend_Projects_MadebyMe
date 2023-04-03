var allAnchorTags = document.querySelectorAll('.navmenu a');

//we have to fetch the single anchor tag
for(var i = 0; i < allAnchorTags.length; i++){
    allAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();

    //fetching section via name
    var targetSectionId = this.textContent.trim().toLowerCase();

    //now fetching anchor tag via id but id is same as the section name 
    var targetSection = document.getElementById(targetSectionId);
    console.log(targetSection);
    
    //console.log(targetCoordinates);
    var intervalScroll = setInterval(function(){
        var targetCoordinates = targetSection.getBoundingClientRect();
        //console.log(targetCoordinates);
        if(targetCoordinates.top <= 0){
            clearInterval(intervalScroll);
            return;
        }
        window.scrollBy(0,20);
    },20);

    });
}

