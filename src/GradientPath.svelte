<script>
  import { onMount } from "svelte";
  import { GradientPath } from "gradient-path";
  
  export let path_percent = 0; 
  $: mask_offset = 3983.4 * (1 - path_percent);

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
        { color: "#FBD786", pos: 0.75 },
        { color: "#C6FFDD", pos: 1 },
      ],
      width: 120,
      stroke: [
        { color: "#F7797D", pos: 0 },
        { color: "#6DD5ED", pos: 0.25 },
        { color: "#FBD786", pos: 0.75 },
        { color: "#C6FFDD", pos: 1 },
      ],
      strokeWidth: 2,
    });
    const group = document.querySelector(".gradient-path");
    group.setAttribute("mask", "url(#path-mask)");
  });
</script>

<div class="gradient-path-container">
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
</div>

<style>
.gradient-path-container {
  position: absolute;
}
</style>
