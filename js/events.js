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
    console.log($('img').classList)
  });
  return;
}

$(document).ready(function(){
  getIt();
  frameIt();
// call functions here

});
