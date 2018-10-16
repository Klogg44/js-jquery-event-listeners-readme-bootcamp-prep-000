//define functions here
function getIt() {
  $('p').on('click',
  function(){
    alert('Hey!');
    });
  return;
}

function frameIt() {
  $('img').on('load',
  function(){
    $('img').addClass('tasty');
  });
  return;
}

function pressIt() {

  return;  
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
// call functions here

});
