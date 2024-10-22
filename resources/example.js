// <sl:translate>    
var heading_text = "New Heading text rendered by a Javascript function."
// </sl:translate>  
    function heading(){
      document.getElementById('heading').innerHTML = heading_text;
    }
    document.addEventListener("DOMContentLoaded", function() {
      const myTimeout = setTimeout(heading, 1000);
  });
