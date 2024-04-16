<template>
  <div style="width: 100%; height: 500px; position: relative; overflow: hidden">
    <!-- <button popovertarget="pop">Toggle</button> -->
    <!-- <div id="pop" popover>Olla</div> -->
    <VueFlow fit-view-on-init :nodes-draggable="false" :default-viewport="{ zoom: 0.5 }" :max-zoom="2" :min-zoom="0.1"
      :nodes="props.nodes" :edges="props.edges" v-model="props.nodes" :connection-mode="ConnectionMode.Loose">
      <Background />
      <MiniMap />
      <Controls />
      <Panel position="top-left">
        <img style="background: whitesmoke; padding: 3px; border-radius: 50%" width="40" src="/logo-black.svg" />
      </Panel>

      <template #node-custom="props">
        <img width="40" :src="props.data.imgSrc" />
        <span>{{ props.label }} {{ props.id }}</span>
        <Handle :id="`${props.id}topt`" :position="Position.Top" type="target" />
        <Handle :id="`${props.id}rightt`" :position="Position.Right" type="target" />
        <Handle :id="`${props.id}leftt`" :position="Position.Left" type="target" />
        <Handle :id="`${props.id}bottomt`" :position="Position.Bottom" type="target" />

        <Handle :id="`${props.id}tops`" :position="Position.Top" type="source" />
        <Handle :id="`${props.id}rights`" :position="Position.Right" type="source" />
        <Handle :id="`${props.id}lefts`" :position="Position.Left" type="source" />
        <Handle :id="`${props.id}bottoms`" :position="Position.Bottom" type="source" />
      </template>

      <template #edge-custom="edgeProps">
        <CustomEdge v-bind="edgeProps" />
      </template>
      <template #node-group="groupNodeProps">
        <GroupNode v-bind="groupNodeProps" />
      </template>
    </VueFlow>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults } from "vue";
import { Background } from "@vue-flow/background";
import { Elements, Position, MarkerType, ConnectionMode } from "@vue-flow/core";
import { VueFlow, Handle, Panel, BezierEdge } from "@vue-flow/core";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
import GroupNode from "./GroupNode.vue";
import CustomEdge from "./CustomEdge.vue";

const props = withDefaults(
  defineProps<{
    nodes: [];
    edges: [];
  }>(),
  {
    nodes: [] as never,
    edges: [] as never,
  },
);
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
  color: black;
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
