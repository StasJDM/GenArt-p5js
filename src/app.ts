import P5 from 'p5';
import 'p5/lib/addons/p5.dom';
import { HEIGHT, WIDTH } from './consts';

import PixelArt from './arts/pixel-art';

const sketch = (p5: P5) => {
  p5.setup = () => {
    p5.createCanvas(WIDTH, HEIGHT);

    new PixelArt(p5).draw();
  };

  p5.draw = () => {};
};

new P5(sketch);
