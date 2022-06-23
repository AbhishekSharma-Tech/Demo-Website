// JQuery smooth scroll


$(document).ready(function(){
    
    $("a").on('click', function(event){

        if(this.hash !== ""){
            // if href="" is not empty come inside this condition
            // In programming ! means NOT and == means equals 
            // IF href is NOT EQUALS to ""

            event.preventDefault();

            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }

    });
});