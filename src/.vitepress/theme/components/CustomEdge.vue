<template>
  <BaseEdge :path="path[0]" :marker-end="markerEnd"
    :style="{ stroke: 'limegreen', strokeWidth: '1px', strokeOpacity: 1 }" />
  <EdgeText :options="edgeText" :x="path[1]" :y="path[2]" :label="props.label" :label-show-bg="true"
    :label-bg-style="props.labelBgStyle" />
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { EdgeProps } from "@vue-flow/core";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useVueFlow,
  Position,
  getSmoothStepPath,
  EdgeLabelOptions,
  EdgeText,
} from "@vue-flow/core";

const props = defineProps<EdgeProps>();
const edgeText = ref<EdgeLabelOptions>();

const oppositeDirection = {
  [Position.Top]: Position.Bottom,
  [Position.Bottom]: Position.Top,
  [Position.Left]: Position.Right,
  [Position.Right]: Position.Left,
};

const { findNode } = useVueFlow();

const isSourceParentToChild = computed(() => isParentToChild("target"));

const isTargetParentToChild = computed(() => isParentToChild("source"));

function isParentToChild(direction: "source" | "target") {
  const sourceNode = findNode(props.source);
  const targetNode = findNode(props.target);

  if (!sourceNode || !targetNode) {
    return false;
  }

  const [parent, child] =
    direction === "source"
      ? [targetNode, sourceNode]
      : [sourceNode, targetNode];

  if (child.parentNode && child.parentNode === parent.id) {
    return true;
  }

  return false;
}

const path = computed(() =>
  getSmoothStepPath({
    ...props,
    sourcePosition: isSourceParentToChild.value
      ? oppositeDirection[props.sourcePosition]
      : props.sourcePosition,
    targetPosition: isTargetParentToChild.value
      ? oppositeDirection[props.targetPosition]
      : props.targetPosition,
  }),
);
console.log("Path: ", path.value);
console.log("Props: ", props);
</script>
