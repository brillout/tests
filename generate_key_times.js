const duration_total = 24;

const STEPS = 12;

const val = (
  new Array(STEPS+1)
  .fill()
  .map((_,i) => {
    const deviance = 0;//(i%2===0?0:0.5)*1/12;
    const step = i*1/STEPS;
    const val = step + deviance;
    const duration_step = duration_total/STEPS;
    console.log(JSON.stringify({
      i,
      step,
      deviance,
      val,
      duration_total,
      duration_step,
    }, null, 2));
    return val;
  })
  .join('; ')
);

console.log(val);
