/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class TranslateComponent extends sczEcs.Component
  {
    public position: {x: number, y: number, z: number};
    public angle: number;
    public offset: {x: number, y: number};
    public size: {x: number, y: number};
    public parent: TranslateComponent;

    public constructor(
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      angle: number = 0,
      offset: {x: number, y: number} = {x: 0, y: 0},
      size: {x: number, y: number} = null,
      parent: TranslateComponent = null)
    {
      super();
      this.position = position;
      this.angle = angle;
      this.offset = offset;
      this.size = size;
      this.parent = parent;
    }

    static getPositionOf(translateComponent: TranslateComponent):
      {x: number, y: number, z: number}
    {
      var result: {x: number, y: number, z: number} = {
        x: translateComponent.position.x,
        y: translateComponent.position.y,
        z: translateComponent.position.z
      };
      while((translateComponent = translateComponent.parent) != null){
        result.x += translateComponent.position.x;
        result.y += translateComponent.position.y;
        result.z += translateComponent.position.z;
      }
      return result;
    }
  }
}
