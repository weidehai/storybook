<template>
  <div class="container colorBox">
    <div class="panel">
      <div class="light"></div>
      <div class="dark"></div>
    </div>
    <div class="slider"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import './colorPick.scss';

export default Vue.extend({
  name: 'colorPick',
  data() {
    return {
      panelPosition: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    onSliderChange() {
      updateColor();
      return 0;
    },
    onPanelChange() {
      updateColor();
      return 0;
    },
  },
});
</script>
