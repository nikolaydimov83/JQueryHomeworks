$(function() {
    
    $.fn.showHide=function (){
        $(`.hide-show`).each(function(index,element){
            element.childrenStatus=false;
            $(this).on('click',ev=>{
                    if(!element.childrenStatus){
                    element.childrenStatus=true;
                    $(this).children().ccs('display:list-item')
                }else{
                    element.childrenStatus=false
                    $(this).children().ccs('display:none')
                }
            })
            element.addEventListener('click',ev=>{


            })
        })
    }
    $(`.hide-show`).showHide()
}(jQuery))