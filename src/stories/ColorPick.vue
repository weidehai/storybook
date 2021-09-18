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
import { hsv2rgb, toHex } from '../utils/color';

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
      // panel调节亮度和饱和度
      // 亮度为0是黑，饱和度为0是白
      const selector = new Dragable(elSelecor, {
        mode: 'both',
        boundary: {
          left: 0,
          right: 265,
          top: 0,
          bottom: 205,
        },
      });
      slider.on('move', this.onSliderChange);
      selector.on('move', this.onPanelChange);
    },
    onSliderChange() {
      const elSlider = this.$refs.slider as HTMLElement;
      this.hue = Math.round((elSlider.offsetTop / 207) * 360);
      this.pickColor = toHex(hsv2rgb(this.hue, this.saturation, this.value));
      document.documentElement.style.setProperty('--pick-color', `${this.pickColor}`);
      document.documentElement.style.setProperty('--panel-color', `hsl(${this.hue},100%,50%)`);
    },
    onPanelChange() {
      const elSelecor = this.$refs.selector as HTMLElement;
      this.saturation = (elSelecor.offsetLeft / 265) * 100;
      this.value = 100 - (elSelecor.offsetTop / 205) * 100;
      this.pickColor = toHex(hsv2rgb(this.hue, this.saturation, this.value));
      document.documentElement.style.setProperty('--pick-color', `${this.pickColor}`);
    },
  },
});
</script>
