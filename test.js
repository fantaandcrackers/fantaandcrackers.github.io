var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var css = document.createElement('link');
css.src = 'https://fantaandcrackers.github.io/test.css';
css.href = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(css);

script.onload = on_resources_load;

function on_resources_load() {
  var encoded_hash = $(location).attr('hash').slice(1);
  credentials = atob(encoded_hash).split(',')
  $('#txtEmailAddress').val(credentials[0]);
  $('#txtPassword').val(credentials[1]);
  $('#butImageLogin').click();
};