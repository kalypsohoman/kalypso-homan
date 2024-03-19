<!-- TODO: make bio only clickable from ghost :oooo -->

<script lang=ts>
    import {Contact, Resume, Bio, CloseButton, SocialMediaLinks} from '$lib';
    export let activeTab: string = 'Contact';

    let resumeOpen = false;

  </script>
  
<div class='main'>
    <div class='col-1'>
        <img class='headshot' src='images/headshot.png' alt='headshot'/>
        <SocialMediaLinks />
    </div>

    <div class='col-2'>

        <div class='tab-container'>
            <div class='tab' class:active={activeTab === 'Contact'}>
                <button on:click={() => activeTab = 'Contact'}>Contact</button>
            </div>
            <div class='tab' class:active={activeTab === 'Resume'}>
                <button on:click={() => activeTab = 'Resume'}>Resume</button>
            </div>
            {#if activeTab==='Resume'}
                <button class='sub-tab' on:click={() => resumeOpen = true}>Open Larger</button>
                <button
                    class='sub-tab'
                    on:click={() => window.open('kalypso-homan-resume.jpg', '_blank')}>
                    Open in New Tab
                </button>
            {/if}
        </div>

        <div class='contents'>
            {#if activeTab === 'Contact'}
                <Contact/>
            {:else if activeTab === 'Resume'}
                <img class='resume' src='kalypso-homan-resume.jpg' alt='resume'/>
            {:else if activeTab === 'Bio'}
                <Bio/>
            {/if}
        </div>
        
        {#if resumeOpen}
            <div class='resume-pop-up'>
                <img src='kalypso-homan-resume.jpg'
                alt='resume'/>
            </div>
        {/if}
    </div>
</div>


<style lang='scss'>
    .main {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 20px;
        align-items: start;
        margin-top: 20px;
    }
    .col-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
     .headshot{
        max-width: 80%;
    }


    .tab-container {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
    }
    .tab {
        width: 20%;
        cursor: pointer;
        border: 1px solid white;
        margin: 2%;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    .tab:hover {
        border: solid 1px orange;
    }
    .tab.active {
        box-shadow: inset 0 0 0 2px orange;
        border: solid orange 1px;
    }
    .tab button {
        background-color: transparent;
        border: none;
        color: white;
        font-family: 'Enigma Bold';
        height: 100%;
        padding: 2vw;
        cursor: pointer;
    }
    .contents {
        border: 1px solid #ccc;
        height: fit-content;
        max-height: 63vh;
        overflow-y: auto;
        overflow-x: hidden;
        margin: 20px;
        padding: 20px;
    }
    .contents::-webkit-scrollbar-track {
        /* here in case you want to add stylings later */
    }
    .contents::-webkit-scrollbar-thumb {
        background: orange;
    }
    .contents::-webkit-scrollbar {
        width: 1px;
    }

    .resume {
        width: 100%;
    }

    .resume-pop-up{
        position: fixed;
        top: 13vh;
        left: 5vw;
        width: 90vw;
        height: auto;
        z-index: 2;
        border: solid white 1px;

        .resume:hover {
            cursor: pointer;
        }
    }
</style>

