<script lang=ts>
    import {Contact, Poem, PopupContainer, SocialMediaLinks} from '$lib';
	import { quadInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte'
    
    let activeTab = 'Contact';
    let resumeOpen = false;

    function openResume() {
        if(window.innerWidth <= 850) { // only open the resume if the window is big enough
            return;
        } else {
            resumeOpen = true;
        }
    }

    // If the window gets too small, close the resume
    function closeResumeOnResizeToMobile() {
        if (window.innerWidth <= 850) {
            resumeOpen = false;
        }
    }

    onMount( () => {
        window.addEventListener('resize', closeResumeOnResizeToMobile);
        return () => {
            window.removeEventListener('resize', closeResumeOnResizeToMobile);
        }
    } )


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
                    on:click={() => window.open('kalypso-homan-resume.png', '_blank')}
                    transition:slide={{ delay: 0, duration: 600, easing: quadInOut, axis: 'x' }}>Open in<br/>New Tab
                </button>
            {/if}
        </div>

        <div class='contents'>
            {#if activeTab === 'Contact'}
                <Contact/>
            {:else if activeTab === 'Resume'}
                <button on:click={openResume}>
                    <img class='resume' src='kalypso-homan-resume.png' alt='resume'/>
                </button>
            {:else if activeTab === 'Poem'}
                <Poem/>
            {/if}
        </div>
        
        {#if resumeOpen}
            <PopupContainer on:close={() => resumeOpen = false} type='resume'>
                <img class='pop-up-resume' src='kalypso-homan-resume.png'
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
        align-items: start;
    }
    .section-1 {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .headshot{
           max-width: 80%;
           max-height: 70vh;
           
       }
    }

    .section-2 {
        margin: 20px;
        .tab-container {
            display: flex;
            flex-wrap: wrap;
            padding-left: 0;
            gap: 6.5%;
            margin-bottom: 20px;
        }
        .tab {
            width: 20%;
            height: 50px;
            align-items: center;
            cursor: pointer;
            box-shadow: inset 0 0 0 1px white;
            padding: 0;
            display: flex;
            justify-content: center;
            background-color: transparent;
            border: none;
            color: white;
            font-family: 'Mourgen';
            font-weight: 600;
            font-size: min(1.2rem, 3.5vw);;
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
            font-size: min(1rem, 3.5vw);;
            }
        .contents {
            border: 1px solid #ccc;
            height: min(70vh, 95vw);
            overflow-y: auto;
            overflow-x: hidden;
            padding: 20px;
            display: flex;
            justify-content: center;
            &::-webkit-scrollbar-thumb {
                background: orange;
            }
            &::-webkit-scrollbar {
                width: 1px;
            }
        }
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
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .section-1 {
            display: flex;
            flex-direction: row;
            .headshot {
                max-width: 60%;
                margin: 4%;
                margin-left: 12%;
                margin-bottom: 0;
            }
        }
        .section-2 {
            margin: 0;

        }
        .contents {
            width: 76vw;
        }
        .tab-container {
            margin-top: 10px;
            margin-bottom: 10px;
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

