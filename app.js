$(document).ready(function(){
  console.log('jQuery loaded');
  //var values = [];
  var expenses = {}
  
  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    //var myItemInStorage = localStorage.getItem($('.items').val());
    var item = $('.items').val()
    var price = $('.price').val()
    var total = 0
    // localStorage.setItem(($('.items').val()), $('.price').val()); works *
    var string = ""
    localStorage.setItem(item, price)
    expenses[item] = price
    for(var key in expenses) {
      string += key + " " + "$" + expenses[key] + "\n",
      total+= parseInt(expenses[key])
    }
    // localStorage.setItem(item, price)
    // //values.push($('.text-entry').val())
    // expenses[item] = price
    
    // display the value here
    // $('.display').append('<div>' + item + " " + "$" + price + '</div>'); // ??
    // $('.display').text(item + " " + "$" + price);
    $('.display').text(string);

    $('.total').text("Total = " + total)
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