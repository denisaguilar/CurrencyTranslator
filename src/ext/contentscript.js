document.onmouseup = onTextSelected;

function onTextSelected(e) {
  var selection = document.getSelection().toString();
  if(selection){
    console.log(selection);
  }
}


