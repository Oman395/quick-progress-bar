import index from './index.js';
var bar = new index.bar();
var s = 0;
var m = 0;
bar.addBar('Heap', 'KB', process.memoryUsage().heapUsed / 1000, process.memoryUsage().heapTotal / 1000);
bar.addBar('Seconds', 'S', s, 60);
bar.addBar('Minutes', 'M', m, 60);
setInterval(() => {
    bar.update(process.memoryUsage().heapUsed / 1000, process.memoryUsage().heapTotal / 1000, 'Heap');
}, 100);

setInterval(() => {
    s++;
    if (s > 59) { s = 0; m++; };
    bar.update(s, 60, 'Seconds');
    bar.update(m, 60, 'Minutes');
}, 1000);