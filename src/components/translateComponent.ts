/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class TranslateComponent extends sczEcs.Component
  {
    public position: {x: number, y: number, z: number};
    public angle: number;
    public offset: {x: number, y: number};

    public constructor(
      position: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0},
      angle: number = 0,
      offset: {x: number, y: number} = {x: 0, y: 0})
    {
      super();
      this.position = position;
      this.angle = angle;
      this.offset = offset;
    }
  }
}
