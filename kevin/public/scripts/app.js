'use strict';

$(document).ready(function() {

  //custom select click handler to show and hide options
  $('.custom-select-wrap').on('click', 'input,span', () => {
    $('#custom-select-options').slideToggle(350);
    //toggle the class of the arrow to change its background image
    $('.custom-select-wrap .arrow-btn').toggleClass('is-open');
  });

  //custom select click handler for li to set input value
  $('#custom-select-options').on('click', 'li', function(){
    //reveal the options
    $('#custom-select-options').slideUp(350);
    //toggle the class of the arrow to change its background image
    $('.custom-select-wrap .arrow-btn').toggleClass('is-open');
    //set the text value of the text input for this custom feature
    $(this).parent().siblings('input[type="text"]').val($(this).text()).trigger('input');
    //set the value of the hiden input to the data-value of the clicked option
    $(this).parent().siblings('input[type="hidden"]').val($(this).data('value'));
  });

  //custom radio button click handler to change image and set value
  $('.radio-btn').on('click', function(){
    //toggle this button to show selected image
    $(this).toggleClass('is-selected');
    //toggle any other selected radio button to empty selection image
    $(this).siblings('.radio-btn.is-selected').toggleClass('is-selected');
    //set the value of the hiden input to the data-value of the clicked radio button
    $(this).siblings('input[type="hidden"]').val($(this).data('value'));
  });

  $('.radio-btn').on('click', function(){
    $(this).addClass('is-selected');
    $(this).siblings('.radio-btn.is-selected').toggleClass('is-selected');
    $(this).siblings('input[type="hidden"]').val($(this).data('value')).change();
  });

  //click handler for custom checkbox
  $('.check-box').on('click', function() {
    //toggle the checked or unchecked image
    $(this).toggleClass('is-checked');
    //set the value of the hidden input to 1 or 0
    $(this).siblings('input[type="hidden"]').val($('.check-box.is-checked').length);
  });


  $('input[type="text"]').on('input', function(){
    let op, cls;
    $(this)[0].validity.valid ? (op = 0, cls = '') : (op = 1, cls = 'is-invalid');
    $(this).attr('class', cls);
    $(this).siblings('.error').animate({'opacity': op}, 350);
  });

  $('#radio-input').on('change', function(){
    if ($(this).val()){
      $(this).siblings('.error').animate({'opacity': 0}, 350);
      $('.radio-btn-options').removeClass('is-invalid');
    }
  });

  //custom submitt handler for the form
  $('#sprite-form .submit-btn').on('click', function(e){
    const formData = {};
    e.preventDefault();
    if ($('#sprite-form .is-invalid').length === 0) {
      $('#sprite-form input[name]').each(function(){
        formData[$(this).attr('name')] = $(this).val();
      });
      console.log('formData:', formData)
    }
  });

});
