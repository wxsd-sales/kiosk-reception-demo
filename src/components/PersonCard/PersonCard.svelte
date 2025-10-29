<script lang="ts">
  import Avatar from '../Avatar/Avatar.svelte';
  import type { PersonResponse } from './types';
  import { browser } from '$app/env';
  import { onMount } from 'svelte';

  export let email: string;
  export let updateInterval = 3600;
  export let getPersonResponse: (...args) => Promise<PersonResponse> = () => Promise.reject(undefined);
  export let onMessage = (...args) => undefined;
  export let onDial = (...args) => undefined;

  let personResponse = browser ? getPersonResponse(email) : Promise.reject(undefined);

  onMount(() => {
    const interval = updateInterval * 1000;
    const intervalId = setInterval(() => (personResponse = getPersonResponse(email)), interval);

    return () => clearInterval(intervalId);
  });
</script>

<div class="card is-translucent-black">
  <div class="card-content">
    {#await personResponse then person}
      <div class="media is-justify-content-center">
        <Avatar size={250} status={person?.status} image={person?.image} />
      </div>
      <div class="content">
        <hr />
        <div class="columns is-vcentered is-mobile is-multiline">
          <div class="column">
            <h1 class="title is-size-5">{person?.displayName}</h1>
            <h2 class="subtitle is-size-6 has-text-grey">{person?.title}</h2>
          </div>
          <div class="column is-narrow">
            <div class="field is-grouped">
              <!--              <p class="control">-->
              <!--                <button-->
              <!--                  class="button is-fullwidth is-rounded is-primary has-background-dark is-inverted message"-->
              <!--                  type="button"-->
              <!--                  on:click={onMessage}-->
              <!--                >-->
              <!--                  <span class="icon">-->
              <!--                    <i class="mdi mdi-24px mdi-message" />-->
              <!--                  </span>-->
              <!--                </button>-->
              <!--              </p>-->
              <p class="control">
                <button
                  class="button is-fullwidth is-rounded is-success has-background-dark is-inverted phone"
                  on:click={onDial}
                >
                  <span class="icon">
                    <i class="mdi mdi-24px mdi-phone" />
                  </span>
                </button>
              </p>
            </div>
          </div>
          {#if $$slots.default}
            <div class="column is-12">
              <slot />
            </div>
          {/if}
        </div>
      </div>
    {/await}
  </div>
</div>

<style>
  div.card {
    width: 100%;
    border-radius: var(--border-radius-large);
  }
</style>
