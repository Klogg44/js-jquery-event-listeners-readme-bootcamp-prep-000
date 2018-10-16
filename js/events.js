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
  $('input#typing').on('keydown',
  function(key){
    console.log(key.which)
    if (key.which == 71){
      alert('G was pressed');
    }
  });
  return;
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
// call functions here

});
