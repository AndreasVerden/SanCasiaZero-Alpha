/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />
/// <reference path="../../node_modules/@types/sat/index.d.ts" />

namespace sczGeb
{
  export class PhysicsComponent implements sczEcs.Component
  {
    public rigidBody: SAT.Polygon;

    public constructor(rigidBody: {x: number, y:number}[])
    {
      var rbPoints: SAT.Vector[] = [];
      for(let point of rigidBody){
        rbPoints.push(new SAT.Vector(point.x, point.y));
      }
      this.rigidBody = new SAT.Polygon(new SAT.Vector(0,0), rbPoints);
    }
  }
}
