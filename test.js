var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = on_resources_load;

function on_resources_load() {
  window.parent.setUpFrame(); return true;
  // This needs to be defined in the iFrame
  // See: https://stackoverflow.com/questions/536538/pass-value-to-iframe-from-a-window
  function get_credentials(username, password) {
    $('#txtEmailAddress').val(username);
    $('#txtPassword').val(password);
    $('#butImageLogin').click();
  }
};