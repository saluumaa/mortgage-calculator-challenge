
    let calculatorForm = document.querySelector("#calculator-form");

    calculatorForm.addEventListener("submit", function(event){

        event.preventDefault();
        document.querySelector('.empty-results-wrap').style.display = "none";
        document.querySelector(".compl-container").style.display = "flex";

        let principal =parseFloat(document.querySelector(".mortgage-amount").value);
        let years =parseInt(document.querySelector(".mortgage-term").value);
        let interestRate = parseFloat(document.querySelector(".interest-rate").value);
        

      checkedRadioButtons(principal, years, interestRate);
        
    });

    calculatorForm.addEventListener("keydown", (event)=> {
        if(event.key = 'Enter'){
            event.preventDefault();
          calculatorForm.submit();
        }
    })

  
    

function checkedRadioButtons(principal, years, interestRate) {
    let monthlyPayment, totalRepayment;
    let monthlyInterestRate = interestRate / 100 / 12; 
    let numberOfPayments = years * 12;

    if (document.getElementById('repayment').checked) {
        monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) 
                        / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        monthlyPayment = monthlyPayment.toFixed(2); 

        document.querySelector(".monthly-repayment-value").innerHTML = `£${monthlyPayment}`

        totalRepayment = (monthlyPayment * numberOfPayments).toFixed(2);
    } else if (document.getElementById('interest-only').checked) {
        monthlyPayment = (principal * monthlyInterestRate).toFixed(2); 
        document.querySelector(".monthly-repayment-value").innerHTML = `£${monthlyPayment}`;
        totalRepayment = (monthlyPayment * numberOfPayments).toFixed(2);
    } else {
        // document.querySelector(".monthly-repayment-value").innerHTML = `Please select a mortgage type`;
        // document.querySelector('.total-payment-value').innerHTML = `please select a mortgage type`;
        return;
    }
    document.querySelector('.total-payment-value').innerHTML = `£${totalRepayment}`;
    console.log(totalRepayment, monthlyPayment, principal, years, interestRate);
}

checkedRadioButtons();

document.querySelector('.clear-btn').addEventListener('click', ()=>{
    document.querySelector(".mortgage-amount").value = "";
    document.querySelector(".mortgage-term").value = "";
    document.querySelector(".interest-rate").value = "";
    document.getElementById('repayment').checked = false;
    document.getElementById('interest-only').checked = false;
    document.querySelector('.empty-results-wrap').style.display = "flex";
    document.querySelector(".compl-container").style.display = "none";
});