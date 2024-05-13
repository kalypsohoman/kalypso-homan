<script lang='ts'>
    import { quadInOut } from "svelte/easing";
    import { CloseButton } from "$lib";
    import { createEventDispatcher } from 'svelte';

    export let type: string | undefined = undefined;

    // if this is the resume, then don't show the popup on mobile displays. 
    if (type === 'resume') {                                      
        document.documentElement.style.setProperty('--popup-mobile-display', 'none');  
    } else {
        document.documentElement.style.setProperty('--popup-mobile-display', 'flex');
    }

    function expand(node: HTMLSpanElement, { duration }: { duration: number }) {
        const finalHeight = `${node.scrollHeight}px`; // Correctly capture the final height

        return {
            duration,
            css: (t: number) => {
                const eased = quadInOut(t);
                const newHeight = eased * node.scrollHeight;
                return `
                    overflow: hidden;
                    height: ${newHeight}px;
                    transition: height ${duration}ms ease-in-out;
                `;
            },

            // Adding a finalizing step to explicitly utilize finalHeight
            end() {
                node.style.height = finalHeight; // Apply the final height to maintain expanded state
            }
        };
    }

    const dispatch = createEventDispatcher();

    // Function delays close animation to let the button animation to play first
    function delayedClose() {
        setTimeout(() => {
            dispatch('close');
        }, 250);
    }

</script>

<button class="overlay" on:click={() => dispatch('close')} aria-label='Close Project'/>
<div class='pop-up'  transition:expand={{duration: 500}}>
    <div class='button-container'>
        <CloseButton on:close={(delayedClose)}/>
    </div>
    <slot/>
</div>

<style lang='scss'>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .pop-up {
        border: solid white 6px;
        background-color: black;
        position: absolute;
        top: 15%;
        left: 9vw;
        max-height: 80%;
        width: 80vw;
        z-index: 2;
        overflow: auto;
        display: flex;
        
        .button-container {
            position: absolute;
            top: 1vh;
            right: 1vw;
            display: grid; 
        }
    }

    //REACTIVE STYLING
    @media(max-width: 850px) {
        .overlay{
            display: var(--popup-mobile-display);
        }

        .pop-up {
            flex-direction: column;
            align-items: center;
            overflow-y: scroll;
            position: fixed;
            text-align: center;
            padding: 4vw;
            padding-bottom: 0;
            width: 72vw;
            display: var(--popup-mobile-display);
        }
    }
</style>