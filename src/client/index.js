import * as PIXI from 'pixi.js';
import './style.css';

const app = new PIXI.Application({
  antialias: true,
  transparent: false,
  resolution: window.devicePixelRatio
});

document.body.insertBefore(app.view, document.body.firstChild);

app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

// function step() {
//   // tree.rotation += deg2rad(360 / 60) * dt; // full rotation per second
//   // tree.x += 1 * dt;
//   // tree.scale.x = 1 + Math.sin(count) * 0.04;
//   // tree.scale.y = 1 + Math.cos(count) * 0.04;
//   // count += 0.1;
// }
//
// PIXI.loader.add([{ name: 'tree', url: 'assets/sprites/s_tree.png' }])
// .load((loader, resources) => {
//   // create sprites in a loop and put under sprites object
//   tree = new PIXI.Sprite(resources.tree.texture);
//   tree.position.set(300);
//   tree.anchor.set(0.5);
//   tree.scale.set(4);
//
//   app.stage.addChild(tree);
//
//   app.ticker.add(step);
// });
