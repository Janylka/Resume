var skills = {
    _html: 90,
    _css: 90,
    _bootstrap: 80,
    _js: 50,
    _php: 50
  };
  
  $.each(skills, function(key, value) {
    var skillbar = $("." + key);
  
    skillbar.animate(
      {
        width: value + "%"
      },
      2000,
      function() {
        $(".speech-bubble").fadeIn();
      }
    );
  });

new Vue({
    el: '#portfolio',
    data: {
      show: false
    }
  });