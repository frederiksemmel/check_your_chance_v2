<script lang="ts">
  import trackBg from "./assets/track_bg.svg";
  import checkpoints from "./assets/checkpoints.svg";
  import personGirl from "./assets/persons/girl.png";
  import logo from "./assets/cyc_logo.svg";
  import GradientPath from "./GradientPath.svelte";
  import PathCounter from "./PathCounter.svelte";

  import { Fireworks } from "@fireworks-js/svelte";
  import type { FireworksOptions } from "@fireworks-js/svelte";
	import { fade } from 'svelte/transition';

  let enabled = true;
  let options: FireworksOptions = {
    opacity: 0.5,
    intensity: 60,
    friction: 0.97,
    decay: { min: 0.008, max: 0.03} ,
    rocketsPoint: { min: 20, max: 80} ,
    lineWidth: {
      explosion: {
        min: 2,
        max: 4,
      },
      trace: {
        min: 1,
        max: 3,
      },
    },
  };

  // import { spring } from 'svelte/motion';
  //  let path_amount= spring(500, {
  //    stiffness: 0.02,
  //    damping: 0.8,
  //    precision: 0.3,
  //  });

  // $: path_amount = $amount_percent * 3000

  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  let path_amount = tweened(500, {
    duration: (start, stop) => Math.sqrt(Math.abs(stop - start)) * 100,
    easing: cubicInOut,
  });

  $: total_amount = visualize_amount($path_amount + 6000);
  $: path_percent = $path_amount / 3000;
  $: person_offset = path_percent * 100;
  // $: text_path_rotate = 0;
  $: text_path = visualize_amount($path_amount);

  function visualize_amount(amount: number) {
    let text = "CHF " + Math.round(amount);
    return text;
  }
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap");
  </style></svelte:head
>

<main>
  <div class="top-row">
    <div class="logo">
      <img src={logo} alt="CYC Logo" />
    </div>
    <div class="counter">{total_amount}</div>
  </div>
  <div class="track">
    <img src={trackBg} alt="Track Background" />

    <GradientPath {path_percent} />
    <PathCounter {path_percent} {text_path} />

    <img src={checkpoints} alt="Track Checkpoints" />
    <div class="marks start">START</div>
    <div class="marks ziel">ZIEL</div>

    <div class="person" style="offset-distance:{person_offset}%">
      <img src={personGirl} alt="Foto" />
    </div>

    <div class="chkpt chkpt1">Berufsorientierung</div>
    <div class="chkpt chkpt2">Lehrstelle</div>
    <div class="chkpt chkpt3">Lehrabschluss</div>
    <div class="chkpt chkpt4">Erster Job</div>
  </div>

  {#if enabled}
  <div transition:fade>
    <Fireworks {options} class="fireworks" />
  </div>
  {/if}

  <input
    type="range"
    style="width:500px"
    on:input={(e) => {
      path_amount.set(e.target.value * 1.0);
    }}
    min="0.0"
    max="3000"
  />
  <button on:click={() => (enabled = !enabled)} class="btn">
    {enabled ? "Enabled" : "Disabled"}
  </button>
</main>

<style>
  :global(.fireworks) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #00000000;
  }

  .btn {
    z-index: 1;
  }
  input {
    z-index: 1;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex: 1;
  }
  .logo {
    width: 100%;
  }
  .logo img {
    width: 391px;
    margin: 15px;
  }
  .counter {
    width: 1000px;
    margin-right: 20px;
    margin-bottom: 20px;
    font-size: 6em;
    font-weight: bold;
  }
  .person {
    width: 180px;
    height: 180px;
    position: absolute;
    offset-path: path(
      "M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
    );
    offset-rotate: 0deg;
  }
  .person img {
    width: auto;
    height: auto;
    border-radius: 50%;
    object-fit: contain;
    outline: 10px solid #dadada;
    outline-offset: -10px;
  }
  .track {
    position: relative;
    height: 833px;
    width: 1435px;
  }
  .track img {
    position: absolute;
  }
  .chkpt {
    font-size: 3.7em;
    font-weight: bold;
    position: absolute;
  }
  .chkpt.chkpt1 {
    left: 0px;
    bottom: 220px;
  }
  .chkpt.chkpt2 {
    right: 320px;
    bottom: 220px;
  }
  .chkpt.chkpt3 {
    left: 350px;
    top: 220px;
  }
  .chkpt.chkpt4 {
    right: 0px;
    top: 220px;
  }
  .marks {
    color: black;
    position: absolute;
    font-size: 3.2em;
    font-weight: 800;
    font-family: Inter;
    writing-mode: vertical-rl;
  }
  .marks.start {
    bottom: 5px;
    left: -4px;
  }
  .marks.ziel {
    top: 35px;
    right: -4px;
  }
</style>
