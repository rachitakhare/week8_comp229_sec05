//IIFE - Immediately Invoked function Expression 

(function(){
     function Start(){

        console.log("Our express App started.....");
        let deletedButtons = document.querySelectorAll('.btn-danger');
         for(button of deletedButtons){
            button.addEventListener('click',(event)=>{
               if(!confirm("Do you want to continue?"))
               {
                     event.preventDefault();
                     window.location.assign('/book-list');


               }



            });


         }

     }

     window.addEventListener("load",Start);

})();