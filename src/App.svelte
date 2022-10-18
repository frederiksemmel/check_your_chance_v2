<script lang="ts">
  import trackBg from "./assets/track_bg.svg";
  import checkpoints from "./assets/checkpoints.svg";
  import GradientPath from "./GradientPath.svelte";
  import PathCounter from "./PathCounter.svelte";
  import FireworksCYC from "./FireworksCYC.svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";

  const ANIMATION_SPEEDUP = 10;
  const CROSSFADE_MS = 1500;

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  // import { spring } from 'svelte/motion';
  //  let path_amount= spring(500, {
  //    stiffness: 0.02,
  //    damping: 0.8,
  //    precision: 0.3,
  //  });

  // $: path_amount = $amount_percent * 3000

  import { tweened } from "svelte/motion";
  import { sineInOut, cubicIn } from "svelte/easing";

  let path_progress = tweened(0, {
    duration: (start, stop) =>
      (Math.sqrt(Math.abs(stop - start)) * 12000) / ANIMATION_SPEEDUP,
    easing: sineInOut,
  });
  let total_amount = 0;
  let amount_completed = 0;
  let persons_outside = [];
  let persons_right = [];
  let persons_left = [];
  let current_person: { src: string; id: number, z: number};
  let person_showing = true;
  let crossfade_animating_start = false;
  let crossfade_animating_stop = false;
  let fireworks_enabled = false;
  reset_amount(total_amount);

  function shuffle(a: Array<string>) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function generate_all_persons() {
    let all_persons = [];
    let total_m = 9;
    for (let i = 0; i < total_m; i++) {
      let src = "./persons/m_" + i + ".png";
      all_persons.push({ src: src, id: i, z: 0 });
    }
    let total_w = 14;
    for (let i = 0; i < total_w; i++) {
      let src = "./persons/w_" + i + ".png";
      all_persons.push({ src: src, id: total_m + i, z:0 });
    }
    all_persons = shuffle(all_persons);
    current_person = all_persons.pop();
    return all_persons;
  }

  function reset_amount(total_amount: number) {
    let num_completed = Math.floor(total_amount / 3000);
    amount_completed = num_completed * 3000;
    persons_right = [];
    persons_outside = generate_all_persons();
    persons_left = [];
    for (let i = 0; i < 5; i++) {
      persons_left.push(persons_outside.pop());
    }
    for (let i = 0; i < num_completed; i++) {
      console.log("Reset: adding person");
      let p_to_right = persons_left.pop();
      let p_to_left = persons_outside.pop();
      persons_left.push(p_to_left);
      persons_right.push(p_to_right);
    }
    person_showing = true;
    path_progress = tweened((total_amount - amount_completed) / 3000, {
      duration: (start, stop) =>
        (Math.sqrt(Math.abs(stop - start)) * 12000) / ANIMATION_SPEEDUP,
      easing: sineInOut,
    });
  }

  async function set_amount(total_amount: number) {
    let to_be_animated = total_amount - amount_completed;
    let rounds = Math.floor((total_amount - amount_completed) / 3000);
    for (let i = 0; i < rounds; i++) {
      await path_progress.set(1);
      await add_person_top();
      to_be_animated -= 3000;
    }
    path_progress.set(to_be_animated / 3000);
  }
  async function add_person_top() {
    await path_progress.set(1);
    crossfade_animating_stop = true;
    await sleep(10);
    person_showing = false;
    fireworks_enabled = true;
    crossfade_animating_stop = false;
    let z_on_right: number[] = persons_right.map((person) => {return person.z});
    let topmost_z = Math.max(0, ...z_on_right);
    console.log(topmost_z)
    console.log(current_person)
    current_person.z = topmost_z + 1;
    console.log(current_person)
    persons_right = persons_right.concat(current_person);
    await sleep(CROSSFADE_MS);
    crossfade_animating_stop = false;
    await path_progress.set(2, {
      duration: 3000 / ANIMATION_SPEEDUP,
      easing: cubicIn,
    });
    amount_completed += 3000;
    await path_progress.set(0, { duration: 0 });
    await sleep(1000 / ANIMATION_SPEEDUP);
    current_person = persons_left.pop();
    persons_left = persons_left;
    crossfade_animating_start = true;
    await sleep(CROSSFADE_MS);
    crossfade_animating_start = false;
    person_showing = true;
    fireworks_enabled = false;

    // New: move person from outside to left
    // TODO refactor this function
    // TODO handle case of no more persons gracefully
    let person_to_left = persons_outside.pop();
    persons_left = [person_to_left].concat(persons_left);
  }

  $: set_amount(total_amount);
  $: total_amount_vis = visualize_amount(
    amount_completed + Math.min($path_progress, 1) * 3000
  );
  $: person_offset = $path_progress * 100;
  $: text_path = visualize_amount(Math.min($path_progress, 1) * 3000);

  function visualize_amount(amount: number) {
    let text = "CHF " + Math.round(amount);
    return text;
  }

  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  const [send, receive] = crossfade({
    duration: CROSSFADE_MS,

    fallback(node, _) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
				`,
      };
    },
  });
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap");
  </style></svelte:head
>

<main>
  <div class="top-row">
    <div class="counter" style="width:{70 * total_amount_vis.length}px">
      {total_amount_vis}
    </div>
  </div>
  <div class="track-container">
    <div class="persons uncompleted">
      {#each persons_left as person (person.id)}
        <div class="small-person" out:send={{ key: person.id }} animate:flip in:fly="{{ y: -100, duration: 500 }}">
          <img src={person.src} alt="Foto" />
        </div>
      {/each}
    </div>
    <div class="track">
      <img src={trackBg} alt="Track Background" />

      <GradientPath path_percent={$path_progress} />
      <PathCounter path_percent={$path_progress} {text_path} />

      <img src={checkpoints} alt="Track Checkpoints" />
      <div class="marks start">START</div>
      <div class="marks ziel">ZIEL</div>

      {#if crossfade_animating_stop}
        <div
          class="person-animating stop"
          out:send={{ key: current_person.id }}
        >
          <img src={current_person.src} alt="Foto" />
        </div>
      {/if}
      {#if crossfade_animating_start}
        <div
          class="person-animating start"
          in:receive={{ key: current_person.id }}
        >
          <img src={current_person.src} alt="Foto" />
        </div>
      {/if}
      {#if person_showing}
        <div class="person" style="offset-distance:{person_offset}%">
          <img src={current_person.src} alt="Foto" />
        </div>
      {/if}

      <div class="chkpt chkpt1">Berufsorientierung</div>
      <div class="chkpt chkpt2">Lehrstelle</div>
      <div class="chkpt chkpt3">Lehrabschluss</div>
      <div class="chkpt chkpt4">Erster Job</div>
    </div>
    <div class="persons completed">
      {#each persons_right as person (person.id)}
        <div
          class="small-person"
          in:receive={{ key: person.id }}
          animate:flip
          style="z-index:{person.z}"
        >
          <img src={person.src} alt="Foto" />
        </div>
      {/each}
    </div>
  </div>

  <FireworksCYC enabled={fireworks_enabled} />

  <input
    type="range"
    style="width:1000px;height:20px;"
    bind:value={total_amount}
    min="0.0"
    step="50"
    max="20000"
  />
  <button on:click={() => (fireworks_enabled = !fireworks_enabled)} class="btn">
    {fireworks_enabled ? "Enabled" : "Disabled"}
  </button>

  <button on:click={add_person_top} class="btn"> Add to top </button>
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
  .track-container {
    display: flex;
    flex-direction: row;
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
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
  }
  .counter {
    text-align: left;
    margin: 20px;
    margin-right: 200px;
    font-size: 7em;
    font-weight: bold;
    white-space: nowrap;
  }
  .person {
    width: 180px;
    height: 180px;
    offset-path: path(
      "M 5e-5,742.99995 H 1100.0001 c 236.1929,0 236.3465,-326.49995 0,-326.49995 -236.34655,0 -501.73954,3e-5 -735.00005,0 -233.26051,-3e-5 -238.67685,-326.5 0,-326.5 h 583.8425 486.15755"
    );
    offset-rotate: 0deg;
  }
  .person-animating {
    position: absolute;
    width: 180px;
    height: 180px;
  }
  .person-animating.start {
    bottom: 0px;
    left: -90px;
  }
  .person-animating.stop {
    position: absolute;
    width: 180px;
    height: 180px;
    top: 0px;
    right: -90px;
  }
  .person-animating img {
    width: 180;
    height: 180;
    border-radius: 50%;
    outline: 10px solid #dadada;
    outline-offset: -10px;
  }
  .person img {
    width: 180;
    height: 180;
    border-radius: 50%;
    outline: 10px solid #dadada;
    outline-offset: -10px;
  }
  .persons {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .persons.completed {
    flex-direction: column-reverse;
    margin-top: 100px;
    margin-left: 70px;
  }
  .persons.uncompleted {
    margin-bottom: 100px;
    margin-right: 70px;
  }
  .small-person {
    z-index: 1;
    margin-top: -30px;
  }
  .small-person img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: contain;
    outline: 5px solid #dadada;
    outline-offset: -5px;
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
    font-size: 4em;
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
