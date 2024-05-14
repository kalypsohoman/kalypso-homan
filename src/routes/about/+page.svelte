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
        <div class='images'>
            <div class='headshot-container'>
                {#if activeTab === 'Poem'}
                    <img class='headshot' src='images/headshot2.png' alt='headshot'/>
                    
                {:else}
                    <img class='headshot' src='images/headshot.png' alt='headshot'/>
                {/if}
                <button class='secret-button' on:click={() => activeTab = 'Poem'} />
            </div>
            <SocialMediaLinks />
        </div>
        <div class='about-blurb'>
            <h1>Hey! I'm Kalypso. </h1>
            <p> I'm a software developer who likes talking to people and eating delicious soup.
                This is a site that lets you look through some of my projects.
                Please reach out if you want to know more.
            </p>
        </div>
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
        position: relative;
        .images {
            display: flex;
            flex-direction: row;
        }
        .headshot-container {
            position: relative;
            margin-left: 20px;
            .headshot{
               max-height: 50vh;
           }
            .secret-button {
                height: 40px;
                width: 40px;
                top: 44%;
                left: 77%;
                position: absolute;
                cursor: pointer;
            }
        }
       .about-blurb{
        display: flex;
        flex-direction: column;
        padding: 20px;
        max-width: min(70vw, 400px);
        & h1 {
            text-align: center;
        }
        & p {
            text-align: justify;
        }
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
            .headshot-container{
                max-width: 70%;


            }
            .about-blurb {
                max-width: 40vw;
            }
        }
        .section-2 {
            margin: 0;
            .contents {
                width: 76vw;
                height: fit-content;
                margin-bottom: 30px;
                align-items: start;
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
        }
    }
    

    @media(max-width: 700px) {
        .section-1 {
            display: flex;
            flex-direction: column;
            .headshot-container {
                max-width: 70%;
                .headshot {
                    max-width: 100%;
                }
            }
            .about-blurb {
                max-width: min(70vw);
            }
        }

    }

</style>

