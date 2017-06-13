var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(window).on('load', function(){
  $(document.body).remove();
  $(document.body).append(
    $('<iframe style="height:100%; width:100%;" src="https://secure.web-loans.com/secure.aspx?p=7&u=cornerstone.web-loans.com"></iframe>')
    );

  var href = $(this).attr('href');
  console.log(href);

  var login_get_url = 'https://secure.web-loans.com/security-logon.aspx?timeout=1';
  var login_post_url = 'https://secure.web-loans.com/security-logon.aspx?timeout=1';

  get_viewstate_parameters();

  function get_viewstate_parameters() {
    $.ajax({
      url: 'login_get_url',
      type: 'GET',
      success: login_webcaster
    });
  }

  function login_webcaster(output, status, xhr) {
    var cookies = xhr.getResponseHeader('Set-Cookie');
    var data = {};
    data['__VIEWSTATE'] = $(output.content).find('__VIEWSTATE').value();
    data['__VIEWSTATEGENERATOR'] = $(output.content).find('__VIEWSTATEGENERATOR').value();
    data['__EVENTVALIDATION'] = $(output.content).find('__EVENTVALIDATION').value();
    data['txtEmailAddress'] = 'test123@gmail.com';
    data['txtPassword'] = 12345;
    data['butImageLogin.x'] = 50;
    data['butImageLogin.y'] = 10;

    $.ajax({
      url: login_post_url,
      type: 'POST',
      data: data
    });
  };


  // function login_webcaster(json) {
  //   $.ajax({
  //     url: login_post_url,
  //     type: 'POST',
  //     dataType: 'json',
  //     data: json,
  //     success: login_to_iframe
  //   });
  // };

  // function login_to_iframe(data) {
  //   post_to_iframe(data, login_post_url, 'iframe');
  // }

  // function post_to_iframe(data,url,target){
  //     $('body').append('<form action="'+url+'" method="post" target="'+target+'" id="postToIframe"></form>');
  //     $.each(data,function(n,v){
  //         $('#postToIframe').append('<input type="hidden" name="'+n+'" value="'+v+'" />');
  //     });
  //     $('#postToIframe').submit().remove();
  // }


});