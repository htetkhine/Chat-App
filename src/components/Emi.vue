<template>
    <div>
        <h4 class="mb-4">Hello EMI</h4>
        <form @submit.prevent="calculate">
            <label for="Sale Price">Sale Price</label>
            <input class="form-control" type="number" v-model="salePrice" @keyup="loanAmountFunction">
            <label for="Down Payment Percentage">Down Payment Percentage (%)</label>
            <input class="form-control" type="text" v-model="downPaymentPercent" @keyup="loanAmountFunction">
            <label for="Loan Amount">Loan Amount</label>
            <input class="form-control" type="text" v-model="loanAmount">
            <label for="Annual interest rate">Annual interest rate</label>
            <input class="form-control" type="text" v-model="annualRate">
            <label for="Loan period in years" class=" mb-2">Loan period in years</label>
            <select v-model="loanPeriod" class="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <!-- $date = date('Y-m-d H:i:s'); -->
            <label class="mt-2" for=" Start date of loan"> Start date of loan</label>
            <input class="form-control" type="date">
            <button type="submit" class="btn btn-primary" >Calculate</button>
        </form>
        <div v-if="submit">
            <p>Your Monthly EMI is {{ emi }}</p>
        </div>
        <div v-else><p>Thank You</p></div>
        <div v-if="showMonthlyInterest">
            <p>Your Monthly interest is {{ monthlyInterest }}</p>
        </div>
        <div v-if="showPrincipal">
            <p>Your Monthly interest is {{ Principal }}</p>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    let salePrice = ref(null);
    let downPaymentPercent = ref(null);
    let loanAmount = ref(null);
    let annualRate = ref(null);
    let emi = ref(null);
    let loanPeriod = ref(null);
    let submit = ref(false);
    let monthlyInterest = ref(null);
    let showMonthlyInterest = ref(false);
    let Principal = ref(null);
    let showPrincipal = ref(false); 
    let loanAmountFunction = ()=>{
        let originalPrice = parseFloat(salePrice.value);
        let paymentPercent = parseFloat(downPaymentPercent.value);
        if(!isNaN(originalPrice) && !isNaN(paymentPercent)){
            let downPayment = originalPrice * (paymentPercent / 100);
            loanAmount.value = originalPrice - downPayment;
        }else{
            loanAmount.value = '';
        }        
    }

    let calculate = ()=>{
        let loanPeriodValue = parseFloat(loanPeriod.value);
        let annualRateValue = parseFloat(annualRate.value);
        let numberOfMonths = loanPeriodValue * 12;
        let monthlyInterestRatio = (annualRateValue / 100 ) / 12;
        let top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
        let bottom = top -1;
        let sp = top / bottom;

        let emiDecimal = (loanAmount.value * monthlyInterestRatio) * sp;
        emi.value = emiDecimal.toFixed(2);
        submit.value = true;

        let monthlyInterestDecimal = monthlyInterestRatio * loanAmount.value;
        monthlyInterest.value = monthlyInterestDecimal.toFixed(2);
        showMonthlyInterest.value = true;

        let principalDecimal = emi.value - monthlyInterest.value;
        Principal.value = principalDecimal.toFixed(2);
        showPrincipal.value = true;

        let bb=parseInt(loanAmount.value);
        let int_dd =0;let pre_dd=0;let end_dd=0;
        for (let j=1;j<=numberOfMonths;j++){
            int_dd = bb * (monthlyInterestRatio);
            pre_dd = emi.value - int_dd.toFixed(2);
            end_dd = bb - pre_dd.toFixed(2);
        }
       
    }
</script>

<style lang="scss" scoped>

</style>