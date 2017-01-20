/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class CanvasRenderSystem extends sczEcs.SystemBase
  {
    private canvasCtx: CanvasRenderingContext2D;

    constructor(canvasId: string)
    {
        super();
        this.canvasCtx =
          (<HTMLCanvasElement>document.getElementById(canvasId))
          .getContext('2d');
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

      // rendering happens here:
      this.canvasCtx.drawImage(
        renderComponent.svgImage,
        translateComponent.position.x,
        translateComponent.position.y);
    }
  }
}
