<script lang="ts">
  import { page } from '$app/stores';

  import Background from '../components/Background/Background.svelte';
  import Brand from '../components/Brand/Brand.svelte';
  import Weather from '../components/Weather/Weather.svelte';
  import Clock from '../components/Clock/Clock.svelte';
  import PersonCard from '../components/PersonCard/PersonCard.svelte';
  import Dialer from '../components/Dialer/Dialer.svelte';
  import Search from '../components/Search/Search.svelte';

  const webexApiUrl = 'https://webexapis.com/v1';
  const webexToken = $page.url.searchParams.get('webexToken');
  const deviceId = $page.url.searchParams.get('deviceId');
  const owmApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const owmToken = $page.url.searchParams.get('owmToken');
  const owmCityId = $page.url.searchParams.get('owmCityId') ?? '5506956';
  const people = $page.url.searchParams
    .get('people')
    ?.split(',')
    ?.map((r) => r.split(':'));
  const background = $page.url.searchParams.get('background') ?? 'photo-1568738009519-52d1bad47858.webp';
  const logo = $page.url.searchParams.get('logo') ?? 'font_rend-removebg-preview.png';

  // Get also the group name, Service App access token and ORG Id
  const groupName = $page.url.searchParams.get('groupName');
  const accessToken = $page.url.searchParams.get('accessToken');
  const orgId = $page.url.searchParams.get('orgId');
  
  if (!people || people.length === 0) {
    throw new Error ('Missing people as URL parameter');
  }
  else {
    console.log('Vars loaded: ', {webexToken, deviceId, owmToken, owmCityId, people, groupName, accessToken, orgId});
  }
 
  const getWeatherResponse = (cityId: number, units: 'imperial' | 'standard') =>
    fetch(owmApiUrl + '?' + new URLSearchParams({ appid: owmToken, id: owmCityId, units: units }))
      .then((r) => (r.status >= 400 ? Promise.reject(r) : r))
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
      }));
  const getPersonResponse = (email: string) =>
    fetch(webexApiUrl + `/people?email=${encodeURIComponent(email)}`, {
      headers: { Authorization: 'Bearer ' + webexToken }
    })
      .then((r) => (r.status >= 400 ? Promise.reject(r) : r))
      .then((r) => r.json())
      .then((r) => (r?.items.length != 1 ? Promise.reject(r) : r.items[0]))
      .then((r) => {
        return {
          displayName: r.displayName,
          status: r.status,
          image: r.avatar ?? 'https://api.dicebear.com/7.x/initials/svg?seed=' + r.displayName,
          title: r.title ?? '',
          dial: r.extension ?? email
        };
      });

  let activePersonModel = undefined;
  let isLoading = false;
  let from = undefined;

  let showDialer = false;

  let searchResults = [];
  let isSearching = false;

  function handleDial(number: string) {
    fetch(webexApiUrl + `/xapi/command/Dial`, {
      method: 'post',
      headers: { 'Authorization': 'Bearer ' + webexToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({ deviceId, arguments: { Number: number, Protocol: 'Sip' } })
    });
  }
  function handleDialerCall(event) {
  const { number } = event.detail;
  handleDial(number); // Reuse your existing dial logic
  }

  function toggleDialer() {
    showDialer = !showDialer;
  }

  function handleDirectorySearch(event) {
    const { query } = event.detail;
    console.log('Searching for:', query);

    // If query is empty, clear results
    if (!query.trim()) {
      searchResults = [];
      isSearching = false;
      return;
    }

    // Only search if query has at least 3 characters
    if (query.trim().length < 3) {
      searchResults = [];
      isSearching = false;
      return;
    }

    // Search users by First Name
    // Set loading state
    isSearching = true;
    fetch(`https://webexapis.com/identity/scim/${orgId}/v2/Users?filter=name.givenName sw "${query}"&returnGroups=true&includeGroupDetails=true`, {
      headers: { 'Authorization': 'Bearer ' + accessToken, 'Content-Type': 'application/json' }
    })
      .then((r) => { 
        if (r.status >= 400) throw r;
        return r;
      })
      .then((r) => r.json ())
      .then((r) => {
        if (r && r.Resources) {
          // Check if users returned are members of the group
          const foundUsers = r.Resources;
          const matchingUsers = foundUsers.filter((user) => user.groups?.find((group) => group?.display === groupName));
          console.log (`${matchingUsers.length} Users matched`);
          matchingUsers.forEach (user => 
            console.log (user.displayName)
          )
          searchResults = matchingUsers;
          isSearching = false;
        }
        else {
          console.log ('No resources');
        }
      })
      .catch ((e) => {
        console.error (e);
      })
     
            /** const arrayOfUsers = r.Resources;
            const matchingUsers = arrayOfUsers.filter((user) => user.groups?.find((group) => group?.display === groupName));
            console.log (`${matchingUsers.length} Users matched`);
            matchingUsers.forEach (user => 
              console.log (user.displayName)
            );
            // matchingUsers contains all members of the group.
            searchResults = matchingUsers;
            isSearching = false; // Stop loading
             
            // Now base64 encode them to get User ids
            const encodedUserIds = matchingUsers.map ((user) => {
              let stringToEncode = `ciscospark://us/PEOPLE/${user.id}`;
              return btoa(stringToEncode).replace(/=/g, ''); // remove the padding =
            })
            
      
          } **/
  }
  
  function handleUserSelected(event) {
    const { user } = event.detail;
    // We get a user Object
    if (user.phoneNumbers) {
      const arrayOfPhoneNumbers = user.phoneNumbers;
      const workExtension = arrayOfPhoneNumbers.find((number) => number?.type === 'work')?.value.replace(/\s+/g, ''); // blank space removal
      if (workExtension) {
        console.log('Dialing:', workExtension);
        handleDial(workExtension);
        isSearching = false;
      }
      // TODO: Implement what happens when a user is selected
      // Maybe show their details, dial them, etc.
    }
    else {
      console.log ("Users has no work numbers");
    }
  }

</script>

<Background imageLink={background} />

<section id="hero" class="hero is-fullheight has-text-white is-dark">
  <!-- hero-head start -->
  <div id="head-widgets" class="hero-head">
    <nav class="navbar is-translucent-black">
      <div class="container is-block">
        <div class="columns m-0">
          <div id="brand" class="column is-7 is-flex is-align-self-center">
            <Brand title={logo} subtitle="Bridge to Possible." />
          </div>
          <div id="weather" class="column is-5 is-align-self-center">
            <Weather {getWeatherResponse} cityId={owmCityId}>
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
    <div class="columns is-vcentered is-flex-grow-1">
      <!-- Search Column (leftmost, positioned at bottom) -->
      <div class="column search-column" style="flex: 0 0 600px;">
        <div class="search-bottom">
          <Search 
            searchResults={searchResults}
            isLoading={isSearching}
            groupName={groupName}
            on:search={handleDirectorySearch}
            on:userSelected={handleUserSelected}
          />
        </div>
      </div>
      
      <!-- Person Cards Column (center area) -->
      <div class="column person-card-bottom">
        <div class="columns is-multiline is-centered">
          {#each people as person}
            <div class="column is-4 is-flex is-justify-content-center" style="width: 50%;">
             
                <PersonCard email={person[0]} {getPersonResponse} onDial={() => handleDial(person?.[1] ?? person[0])} />
             
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Dialer Column (far right) -->    
      <div class="column dialer-column" style="flex: 0 0 420px;">
        <div class="dialer">
          {#if showDialer}
            <Dialer on:call={handleDialerCall} on:close={() => showDialer = false} />
          {:else}
            <div class="card is-translucent-black" style="height:100%">
              <div class="card-content">
                <div class="content has-text-centered">
                  <button 
                    class="button is-success is-large is-rounded"
                    on:click={toggleDialer}
                  >
                    <span class="icon">
                      <i class="mdi mdi-phone-plus"></i>
                    </span>
                    <span>Manual Dial</span>  
                  </button>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
<!-- hero-body end -->
  <!-- hero-foot start -->
  <div id="foot-widgets" class="hero-foot" />
</section>

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

  #body-widgets .container {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 2rem; /* Add some padding so content doesn't touch edges */
  }

  .dialer-far-right {
    width: 100%;
    max-width: 320px;
  }

  
  /* not used now */
  .person-card-small :global(.card) {
    transform: scale(0.85);
    transform-origin: center;
    /* max-height: 280px;  */
    overflow: hidden;
  }
/* Make search column flex and push search to bottom */
  .search-column {
    display: flex !important;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 70vh;
  }

  .search-bottom {
    margin-top: auto; /* This pushes it to the bottom */
  }
  
  /* Make the person cards section shorter */
  .person-card-bottom {
    margin-top: auto; /* This pushes it to the bottom */
    max-height: 250px !important;
    overflow: hidden;
  }

  /* Make person cards smaller and ensure name is always visible */
  .person-card-bottom :global(.card) {
    transform: scale(0.85); /* Made smaller from 0.85 */
    transform-origin: center;
    max-height: 200px; /* Limit card height */
    overflow: visible; /* Allow name to show if it extends */
  }

  /* Reduce card content padding */
  .person-card-bottom :global(.card-content) {
    padding: 0.75rem 1rem !important; /* Reduced padding */
  }

  /* Make avatar smaller */
  .person-card-bottom :global(.image) {
    width: 100px !important; /* Make avatar smaller */
    height: 100px !important;
  }

  /* Ensure name text is always visible and properly sized */
  .person-card-bottom :global(.title) {
    font-size: 1.2rem !important; /* Smaller font */
    line-height: 1.2 !important;
    margin-bottom: 1rem !important;
    overflow: visible !important;
    white-space: normal !important; /* Allow text wrapping */
    text-overflow: visible !important;
  }

  /* Adjust any buttons or icons to be smaller */
  .person-card-bottom :global(.button) {
    transform: scale(0.8);
  }

  .dialer-column {
    display: flex !important;
    justify-content: flex-end;
    margin-top: auto; 
}

</style>
