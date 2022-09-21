<script lang="ts">
  import Fireworks from "@fireworks-js/svelte";
  import type { FireworksOptions } from "@fireworks-js/svelte";
  
  import explosion0 from "./assets/sounds/explosion0.mp3"
  import explosion1 from "./assets/sounds/explosion1.mp3"
  import explosion2 from "./assets/sounds/explosion2.mp3"
  import rocket from "./assets/sounds/rocket.mp3"

  import { fade } from "svelte/transition";

  export let enabled = false;
  let options: FireworksOptions = {
    hue: {
      min: 0,
      max: 345,
    },
    delay: {
      min: 30,
      max: 60,
    },
    rocketsPoint: {
      min: 30,
      max: 70,
    },
    opacity: 0.5, // fillStyle
    acceleration: 1.02,
    friction: 0.97,
    gravity: 1.5,
    particles: 90,
    trace: 3,
    traceSpeed: 10,
    explosion: 10,
    intensity: 100,
    flickering: 70,
    lineStyle: "round",
    lineWidth: {
      explosion: {
        min: 2,
        max: 6,
      },
      trace: {
        min: 0.3,
        max: 2,
      },
    },
    brightness: {
      min: 50,
      max: 80,
    },
    decay: {
      min: 0.01,
      max: 0.02,
    },
    boundaries: {
      x: 50,
      y: 50,
    },
    sound: {
      enabled: false,
      files: [
        explosion0,
        explosion1,
        explosion2,
        rocket,
      ],
      volume: {
        min: 20,
        max: 30,
      },
    },
  };
</script>

<div>
  {#if enabled}
    <div transition:fade>
      <Fireworks {options} class="fireworks" />
    </div>
  {/if}
</div>

<style>
</style>
