$(document).ready(function (e) {

    // accordion functionality 
    $('.accordion-menu p ').on( 'click', function(e){
      e.preventDefault();
        var currentSrc = $(this.nextElementSibling).addClass('open').attr('src');
        $(this).parent().next(".accordion-content").slideToggle();
        $(this).parent().parent().closest('li').siblings().find('.accordion-content').slideUp();
        
        
        let rest = $(this).children()
        console.log(rest)
        
        if (currentSrc == "./assets/plus-circle-line.svg") {
          $('.img-class.open').attr("src", "/assets/minus-circle-line.svg");
        }else if( currentSrc == "/assets/minus-circle-line.svg"){
          $('.img-class.open').removeClass('open').attr("src", "/assets/plus-circle-line.svg");
        }

        
        
        var test = $('.img-class')

        console.log(test)

      }).one()
}, 0);


$(function () {
    $(".tabs li").click(function (g) {
        var tab = $(this).closest(".tab"),
            index = $(this).closest("li").index();
            tab.find(" .tabs li span").removeClass("current")
            $(this).children().closest(".tabs li span").addClass("current")

        tab
            .find(".tab_content")
            .find("div.tabs_item")
            .not("div.tabs_item:eq(" + index + ")")
            .hide();
        tab
            .find(".tab_content")
            .find("div.tabs_item:eq(" + index + ")")
            .fadeIn();
        g.preventDefault();
    });
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n < 1){
        console.log(n)
        n = slides.length + 3
        console.log(n)
    }
    if (n > slides.length){
        console.log(n)
        n = 1;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if(n){
        slides[n-1].style.display = "block";  
        dots[n-1].className += " active";
    }
  }

  function currentSlide(n) {
    showSlides(n = n);
    console.log(n)
  }

  $(document).ready(function() {


  $('a[id="prev"]').on('click', function(){
    let i = $(this).parent().find('span.active');
    let index = i[0].id;
    if( index == 1){
      showSlides(index);
      index++;
    }else if(index > 1){
      index--;
      showSlides(index);
    }
 
    })
    $('a[id="next"]').on('click', function(){

      let i = $(this).parent().find('span.active');
      let index = i[0].id;

      if( index == 1){
        index++;
        showSlides(index);

      }else if(index < $(this).parent().find('span').length)
      {
        index++;

        showSlides(index);
      }
      })

  });

  $(document).ready(function() {
    let slideIndex = 1;
    showSlides(slideIndex); 
});

