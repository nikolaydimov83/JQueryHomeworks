$(function() {
    let zIndex=-1;
    let maxZIndex=-1;
    $('.slider').each(function(index,element){
        element.id=Number(zIndex+index);
        element.style.zIndex=Number(zIndex+index);
        if (Number(element.id)>maxZIndex){
            maxZIndex=Number(element.id);
        }
        
    })
    function changeElements(){
        $('.slider').each(function(index,element){
            if(element.style.zIndex<maxZIndex){
                $('#'+element.id).hide() 
                element.style.zIndex++  
            }else{
                $('#'+element.id).show()
                console.log($(element.id))
                console.log(element.id);
                console.log(element.style.zIndex);
                element.style.zIndex=-1;
            }

            
        })
    }
    setInterval(changeElements, 5000);
})