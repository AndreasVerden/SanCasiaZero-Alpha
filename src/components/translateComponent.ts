/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class TranslateComponent extends sczEcs.Component
  {
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;
    public angle: number = 0;
    public rotationPoint = {x:0, y:0};
  }
}
