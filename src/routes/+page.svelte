<!-- 
    TODO: 

    1. Fix weird scrolling behavior that pauses scroll at specific intervals
    2. Scrolling down should still move the projects in non mobile mode.
-->

<script>
    import { codeProjects, Project } from '$lib';
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
        height: fit-content;
        border: none;
        align-items: center;
        padding: 0;
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
