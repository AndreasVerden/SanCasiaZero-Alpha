/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class VelocityComponent extends sczEcs.Component
  {
    public x: number;
    public y: number;
    public z: number;
    public rotation: number;

    public constructor(x: number, y: number, z: number,
      rotation: number)
    {
      super();
      this.x = x;
      this.y = y;
      this.z = z;
      this.rotation = rotation;
    }
  }
}
