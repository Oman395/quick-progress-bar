import progress from '../index.js';

var bar = new progress.bar();

var secs = 0;

bar.addBar('Name', 'Unit', secs, 60);

setInterval(() => {
  secs++;
  if(secs > 59) secs = 0;
  bar.update(secs, 60, 'Name');
}, 1000);