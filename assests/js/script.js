$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Asha Shah's Portfolio";
        $("#favicon").attr("href","./assets/images/images/favicon.png");
    }
    else {
        document.title = "Come Back To Portfolio";
        
    }
});


// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["Master's Student", "Code Enthusiast", "Automation | Manual Tester","Full-Stack Web development", "Curious & Persistent"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- tilt js effect ends -->


// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

//Start of Tawk.to Script-->
//var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//(function(){
//var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//s1.async=true;
//s1.src='https://embed.tawk.to/67a85f0e825083258e12620e/1ijkr6k77';
//s1.charset='UTF-8';
//s1.setAttribute('crossorigin','*');
//s0.parentNode.insertBefore(s1,s0);
//})();
//End of Tawk.to Script-->



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 100}); 
srtop.reveal('.home .content p',{delay: 100}); 
srtop.reveal('.home .content .btn',{delay: 100}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 
srtop.reveal('.home .dev',{interval: 600}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 100});
srtop.reveal('.about .content .tag',{delay: 100}); 
srtop.reveal('.about .content p',{delay: 100}); 
srtop.reveal('.about .content .box-container',{delay: 100}); 
srtop.reveal('.about .content .resumebtn',{delay: 100}); 


/* SCROLL SKILLS */
srtop.reveal('.skills .container',{interval: 100}); 
srtop.reveal('.skills .container .bar',{delay: 100}); 

/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 100}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 100}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 100});
srtop.reveal('.experience .timeline .container',{interval: 100}); 

/* SCROLL CERTIFICATIONS */
srtop.reveal('.certifications .box',{interval: 100}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 100});
srtop.reveal('.contact .container .form-group',{delay: 100});
