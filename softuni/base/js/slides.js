$(function() {
    let zIndex=0;
    let maxZIndex=-1;
    let a;
    $('.slider').each(function(index,element){
        element.id=Number(zIndex+index);
        //element.style.zIndex=Number(zIndex+index);
        /*if (Number(element.id)>maxZIndex){
            maxZIndex=Number(element.id);
        }*/
        
    })
    let sliderLength=$('.slider').length;
    let i=0;
    $('.left').on('click',function(){
        if(i!==0){
            i--
        }else{
            i=sliderLength-1;
        }   
        clearTimeout(a);
        changeElements1();
        })
        $('.right').on('click',function(){
            if(i<sliderLength-1){
                i++
            }else{
                i=0;
            }   
            clearTimeout(a);
            changeElements1();
            })


  
    function changeElements1(){
        $('.slider').each(function(indexEach,element){
            if(indexEach===i){
                $('#'+indexEach).show();
            }else{
                $('#'+indexEach).hide();
            }
        })
        
        a=setTimeout(function(){
            $('.slider').each(function(indexEach,element){
                if(indexEach===i){
                    $('#'+indexEach).show();
                }else{
                    $('#'+indexEach).hide();
                }
            })
            i++;
            if (i<sliderLength){

                changeElements1();
            }else{
                i=0;
                changeElements1();
            }
        },5000)

    }

   changeElements1()
})