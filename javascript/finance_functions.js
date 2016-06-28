// This function is called when the page loads
$(function() {
	// sets calculate buttons initial function to the first options value
	$('#calculate_button').attr('onclick', $('#function_select option:first-child').val());
	displayInputs();
	// hide all inputs on load
	

	//This function changes the #calculate_button's onclick attribute to equal the selected options value and displays the associated inputs with the displayInputs funtion
	$('#function_select').change(function() {
		selectedOptionValue = $('option:selected').attr('value');
		$('#calculate_button').attr('onclick', selectedOptionValue);
		displayInputs();

		
	});
});

//This function is called after a calculation is made and writes the result to the document in an input element
function writeResult(result) {	
	var correctInputs = 0;

	inputs = $('#inputs input');
	//iterates over each input and checks its value is a number
	inputs.each(function() {
		if ( !$.isNumeric(this.value) ) {
			//creates an error message and appends it to the #input div if the inputs value is NaN	
			var errorMessage = $('<div class="alert alert-warning"><strong>Warning!</strong> Please ensure that all inputs are numeric.</div>');
			$('#inputs').append(errorMessage);
			$('#result').attr("value","");
			//return false to break out of the each statement so that only one error div is appended
			return false;
		} else {
			correctInputs += 1;
		}

	});
	//checks to see if all inputs are correct and if they are removes any errors and writes the result
	if (correctInputs == inputs.length) {

		$('#inputs .alert').remove();
		$('#result').attr("value",result);
		}
}

//reads the calculate buttons onclick attribute and displays the appropriate inputs
function displayInputs() {
	$('#inputs *').remove();
	if ($('#calculate_button').attr('onclick') == "annualPercentageYield()") {
			appendInputs(["rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "futureValueOfAnnuity()") {
			appendInputs(["payment","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "annuitySolveForN()") {
			appendInputs(["future_value","payment","rate"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "annuityPaymentPv()") {
			appendInputs(["present_value","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "annuityPaymentFv()") {
			appendInputs(["future_value","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "annuityPaymentFactorPv()") {
			appendInputs(["rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "presentValueOfAnnuity()") {
			appendInputs(["payment","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "annuityPvSolveForN()") {
			appendInputs(["payment","rate","present_value"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "presentValueAnnuityFactor()") {
			appendInputs(["rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "presentValueOfAnnuityDue()") {
			appendInputs(["payment","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "futureValueOfAnnuityDue()") {
			appendInputs(["payment","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "annuityDuePaymentPv()") {
			appendInputs(["present_value","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "annuityDuePaymentFv()") {
			appendInputs(["future_value","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "assetToSalesRatio()") {
			appendInputs(["total_assets","sales_revenue"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "averageCollectionPeriod()") {
			appendInputs(["recievables_turnover"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "paymentsOnABalloonLoan()") {
			appendInputs(["balloon_amt","present_value","rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "bidAskSpread()") {
			appendInputs(["ask_price","bid_price"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "bondEquivalentYield()") {
			appendInputs(["face_value","bond_price","days_to_maturity"]);
			appendLabels();
		}
	
	if ($('#calculate_button').attr('onclick') == "bookValuePerShare()") {
			appendInputs(["total_common_stockholders_equity","number_of_common_shares"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "capitalAssetPricingModel()") {
			appendInputs(["risk_free_rate","beta","return_on_the_market"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "capitalGainsYield()") {
			appendInputs(["initial_stock_price","ending_stock_price"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "compoundInterest()") {
			appendInputs(["principal","rate_per_period","number_of_periods"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "continuousCompounding()") {
			appendInputs(["principal","rate","number_of_periods"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "contributionMargin()") {
			appendInputs(["price_per_product","variable_cost_per_product"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "currentRatio()") {
			appendInputs(["current_assets","current_liabilities"]);
			appendLabels();
		}		

	if ($('#calculate_button').attr('onclick') == "currentYield()") {
			appendInputs(["annual_coupons","current_bond_price"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "currentYield()") {
			appendInputs(["first_payment","rate_per_period","growth_rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "futureValueOfGrowingAnnuity()") {
			appendInputs(["initial_payment","rate_per_period","growth_rate","number_of_periods"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "growingAnnuityPaymentPv()") {
			appendInputs(["present_value","rate_per_period","growth_rate","number_of_periods"]);
			appendLabels();
		}
	if ($('#calculate_button').attr('onclick') == "growingAnnuityPaymentFv()") {
			appendInputs(["future_value","rate_per_period","growth_rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "presentValueOfAGrowingAnnuity()") {
			appendInputs(["first_payment","rate_per_period","growth_rate","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "presentValueOfAGrowingPerpetuity()") {
			appendInputs(["dividend_or_coupon_at_period_1","discount_rate","growth_rate"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "interestCoverageRatio()") {
			appendInputs(["earnings_before_interest_and_tax","interest_expense"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "inventoryTurnoverRatio()") {
			appendInputs(["sales","inventory"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "netAssetValue()") {
			appendInputs(["fund_assets","fund_liabilities","outstanding_shares"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "netProfitMargin()") {
			appendInputs(["net_income","sales_revenue"]);
			appendLabels();
		}		

	if ($('#calculate_button').attr('onclick') == "netWorkingCapital()") {
			appendInputs(["current_assets","current_liabilities"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "solveForNumberOfPeriodsPvFv()") {
			appendInputs(["future_value","present_value","rate_per_period"]);
			appendLabels();
		}					
	if ($('#calculate_button').attr('onclick') == "paybackPeriod()") {
			appendInputs(["initial_investment","periodic_cash_flow"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "pvOfPerpetuity()") {
			appendInputs(["dividend_or_coupon_per_period","discount_rate"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "preferredStockValue()") {
			appendInputs(["dividend","discount_rate"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "presentValue()") {
			appendInputs(["cash_flow_at_period_1","rate_of_return","number_of_periods"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "pvContinuousCompounding()") {
			appendInputs(["cash_flow","rate","time"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "presentValueFactor()") {
			appendInputs(["rate_of_return","number_of_periods"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "priceToBookValue()") {
			appendInputs(["market_price_per_share","book_value_per_share"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "priceToEarningsRatio()") {
			appendInputs(["price_per_share","earnings_per_share"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "priceToSalesRatio()") {
			appendInputs(["share_price","sales_per_share"]);
			appendLabels();
		}	

	if ($('#calculate_button').attr('onclick') == "taxEquivalentYield()") {
			appendInputs(["tax_free_yield","tax_rate"]);
			appendLabels();
		}

	if ($('#calculate_button').attr('onclick') == "totalStockReturn()") {
			appendInputs(["initial_stock_price","ending_stock_price","dividends"]);
			appendLabels();
		}		
}



function appendInputs(a) {
	inputs = [];
	for (i=0; i < a.length; i++) {
		input ='<div class="row"><input type="text" name="' + a[i] + '" placeholder="' + a[i] + '" id="' + a[i] + '"></div>';
		inputs.push(input);
		$('#inputs').append(inputs[i]);
	}
}


function appendLabels() {
	$('#inputs label').remove();
	inputs = $('#inputs input');
	inputs.each(function() {
		label = $('<label>');
		label.attr("for",this.name);
		label.text(this.name.replace( /_/g, " ")+": ");
		label.insertBefore(this);
	});
	
}

//fv represents the desired amount
//n represents the number of periods
//p represents payment made per interest period
//pv represents present value
//r represents the interest rate and is divided by 100 to convert it to a percentage


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

//========================
//	functions M-P
//========================

function netAssetValue() {
	fundAssets = $('#fund_assets').val();
	fundLiabilities = $('#fund_liabilities').val();
	outstandingShares = $('#outstanding_shares').val();

	equation = (fundAssets - fundLiabilities) / outstandingShares;
	result = equation.toFixed(2);
	writeResult(result);
}

function netProfitMargin() {
	netIncome = $('#net_income').val();
	salesRevenue = $('#sales_revenue').val();

	equation = netIncome / salesRevenue;
	result = equation.toFixed(2);
	writeResult(result*100+"%");
}

function netWorkingCapital() {
	currentAssets = $('#current_assets').val();
	currentLiabilities = $('#current_liabilities').val();

	equation = currentAssets - currentLiabilities;
	result = equation.toFixed(2);
	writeResult(result);
}

function solveForNumberOfPeriodsPvFv() {
	fv = $('#future_value').val();
	pv = $('#present_value').val();
	r = $('#rate_per_period').val() / 100;

	equation = (Math.log(fv/pv)) / (Math.log(1+r));
	result = equation.toFixed(4);
	writeResult(result);
}

function paybackPeriod() {
	initialInvestment = $('#initial_investment').val();
	periodicCashFlow = $('#periodic_cash_flow').val();

	equation = initialInvestment / periodicCashFlow;
	result = equation.toFixed(2);
	writeResult(result);
}

function pvOfPerpetuity() {
	d = $('#dividend_or_coupon_per_period').val();
	r = $('#discount_rate').val() / 100;

	equation = d / r;
	result = equation.toFixed(2);
	writeResult(result);
}

function preferredStockValue() {
	d = $('#dividend').val();
	r = $('#discount_rate').val() / 100;

	equation = d / r;
	result = equation.toFixed(2);
	writeResult(result);

}

function presentValue() {
	c = $('#cash_flow_at_period_1').val();
	r = $('#rate_of_return').val() / 100;
	n = $('#number_of_periods').val();

	equation = c / ( Math.pow(1+r,n) );
	result = equation.toFixed(2);
	writeResult(result);
}

function pvContinuousCompounding() {
	c = $('#cash_flow').val();
	r = $('#rate').val() / 100;
	t = $('#time').val();

	equation = c / ( Math.pow(Math.E,r*t)  );
	result = equation.toFixed(2);
	writeResult(result);
}

function presentValueFactor() {
	r = $('#rate_of_return').val() / 100;
	n = $('#number_of_periods').val();

	equation = 1 / (Math.pow(1+r,n));
	result = equation.toFixed(5);
	writeResult(result);
}

function priceToBookValue() {
	marketPricePerShare = $('#market_price_per_share').val();
	bookValuePerShare = $('#book_value_per_share').val();

	equation = marketPricePerShare / bookValuePerShare;
	result = equation.toFixed(3);
	writeResult(result);
}

function priceToEarningsRatio() {
	pricePerShare = $('#price_per_share').val();
	earningsPerShare = $('#earnings_per_share').val();

	equation = pricePerShare / earningsPerShare;
	result = equation.toFixed(3);
	writeResult(result);
}

function priceToSalesRatio() {
	sharePrice = $('#share_price').val();
	salesPerShare = $('#sales_per_share').val();

	equation = sharePrice / salesPerShare;
	result = equation.toFixed(3);
	writeResult(result);
}

//=========================
// functions t - v
//=========================

function taxEquivalentYield() {
	taxFreeYield = $('#tax_free_yield').val();
	taxRate = $('#tax_rate').val() / 100;

	equation = taxFreeYield / ( 1 - taxRate );
	result = equation.toFixed(3);
	writeResult(result+"%");
}

function totalStockReturn() {
	initialStockPrice = $('#initial_stock_price').val();
	endingStockPrice = $('#ending_stock_price').val();
	d = $('#dividends').val();

	equation = endingStockPrice - initialStockPrice  + d  / initialStockPrice;
	result = equation//.toFixed(3);
	writeResult(result+"%");
}












