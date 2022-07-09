$(function() {
    $.fn.messageBox=function(){
        return {
            success:success,
            error:error

        }
        function success(message){
            $(this).text(message).fadeIn(1000).hide(3000);
        }
        function error(message){
            $(this).text(message).fadeIn(1000).hide(3000);
        }    
    }


}(jQuery))