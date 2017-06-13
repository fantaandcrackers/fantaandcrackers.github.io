var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document.body).remove();
$(document.body).append(
  $('<iframe style="height:100%; width:100%;" src="https://secure.web-loans.com/secure.aspx?p=7&u=cornerstone.web-loans.com"></iframe>')
  );