$(function() {
    
    $.fn.showHide=function (){
        $(`input`).each(function(index,element){
            element.childrenStatus=true;
            console.log(element.value)
            $(this).on('click',ev=>{
                    if(element.childrenStatus){
                    element.childrenStatus=false;
                    $(this).siblings().css('display','none')//.children('visibility','hidden')
                   
                    
                }else{
                    element.childrenStatus=true
                    $(this).siblings().css('display','block')//.children('visibility','visible')
                    $(this).siblings('li').css('display','list-item')
                }
            })
            element.addEventListener('click',ev=>{


            })
        })
    }
    $(`.hide-show`).showHide()
}(jQuery))