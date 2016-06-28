//=========================
//	functions G-I
//=========================

function futureValueOfGrowingAnnuity() {
	p = $('#initial_payment').val();
	r = $('#rate_per_period').val() / 100;
	g = $('#growth_rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = p * ( ( Math.pow(1+r,n) - Math.pow(1+g,n) ) / ( r - g) );
	result = equation.toFixed(2);
	writeResult(result);
}

function growingAnnuityPaymentPv() {
	pv = $('#present_value').val();
	r = $('#rate_per_period').val() / 100;
	g = $('#growth_rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = pv * ( r - g ) / ( 1 - Math.pow( ( (1+g) / (1+r) ),n ) );
	result = equation.toFixed(2);
	writeResult(result);
}

function growingAnnuityPaymentFv() {
	fv = $('#future_value').val();
	r = $('#rate_per_period').val() / 100;
	g = $('#growth_rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = fv * ( ( r - g ) / ( Math.pow(1+r,n) - Math.pow(1+g,n) ) );
	result = equation.toFixed(2);
	writeResult(result);	
}

function presentValueOfAGrowingAnnuity() {
	p = $('#first_payment').val();
	r = $('#rate_per_period').val() / 100;
	g = $('#growth_rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = ( p / ( r - g ) ) * ( 1 - Math.pow((1+g)/(1+r),n) );
	result = equation.toFixed(2);
	writeResult(result);	
}

function presentValueOfAGrowingPerpetuity() {
	d = $('#dividend_or_coupon_at_period_1').val();
	r = $('#discount_rate').val() / 100;
	g = $('#growth_rate').val() / 100;

	equation = d / ( r - g);
	result = equation.toFixed(2);
	writeResult(result);
}

function interestCoverageRatio() {
	ebit = $('#earnings_before_interest_and_tax').val();
	interestExpense = $('#interest_expense').val();

	equation = ebit / interestExpense;
	result = equation.toFixed(2);
	writeResult(result); 
}

function inventoryTurnoverRatio() {
	sales = $('#sales').val();
	inventory = $('#inventory').val();

	equation = sales / inventory;
	result = equation.toFixed(2);
	writeResult(result);
}