console.log (this);

function helloThis() {
  console.log('Inside this function. this is ' + this)
}
var child = {
  age: 9,
  ageTenYears: function() {
    console.log (this.age + 10);
  }
};
var investor = {
  name: 'Child' ,
  investment: {
    initialInvestment: 5000,
    investmentGrowth:function(){
      console.log(this.initialInvestment * 1.15);
    }
  }
};
helloThis();

child.ageTenYears();
investor.investment.investmentGrowth();