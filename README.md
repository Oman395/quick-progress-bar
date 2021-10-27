# simple-progress-bar
Simple progress bar script I made b/c the ones I found were a tad cumbersome
## Installation
### Installing with npm
```
npm i simple-progress-bar
```
## Example
### Using ES6 Module

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
### Using CommonJS

```js
const progress = require('simple-progress-bar');

var bar = new progress.bar();

var secs = 0;

bar.addBar('Seconds', 'S', secs, 60);

setInterval(() => {
  secs++;
  if(secs > 59) secs = 0;
  bar.update(secs, 60, 'Name');
}, 1000);
```
## Methods
```js
// Create bar
var bar = new progress.bar({
  length: 100,
  options: {
    corners: [ // I made these using an array, and it'll take too long to change.
      '┌', // Top left
      '┐', // Top right
      '┘', // Bottom right
      '└', // Bottom left
    ],
    otherBlocks: [ // Same with this one.
      '─', // Horizantal character
      '│', // Vertical character
      '├', // Middle left character
      '┤', // Middle right character
      ' ', // Empty character
      '█', // Full character
    ],
    unit: 'Units',
    name: 'Paramater',
  }
})
// Add metric to bar
bar.addBar('Name', 'Unit', smallvalue, largevalue);
// Update metric
bar.update(smallvalue, largevalue, 'Name');
```
## Contributing
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D
