$(document).ready(function(){

  $('#submit-checkboxes').click(function() {
    var products = [];
    var $check = $('.myCheckbox');
    for (var i = 0; i < 3; i++) {
      if($check[i].checked == true) {
        products.push($check[i].value);
      }
    }
    console.log(products);
  });

});
