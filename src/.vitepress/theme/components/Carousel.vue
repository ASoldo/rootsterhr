<template>
  <div class="carousel">
    <div class="carousel-inner">
      <button class="nav-button left" :class="{ hidden: activeSlide === 0 }" :disabled="activeSlide === 0"
        @click="activeSlide--">
        &#10094;
      </button>

      <button class="nav-button right" :class="{ hidden: activeSlide === props.slides?.length - 1 }"
        :disabled="activeSlide === props.slides?.length - 1" @click="activeSlide++">
        &#10095;
      </button>

      <div ref="target" class="slides-container" :style="{ transform: `translateX(-${activeSlide * 100}%)` }">
        <div class="slide" v-for="(slide, index) in props.slides" :key="index">
          <img :src="slide.image" class="slide-image" alt="Slide image" />
          <div class="slide-content">
            <div class="slide-title">{{ slide.content }}</div>
            <div class="slide-text">{{ slide.content_text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div v-for="(_, index) in props.slides" :key="`pagination-${index}`" class="pagination-dot"
        :class="{ active: index === activeSlide }" @click="activeSlide = index"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults } from "vue";
import { useSwipe } from "@vueuse/core";

type Slides = {
  content: string;
  content_text: string;
  color: string;
  image: string;
};

const target = ref<HTMLElement | null>(null);
const activeSlide = ref(0);
const props = withDefaults(
  defineProps<{
    slides: Slides[];
  }>(),
  {
    slides: () => [] as Slides[],
  },
);

useSwipe(target, {
  passive: true,
  onSwipeEnd(_: TouchEvent, direction) {
    if (direction === "right" && activeSlide.value > 0) {
      activeSlide.value--;
    } else if (
      direction === "left" &&
      activeSlide.value < props.slides?.length - 1
    ) {
      activeSlide.value++;
    }
  },
});
</script>

<style scoped>
.slide-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel {
  position: relative;
  overflow-x: hidden;
  padding-top: 20px;
}

.carousel-inner {
  position: relative;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: #009bd4;
  border: 2px solid;
  border-radius: 9999px;
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.left {
  left: 16px;
}

.right {
  right: 16px;
}

.hidden {
  display: none;
}

.slides-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.slide {
  flex: none;
  width: 100%;
  height: auto;
  /* 96 equivalent */
  text-align: center;
  color: white;
}

.slide-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;
  bottom: 0;
}

.slide-title {
  font-size: 24px;
  font-weight: bold;
}

.slide-text {
  font-size: 14px;
}

.pagination {
  display: flex;
  justify-content: center;
  padding: 8px;
}

.pagination-dot {
  width: 16px;
  height: 16px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 4px;
  cursor: pointer;
}

.pagination-dot.active {
  background-color: #009bd4;
}
</style>
