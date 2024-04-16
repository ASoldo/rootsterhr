<script lang="ts" setup>
import { computed } from "vue";
import type { EdgeProps } from "@vue-flow/core";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useVueFlow,
  Position,
} from "@vue-flow/core";

const props = defineProps<EdgeProps>();

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
  getBezierPath({
    ...props,
    sourcePosition: isSourceParentToChild.value
      ? oppositeDirection[props.sourcePosition]
      : props.sourcePosition,
    targetPosition: isTargetParentToChild.value
      ? oppositeDirection[props.targetPosition]
      : props.targetPosition,
  }),
);
</script>

<template>
  <BaseEdge :path="path[0]" :marker-end="markerEnd" :style="{ stroke: 'green', strokeWidth: '2px' }" />
</template>
