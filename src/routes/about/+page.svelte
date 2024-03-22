<!-- TODO: make bio only clickable from ghost :oooo -->


<script lang=ts>
    import {Contact, Poem, PopupContainer, SocialMediaLinks} from '$lib';
	import { quadInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    
    let activeTab = 'Contact';
    let resumeOpen = false;

  </script>
  
<div class='main'>
    <div class='section-1'>
        <img class='headshot' src='images/headshot.png' alt='headshot'/>
        <SocialMediaLinks />
    </div>
    <div class='section-2'>
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
                    class='resume-sub-tab tab open-larger'
                    on:click={() => resumeOpen = true}
                    transition:slide={{ delay: 0, duration: 300, easing: quadInOut, axis: 'x' }}>Open<br/>Larger
                </button>
                <button
                    class='resume-sub-tab tab'
                    on:click={() => window.open('kalypso-homan-resume.jpg', '_blank')}
                    transition:slide={{ delay: 0, duration: 600, easing: quadInOut, axis: 'x' }}>Open in<br/>New Tab
                </button>
            {/if}
        </div>

        <div class='contents'>
            {#if activeTab === 'Contact'}
                <Contact/>
            {:else if activeTab === 'Resume'}
                <button on:click={() => resumeOpen = true}>
                    <img class='resume' src='kalypso-homan-resume.jpg' alt='resume'/>
                </button>
            {:else if activeTab === 'Poem'}
                <Poem/>
            {/if}
        </div>
        
        {#if resumeOpen}
            <PopupContainer on:close={() => resumeOpen = false} display='none'>
                <img class='pop-up-resume' src='kalypso-homan-resume.jpg'
                alt='resume'/>
            </PopupContainer>
        {/if}
    </div>
    <button class='secret-button' on:click={() => activeTab = 'Poem'} />
</div>


<style lang='scss'>
    .main {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 20px;
        align-items: start;
        margin-top: 20px;
    }
    .section-1 {
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

    .pop-up-resume {
        width: 100%;
        height: fit-content;
    }

    .secret-button {
        height: 5vw;
        width: 5vw;
        top: calc(23vw + 70px);
        left: 26.5%;
        position: absolute;
        cursor: pointer;
    }

    //REACTIVE STYLINGS

    @media(max-width: 850px) {
        .main {
            flex-direction: column;
            display: flex;
            margin: 0;
        }
        .section-1 {
            display: flex;
            flex-direction: row;
            img {
                max-width: 60%;
                margin-left: 3%;
                margin-top: 2%;
            }
        }

        .contents {
            width: 86vw;
        }

        .tab-container {
            margin: 20px;
            margin-top: -40px;
            height: 11vw;
            gap: 11%;
            .tab {
                margin: 0;
                width: 26%;
            }

            .open-larger {
                display: none;
            }
        }
        .secret-button {
            height: 8vw;
            width: 8vw;
            top: calc(44vw + 70px);
            left: 47%;
            position: absolute;
            cursor: pointer;
        }
    }
</style>

