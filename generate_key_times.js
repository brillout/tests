const val = (
  new Array(14)
  .fill()
  .map((_,i) => {
    const deviance = (i%2===0?0:0.5)*1/13;
    const step = 1/(13+deviance);
    const val = currentStep + deviance;
    console.log(JSON.stringify({
      i,
      step,
      deviance,
      val,
    }, null, 2));
    return val;
  })
  .join('; ')
);

console.log(val);
