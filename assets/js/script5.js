function arrayAvg(array) {
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  avg = sum / array.length;
  return avg;
}

var johnFamily = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalAmount: [],
  avgTip: 0,
  tipCalculator: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var tip = 0;
      var fullAmount = 0;
      if (this.bills[i] <= 50) {
        tip = this.bills[i] * 0.2;
        fullAmount = this.bills[i] + tip;
      } else if (this.bills[i] > 50 && this.bills[i] <= 200) {
        tip = this.bills[i] * 0.15;
        fullAmount = this.bills[i] + tip;
      } else {
        tip = this.bills[i] * 0.1;
        fullAmount = this.bills[i] + tip;
      }
      this.tips.push(tip);
      this.finalAmount.push(fullAmount);
    }
  },
};
johnFamily.tipCalculator();
johnFamily.avgTip = arrayAvg(johnFamily.tips);
console.log(johnFamily);

var markFamily = {
  bills: [77, 375, 110, 45],
  tips: [],
  finalAmount: [],
  avgTip: 0,
  tipCalculator: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var tip = 0;
      var fullAmount = 0;
      if (this.bills[i] <= 100) {
        tip = this.bills[i] * 0.2;
        fullAmount = this.bills[i] + tip;
      } else if (this.bills[i] > 100 && this.bills[i] <= 300) {
        tip = this.bills[i] * 0.1;
        fullAmount = this.bills[i] + tip;
      } else {
        tip = this.bills[i] * 0.25;
        fullAmount = this.bills[i] + tip;
      }
      this.tips.push(tip);
      this.finalAmount.push(fullAmount);
    }
  },
};
markFamily.tipCalculator();
markFamily.avgTip = arrayAvg(markFamily.tips);
console.log(markFamily);

if (johnFamily.avgTip > markFamily.avgTip) {
  console.log("John Smith paid more tip than Mark Miller");
} else if (markFamily.avgTip > johnFamily.avgTip) {
  console.log("Mark Miller paid more tip than John Smith");
} else {
  console.log("John Smith and Mark Miller paid the same amount in tips");
}
