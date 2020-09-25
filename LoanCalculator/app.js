//listen for sublit:
document.getElementById('loan-form').addEventListener('submit', function(e) {
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000); //在出计算结果之前，这个gif会显示2秒；其实电脑运算快的情况下，用不了2秒，但是为了让客户体验更真实，所以设计2秒的电脑反应时间。

    e.preventDefault();
});

function calculateResults() {
    //console.log(e.target);
    console.log('Calculating...');
    //每个要互动的按键先定义：
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    //get the input value:
    const principal = parseFloat(amount.value); //借多少
    const calculatedInterest = parseFloat(interest.value) / 100 / 12; //每个月的利息
    const calculatedPayments = parseFloat(years.value) * 12; //总共多少个月

    //compute monthly payment:
    const x = Math.pow(1 + calculatedInterest, calculatedPayments); //利息的几次方
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    //isFinite : La valeur dont on souhaite savoir si elle est finie ou non我们想知道的值是否有限
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        //console.log('Please check your numbers');
        showError('Please check your numbers');
    }
}

function showError(error) {
    //如果没有客户输入，则不显示gif和结果：
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    //insert errordiv above heading:
    card.insertBefore(errorDiv, heading);

    //setTimeout (function, milliseconds):错误只显示3秒
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}