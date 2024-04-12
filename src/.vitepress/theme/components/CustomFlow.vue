<template>
  <div style="width: 100%; height: 500px; position: relative; overflow: hidden">
    <VueFlow fit-view-on-init :nodes-draggable="false" :default-viewport="{ zoom: 0.5 }" :max-zoom="2" :min-zoom="0.1"
      v-model="props.elements">
      <Background />
      <MiniMap />
      <Controls />
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults } from "vue";
import { Background } from "@vue-flow/background";
import { Elements, Position, MarkerType } from "@vue-flow/core";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";

const props = withDefaults(
  defineProps<{
    elements: Elements[];
  }>(),
  {
    elements: [] as never,
  },
);

const { addEdges } = useVueFlow();
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
  font-size: 1.5rem;
  font-weight: bold;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}

.vue-flow__edge-path {
  stroke: limegreen;
  stroke-width: 1px;
  stroke-opacity: 1;
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
