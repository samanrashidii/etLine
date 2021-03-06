$(document).ready(function(){

// Site Types

// Cloud Blue
var siteType2 = function(){
	$('body').attr('id', 'siteType2');
}

// Light Green
var siteType3 = function(){
	$('body').attr('id', 'siteType3');
}

// Orange
var siteType4 = function(){
	$('body').attr('id', 'siteType4');
}

// Red - Black
var siteType5 = function(){
	$('body').attr('id', 'siteType5');
}

// Green
var siteType6 = function(){
	$('body').attr('id', 'siteType6');
}

// Purple
var siteType7 = function(){
	$('body').attr('id', 'siteType7');
}

// Dark Blue - Brown
var siteType8 = function(){
	$('body').attr('id', 'siteType8');
}

siteType5(); 

// Responsive Start

if($(window).width() < 1000){

  // Megamenu
  $('.megamenu').parent().append('<span class="megamenu-bttn"></span>');
  $(document).on('click', '.megamenu-bttn', function(){
    $(this).parents('li').find('.megamenu').toggle();
  });

  // Filter Products

  if($('.product-filters').length > 0){
    $('.body').append('<a class="filter-bttn" href="javsacript:void(0)">فیلتر محصولات</a>');
  }
  $(document).on('click', 'a.filter-bttn', function(){
    $('.product-filters').addClass('active');
    $('body').addClass('hidden-overflow');
  });

  $('.product-filters a.close').on('click', function(){
    $('.product-filters').removeClass('active');
    $('body').removeClass('hidden-overflow');
  });
}

// Responsive End  

// Search Overlay

$('.search input').on('focus', function(){
  $(this).parents('.search').addClass('active');
	$('.search-overlay').addClass('active');
});

$('.search-overlay').on('click', function(){
   $(this).removeClass('active');
	$('.search').removeClass('active');
});

// Login - Register

$('.register-bttn').on('click', function(){
	$('.register-box').fadeIn().siblings().hide();
});

$('.login-bttn').on('click', function(){
	$('.login-box').fadeIn().siblings().hide();
});

$('.forgot-password-bttn').on('click', function(){
	$('.forgot-password-box').fadeIn().siblings().hide();
});

// Ads Carousel

$('.ads.carousel').owlCarousel({
  autoplay:true,
  loop:true,
  margin:10,
  nav:false,
  items:1
});

// Proucts Carousel

$('.similiar-products').owlCarousel({
  autoWidth:true,
  autoplay:true,
  autoplayTimeout: 5000,
  autoplaySpeed: 700,
  loop:true,
  center: true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

// Related Blogs

$('.related-blogs').owlCarousel({
  autoWidth:true,
  autoplay:true,
  autoplayTimeout: 4000,
  items:4,
  autoplaySpeed: 500,
  center:true,
  loop:true,
  margin:14,
  nav:true,
  responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// Filter Boxes

$('.filter-title').on('click', function(){
  $(this).toggleClass('active').siblings('.filter-inner-box').slideToggle();
});

// Range Slider

$( function() {
  $('.range-slider').slider({
    range: true,
    min: 10000,
    step: 50000,
    max: 10000000,
    values: [ 10000, 3200000 ],
    slide: function( event, ui ) {
      var startPrice = ui.values[0] + ' ' + 'تومان';
      var endPrice = ui.values[1] + ' ' + 'تومان';
      $('.ui-slider-handle:nth-of-type(1)').attr('start-price', startPrice);
      $('.ui-slider-handle:nth-of-type(2)').attr('end-price', endPrice);
      $('#min_price').val(startPrice);
      $('#max_price').val(endPrice);
    }
  });
  var firstValue = $('.range-slider').slider( "values", 0 ) + ' ' + 'تومان';
  var lastValue = $('.range-slider').slider( "values", 1 ) + ' ' + 'تومان';
  $('.ui-slider-handle:nth-of-type(1)').attr('start-price', firstValue);
  $('.ui-slider-handle:nth-of-type(2)').attr('end-price', lastValue);
  $('#min_price').val(firstValue);
  $('#max_price').val(lastValue);
});

// Quantity

$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this);
  var inputNum = spinner.find('input');
  var btnUp = spinner.find('.quantity-up');
  var btnDown = spinner.find('.quantity-down');
  var inputMin = inputNum.attr('min');
  var inputMax = inputNum.attr('max');

  inputNum.on('blur', function(){
    if($(this).val().length == 0){
      $(this).val('1');
    }
  });

  btnUp.on('click', function() {
    var oldValue = parseFloat(inputNum.val());
    if (oldValue >= inputMax) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    inputNum.val(newVal);
    inputNum.trigger("change");
  });

  btnDown.on('click', function() {
    var oldValue = parseFloat(inputNum.val());
    if (oldValue <= inputMin) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    inputNum.val(newVal);
    inputNum.trigger("change");
  });

});

// Select Date

$('#select_date').persianDatepicker({
  format: 'YYYY/MM/DD',
  initialValue: false,
  observer: false,
  autoClose: true,
  navigator: {scroll:false}
});

// Star Rating

$('.your-rating span').on('mouseenter', function(){
  if(!$(this).parents('.your-rating').hasClass('selected')){
    $(this).prevAll().addClass('active');
    $(this).addClass('active').nextAll().removeClass('active');
  }
}).on('click', function(){
  $(this).addClass('selected').nextAll().removeClass('selected');
  $(this).prevAll().addClass('selected');
  $('.your_rating_number').val($('.your-rating span.selected').index(this)+1);
});

$('.your-rating').on('mouseleave', function(){
  $(this).children('span').removeClass('active');
});

// Color Pallet & Size Options

$('.color-pallet input, .size-options input').on('change', function(){
  $(this).addClass('active').siblings().removeClass('active');
});

// Comment Filtering

$('.comment-filters a').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
});

// Comment Like / Dislike

$('.cbutton').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  } else{
    $(this).addClass('active').siblings().removeClass('active');
  }
});

// Product Tabs

$('.product-tabs > ul li a').on('click', function(e){
  var tabID = $(this).attr('href');
  e.preventDefault();
  $(this).parent().addClass('active').siblings().removeClass('active');
  $(tabID).show().siblings().hide();
});

// Question & Answer

$('a.reply').on('click', function(){
  $(this).parents('.comment-box').next().find('.answer-to-question').slideToggle().siblings().hide();
});

$('a.view-answers').on('click', function(){
  $(this).parents('.comment-box').next().find('.other-answers').slideToggle().siblings().hide();
});

// Timing Table

$('.timing-table td.available label').on('click', function(){
  $(this).parents('.timing-table').find('td.active').removeClass('active');
  $(this).parents('td').addClass('active')
});

// Shipping

$('.shipping-box').on('click', function(){
  $(this).addClass('active').find('input').prop('checked', true).parents('.half-box').siblings().find('.shipping-box').removeClass('active').find('input').prop('checked', false);
});

// Address Book

$('.address-book a.checkmark').on('click', function(){
  $(this).parents('.address-box').find('input').prop('checked', true).parents('li').addClass('active').siblings().removeClass('active').find('input').prop('checked', false);
});

// Post Share

$('.post-share div').on('click', function(){
  $(this).toggleClass('active');
});

if($('form').hasClass('insurance_form')){

// Upload Image 1

var imageLoader = document.getElementById('image-input-1');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        $('#upload-image-1 img').attr('src',event.target.result);
        $('#upload-image-1').addClass('image-added');
        $('#upload-image-1 span').hide();
    }
    reader.readAsDataURL(e.target.files[0]);
    
}

var dropbox;
dropbox = document.getElementById('upload-image-1');
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  //you can check e's properties
  var dt = e.dataTransfer;
  var files = dt.files;
  
  //this code line fires your 'handleImage' function (imageLoader change event)
  imageLoader.files = files;
}

// Upload Image 2

var imageLoader2 = document.getElementById('image-input-2');
imageLoader2.addEventListener('change', handleImage2, false);

function handleImage2(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        $('#upload-image-2 img').attr('src',event.target.result);
        $('#upload-image-2').addClass('image-added');
        $('#upload-image-2 span').hide();
    }
    reader.readAsDataURL(e.target.files[0]);
    
}

var dropbox;
dropbox = document.getElementById('upload-image-2');
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  //you can check e's properties
  var dt = e.dataTransfer;
  var files = dt.files;
  
  //this code line fires your 'handleImage' function (imageLoader change event)
  imageLoader2.files = files;
}

// Upload Image 3

var imageLoader2 = document.getElementById('image-input-3');
imageLoader2.addEventListener('change', handleImage2, false);

function handleImage2(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        $('#upload-image-3 img').attr('src',event.target.result);
        $('#upload-image-3').addClass('image-added');
        $('#upload-image-3 span').hide();
    }
    reader.readAsDataURL(e.target.files[0]);
    
}

var dropbox;
dropbox = document.getElementById('upload-image-3');
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  //you can check e's properties
  var dt = e.dataTransfer;
  var files = dt.files;
  
  //this code line fires your 'handleImage' function (imageLoader change event)
  imageLoader2.files = files;
}

$('.upload-image a.remove').on('click', function(){
  var getThisID = $(this).siblings('input').attr('id');
  $(this).siblings('img').attr('src', '');
  $('#'+getThisID).val('');
  $(this).parents('.upload-image').removeClass('image-added');
  $(this).siblings('span').show();
});

}

// Form Validations

$('.login_form').validate({
  rules: {
    login_username: {
      required: true,
      minlength: 5
    },
    login_password: {
      required: true,
      minlength: 8
    }
  },
  messages: {
    login_username: "لطفا نام کاربری و یا آدرس ایمیل خود را وارد کنید",
    login_password: "لطفا کلمه عبور خود را وارد کنید",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.register_form').validate({
  rules: {
    register_username: {
      required: true,
      minlength: 5
    },
    register_email: {
      required: true,
      minlength: 5,
      email: true
    },
    register_password: {
      required: true,
      minlength: 8
    },
    register_password_confirm: {
      required: true,
      minlength: 8,
      equalTo : "#register_password"
    }
  },
  messages: {
    register_username: "لطفا نام کاربری خود را وارد کنید",
    register_email: "لطفا آدرس ایمیل خود را وارد کنید",
    register_password: "لطفا کلمه عبور خود را وارد کنید",
    register_password_confirm: "کلمه عبور با فیلد بالا مطابقت ندارد",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.forgot_password_form').validate({
  rules: {
    forgot_password_email_address: {
      required: true,
      minlength: 5,
      email: true
    }
  },
  messages: {
    forgot_password_email_address: "لطفا آدرس ایمیل خود را وارد کنید",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.newsletter_form').validate({
  rules: {
    newsletter_email_address: {
      required: true,
      minlength: 5,
      email:true
    }
  },
  messages: {
    newsletter_email_address: "لطفا آدرس ایمیل خود را وارد کنید",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.write_review_form').validate({
  rules: {
    write_review: {
      required: true,
      minlength: 50,
    }
  },
  messages: {
    write_review: "حداقل کاراکتر برای ارسال نظر باید ۵۰ حرف باشد",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

$('.contact_form').validate({
  rules: {
    contact_name: {
      required: true,
      minlength: 5
    },
    contact_email: {
      required: true,
      minlength: 5,
      email: true
    },
    contact_message: {
      required: true,
      minlength: 10
    }
  },
  messages: {
    contact_name: "لطفا نام و نام خانوادگی خود را وارد کنید",
    contact_email: "لطفا آدرس ایمیل خود را وارد کنید",
    contact_message: "لطفا متن پیغام خود را وارد کنید",
  },
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: " ",
        data: $(form).serialize(),
        success: function () {
            
        }
      });
      return false;
  }
});

/* Instant Buying */

$('.products-list-button').on('click', function(){
  $('.products-list').toggleClass('active');
});

$('.products-listing.different-type .section').each(function(){
	var productName = $(this).find('h6 a').text();
	$(this).find('.product-box').attr('product-name', productName);
});

var productsQuantity = 0;
var selectedProducts = [];
var totalPrice = 0;

function changeQuantity(n, q, p) {
  for (var i in selectedProducts) {
    if(selectedProducts[i].name == n) {
      selectedProducts[i].quantity = q;
      selectedProducts[i].price = p;
      break;
    }
  }
}

function removeItem(value){
  for (var i in selectedProducts) {
    if(selectedProducts[i].name == value) {
        selectedProducts.splice(i,1)
      break;
    }
  }
}

$('.add-product').on('click', function(){
  $('.products-list').addClass('animated');
  setTimeout(() => {
    $('.products-list').removeClass('animated');
  }, 400);
  if(productsQuantity < 1){
    $('.products-list').addClass('active');
  }
  productsQuantity ++;
	var itemName = $(this).parents('.product-box').attr('product-name');
  var itemPrice = Number($(this).siblings('.item-details').find('.price-box strong:not(.off-price) span').text().replace(/,/g, ''));
  totalPrice += itemPrice;
  $('.total-price span').html(totalPrice);
	if($(this).parents('.product-box').hasClass('selected')){
		var itemQuantity = Number($('tr[itemname="'+itemName+'"] span').text());
		itemQuantity ++;
		itemNewPrice = itemPrice * itemQuantity;
		$('tr[itemname="'+itemName+'"] span').html(itemQuantity);
    $('tr[itemname="'+itemName+'"] strong').html(itemNewPrice);
    changeQuantity(itemName,itemQuantity,itemNewPrice);
	} else{
		var menuItem = '<tr itemname="'+itemName+'">\
							<td><b>'+itemName+'</b></td>\
							<td>x<span>1</span></td>\
							<td><strong>'+itemPrice+'</strong> تومان</td>\
						</tr>';
		$('.products-list table tbody').append(menuItem);
		$(this).siblings('.remove-product').show();
    $(this).parents('.product-box').addClass('selected');
    selectedProducts.push({'name': itemName, 'quantity': 1, 'price': itemPrice});
  }
  $('.products-list-button span').html(productsQuantity);
  $('input.selected_products').val(selectedProducts);
});

$('.remove-product').on('click', function(){
  $('.products-list').addClass('reverse-animated');
  setTimeout(() => {
    $('.products-list').removeClass('reverse-animated');
  }, 400);
  productsQuantity --;
  if(productsQuantity == 0){
    $('.products-list').removeClass('active');
  }
	var itemName = $(this).parents('.product-box').attr('product-name');
	var itemPrice = Number($(this).siblings('.item-details').find('.price-box strong:not(.off-price) span').text().replace(/,/g, ''));
  var itemQuantity = Number($('tr[itemname="'+itemName+'"] span').text());
  totalPrice -= itemPrice;
  $('.total-price span').html(totalPrice);
	itemQuantity --;
	itemNewPrice = itemPrice * itemQuantity;
	$('tr[itemname="'+itemName+'"] span').html(itemQuantity);
  $('tr[itemname="'+itemName+'"] strong').html(itemNewPrice);
  changeQuantity(itemName, itemQuantity, itemNewPrice);
	if(itemQuantity == 0){
		$('tr[itemname="'+itemName+'"]').remove();
		$(this).hide();
    $(this).parents('.product-box').removeClass('selected');
    removeItem(itemName);
  }
  $('.products-list-button span').html(productsQuantity);
  $('input.selected_products').val(selectedProducts);
});

});