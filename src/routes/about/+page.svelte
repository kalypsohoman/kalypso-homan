<script lang=ts>
    import { onMount } from "svelte";
    import {Contact, Resume, Bio} from '$lib';
    export let tabs = ['Contact', 'Resume', 'Bio'];
    export let activeTab: string;
  
    onMount(() => {
      // Set default tab value
      if (tabs.length) {
        activeTab = tabs[0];
      }
    });
  
    const handleClick = (tab: string) => () => (activeTab = tab);
  </script>
  
<div class='about-page page'>
    <div class='col-1'>
        <img class='headshot' src='images/headshot.png' alt='headshot'/>
        <div class='social-media-links'>
            <a href="https://github.com/kalypsohoman" target="_blank">
                <img src="images/github.png" alt="Link to my Github">
            </a>
            <a href="www.linkedin.com/in/kalypsohoman/" target="_blank">
                <img src="images/linkedin.png" alt="Link to my LinkedIn">
            </a>
            <a href="https://www.instagram.com/kalypso_designs/" target="_blank">
                <img src="images/instagram.png" alt="Link to my Instagram">
            </a>
        </div>
    </div>
    <div class='col-2'>
        <ul>
            {#each tabs as tab}
                <li class={activeTab === tab ? 'active' : ''}>
                    <button on:click={handleClick(tab)}>{tab}</button>
                </li>
            {/each}
        </ul>
        <div class='contents'>
            {#if activeTab === 'Contact'}
                <Contact/>
            {:else if activeTab === 'Resume'}
                <Resume/>
            {:else if activeTab === 'Bio'}
                <Bio/>
            {/if}
        </div>
    </div>
</div>


<style>

    /* MAIN CONTENT */
    .about-page {
        display: grid;
        grid-template-columns: 2fr 3fr; /* Adjust column sizes as needed */
        gap: 20px; /* Space between columns */
        align-items: start;
    }

    /* FIRST COLUMN */
    .col-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

     /* HEADSHOT */
     .headshot{
        max-width: 80%;
    }

    /* SOCIAL MEDIA LINKS */
    .social-media-links {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a img {
        display: block; /* Make the image a block element to remove extra space below */
        max-width: 50%; /* Ensure the image is responsive and fits its container */
        height: auto; /* Maintain the image's aspect ratio */
        border: 0; /* Remove the default border that appears on some browsers for images inside links */
        margin-top: 20px;
        margin-inline: auto;
    }

    /* TABS */
    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        list-style: none;
    }

    li {
        width: 20%;
        cursor: pointer;
        border: 1px solid white;
        margin: 2%;
        padding: 4%;
        display: flex;
        justify-content: center;
    }

    li.active {
        border: 4px solid #ff9100;
        padding: 4%;
    }

    li button {
        background-color: transparent;
        border: none;
        color: white;
        font-family: 'Enigma Bold';
        width: 100%;
        height: 100%;
    }

    /* CONTENTS */
    .contents {
        border: 1px solid #ccc; /* Adds a border to visualize the bounding box; adjust as needed */
        height: 300px; /* Set a fixed height or use vh for a viewport relative height */
        overflow-y: auto; /* Enables vertical scrolling if content overflows */
        overflow-x: hidden; /* Hides horizontal overflow */
        margin: 20px;
        
    }

    /* Scrollbar track (background) */
    .contents::-webkit-scrollbar-track {
        background: white; /* Sets the track background to white */
        border: 1px solid white; /* Optional: Adds a border to the scrollbar track */
    }

    /* Scrollbar thumb (the scrollable element that you interact with) */
    .contents::-webkit-scrollbar-thumb {
        background: orange; /* Sets the scrollbar thumb to orange */
    }

    /* Scrollbar width and height for vertical scrollbars */
    .contents::-webkit-scrollbar {
        width: 10px; /* Width of the vertical scrollbar */
    }

   
</style>

