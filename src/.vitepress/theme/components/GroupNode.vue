<template>
  <div class="vue-flow__group-node">
    <Handle :id="`${id}-target`" type="target" :position="Position.Top" />

    <img :src="props.data.imgSrc" alt="placeholder" width="40" />
    <strong>Group {{ label }}</strong>

    <Handle :id="`${id}-source`" type="source" :position="Position.Bottom" />
  </div>
</template>

<script lang="ts" setup>
import { Handle, Position, getNodesInside, useVueFlow } from "@vue-flow/core";
import type { NodeProps } from "@vue-flow/core";

const props = defineProps<NodeProps>();
</script>

<style>
.vue-flow__group-node {
  /* padding: 15px; */
  /* width: 300px; */
  /* height: 300px; */
  /* border: solid 1px black; */
  /* background: whitesmoke; */
}
</style>
