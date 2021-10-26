# simple-progress-bar
Simple progress bar script I made b/c the ones I found were a tad cumbersome

It's really as simple as it gets. The most basic example I can give is
```js
import progress from 'simple-progress-bar';

var bar = new progress.bar();

var secs = 0;

bar.addBar('Seconds', 'S', secs, 60);

setInterval(() => {
  secs++;
  if(secs > 59) secs = 0;
  bar.update(secs, 60, 'Name');
}, 1000);
```
## Class bar
### Constructor
1. Length
  1. Length of graph. Defaults to 100.
2. options
  1. corners
    1. Top left corner.
    2. Top right corner.
    3. Bottom right corner.
    4. Bottom left corner.
  2. otherBlocks
    1. Horizontal line.
    2. Vertical line.
    3. Left middle piece.
    4. Right middle piece.
    5. Empty space.
    6. Filled space.
### addBar
1. name
  1. Name to assign.
2. unit
  1. Unit type.
3. val1
  1. Smaller value.
4. val2
  1. Larger value.
### update
1. one
  1. Smaller value.
2. two
  1. Larger value.
3. name
  1. Name of bar to update.
