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
  		var EUR= ((currencyInput) * (response.rates.EUR) * .81);
  		$('#output_amount').append('<p>' + "The exchange rate for $" + currencyInput + " to EUR is " + EUR + '</p>');
  	}	if ('value' in event.target && event.target.value === 'GBP') {
  		var GBP= ((currencyInput) *(response.rates.GBP) * .81);
  		$('#output_amount').append('<p>' + "The exchange rate for $" + currencyInput + " to GBP is " + GBP + '</p>');
  	}	if ('value' in event.target && event.target.value === 'CNY') {
  		var CNY= ((currencyInput) * (response.rates.CNY) * .81);
  		$('#output_amount').append('<p>' + "The exchange rate for $" + currencyInput + " to CNY is " + CNY + '</p>');
	}	if ('value' in event.target && event.target.value === 'JPY') {
  		var JPY= ((currencyInput)  *(response.rates.JPY) * .81);
  		$('#output_amount').append('<p>' + "The exchange rate for $" + currencyInput + " to JPY is " + JPY + '</p>');
  	}
})



});
});