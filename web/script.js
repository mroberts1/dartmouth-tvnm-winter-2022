  var hydra = new Hydra({
        canvas: document.getElementById("myCanvas"),
        detectAudio: false
      })
     src(o0)
 .saturate(1.01)
 .scale(.999)
 .color(1.01,1.01,1.01)
 .hue(.01)
 .modulateHue(src(o1).hue(.3).posterize(-1).contrast(.7),2)
  .layer(src(o1)
         .luma()
         .mult(gradient(1)
               .saturate(.9)))
  .out(o0)

noise(1, .2)
  .rotate(2,.5)
  .layer(src(o0)
  .scrollX(.2))
  .out(o1)

render(o0)
      
      // create functions to use with buttons
      function useCamera() {
        s0.initCam()
        src(s0).color(-1, Math.random()*2, 1).colorama().out()
      }
      
      function feedback() {
        src(o1)
          .layer(src(o0).mask(shape(4, 0.4, 0)))
          .scrollX([0.005, -0.005])
          .scrollY(0.005)
          .out(o1)
        
        render(o1)
      }