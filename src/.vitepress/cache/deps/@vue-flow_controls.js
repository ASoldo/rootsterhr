import {
  PanelPosition,
  _sfc_main,
  useVueFlow
} from "./chunk-KDE5WDQL.js";
import {
  Fragment,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  openBlock,
  renderSlot,
  resolveDynamicComponent,
  toRef,
  unref,
  withCtx
} from "./chunk-IY6CN43X.js";

// node_modules/.pnpm/@vue-flow+controls@1.1.1_@vue-flow+core@1.33.5_vue@3.4.21_typescript@5.4.5___vue@3.4.21_typescript@5.4.5_/node_modules/@vue-flow/controls/dist/vue-flow-controls.mjs
var _sfc_main$1 = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _hoisted_1$5 = { class: "vue-flow__controls-button" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$5, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var ControlButton = _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
};
var _hoisted_2$4 = createBaseVNode("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1);
var _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
var PlusIcon = { render: render$4 };
var _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
};
var _hoisted_2$3 = createBaseVNode("path", { d: "M0 0h32v4.2H0z" }, null, -1);
var _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
var MinusIcon = { render: render$3 };
var _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
};
var _hoisted_2$2 = createBaseVNode("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1);
var _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
var FitView = { render: render$2 };
var _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
};
var _hoisted_2$1 = createBaseVNode("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1);
var _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
var Lock = { render: render$1 };
var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
};
var _hoisted_2 = createBaseVNode("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1);
var _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
var Unlock = { render };
var __default__ = {
  name: "Controls",
  compatConfig: { MODE: 3 }
};
var _sfc_main2 = defineComponent({
  ...__default__,
  props: {
    showZoom: { type: Boolean, default: true },
    showFitView: { type: Boolean, default: true },
    showInteractive: { type: Boolean, default: true },
    fitViewParams: {},
    position: { default: () => PanelPosition.BottomLeft }
  },
  emits: ["zoomIn", "zoomOut", "fitView", "interactionChange"],
  setup(__props, { emit }) {
    const {
      nodesDraggable,
      nodesConnectable,
      elementsSelectable,
      setInteractive,
      zoomIn,
      zoomOut,
      fitView,
      viewport,
      minZoom,
      maxZoom
    } = useVueFlow();
    const isInteractive = toRef(() => nodesDraggable.value || nodesConnectable.value || elementsSelectable.value);
    const minZoomReached = toRef(() => viewport.value.zoom <= minZoom.value);
    const maxZoomReached = toRef(() => viewport.value.zoom >= maxZoom.value);
    function onZoomInHandler() {
      zoomIn();
      emit("zoomIn");
    }
    function onZoomOutHandler() {
      zoomOut();
      emit("zoomOut");
    }
    function onFitViewHandler() {
      fitView(__props.fitViewParams);
      emit("fitView");
    }
    function onInteractiveChangeHandler() {
      setInteractive(!isInteractive.value);
      emit("interactionChange", !isInteractive.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main), {
        class: "vue-flow__controls",
        position: _ctx.position
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "top"),
          _ctx.showZoom ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            renderSlot(_ctx.$slots, "control-zoom-in", {}, () => [
              createVNode(ControlButton, {
                class: "vue-flow__controls-zoomin",
                disabled: maxZoomReached.value,
                onClick: onZoomInHandler
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "icon-zoom-in", {}, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(PlusIcon))))
                  ])
                ]),
                _: 3
              }, 8, ["disabled"])
            ]),
            renderSlot(_ctx.$slots, "control-zoom-out", {}, () => [
              createVNode(ControlButton, {
                class: "vue-flow__controls-zoomout",
                disabled: minZoomReached.value,
                onClick: onZoomOutHandler
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "icon-zoom-out", {}, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(MinusIcon))))
                  ])
                ]),
                _: 3
              }, 8, ["disabled"])
            ])
          ], 64)) : createCommentVNode("", true),
          _ctx.showFitView ? renderSlot(_ctx.$slots, "control-fit-view", { key: 1 }, () => [
            createVNode(ControlButton, {
              class: "vue-flow__controls-fitview",
              onClick: onFitViewHandler
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "icon-fit-view", {}, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(FitView))))
                ])
              ]),
              _: 3
            })
          ]) : createCommentVNode("", true),
          _ctx.showInteractive ? renderSlot(_ctx.$slots, "control-interactive", { key: 2 }, () => [
            _ctx.showInteractive ? (openBlock(), createBlock(ControlButton, {
              key: 0,
              class: "vue-flow__controls-interactive",
              onClick: onInteractiveChangeHandler
            }, {
              default: withCtx(() => [
                isInteractive.value ? renderSlot(_ctx.$slots, "icon-unlock", { key: 0 }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(Unlock))))
                ]) : createCommentVNode("", true),
                !isInteractive.value ? renderSlot(_ctx.$slots, "icon-lock", { key: 1 }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(Lock))))
                ]) : createCommentVNode("", true)
              ]),
              _: 3
            })) : createCommentVNode("", true)
          ]) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["position"]);
    };
  }
});
export {
  ControlButton,
  _sfc_main2 as Controls
};
//# sourceMappingURL=@vue-flow_controls.js.map
