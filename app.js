var currencyEndpoint = 'http://data.fixer.io/api/latest?access_key=c9471354ed42edc59b16b484afe28cd0'

$(document).ready(function(){
	console.log('sanity check');
    $.get(currencyEndpoint, (response) => {
        console.log(response);


//Click event listener
$('body').on('click', function convertCurrency(event) {
  		if ('type' in event.target && event.target.type === 'button') {
    	// console.log('handle currency conversion here');
    	var currencyInput = $('input[type=text]').val();
    	// console.log((currencyInput) );
  	}	if ('value' in event.target && event.target.value === 'EUR') {
  		console.log(((currencyInput) * response.rates.EUR) * .81);
  	}	if ('value' in event.target && event.target.value === 'GBP') {
  		console.log((currencyInput) *(response.rates.GBP) * .81);
  	}	if ('value' in event.target && event.target.value === 'CNY') {
  		console.log((currencyInput) *(response.rates.CNY) * .81);
	}	if ('value' in event.target && event.target.value === 'JPY') {
  		console.log((currencyInput) *(response.rates.JPY) * .81);
  	}
})



});
});