var page = function($hash) {
    $('#content-area').load('/content_pages/' + $hash);
        $('html, body').animate({
        scrollTop: $("#content-area").offset().top
    }, 1000);
};


$(document).ready(function(){
    
    //New Student Orientation Page
    
    
    //content pages
    
    $('#getting_started').click(function(){
        page ("getting_started.html")
    });
    
    $('#housing-resources').click(function(){
        page ("housing_resources.html")
    });
    
    $('#policies').click(function(){
        page ("policies.html")
    });
    
    $('#professional-organizations').click(function(){
        page ("professional_organizations.html")
    });
    
    $('#suggested-reading').click(function(){
        page ("suggested_reading.html")
    });
    
    $('#campus-resources').click(function(){
        page ("campus_resources.html")
    });
    
    $('#transportation').click(function(){
        page ("transportation.html")
    });
                           
});