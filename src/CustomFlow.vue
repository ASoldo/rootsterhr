<template>
  <div style="width: 100%; height: 500px; position: relative; overflow: hidden">
    <VueFlow fit-view-on-init :nodes-draggable="false" :default-viewport="{ zoom: 0.5 }" :max-zoom="2" :min-zoom="0.1"
      v-model="elements">
      <Background />
      <MiniMap />
      <Controls />
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Background } from "@vue-flow/background";
import { Elements, Position, MarkerType } from "@vue-flow/core";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";

const { addEdges } = useVueFlow();
const elements = ref<Elements>([
  {
    id: "1",

    position: { x: 0, y: 0 },
    label: "Server",
    type: "output",
    targetPosition: Position.Bottom,
    class: "grad",
    // style: {
    //   color: "black",
    //   backgroundColor: "cyan",
    // },
  },
  {
    id: "2",
    class: "grad-green",
    position: { x: -350, y: 250 },
    label: "Web Site",
    type: "input",
    sourcePosition: Position.Top,
    style: {
      backgroundColor: "rgba(16, 185, 129, 0.5)",
      width: "200px",
      height: "300px",
    },
  },
  {
    id: "2a",
    class: "grad",
    position: { x: 50, y: 40 },
    label: "child",
    parentNode: "2",
  },
  {
    id: "2a1",
    class: "grad",
    position: { x: 50, y: 120 },
    label: "child",
    parentNode: "2",
  },
  {
    id: "3",
    class: "grad",
    position: { x: 150, y: 250 },
    label: "Game",
    type: "input",
    sourcePosition: Position.Top,
  },
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
  },
  {
    id: "e1-3",
    source: "3",
    target: "1",
    animated: true,
    label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.Arrow,
    type: "smoothstep",
  },
  {
    id: "e2a-2a1",
    source: "2a",
    target: "2a1",
    animated: true,
    label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
  },
]);

// onMounted(() => {
//   addEdges([
//     {
//       source: "1",
//       target: "2",
//     },
//   ]);
// });
</script>

<style>
/* import the necessary styles for Vue Flow to work */
@import "@vue-flow/core/dist/style.css";

/* import the default theme, this is optional but generally recommended */
@import "@vue-flow/core/dist/theme-default.css";

@import "@vue-flow/controls/dist/style.css";

.vue-flow__node-default,
.vue-flow__node-input,
.vue-flow__node-output {
  padding: 10px;
  border-radius: 3px;
  width: 100px;
  /* 150px breaks left edge label */
  font-size: 12px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  color: black;
  color: var(--vf-node-text);
  background-color: var(--vf-node-bg);
  border-color: var(--vf-node-color);
}

.vue-flow__node {
  z-index: -1 !important;
}

.grad {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
}

.grad-green {
  background-color: #85ffbd;
  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
}
</style>
