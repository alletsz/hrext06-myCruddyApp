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
        string += key + " " + "$" + expenses[key] + "<br/>"
        total+= parseInt(expenses[key])
      }
    
    // localStorage.setItem(item, price)
    // //values.push($('.text-entry').val())
    // expenses[item] = price
    
    // display the value here
    // $('.display').append('<div>' + item + " " + "$" + price + '</div>'); // ??
    // $('.display').text(item + " " + "$" + price);
    $('.display').html(string);
    $('.items').val("");
    $('.price').val("");
    $('.total').html("Total " + " = " + " $" + total)
  });
  
  // $('.btn-submit').on('click', function(){

  //   localStorage.setItem('inputFieldValue', $('.text-entry').val());
  //   var myItemInStorage = localStorage.getItem('inputFieldValue');
  //   console.log('myItemInStorage', myItemInStorage);

  //   // display the value here
  //   $('.list-display-field').text(myItemInStorage); // ??

  // });

  //start

  // $('.delete-one').on('click', function(){
  //   $('.display').css({"display": "none"})
  //   $('.formInfo').css({"display": "none"})
  //   $('.total').css({"display": "none"})
  //   $('.deleted-display').css({"display": "block"})

  // })

  // $('.delete-button').on('click', function(){
  //   if(expenses.hasOwnProperty($(".delete-item").val())){

  //    delete expenses[$(".delete-item").val()]
  //    //console.log(expenses[$(".delete-item").val()])
     
  //   console.log(string)

  //   $('.total').text("Total = " + total)
  //   $('.display').css({"display": "block"})
  //   $('.formInfo').css({"display": "block"})
  //   $('.total').css({"display": "block"})
  //   $('.deleted-display').css({"display": "none"})

  //   var string = ""
  //   var total = 0
  //     for(var key in expenses){
  //       string += key + " " + "$" + expenses[key] + "\n",
  //       total+= parseInt(expenses[key])
  //     }
  //     $('.display').text(string);
  //   }
  // })

  //finish

  function clearAll() {
    window.localStorage.clear();
  }  

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    //$('.text-entry').empty();
    $('.display').empty();
    $('.total').empty();
    $('.items').val("");
    $('.price').val("");
    clearAll();
    //document.getElementByClass('items').value = ''
    $('.total').text("Total =")
    localStorage.removeItem('inputFieldValue');
  });

});