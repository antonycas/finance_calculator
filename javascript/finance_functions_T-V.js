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

