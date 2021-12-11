AFRAME.registerComponent('draw-vr-canvas', {

    init: function () {
      this.canvas = document.getElementById("my-canvas");
      this.ctx = this.canvas.getContext('2d');
  
      // we'll update this manually
      this.texture = null;
      // wait until the element is ready
      this.el.addEventListener('loaded', e => {
        // create the texture
        this.texture = new THREE.CanvasTexture(this.canvas);
  
      });
  
   
      //Color blanco para las letras
      
      this.ctx.fillStyle = "#8c004b";
  
      this.ctx.font = "115px Arial ";
      this.ctx.fillText("Menú", 10, 100);
  

      this.el.addEventListener('mouseenter', function () {
  
      });
    },
    tick: function () {
      // if the texture is created - update it
      if (this.texture) this.texture.needsUpdate = true
    }
  });