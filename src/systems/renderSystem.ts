/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class RenderSystem extends sczEcs.SystemBase
  {
    private canvas: HTMLElement;

    constructor(canvasId: string)
    {
        super();
        this.canvas = <HTMLElement>document.getElementById(canvasId);
    }


    protected processEntity(entity: sczEcs.Entity){
      var renderComponent: RenderComponent
        = entity.getComponentsByType(RenderComponent)[0];

        // rendering happens here:
        // todo: rendering
    }
  }
}
