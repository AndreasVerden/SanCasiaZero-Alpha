/// <reference path="../../lib/Scz-Ecs/obj/sczEcs" />

namespace sczGeb
{
  export class RenderComponent implements sczEcs.Component
  {
    public svgUrl: string;

    public constructor(svgUrl: string)
    {
      this.svgUrl = svgUrl;
    }
  }
}
