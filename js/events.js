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
  function() {
    console.log("loaded Image");
  });
  return console.log('complete');
}

$(document).ready(function(){
  getIt();
  frameIt();
// call functions here

});
