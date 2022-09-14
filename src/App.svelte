<script lang="ts">
  import trackBg from "./assets/track_bg.svg";
  import checkpoints from "./assets/checkpoints.svg";
  import logo from "./assets/cyc_logo.svg";
  import { onMount } from "svelte";
  import { GradientPath } from "gradient-path";

  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";

  let amount = tweened(1000, {
    duration: 2000,
    easing: cubicInOut,
  });

  $: path_percent = $amount / 3000;
  $: path_pos = 3983.4 * path_percent;

  onMount(async () => {
    const gp = new GradientPath({
      path: document.querySelector("#gradient-path-svg #gradient-path"),
      segments: 300,
      samples: 3,
      precision: 2, // Optional
    });

    gp.render({
      type: "path",
      fill: [
        { color: "#C6FFDD", pos: 0 },
        { color: "#FBD786", pos: 0.25 },
        { color: "#F7797D", pos: 0.5 },
        { color: "#6DD5ED", pos: 0.75 },
        { color: "#C6FFDD", pos: 1 },
      ],
      width: 100,
      stroke: [
        { color: "#C6FFDD", pos: 0 },
        { color: "#FBD786", pos: 0.25 },
        { color: "#F7797D", pos: 0.5 },
        { color: "#6DD5ED", pos: 0.75 },
        { color: "#C6FFDD", pos: 1 },
      ],
      strokeWidth: 2,
    });
  });
</script>

<main>
  <button on:click={() => amount.set(0)}> 0% </button>
  <button on:click={() => amount.set(750)}> 25% </button>
  <button on:click={() => amount.set(1500)}> 50% </button>
  <button on:click={() => amount.set(2250)}> 75% </button>
  <button on:click={() => amount.set(3000)}> 100% </button>
  <div class="logo">
    <img src={logo} alt="CYC Logo" />
  </div>
  <div class="track">
    <img src={trackBg} alt="Track Background" />

    <svg
      width="1435"
      height="832.99994"
      viewBox="0 0 1435 832.99994"
      fill="none"
      version="1.1"
      id="gradient-path-svg"
    >
      <mask id="maskPath">
        <path
          d="M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
          stroke-width="180"
          stroke-dasharray="31, 31"
          style="stroke:#FFFFFFFF;stroke-width:180;stroke-dasharray:3983.4;stroke-dashoffset:918;stroke-opacity:1"
        />
      </mask>
      <path
        d="M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
        id="gradient-path"
        style="stroke:#ffffff;stroke-width:180;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
      />
    </svg>
    <svg
      width="1435"
      height="832.99994"
      viewBox="0 0 1435 832.99994"
      fill="none"
      version="1.1"
      id="maskPath2"
    >
      <path
        d="M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
        stroke-width="180"
        stroke-dasharray="31, 31"
        style="stroke:#FFFFFFFF;stroke-width:180;stroke-dasharray:3983.4;stroke-dashoffset:-{path_pos};stroke-opacity:1"
      />
    </svg>

    <img src={checkpoints} alt="Track Checkpoints" />
    <div class="marks start">START</div>
    <div class="marks ziel">ZIEL</div>
    <div class="chkpt chkpt1">Berufsorientierung</div>
    <div class="chkpt chkpt2">Lehrstelle</div>
    <div class="chkpt chkpt3">Lehrabschluss</div>
    <div class="chkpt chkpt4">Erster Job</div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #gradient-path-svg {
    -webkit-mask-repeat: space;
    -webkit-mask-size: contain;

    mask-repeat: space;
    mask-image: url(#maskPath);
    mask-position: center;
    mask-mode: luminance;
    mask-size: contain;
  }
  .logo {
    width: 100%;
  }
  .logo img {
    margin: 15px;
  }
  .track {
    position: relative;
    height: 833px;
    width: 1435px;
  }
  .track img {
    position: absolute;
  }
  .track svg {
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
    font-weight: bold;
    writing-mode: vertical-rl;
  }
  .marks.start {
    bottom: 5px;
    left: -2px;
  }
  .marks.ziel {
    top: 35px;
    right: -2px;
  }
</style>
