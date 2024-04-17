# Infrastructure

## Demo

### This is our demo for Custom Flow

<CustomFlow :nodes="nodes" :edges="edges" />

<script setup>
import { ref } from "vue";
import { Background } from "@vue-flow/background";
import { Position, MarkerType } from "@vue-flow/core";

const edges = ref([
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "1bottoms",
    targetHandle: "2topt",
    animated: true,
    label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
  },
  {
    id: "e2-2a",
    source: "2",
    target: "2a",
    sourceHandle: "2tops",
    targetHandle: "2abottomt",
    animated: true,
    label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
  },
   {
    id: "e2a-2a1",
    source: "2a",
    target: "2a1",
    sourceHandle: "2tops",
    targetHandle: "2bottomt",
    animated: true,
    label: "http request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
    },
   {
    id: "e2a-2a1",
    source: "2a",
    target: "2a1",
    sourceHandle: "2arights",
    targetHandle: "2a1rightt",
    animated: true,
    label: "http request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
    },
   {
    id: "e2a-2",
    source: "2a",
    target: "2",
    sourceHandle: "2arights",
    targetHandle: "2rightt",
    animated: true,
    label: "http request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
    },
  // {
  //   id: "e2a1-2",
  //   source: "2a1",
  //   target: "2",
  //   sourceHandle: "2a1bottoms",
  //   targetHandle: "2bottomt",
  //   animated: true,
  //   // label: "HTTP Request",
  //   labelBgStyle: { fill: "orange" },
  //   markerEnd: MarkerType.ArrowClosed,
  //   type: "smoothstep",
  // },
   {
    id: "e2a1-2",
    source: "2a1",
    target: "2",
    sourceHandle: "2a1lefts",
    targetHandle: "2leftt",
    animated: true,
    // label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
  },
  //  {
  //   id: "e2-3",
  //   source: "2",
  //   target: "3",
  //   sourceHandle: "2bottoms",
  //   targetHandle: "3bottomt",
  //   animated: true,
  //   label: "HTTP Request",
  //   labelBgStyle: { fill: "orange" },
  //   markerEnd: MarkerType.ArrowClosed,
  //   type: "smoothstep",
  // },
   {
    id: "e2a1-3",
    source: "2a1",
    target: "3",
    sourceHandle: "2a1rights",
    targetHandle: "3rightt",
    animated: true,
    label: "HTTP Request",
    labelBgStyle: { fill: "orange" },
    markerEnd: MarkerType.ArrowClosed,
    type: "smoothstep",
  },
  {
    id: 'e9-10',
    source: '9',
    target: '9a',
    sourceHandle: '9-target',
    type: 'custom',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'green',
    },
  },
  {
    id: 'e9a-9b',
    source: '9a',
    target: '9b',
    type: 'custom',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'green',
    },
  },
  {
    id: 'e9b-9',
    source: '9b',
    target: '9',
    targetHandle: '9-source',
    type: 'custom',
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: 'green',
    },
  },
]);

const nodes = ref([
  {
    id: "9",
    position: { x: 400, y: 0 },
    label: "Custom",
    type: "group",
    class: "grad-green",
    style: {
      width: "200px",
      height: "200px",
    },
    data: {
      imgSrc: "/logo-black.svg"
    }
  },
  {
    id: '9a',
    label: 'Child a',
    class: "grad",
    position: { x: 0, y: 50 },
    parentNode: '9',
  },
  {
    id: '9b',
    label: 'Child b',
    class: "grad",
    position: { x: 0, y: 120 },
    parentNode: '9',
  },
  {
    id: "1",
    position: { x: 0, y: 0 },
    label: "Server",
    type: "custom",
    class: "grad",
    style: {
      width: "200px",
      height: "100px",
    },
    data: {
      imgSrc: "/logo-black.svg"
    }
  },
  {
    id: "2",
    class: "grad-green",
    position: { x: -350, y: 250 },
    label: "Web Site",
    type: "custom",
    style: {
      backgroundColor: "rgba(16, 185, 129, 0.5)",
      width: "300px",
      height: "400px",
    },
    data: {
      imgSrc: "/logo-black.svg"
    }
  },
  {
    id: "2a",
    class: "grad",
    position: { x: 50, y: 100 },
    label: "child",
    parentNode: "2",
    type: "custom",
    style: {
      width: "200px",
      height: "100px",
    },
    data: {
      imgSrc: "/logo-black.svg"
    }
  },
  {
    id: "2a1",
    class: "grad",
    position: { x: 50, y: 250 },
    label: "child",
    parentNode: "2",
    type: "custom",
            style: {
      width: "200px",
      height: "100px",
    },
    data: {
      imgSrc: "/logo-black.svg"
    }
  },
  {
    id: "3",
    class: "grad",
    position: { x: 150, y: 250 },
    label: "Game",
    type: "custom",
      style: {
      width: "200px",
      height: "100px",
    },
    data: {
      imgSrc: "/logo-black.svg"
    }
  },

]);

</script>
