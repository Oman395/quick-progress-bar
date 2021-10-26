import { stdout } from 'process';

var def = {
    corners: [
        '┌',
        '┐',
        '┘',
        '└',
    ],
    otherBlocks: [
        '─',
        '│',
        '├',
        '┤',
        ' ',
        '█',
    ],
    unit: 'Units',
    name: 'Paramater',
}
class bar {
    /**
     * Creates a bar of info. Defaults are set, so all you really need to do is set the values.
     * @param {integer} [length = 100] Length of bar graph.
     * @param {Object} [options] Options.
     * @param {Object[]} [options.corners] Corners to build box with. 0: Top left, 1: Top right, 2: Bottom right, 3: Bottom left.
     * @param {Object[]} [options.otherBlocks] Other blocks to build with. 0: Horizantal line, 1: Vertical line, 2: Left middle, 3: Right middle, 4: Empty space, 5: Filled space.
     */
    constructor(length, options) {
        this.length = length || 100;
        this.options = options || def;
        this.options.corners = this.options.corners || def.corners;
        this.options.corners[0] = this.options.corners[0] || def.corners[0];
        this.options.corners[1] = this.options.corners[1] || def.corners[1];
        this.options.corners[2] = this.options.corners[2] || def.corners[2];
        this.options.corners[3] = this.options.corners[3] || def.corners[3];
        this.options.otherBlocks = this.options.otherBlocks || def.otherBlocks;
        this.options.otherBlocks[0] = this.options.otherBlocks[0] || def.otherBlocks[0];
        this.options.otherBlocks[1] = this.options.otherBlocks[1] || def.otherBlocks[1];
        this.options.otherBlocks[2] = this.options.otherBlocks[2] || def.otherBlocks[2];
        this.options.otherBlocks[3] = this.options.otherBlocks[3] || def.otherBlocks[3];
        this.options.otherBlocks[4] = this.options.otherBlocks[4] || def.otherBlocks[4];
        this.options.otherBlocks[5] = this.options.otherBlocks[5] || def.otherBlocks[5];
        this.print = [];
        this.count = 0;
        this.bars = {};
    }
    /**
     * Add a bar to an existing graph.
     * @param {string} name Name to assign to bar.
     * @param {string} unit Unit to write with bar.
     * @param {integer} val1 Smaller value.
     * @param {integer} val2 Larger value.
     */
    addBar(name, unit, val1, val2) {
        if (this.print.length > 0) {
            this.bars[name] = { unit, val1, val2, count: this.count };
            this.print.splice(1, 0, this.options.otherBlocks[1]);
            this.print.splice(2, 0, this.options.otherBlocks[2]);
            for (var i = 0; i < this.length; i++) {
                this.print[2] += this.options.otherBlocks[0];
                this.print[1] += this.options.otherBlocks[4];
            }
            this.print[2] += this.options.otherBlocks[3];
            this.print[1] += this.options.otherBlocks[1]
        } else {
            this.bars[name] = { unit, val1, val2, count: this.count };
            this.print = [`${this.options.corners[0]}`,
            `${this.options.otherBlocks[1]}`,
            `${this.options.corners[3]}`];
            for (var i = 0; i < this.length; i++) {
                this.print[0] += this.options.otherBlocks[0];
                this.print[1] += this.options.otherBlocks[4];
                this.print[2] += this.options.otherBlocks[0];
            }
            this.print[0] += this.options.corners[1];
            this.print[1] += this.options.otherBlocks[1];
            this.print[2] += this.options.corners[2];
        }
        this.count++;
    };
    ticker = setInterval(() => {
        stdout.cursorTo(0, 0);
        stdout.write('\u001B[?25l');
        stdout.clearScreenDown();
        Object.keys(this.bars).forEach((bar) => {
            var act = this.bars[bar];
            var a = act.val1;
            var b = act.val2;
            var f = a / b * this.length;
            var loc = 1 + act.count * 2;
            this.print[loc] = `${this.options.otherBlocks[1]}`;
            for (var i = 0; i < this.length; i++) {
                if (i < f) {
                    this.print[loc] += this.options.otherBlocks[5];
                } else {
                    this.print[loc] += this.options.otherBlocks[4];
                }
            }
            this.print[loc] += this.options.otherBlocks[1];
            this.print[loc] += ` ${bar} ${a}/${b} ${act.unit}`
        });
        this.print.forEach((line) => {
            stdout.write(line);
            stdout.cursorTo(0);
            stdout.moveCursor(0, 1);
        })
    }, 100)
    /**
     * Updates bar with new values.
     * @param {integer} one Smaller value.
     * @param {integer} two Larger value.
     * @param {string} name Name of bar you wish to update.
     */
    update = (one, two, name) => {
        this.bars[name].val1 = one;
        this.bars[name].val2 = two;
    }
}

export default {
    bar,
}