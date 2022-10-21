<script lang="ts">
  import Fireworks from "@fireworks-js/svelte";
  import type { FireworksOptions } from "@fireworks-js/svelte";

  import explosion0 from "./assets/sounds/explosion0.mp3";
  import explosion1 from "./assets/sounds/explosion1.mp3";
  import explosion2 from "./assets/sounds/explosion2.mp3";
  import background_fireworks from "./assets/sounds/celebration_new_year.mp3";

  import { fade } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { sineInOut } from "svelte/easing";

  let audio = new Audio(background_fireworks);
  
  function set_volume(vol: number) {
    audio.volume = vol
  }

  let volume_fade = tweened(1, {
    duration: 2000,
    easing: sineInOut,
  });
  $: set_volume($volume_fade)

  async function play(enabled: boolean) {
    if (enabled) {
      audio.play();
      await volume_fade.set(1);
    } else {
      await volume_fade.set(0);
      audio.pause();
      audio.currentTime = 0;
    }
  }

  $: play(enabled);

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
      enabled: true,
      files: [explosion0, explosion1, explosion2],
      volume: {
        min: 10,
        max: 20,
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
