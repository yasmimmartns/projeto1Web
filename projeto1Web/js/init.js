(function($){
  $(document).ready(function() {
    Materialize.updateTextFields();
  });
  $(document).ready(function(){
    $('ul.tabs').tabs('select_tab', 'tab_id');
  })
})(jQuery); // end of jQuery name space