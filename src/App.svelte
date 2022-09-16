<script lang="ts">
  import trackBg from "./assets/track_bg.svg";
  import checkpoints from "./assets/checkpoints.svg";
  import personGirl from "./assets/persons/girl.png";
  import logo from "./assets/cyc_logo.svg";
  import { onMount } from "svelte";
  import { GradientPath } from "gradient-path";

  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";

  let path_amount = tweened(300, {
    duration: 4000,
    easing: cubicInOut,
  });

  $: total_amount = visualize_amount($path_amount + 6000)
  $: path_percent = $path_amount / 3000;
  $: mask_offset = 3983.4 * (1 - path_percent);
  $: text_offset = path_percent * 100 - 15;
  $: person_offset = path_percent * 100;
  // $: text_path_rotate = 0;
  $: text_path = visualize_amount($path_amount);

  function visualize_amount(amount: number) {
    let text = "CHF " + Math.round(amount);
    return text;
  }

  onMount(async () => {
    const gp = new GradientPath({
      path: document.querySelector("#gradient-path"),
      segments: 300,
      samples: 3,
      precision: 2, // Optional
    });

    gp.render({
      type: "path",
      fill: [
        { color: "#F7797D", pos: 0 },
        { color: "#6DD5ED", pos: 0.25 },
        { color: "#C6FFDD", pos: 0.5 },
        { color: "#FBD786", pos: 0.75 },
        { color: "#F7797D", pos: 1 },
      ],
      width: 120,
      stroke: [
        { color: "#F7797D", pos: 0 },
        { color: "#6DD5ED", pos: 0.25 },
        { color: "#C6FFDD", pos: 0.5 },
        { color: "#FBD786", pos: 0.75 },
        { color: "#F7797D", pos: 1 },
      ],
      strokeWidth: 2,
    });

    const group = document.querySelector(".gradient-path");
    group.setAttribute("mask", "url(#path-mask)");
  });
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap");
  </style></svelte:head
>

<main>
  <input
    type="range"
    style="width:500px"
    on:input={(e) => {
      path_amount.set(e.target.value * 1.0);
    }}
    min="0"
    max="3000"
  />
  <div class="top-row">
    <div class="logo">
      <img src={logo} alt="CYC Logo" />
    </div>
    <div class="counter">{total_amount}</div>
  </div>
  <div class="track">
    <img src={trackBg} alt="Track Background" />

    <svg
      width="1435"
      height="833"
      viewBox="0 0 1435 833"
      fill="none"
      version="1.1"
      id="gradient-path-svg"
      overflow="visible"
    >
      <defs>
        <mask
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1435"
          height="833"
          id="path-mask"
        >
          <path
            d="M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
            stroke-width="180"
            stroke-dasharray="31, 31"
            style="stroke:#FFFFFFFF;stroke-width:180;stroke-dasharray:3983.4;stroke-dashoffset:{mask_offset};stroke-opacity:1"
          />
        </mask>
      </defs>
      <path
        d="M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
        stroke-width="180"
        id="gradient-path"
        style="stroke:#FFFFFFFF;stroke-width:180;stroke-dasharray:none;stroke-opacity:1"
      />
    </svg>

    <div class="path-counter">
      <svg width="1435" height="833">
        <defs>
          <path
            id="testPath"
            d="M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
          />
        </defs>
        <text
          x="0px"
          y="0px"
          fill="#FFF"
          font-size="6em"
          font-family="Inter"
          font-weight="bold"
          dominant-baseline="mathematical"
          baseline-shift="12px"
        >
          <textPath xlink:href="#testPath" startOffset="{text_offset}%">
            <tspan>
              {text_path}
            </tspan>
          </textPath>
        </text>
      </svg>
    </div>

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
</main>

<style>
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
    outline: 10px solid #DADADA;
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
