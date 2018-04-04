$(document).ready(function(){
	console.log('sanity check');
    $.get('http://data.fixer.io/api/latest?access_key=c9471354ed42edc59b16b484afe28cd0', (response) => {
        console.log(response);
    });

})
