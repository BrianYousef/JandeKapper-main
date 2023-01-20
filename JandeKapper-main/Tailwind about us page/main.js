$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
      $(window).on('scroll load',function(){
  
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
  
        if($(window).scrollTop() > 30){
          $('header').addClass('header-active');
        }else{
          $('header').removeClass('header-active');
        }
  
      });
  
  });

  async function test(){
  const res = await fetch('localhost:8000/');

const json = await res.json();
console.log(json)
await test()
  }
