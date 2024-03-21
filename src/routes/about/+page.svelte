<!-- TODO: make bio only clickable from ghost :oooo -->


<script lang=ts>
    import {Contact, Bio, CloseButton, SocialMediaLinks} from '$lib';
	import { quadInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
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
                <button
                    class='tab'
                    class:active={activeTab === 'Contact'}
                    on:click={() => activeTab = 'Contact'}>Contact
                </button>
                <button
                    class='tab resume-tab'
                    class:active={activeTab === 'Resume'}
                    on:click={() => activeTab = 'Resume'}>Resume
            </button>

            {#if activeTab==='Resume'}
                <button
                    class='resume-sub-tab tab'
                    on:click={() => resumeOpen = true}
                    transition:slide={{ delay: 0, duration: 300, easing: quadInOut, axis: 'x' }}>Open Larger
                </button>
                <button
                    class='resume-sub-tab tab'
                    on:click={() => window.open('kalypso-homan-resume.jpg', '_blank')}
                    transition:slide={{ delay: 0, duration: 600, easing: quadInOut, axis: 'x' }}>Open in New Tab
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
        height: 50px;
        align-items: center;
        cursor: pointer;
        box-shadow: inset 0 0 0 1px white;
        margin: 2%;
        padding: 0;
        display: flex;
        justify-content: center;
        background-color: transparent;
        border: none;
        color: white;
        font-family: 'Caviar Dreams';
        font-weight: 600;
        &:not(.active):hover{
            color: orange;
        }
    }
    .tab.active {
        box-shadow: inset 0 0 0 1px orange;
        cursor: default;
    }
    .resume-sub-tab {
        box-shadow: inset 0 0 0 1px orange;
        font-weight: 400;
        text-wrap: nowrap;
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
    .contents::-webkit-scrollbar-thumb {
        background: orange;
    }
    .contents::-webkit-scrollbar {
        width: 1px;
    }
    .resume {
        width: 100%;
    }
    
    // .resume-pop-up{
    //     position: fixed;
    //     top: 13vh;
    //     left: 5vw;
    //     width: 90vw;
    //     height: auto;
    //     z-index: 2;
    //     border: solid white 1px;

    //     .resume:hover {
    //         cursor: pointer;
    //     }
    // }
</style>

