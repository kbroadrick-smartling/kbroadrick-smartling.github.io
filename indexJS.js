 //START ORIGINAL SCRIPT
 function parseHttpHeaders(httpHeaders) {
    return httpHeaders.split("\n")
      .map(x => x.split(/: */, 2))
      .filter(x => x[0])
      .reduce((ac, x) => { ac[x[0]] = x[1]; return ac; }, {});
  }
  /*
      var req = new XMLHttpRequest();
      req.open('GET', document.location, false);
      req.send(null);
      var headers = parseHttpHeaders(req.getAllResponseHeaders());
      for (var key in headers) {
        console.log(key + ': ' + headers[key]);
      }
      let text = [{ defaultMessage: "This value seems to be invalid.", type: { email: "This value should be a valid email.", url: "This value should be a valid url.", number: "This value should be a valid number.", integer: "This value should be a valid integer.", digits: "This value should be digits.", alphanum: "This value should be alphanumeric." }, notblank: "This value should not be blank.", required: "This value is required.", pattern: "This value seems to be invalid.", min: "This value should be greater than or equal to %s.", max: "This value should be lower than or equal to %s.", range: "This value should be between %s and %s.", minlength: "This value is too short. It should have %s characters or more.", maxlength: "This value is too long. It should have %s characters or less.", length: "This value length is invalid. It should be between %s and %s characters long.", mincheck: "You must select at least %s choices.", maxcheck: "You must select %s choices or less.", check: "You must select between %s and %s choices.", equalto: "This value should be the same." }];
      */
  /*console.log(headers["content-type"]);*/

  //END ORIGINAL SCRIPT
  $(document).ready(function () {
    $.getJSON('days_of_week.json', function (data) {
      $.each(data.days, function (index, day) {
        $('#days-of-week').append($('<option>', {
          value: day,
          text: day
        }));
      });
    });
  });