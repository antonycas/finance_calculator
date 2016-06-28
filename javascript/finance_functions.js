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












