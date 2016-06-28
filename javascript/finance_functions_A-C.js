
//==========================
//	functions A-C
//==========================

function annualPercentageYield() {
	n = $('#number_of_periods').val();
	r = $('#rate').val() / 100;
	equation = Math.pow(  ( 1 + (r/n) ), n ) - 1;
	result = equation.toFixed(5) * 100;
	writeResult(result+"%");
}



function futureValueOfAnnuity() {
	n = $('#number_of_periods').val();
	p = $('#payment').val();
	r = $('#rate').val() / 100;
	equation = p * ( ( Math.pow( (1+r),n ) - 1 ) / r );
	result = equation.toFixed(2);
	writeResult(result);
}

function annuitySolveForN() {
	p = $('#payment').val();
	r = $('#rate').val() / 100;
	equation = Math.log((1 + ((fv * r) / p ))) / Math.log((1 + r));
	result = equation.toFixed(3);
	writeResult(result);

}

function annuityPaymentPv() {
	n = $('#number_of_periods').val();
	pv = $('#present_value').val();
	r = $('#rate').val() / 100;
	equation = (r * pv) / (1 - Math.pow( 1 + r ,-n));
	result = equation.toFixed(2);
	writeResult(result);
}

function annuityPaymentFv() {
	fv = $('#future_value').val();
	n = $('#number_of_periods').val();
	r = $('#rate').val() / 100;
	equation = (fv * r) / (Math.pow(1+r,n)-1);
	result = equation.toFixed(2);
	writeResult(result); 
}

function annuityPaymentFactorPv() {
	r = $('#rate').val() / 100;
	n = $('#number_of_periods').val();
	equation = r / (1 - Math.pow(1+r,-n));
	result = equation.toFixed(5);
	writeResult(result);
}

function presentValueOfAnnuity() {
	p = $('#payment').val();
	r = $('#rate').val() / 100;
	n = $('#number_of_periods').val();
	equation = p * ((1 - Math.pow(1+r,-n)) / r);
	result = equation.toFixed(2);
	writeResult(result);
}

function annuityPvSolveForN() {
	pv = $('#present_value').val();
	r = $('#rate').val() / 100;
	p = $('#payment').val();

	equation = Math.log( Math.pow( ( 1 - ( pv * r ) / p ) , -1 ) ) / Math.log( 1 + r );
	writeResult(result);
}

function presentValueAnnuityFactor() {
	r = $('#rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = ( 1 - Math.pow( 1 + r, -n ) ) / r;
	result = equation.toFixed(5);
	writeResult(result);
}

function presentValueOfAnnuityDue() {
	p = $('#payment').val();
	r = $('#rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = p + p * ( ( 1 - Math.pow( 1 + r, -n-1 ) / r ) );
	writeResult(equation);
}

function futureValueOfAnnuityDue() {
	p = $('#payment').val();
	r = $('#rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = ( 1 + r ) * ( p * ( (Math.pow( (1+r), n ) - 1 ) / r ) );
	result = equation.toFixed(2);
	writeResult(result);
}

function annuityDuePaymentPv() {
	pv = $('#present_value').val();
	r= $('#rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = (pv * ( r / ( 1 - Math.pow(1+r,-n) ) )) * (1 / ( 1 + r ));
	result = equation.toFixed(2);
	writeResult(result);
}

function annuityDuePaymentFv() {
	fv = $('#future_value').val();
	r = $('#rate').val() / 100;
	n = $('#number_of_periods').val();

	equation = fv * ( r / ( Math.pow(1+r,n) - 1 ) ) * ( 1 / ( 1+r ) );
	result = equation.toFixed(2);
	writeResult(result);
}

function assetToSalesRatio() {
	totalAssets = $('#total_assets').val();
	salesRevenue = $('#sales_revenue').val();

	equation = totalAssets / salesRevenue;
	result = equation.toFixed(3);
	writeResult(result);
}

function averageCollectionPeriod() {
	recievablesTurnover = $('#recievables_turnover').val();

	equation = 365 / recievablesTurnover;
	result = equation.toFixed(2);
	writeResult(result);
}

//function paymentsOnABalloonLoan() {
//	balloonAmt = $('balloon_amt').val();
//	pv = $('#pv').val();
//	r = $('#r').val();
//	n =$('#n').val();

//	equation = pv - (balloonAmt / ( Math.pow(1+r,n) ) )  * ( r / ( 1 - Math.pow(1+r,-n) ) );
//	result = equation.toFixed(2);
//	writeResult(result);

//}

function bidAskSpread() {
	askPrice = $('#ask_price').val();
	bidPrice = $('#bid_price').val();

	equation = askPrice - bidPrice;
	result = equation.toFixed(2);
	writeResult(result);
}

function bondEquivalentYield() {
	faceValue = $('#face_value').val();
	price = $('#bond_price').val() / 10;
	d = $('#days_to_maturity').val();

	equation =  ( ( faceValue - price ) /  price )  * ( 365 / d );
	result = equation.toFixed(3);
	writeResult(result+"%");
}

function bookValuePerShare() {
	total_common_stockholders_equity = $('#total_common_stockholders_equity').val();
	number_of_common_shares = $('#number_of_common_shares').val();

	equation = total_common_stockholders_equity / number_of_common_shares;
	result = equation.toFixed(3);
	writeResult("$"+result);
}

function capitalAssetPricingModel() {

}

function capitalGainsYield() {
	initial_stock_price = $('#initial_stock_price').val();
	ending_stock_price = $('#ending_stock_price').val();

	equation = (ending_stock_price - initial_stock_price) / initial_stock_price;
	result = equation*100;
	writeResult(result.toFixed(3)+"%");
}

function compoundInterest() {
	p = $('#principal').val();
	r = $('#rate_per_period').val() / 100;
	n = $('#number_of_periods').val();

	equation = p * ( Math.pow( (1+r), n) - 1 );
	result = equation.toFixed(2);
	writeResult(result);

}

function continuousCompounding() {
	p = $('#principal').val();
	r = $('#rate').val() / 100;
	t = $('#number_of_periods').val();

	equation = p * Math.pow(Math.E,(r*t));
	result = equation.toFixed(2);
	writeResult(result); 
}

function contributionMargin() {
	p = $('#price_per_product').val();
	v = $('#variable_cost_per_product').val();

	equation = p - v;
	result = equation.toFixed(2);
	writeResult(result);

}

function currentRatio() {
	currentAssets = $('#current_assets').val();
	currentLiabilities = $('#current_liabilities').val();

	equation = currentAssets / currentLiabilities;
	result = equation.toFixed(2);
	writeResult(result);
}

function currentYield() {
	annualCoupons = $('#annual_coupons').val();
	currentBondPrice = $('#current_bond_price').val();

	equation = annualCoupons / currentBondPrice;
	result = equation.toFixed(3);
	writeResult(result+"%");

}