/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class VelocitySystem extends sczEcs.SystemBase
  {
    protected processEntity(entity: sczEcs.Entity) {
      var velocityComponent: VelocityComponent
        = entity.getComponentsByType(VelocityComponent)[0];

      var translateComponent: TranslateComponent
        = entity.getComponentsByType(TranslateComponent)[0];

      translateComponent.position.x += velocityComponent.x;
      translateComponent.position.y += velocityComponent.y;
      translateComponent.position.z += velocityComponent.z;
      translateComponent.angle =
          (translateComponent.angle + velocityComponent.rotation) % 360;
    }
  }
}
