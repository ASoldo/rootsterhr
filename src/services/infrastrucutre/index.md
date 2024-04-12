# Infrastructure

<script setup>
import { ref } from "vue";
import { Background } from "@vue-flow/background";
import { Position, MarkerType } from "@vue-flow/core";

const elements = ref([
  {
    id: "1",
    position: { x: 0, y: 0 },
    label: "Server",
    type: "output",
    targetPosition: Position.Bottom,
    class: "grad",
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
</script>

## Demo

### This is our demo for Custom Flow

<CustomFlow :elements="elements" />
