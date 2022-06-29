$(function() {
//$("p").css("background-color","rgba(180,180,30,0.9)");
//$(".red-box").css("background-color","rgba(180,180,30,0.9)");
//$("#list").css("background-color","rgba(180,180,30,0.9)");
//$("input[type='text']").css("background-color","rgba(180,180,30,0.9)");
//$("h2,p,input").css("background-color","rgba(180,180,30,0.9)");
//$(".new-trial p:last").css("background-color","rgba(180,180,30,0.9)");
//$("#list li ul li:even").css("background-color","rgba(180,180,30,0.9)");
//$("#list").find("li ul li").css("background-color","rgba(180,180,30,0.9)");
$(':header').next().css("background-color","rgba(180,180,180,0.9)");
$('form').children("input:password").css("background-color","rgba(180,180,30,0.9)");

function addElement(elementRecieving,typeOfElement,appendOrPrepend){
        let elementToAdd=document.createElement(typeOfElement);

        if(appendOrPrepend){
            $(elementRecieving).append(elementToAdd);
        }else{
           
        }
        
    }
let reciever=$("#list")
addElement(reciever,'p',true);

console.log();
function changeColorByClass(){
$('.'+$("input[type='text']")[0].value).css("background-color",$("input[type='color']")[0].value)
}
//changeColorByClass();
$('#button').on('click',function() {
    $('.'+$("input[type='text']")[0].value).css("background-color",$("input[type='color']")[0].value)
    })
//$("#button").on('click',changeColorByClass())
});
