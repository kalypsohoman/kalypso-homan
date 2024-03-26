<!-- 
    TODO: 
    1. Fix scrolling left within page navigates back instead of scrolling in project div.
-->

<script>
    import { codeProjects, Project } from '$lib';
    import { onMount } from 'svelte';

    /**
	 * @param {{ deltaX: any; deltaY: any; preventDefault: () => void; }} e
	 */
    function handleWheelEvent(e) {
        const projectsDiv = document.querySelector('.projects');
        if (projectsDiv) {
            // Calculate the scroll amount
            const scrollAmountX = e.deltaX;
            const scrollAmountY = e.deltaY;

            if (scrollAmountX !== 0) {
                projectsDiv.scrollLeft += scrollAmountX;
            }
            // Only prevent default actions if we're scrolling in the Y direction
            if (scrollAmountY !==0) {
                e.preventDefault();
                projectsDiv.scrollLeft += scrollAmountY
            }
        }
    }

    onMount(() => {
        // Listen for the "wheel" event on the entire window
        window.addEventListener('wheel', handleWheelEvent, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleWheelEvent);
        };
    });

</script>

<div class='main'>
    <img class='projects-text' src='images/PROJECTS.png' alt='PROJECTS'>
    <div class='projects'>
        {#each codeProjects as codeProject}
            <Project options={codeProject}/>
        {/each}
    </div>
</div>

<style lang=scss>
    .main {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .projects-text {
        width: min(80%, 70vh);
        margin: 13vh auto;
    }

    .projects {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        gap: 20px;
        padding: 20px;
        box-sizing: border-box;
        max-height: 100vh;
        width: 90%;
        border-top: solid white;
    

    &::-webkit-scrollbar {
        height: 2px;
        widows: 1px;
        background: white;
    }

    &::-webkit-scrollbar-track {
        background: white;
    }

    &::-webkit-scrollbar-thumb {
        background: orange;
    }
}

//REACTIVE STYLINGS
@media (max-width: 850px) {
    .projects {
        display: flex;
        flex-direction: column;
        overflow: visible;
        border: none;
        align-items: center;
        padding: 0;
        max-height: fit-content;
    }
    .projects-text {
        margin: 10vw auto;
    }
    .main {
        overflow-y: auto;
        height: fit-content
    }
}
</style>
