<template>
  <div
    :class="['divider', _orientation]"
    :style="{
      backgroundColor: _color,
      height: _orientation === 'horizontal' ? _height : '100%',
      width: _orientation === 'horizontal' ? '100%' : _height,
    }"
  ></div>
</template>

<script lang="ts" setup>
const {height, color, orientation} = defineProps<{
  height?: string; 
  color?: string; 
  orientation?: 'horizontal' | 'vertical'; 
}>();

const defaultHeight = '1px';
const defaultColor = 'var(--surface-subtle)';
const defaultOrientation = 'horizontal';

const _height = height || defaultHeight;
const _color = color || defaultColor;
const _orientation = orientation || defaultOrientation;
</script>

<style scoped lang="css">
.divider {
  margin: 1rem 0;
}

.horizontal {
  width: 100%;
  height: var(--height, 1px);
}

.vertical {
  height: 100%;
  width: var(--height, 1px);
}
</style>
