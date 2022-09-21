<script>
  export let path_percent = 0;
  export let text_path = "";
  
  let font_size = "5em"

  $: text_offset = path_percent * 100;
  $: text_offset_reverse = (1 - path_percent) * 100;
</script>

<div class="path-counter-container">
  {#if path_percent < 0.44 || path_percent > 0.75}
    <svg width="1435" height="833">
      <defs>
        <path
          id="testPath"
          d="M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
        />
      </defs>
      <text
        x="-550px"
        y="0px"
        fill="#FFF"
        font-size={font_size}
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
  {:else}
    <svg width="1435" height="833">
      <defs>
        <path
          id="path-reverse"
          d="m 5769.9999,90 -1070,9e-6 c -236.193,0 -236.3465,326.500001 0,326.500001 236.3465,0 501.7395,-10e-5 735,0 233.2605,0 238.6768,326.49989 0,326.49992 L 4821.1574,743 h -486.1575"
        />
      </defs>
      <g transform="translate(-4335)">
        <text
          x="150px"
          y="0px"
          fill="#FFF"
          font-size={font_size}
          font-family="Inter"
          font-weight="bold"
          dominant-baseline="mathematical"
          baseline-shift="12px"
        >
          <textPath xlink:href="#path-reverse" startOffset="{text_offset_reverse}%">
            <tspan>
              {text_path}
            </tspan>
          </textPath>
        </text>
      </g>
    </svg>
  {/if}
</div>

<style>
  .path-counter-container {
    position: absolute;
  }
  svg {
    position: absolute;
  }
</style>
