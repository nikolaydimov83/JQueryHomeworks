$(function() {
    $.fn.messageBox=function(){
        return {
            whoCalled:this,
            success:success,
            error:error

        }
        function success(message){
            $(this.whoCalled).text(message).fadeIn(1000).hide(3000);
        }
        function error(message){
            $(this.whoCalled).text(message).fadeIn(1000).hide(3000);
        }    
    }


}(jQuery))