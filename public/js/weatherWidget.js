
// function weatherConfig(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0]; 
//     if (!d.getElementById(id)) {
//         js = d.createElement(s); 
//         js.id = id; 
//         js.src = 'https://weatherwidget.io/js/widget.min.js'; 
//         fjs.parentNode.insertBefore(js, fjs);
//     }
// }(document, 'script', 'weatherwidget-io-js');

(function($) {
    "use strict"; // Start of use strict
    var js, fjs = document.getElementsByTagName('script')[0]; 
    if (!document.getElementById('weatherwidget-io-js')) {
        js = document.createElement('script'); 
        js.id = 'weatherwidget-io-js'; 
        js.src = 'https://weatherwidget.io/js/widget.min.js'; 
        fjs.parentNode.insertBefore(js, fjs);
    }
})(jQuery); // End of use strict  