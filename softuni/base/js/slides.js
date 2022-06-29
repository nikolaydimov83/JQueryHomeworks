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
    $('.left').on('click',function(){
        $('.slider').each(function(index,element){
            if(element.style.zIndex===maxZIndex){
                console.log('ID!!!'+element.id)
                console.log('Before'+element.style.zIndex)
                element.style.zIndex=-1;
                console.log('After'+element.style.zIndex)
            }else{
                console.log('ID'+element.id)
                console.log('Before'+element.style.zIndex)
                element.style.zIndex++;
                console.log('After'+element.style.zIndex)
            }
            
        })
        changeElements()
    })
    function changeElements(){
        $('.slider').each(function(index,element){
            if(element.style.zIndex>-1){
                $('#'+element.id).hide();
                element.style.zIndex--  
            }else{
                $('#'+element.id).show();
                element.style.zIndex=maxZIndex;
            }

            
        })
    }

    setInterval(changeElements, 5000);

})