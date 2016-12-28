/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class TranslateComponent extends sczEcs.Component
  {
    public x: number;
    public y: number;
    public z: number;
    public angle: number;
    public rotationPoint: {x: number, y: number};

    public constructor(
      x: number = 0, y: number = 0,
      z: number = 0, angle: number = 0,
      rotationPoint = {x:0, y:0})
    {
      super();
      this.x = x;
      this.y = y;
      this.z = z;
      this.angle = angle;
      this.rotationPoint = rotationPoint;
    }
  }
}
