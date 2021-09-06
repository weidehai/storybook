<template>
  <div class="container">
    <div class="color-box">
      <div class="panel">
        <div class="light"></div>
        <div class="dark"></div>
        <div class="selector" ref="selector"></div>
      </div>
      <div class="slider-bar">
        <div class="slider" ref="slider"></div>
      </div>
      <div class="color-input">
        <input type="text" v-model="pickColor" />
      </div>
    </div>
    <div class="color-preview"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import './colorPick.scss';
import Dragable from 'drag-element';
import { hsv2rgb, rgb2hex } from '../utils/color';

export default Vue.extend({
  name: 'colorPick',
  data() {
    return {
      panelPosition: {
        x: 0,
        y: 0,
      },
      pickColor: '#000',
      hue: 0,
      saturation: 80,
      value: 100,
    };
  },
  mounted() {
    this.enbaleDrag();
  },
  watch: {
    pickColor(value) {
      document.documentElement.style.setProperty('--pick-color', value);
    },
  },
  computed: {},
  methods: {
    enbaleDrag() {
      const elSlider = this.$refs.slider as HTMLElement;
      const elSelecor = this.$refs.selector as HTMLElement;
      const slider = new Dragable(elSlider, {
        boundary: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 207,
        },
        mode: 'vertical',
      });
      const selector = new Dragable(elSelecor, {
        mode: 'both',
        boundary: {
          left: 0,
          right: 265,
          top: 0,
          bottom: 205,
        },
      });
      slider.on('move', () => {
        const hue = Math.round((elSlider.offsetTop / 207) * 360);
        const color = rgb2hex(hsv2rgb([hue, this.saturation, this.value]));
        document.documentElement.style.setProperty('--pick-color', `${color}`);
      });
    },
    onSliderChange() {
      // updateColor();
      return 0;
    },
    onPanelChange() {
      // updateColor();
      return 0;
    },
  },
});
</script>
