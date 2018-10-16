//define functions here
function getIt() {
  $('p').on('click',
  function(){
    alert('Hey!');
    });
  return;
}

function frameIt() {
  $('img').on('load', function() {
    $('img').class.add('tasty')
  });
  return;
}
$(document).ready(function(){
  getIt();
  frameIT();
// call functions here

});
