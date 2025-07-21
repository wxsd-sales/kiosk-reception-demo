<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let placeholder = 'Search directory...';
  export let searchResults = [];
  export let isLoading = false;
  export let groupName = '';

  const dispatch = createEventDispatcher();

  let searchQuery = '';
  let isSearchFocused = false;

  function handleSearchInput() {
    dispatch('search', { query: searchQuery });
  }

  function handleSearchFocus() {
    isSearchFocused = true;
  }

  function handleSearchBlur() {
    // Delay to allow clicking on results
    setTimeout(() => {
      isSearchFocused = false;
    }, 200);
  }

  function selectUser(user) {
    dispatch('userSelected', { user });
    searchQuery = '';
    isSearchFocused = false;
  }

  function clearSearch() {
    searchQuery = '';
    dispatch('search', { query: '' });
    searchResults = [];
  }
</script>

<div class="card is-translucent-black">
  <div class="card-content">
    <div class="content">
      <!-- Header -->
      <div class="has-text-centered mb-4">
        <h2 class="title is-size-5 has-text-white">
          <span class="icon">
            <i class="mdi mdi-account-search"></i>
          </span>
          Directory Search in group: {groupName ? `"${groupName}"` : ''}
        </h2>
      </div>

      <!-- Search Input -->
      <div class="field has-addons">
        <div class="control is-expanded has-icons-left has-icons-right">
          <input 
            class="input has-background-dark has-text-white"
            type="text"
            bind:value={searchQuery}
            on:input={handleSearchInput}
            on:focus={handleSearchFocus}
            on:blur={handleSearchBlur}
            {placeholder}
          />
          <span class="icon is-small is-left">
            <i class="mdi mdi-magnify"></i>
          </span>
          {#if searchQuery}
            <span class="icon is-small is-right is-clickable" on:click={clearSearch}>
              <i class="mdi mdi-close-circle has-text-grey-light"></i>
            </span>
          {/if}
        </div>
      </div>

      <!-- Loading indicator -->
      {#if isLoading}
        <div class="has-text-centered py-4">
          <span class="icon has-text-white">
            <i class="mdi mdi-loading mdi-spin"></i>
          </span>
          <span class="has-text-white ml-2">Searching...</span>
        </div>
      {/if}

      <!-- Search Results -->
      {#if searchResults.length > 0 && (isSearchFocused || searchQuery)}
        <div class="search-results">
          <div class="box has-background-grey-darker">
            <p class="has-text-grey-light is-size-7 mb-3">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </p>
            <div class="search-results-list">
              {#each searchResults as user}
                <div 
                  class="search-result-item"
                  on:click={() => selectUser(user)}
                  role="button"
                  tabindex="0"
                  on:keydown={(e) => e.key === 'Enter' && selectUser(user)}
                >
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-32x32">
                        <span class="icon is-large has-text-white">
                          <i class="mdi mdi-account-circle mdi-24px"></i>
                        </span>
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="has-text-white is-size-6 mb-1">
                        {user.displayName || user.Name || 'Unknown'}
                      </p>
                      <p class="has-text-grey-light is-size-7">
                        {user.Email || user.username || ''}
                      </p>
                      {#if user.department}
                        <p class="has-text-grey-light is-size-7">
                          {user.department}
                        </p>
                      {/if}
                    </div>
                    <div class="media-right">
                      <span class="icon has-text-grey-light">
                        <i class="mdi mdi-chevron-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}

      <!-- No results message -->
      {#if searchQuery && searchResults.length === 0 && !isLoading}
        <div class="has-text-centered py-4">
          <span class="icon has-text-grey">
            <i class="mdi mdi-account-search"></i>
          </span>
          <p class="has-text-grey mt-2">No users found for "{searchQuery}"</p>
        </div>
      {/if}


    </div>
  </div>
</div>

<style>
  .search-results {
    position: relative;
    max-height: 400px;
    overflow-y: auto;
  }

  .search-results-list {
    max-height: 300px;
    overflow-y: auto;
  }

  .search-result-item {
    padding: 0.75rem;
    border-bottom: 1px solid #4a4a4a;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .search-result-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .search-result-item:last-child {
    border-bottom: none;
  }

  .search-result-item .media {
    align-items: center;
  }



  .is-clickable {
    cursor: pointer;
  }

  .is-clickable:hover {
    color: #fff !important;
  }
</style>