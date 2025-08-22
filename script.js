// changing tabs
function openInfo(evt, infoName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " active";
}

// add new features as defualt tab and closetab
// https://www.w3schools.com/howto/howto_js_tabs.asp
