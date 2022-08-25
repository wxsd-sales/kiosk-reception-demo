<script lang="ts">
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  import Background from '../components/Background/Background.svelte';
  import Brand from '../components/Brand/Brand.svelte';
  import Weather from '../components/Weather/Weather.svelte';
  import Clock from '../components/Clock/Clock.svelte';
  import PersonCard from '../components/PersonCard/PersonCard.svelte';
  import Modal from '../components/Modal/Modal.svelte';

  const owmApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const owmToken = $page.url.searchParams.get('owmToken');
  const fallbackWeather = {
    units: 'imperial',
    place: 'Las Vegas, US',
    timezone: -25200,
    temp: 96.96,
    tempMin: 94.12,
    tempMax: 99.84,
    main: 'Clear',
    description: 'clear sky',
    icon: '01d'
  };

  const webexApiUrl = 'https://webexapis.com/v1';
  const webexToken = $page.url.searchParams.get('webexToken');

  const cityId = 5506956;
  const getWeatherResponse = (cityId: number, units: 'imperial' | 'standard') =>
    fetch(owmApiUrl + '?' + new URLSearchParams({ appid: owmToken, id: cityId.toString(), units: units }))
      .then((r) => r.json())
      .then((r) => ({
        units: 'imperial',
        place: `${r.name}, ${r.sys.country}`,
        timezone: r.timezone,
        temp: r.main.temp,
        tempMin: r.main.temp_min,
        tempMax: r.main.temp_max,
        main: r.weather[0].main,
        description: r.weather[0].description,
        icon: r.weather[0].icon
      }))
      .catch(() => fallbackWeather);

  const people = {
    skjesbu: {
      id: 'skjesbu',
      image: 'avatars/skjesbu.png',
      name: 'Snorre Kjesbu',
      status: 'meeting',
      title: 'CEO'
    },
    amryan: {
      id: 'amryan',
      image: 'avatars/amryan.png',
      name: 'Amy Ryan',
      status: 'active',
      title: 'Head of Work Tech'
    },
    lindwhit: {
      id: 'lindwhit',
      image: 'avatars/lindwhit.png',
      name: 'Linda White',
      status: 'meeting',
      title: 'Chief of Staff'
    },
    ahauge: {
      id: 'ahauge',
      image: 'avatars/ahauge.png',
      name: 'Annemarie Hauge',
      status: 'call',
      title: 'Customer Relations'
    },
    jlaurens: {
      id: 'jlaurens',
      image: 'avatars/jlaurens.png',
      name: 'Jeremy Laurenson',
      status: 'DoNotDisturb',
      title: 'Engineering Lead'
    },
    hachawla: {
      id: 'hachawla',
      image: 'avatars/hachawla.png',
      name: 'Harish Chawla',
      status: 'meeting',
      title: 'Technical Leader'
    }
  };

  let activePersonModel = undefined;
  let isLoading = false;
  let from = undefined;

  function handleMessageSend() {
    // Emulate send as requested
    Promise.resolve((isLoading = true)).finally(() =>
      setTimeout(() => {
        isLoading = false;
        from = undefined;
        activePersonModel = undefined;
      }, 1000)
    );
  }
</script>

<Background imageLink="photo-1568738009519-52d1bad47858.webp" />

<section id="hero" class="hero is-fullheight has-text-white is-dark">
  <!-- hero-head start -->
  <div id="head-widgets" class="hero-head">
    <nav class="navbar is-translucent-black">
      <div class="container is-block">
        <div class="columns m-0">
          <div id="brand" class="column is-7 is-flex is-align-self-center">
            <Brand title="font_rend-removebg-preview.png" subtitle="Bridge to Possible." />
          </div>
          <div id="weather" class="column is-5 is-align-self-center">
            <Weather {getWeatherResponse} {cityId}>
              <Clock
                timeFormatOptions={{
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                }}
              />
            </Weather>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!-- hero-head end -->
  <!-- hero-body start -->
  <div id="body-widgets" class="hero-body py-2">
    <div class="container">
      <div class="columns is-multiline is-centered is-vcentered is-flex-grow-1">
        {#each Object.keys(people).map((k) => people[k]) as person}
          <div class="column is-4 is-flex is-justify-content-center">
            <PersonCard {...person} onMessage={() => (activePersonModel = person)} />
          </div>
        {/each}
      </div>
    </div>
  </div>
  <!-- hero-body end -->
  <!-- hero-foot start -->
  <div id="foot-widgets" class="hero-foot" />
</section>

{#if activePersonModel != null}
  <div id="messaging-model" transition:fade={{ duration: 150 }}>
    <Modal isActive={activePersonModel != null} on:click={() => (activePersonModel = undefined)}>
      <figure class="image is-4by5">
        <div class="has-ratio">
          <PersonCard {...activePersonModel}>
            <div class="field has-addons">
              <div class="control has-icons-left is-expanded">
                <input
                  class="input is-rounded is-medium"
                  placeholder="Your Name"
                  bind:value={from}
                  disabled={isLoading}
                />
                <span class="icon is-large is-left">
                  <i class="mdi mdi-24px mdi-account" />
                </span>
              </div>
              <div class="control">
                <button
                  class="button is-rounded is-medium has-background-white"
                  type="button"
                  on:click={() => (from = undefined)}
                >
                  <span class="icon">
                    <i class="mdi mdi-24px mdi-backspace" />
                  </span>
                </button>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control has-icons-left is-expanded">
                <input
                  class="input is-rounded is-medium is-static has-text-white"
                  placeholder="Your Name"
                  disabled={isLoading}
                  readonly
                  value="Notify {activePersonModel.name} that you have arrived."
                />
                <span class="icon is-large is-left">
                  <i class="mdi mdi-24px mdi-text" />
                </span>
              </div>
              <div class="control">
                <button
                  class="button is-primary has-background-dark is-inverted is-rounded is-medium"
                  type="button"
                  disabled={from == null}
                  class:is-loading={isLoading}
                  on:click={handleMessageSend}
                >
                  <span>Send</span>
                  <span class="icon">
                    <i class="mdi mdi-24px mdi-send" />
                  </span>
                </button>
              </div>
            </div>
          </PersonCard>
        </div>
      </figure>
    </Modal>
  </div>
{/if}

<style lang="scss">
  @use 'bulma/sass/helpers/typography';
  @use 'bulma/sass/helpers/color';
  @use 'bulma/sass/helpers/visibility';

  .is-translucent-black {
    background-color: hsl(0, 0%, 0%, 0.8) !important;
    box-shadow: none !important;
  }

  #messaging-model :global(.modal-background) {
    backdrop-filter: blur(30px);
  }

  #messaging-model :global(button.message) {
    @extend .is-hidden;
  }

  #messaging-model :global(.title) {
    @extend .has-text-white;
  }
</style>
