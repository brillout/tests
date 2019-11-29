const val = (
  new Array(13)
  .fill()
  .map((_,i) => {
    const deviance = (i%2===0?0:0.5)*1/12;
    const step = i*1/12;
    const val = step + deviance;
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
