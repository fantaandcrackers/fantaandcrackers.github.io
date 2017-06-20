var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var script = document.createElement('script');
script.src = 'https://cdn.rawgit.com/js-cookie/js-cookie/8b702508/src/js.cookie.js'
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = on_resources_load;

function on_resources_load() {
  var is_safari = navigator.userAgent.indexOf("Safari") > -1; // safari detection
  if (is_safari) {
    if (!Cookies.get('SSLSiteAlias')) {
      Cookies.set('SSLSiteAlias', 'cornerstoneweb-loans');
    }
  };

  var hash = $(location).attr('hash');
  if (hash) {
    encoded_hash = hash.slice(5);
    credentials = atob(encoded_hash).split(',')
    $('#txtEmailAddress').val(credentials[0]);
    $('#txtPassword').val(credentials[1]);
    $('#butImageLogin').click();
  };
};
