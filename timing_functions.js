var waitTime = 3000;
var currTime = 0;
var waitInterval = 10;
var percentWaited = 0;

console.log("wait for it");

function writeWaitingPercent(p) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`)
}

var interval = setInterval(function() {
  currTime += waitInterval;
  percentWaited = Math.floor(currTime/waitTime * 100);
  writeWaitingPercent(percentWaited);
  //console.log(`waiting ${currTime/1000} seconds...`);
}, waitInterval);

setTimeout(function() {
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\ndone");
}, waitTime);

process.stdout.write("\n")
writeWaitingPercent(percentWaited);
