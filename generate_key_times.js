const assert = require('assert');

const keyTimes = [];
let keyTime = 0;

for(var i=0; i<13; i++) {
  keyTimes.push(keyTime);
  const deviance = (i%2===0?0:0.5)*0.7/13;
  const step = 1/(13+deviance);
  keyTime = keyTime + step;
  console.log(JSON.stringify({
    i,
    step,
    deviance,
    keyTime,
  }, null, 2));
}

assert(keyTimes.length===14);

console.log(keyTimes.join('; '));
