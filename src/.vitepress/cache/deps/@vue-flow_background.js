import {
  useVueFlow
} from "./chunk-KDE5WDQL.js";
import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  h,
  normalizeStyle,
  openBlock,
  renderSlot,
  toRef,
  unref
} from "./chunk-IY6CN43X.js";

// node_modules/.pnpm/@vue-flow+background@1.3.0_@vue-flow+core@1.33.5_vue@3.4.21_typescript@5.4.5___vue@3.4.21_typescript@5.4.5_/node_modules/@vue-flow/background/dist/vue-flow-background.mjs
var BackgroundVariant = ((BackgroundVariant2) => {
  BackgroundVariant2["Lines"] = "lines";
  BackgroundVariant2["Dots"] = "dots";
  return BackgroundVariant2;
})(BackgroundVariant || {});
var LinePattern = function({ dimensions, size, color }) {
  return h("path", {
    "stroke": color,
    "stroke-width": size,
    "d": `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
  });
};
var DotPattern = function({ radius, color }) {
  return h("circle", { cx: radius, cy: radius, r: radius, fill: color });
};
({
  [BackgroundVariant.Lines]: LinePattern,
  [BackgroundVariant.Dots]: DotPattern
});
var DefaultBgColors = {
  [BackgroundVariant.Dots]: "#81818a",
  [BackgroundVariant.Lines]: "#eee"
};
var _hoisted_1 = ["id", "x", "y", "width", "height", "patternTransform"];
var _hoisted_2 = {
  key: 2,
  height: "100",
  width: "100"
};
var _hoisted_3 = ["fill"];
var _hoisted_4 = ["x", "y", "fill"];
var __default__ = {
  name: "Background",
  compatConfig: { MODE: 3 }
};
var _sfc_main = defineComponent({
  ...__default__,
  props: {
    id: {},
    variant: { default: () => BackgroundVariant.Dots },
    gap: { default: 20 },
    size: { default: 1 },
    lineWidth: { default: 1 },
    patternColor: {},
    color: {},
    bgColor: {},
    height: { default: 100 },
    width: { default: 100 },
    x: { default: 0 },
    y: { default: 0 },
    offset: { default: 2 }
  },
  setup(__props) {
    const { id: vueFlowId, viewport } = useVueFlow();
    const background = computed(() => {
      const [gapX, gapY] = Array.isArray(__props.gap) ? __props.gap : [__props.gap, __props.gap];
      const scaledGap = [gapX * viewport.value.zoom || 1, gapY * viewport.value.zoom || 1];
      const scaledSize = __props.size * viewport.value.zoom;
      const patternOffset = __props.variant === BackgroundVariant.Dots ? [scaledSize / __props.offset, scaledSize / __props.offset] : [scaledGap[0] / __props.offset, scaledGap[1] / __props.offset];
      return {
        scaledGap,
        offset: patternOffset,
        size: scaledSize
      };
    });
    const patternId = toRef(() => `pattern-${vueFlowId}${__props.id ? `-${__props.id}` : ""}`);
    const patternColor = toRef(() => __props.color || __props.patternColor || DefaultBgColors[__props.variant || BackgroundVariant.Dots]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "vue-flow__background vue-flow__container",
        style: normalizeStyle({
          height: `${_ctx.height > 100 ? 100 : _ctx.height}%`,
          width: `${_ctx.width > 100 ? 100 : _ctx.width}%`
        })
      }, [
        renderSlot(_ctx.$slots, "pattern-container", { id: patternId.value }, () => [
          createBaseVNode("pattern", {
            id: patternId.value,
            x: unref(viewport).x % background.value.scaledGap[0],
            y: unref(viewport).y % background.value.scaledGap[1],
            width: background.value.scaledGap[0],
            height: background.value.scaledGap[1],
            patternTransform: `translate(-${background.value.offset[0]},-${background.value.offset[1]})`,
            patternUnits: "userSpaceOnUse"
          }, [
            renderSlot(_ctx.$slots, "pattern", {}, () => [
              _ctx.variant === unref(BackgroundVariant).Lines ? (openBlock(), createBlock(unref(LinePattern), {
                key: 0,
                size: _ctx.lineWidth,
                color: patternColor.value,
                dimensions: background.value.scaledGap
              }, null, 8, ["size", "color", "dimensions"])) : _ctx.variant === unref(BackgroundVariant).Dots ? (openBlock(), createBlock(unref(DotPattern), {
                key: 1,
                color: patternColor.value,
                radius: background.value.size / _ctx.offset
              }, null, 8, ["color", "radius"])) : createCommentVNode("", true),
              _ctx.bgColor ? (openBlock(), createElementBlock("svg", _hoisted_2, [
                createBaseVNode("rect", {
                  width: "100%",
                  height: "100%",
                  fill: _ctx.bgColor
                }, null, 8, _hoisted_3)
              ])) : createCommentVNode("", true)
            ])
          ], 8, _hoisted_1)
        ]),
        createBaseVNode("rect", {
          x: _ctx.x,
          y: _ctx.y,
          width: "100%",
          height: "100%",
          fill: `url(#${patternId.value})`
        }, null, 8, _hoisted_4),
        renderSlot(_ctx.$slots, "default", { id: patternId.value })
      ], 4);
    };
  }
});
export {
  _sfc_main as Background,
  BackgroundVariant
};
//# sourceMappingURL=@vue-flow_background.js.map
