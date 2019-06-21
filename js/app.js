var TIMEOUT = 6000;


var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');

  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;

  $radios
    .attr('checked', false);


  if (currentIndex >= radiosLength - 1) {

    $radios
      .first()
      .attr('checked', true);

  } else {

    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);

  }

}
document.getElementById("myspan").textContent = localStorage.cart;
function saveCart(a){
  var white = document.getElementById("white");
  var blue = document.getElementById("blue");
  var brown = document.getElementById("brown");
  console.log(a);
  if(white.checked === true){
    console.log(a+"white");
  }
  else if( blue.checked === true){
    console.log(a+"blue");

  }
  else if( brown.checked === true){
    console.log(a+"brown");
  }
  if(typeof(Storage) !== "undefined") {
    if (localStorage.cart) {
      if (localStorage.cart > 10){
        localStorage.cart = 0;
      }
      localStorage.cart = Number(localStorage.cart)+1;
    } else {
      localStorage.cart = 1;
    }
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
  displayCart(localStorage.cart);
}
function displayCart(cart){
  document.getElementById("myspan").textContent = cart;
}
$(document).ready(function() {

  $('.image-choose button').on('click', function() {
      var white = document.getElementById("white");
      var blue = document.getElementById("blue");
      var brown = document.getElementById("brown");
      var sneaker = $(this).attr('data-image');

      var contentPage = $('.color-choose').attr('value');
      let arrayName = [];
      if (contentPage === '700'){
        arrayName.push('static');
        arrayName.push('og');
        arrayName.push('geode');
      }
      else if (contentPage === '350v2'){
        arrayName.push('350_white')
        arrayName.push('350_black')
        arrayName.push('350_true')
      }
      if(white.checked === true){
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + sneaker+'_'+arrayName[0] + ']').addClass('active');
        $(this).addClass('active');
      }
      else if( blue.checked === true){
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + sneaker+'_'+arrayName[1] + ']').addClass('active');
        $(this).addClass('active');
      }
      else if( brown.checked === true){
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + sneaker+'_'+arrayName[2] + ']').addClass('active');
        $(this).addClass('active');
      }
      // var img = document.getElementById('img1');
      // img.style.visibility = 'visible';
      // $('.active').removeClass('active');
      // $('.left-column img[data-image = ' + sneaker + ']').addClass('active');
      // $(this).addClass('active');
  });

});
$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var color = $(this).attr('value');
      var inputA = document.getElementById("white");
      console.log(inputA.checked == true);
      var contentPage = $('.color-choose').attr('value');
      let arrayName = [];
      if (contentPage === '700'){
        arrayName.push('static');
        arrayName.push('og');
        arrayName.push('geode');
      }
      else if (contentPage === '350v2'){
        arrayName.push('350_white')
        arrayName.push('350_black')
        arrayName.push('350_true')
      }
      console.log(contentPage);
      if(color == 'white'){
        // document.body.style.backgroundColor ="#FFFFFF";
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' +'side_'+arrayName[0] + ']').addClass('active');
        $(this).addClass('active');
      }
      else if (color == 'blue'){
        // document.body.style.backgroundColor ="#66ccff";
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' +'side_'+arrayName[1] + ']').addClass('active');
        $(this).addClass('active');
      }
      else {
        // document.body.style.backgroundColor ="#e69900";
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' +'side_'+arrayName[2] + ']').addClass('active');
        $(this).addClass('active');
      }
  });

});

function saveForm(){
  var form = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }
  localStorage.form = JSON.stringify(form);
}
// function onChange(value){

// }
