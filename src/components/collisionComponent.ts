/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class CollisionComponent extends sczEcs.Component
  {
    public collisionHandlers:
      ((me: sczEcs.Entity, other: sczEcs.Entity) => void) [];

    public constructor(
      collisionHandlers:
        ((me: sczEcs.Entity, other: sczEcs.Entity) => void) [])
    {
      super();
      this.collisionHandlers = collisionHandlers;
    }
  }
}
