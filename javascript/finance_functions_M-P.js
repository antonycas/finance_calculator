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