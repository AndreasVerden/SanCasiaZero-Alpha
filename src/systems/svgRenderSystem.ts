/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class SvgRenderSystem extends sczEcs.SystemBase
  {
    private canvas: HTMLElement;

    constructor(canvasId: string)
    {
        super();
        this.canvas = <HTMLElement>document.getElementById(canvasId);
    }

    registerEntity(entity: sczEcs.Entity){
      var renderComponent: RenderComponent
        = entity.getComponentsByType(RenderComponent)[0];

      if(null == renderComponent.svgElement){
        var svgElement = document.createElement("object");
        svgElement.setAttribute("type", "image/svg+xml");
        svgElement.setAttribute("data", renderComponent.svgUrl);

        renderComponent.svgElement = svgElement;
        this.canvas.appendChild(svgElement);
      }
      super.registerEntity(entity);
    }

    protected processEntity(entity: sczEcs.Entity) {
      var renderComponent: RenderComponent
        = entity.getComponentsByType(RenderComponent)[0];

      var translateComponent: TranslateComponent
        = entity.getComponentsByType(TranslateComponent)[0];

      renderComponent.svgElement.style.top = translateComponent.position.y + "px";
      renderComponent.svgElement.style.left = translateComponent.position.x + "px";
      renderComponent.svgElement.style.zIndex = translateComponent.position.z;
    }
  }
}
