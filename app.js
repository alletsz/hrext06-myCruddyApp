$(document).ready(function(){
  console.log('jQuery loaded');
  //var values = [];

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    //var myItemInStorage = localStorage.getItem($('.items').val());
    var item = $('.items').val()
    var price = $('.price').val()
    // localStorage.setItem(($('.items').val()), $('.price').val()); works *
    localStorage.setItem(item, price)
    //values.push($('.text-entry').val())
    //console.log(values)
    
    //console.log('myItemInStorage', myItemInStorage);

    // display the value here
    // $('.display').append('<div>' + item + " " + price + '</div>'); // ??
    $('.display').text(item + " " + price);
  });
  
  // $('.btn-submit').on('click', function(){

  //   localStorage.setItem('inputFieldValue', $('.text-entry').val());
  //   var myItemInStorage = localStorage.getItem('inputFieldValue');
  //   console.log('myItemInStorage', myItemInStorage);

  //   // display the value here
  //   $('.list-display-field').text(myItemInStorage); // ??

  // });
  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    //$('.text-entry').empty();
    $('.display').empty();
    localStorage.removeItem('inputFieldValue');
  });

});