/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />
/// <reference path="../../node_modules/@types/sat/index.d.ts" />

namespace sczGeb
{
  export class CollisionSystem extends sczEcs.SystemBase
  {
    protected processEntity(entity: sczEcs.Entity)
    {
      var translate: TranslateComponent =
        entity.getComponentsByType(TranslateComponent)[0];
      var physics: PhysicsComponent =
        entity.getComponentsByType(PhysicsComponent)[0];

      var rigid = physics.rigidBody;
      this.rigidSetOffset(rigid, translate.position);

      // foreach registered entity as other
      for(let other of this.entities)
      {
        // if not entity is other
        if(entity != other)
        {
          // other.rigid.transform
          var otherTranslate: TranslateComponent =
            other.getComponentsByType(TranslateComponent)[0];
          var otherPhysics: PhysicsComponent =
            other.getComponentsByType(PhysicsComponent)[0];

          var otherRigid = otherPhysics.rigidBody;

          this.rigidSetOffset(otherRigid, otherTranslate.position);

          if(SAT.testPolygonPolygon(rigid, otherRigid))
          {
            var collision: CollisionComponent
              = entity.getComponentsByType(CollisionComponent)[0]

            for(let collisionHandler of collision.collisionHandlers)
            {
                collisionHandler(entity, other);
            }
          }
        }
      }
    }
    protected rigidSetOffset(
      rigidBody: SAT.Polygon,
      newOffset: {x: number, y: number})
    {
      if(rigidBody.offset.x != newOffset.x
          || rigidBody.offset.y != newOffset.y){
        rigidBody.setOffset(new SAT.Vector(newOffset.x, newOffset.y));
      }
    }
  }
}
