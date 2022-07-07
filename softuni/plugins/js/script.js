$(function() {
    
    $.fn.showHide=function (){
        $(`input`).each(function(index,element){
            element.childrenStatus=true;
            console.log(element.value)
            $(this).on('click',ev=>{
                    if(element.childrenStatus){
                    element.childrenStatus=false;
                    $(this).next().css('visibility','hidden')
                    
                }else{
                    element.childrenStatus=true
                    $(this).next().css('visibility','visible')
                }
            })
            element.addEventListener('click',ev=>{


            })
        })
    }
    $(`.hide-show`).showHide()
}(jQuery))