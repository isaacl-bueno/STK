$('.top a[href^="#"]').on('click', function(e){  
    e.preventDefault();
    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;
        $('html, body'). animate({
          scrollTop: targetOffset
        }, 1000);
    });

$('#transporte a[href^="#"]').on('click', function(e){  
    e.preventDefault();
    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;
         $('html, body'). animate({
            scrollTop: targetOffset
        }, 1000);
    });
        
 $('#armazenagem a[href^="#"]').on('click', function(e){  
    e.preventDefault();
    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;
         $('html, body'). animate({
            scrollTop: targetOffset
        }, 1000);
    });
                
$('#armazenagem a[href^="#"]').on('click', function(e){  
    e.preventDefault();
    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;
         $('html, body'). animate({
            scrollTop: targetOffset
        }, 1000);
    })
    $('#botoes a[href^="#"]').on('click', function(e){  
        e.preventDefault();
        var id = $(this).attr('href');
        var targetOffset = $(id).offset().top;
             $('html, body'). animate({
                scrollTop: targetOffset
            }, 1000);
        })