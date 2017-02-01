/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class CanvasRenderSystem extends sczEcs.SystemBase
  {
    private canvas: HTMLCanvasElement;
    private canvasCtx: CanvasRenderingContext2D;

    constructor(canvasId: string)
    {
        super();
        this.canvas = (<HTMLCanvasElement>document.getElementById(canvasId));
        this.canvasCtx = this.canvas.getContext('2d');
    }

    registerEntity(entity: sczEcs.Entity){
      var renderComponent: RenderComponent
        = entity.getComponentsByType(RenderComponent)[0];

      if(null == renderComponent.svgImage){
        renderComponent.svgImage = new Image();
        renderComponent.svgImage.src = renderComponent.svgUrl;
      }
      super.registerEntity(entity);
    }

    process(){
      // clear canvas
      this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // sort entities by z position
      this.entities.sort(function(a: sczEcs.Entity, b: sczEcs.Entity){
        var aZ = a.getComponentsByType(TranslateComponent)[0].position.z;
        var bZ = b.getComponentsByType(TranslateComponent)[0].position.z;
        return aZ - bZ;
      });

      super.process();
    }

    protected processEntity(entity: sczEcs.Entity){
      var renderComponent: RenderComponent
        = entity.getComponentsByType(RenderComponent)[0];
      var translateComponent: TranslateComponent
        = entity.getComponentsByType(TranslateComponent)[0];

      var position = TranslateComponent.getPositionOf(translateComponent);

      // rendering happens here:
      if(translateComponent.size == null){
        this.canvasCtx.drawImage(
          renderComponent.svgImage,
          position.x - translateComponent.offset.x,
          position.y - translateComponent.offset.y);
        return;
      }

      this.canvasCtx.drawImage(
        renderComponent.svgImage,
        position.x - translateComponent.offset.x,
        position.y - translateComponent.offset.y,
        translateComponent.size.x, translateComponent.size.y);
    }
  }
}
