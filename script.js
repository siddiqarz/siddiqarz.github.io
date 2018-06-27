function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myEmail");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("My email is copied to your Clipboard! " + copyText.value);
}