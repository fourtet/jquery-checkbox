$(document).ready(function(){

  $('#submit-checkboxes').click(function() {
    var products = [];
    var $check = $('.myCheckbox');
    for (var i = 0; i < 3; i++) {
      if($check[i].checked == false) {
        products.push($check[i].value);
      }
    }
    console.log(products);
  });

  $('#button-see-products').click(function(e) {
    e.preventDefault();
    $('.checkboxes').toggle();
  });

});
