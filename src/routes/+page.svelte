<script>
    import { codeProjects, Project } from "$lib";
</script>

<img class='logo' src='images/PROJECTS.png' alt='PROJECTS'>
<div class='projects'>
    {#each codeProjects as codeProject}
        <Project options={codeProject}/>
    {/each}
</div>

<style lang=scss>
    .logo {
        width: min(80%, 70vh);
        margin: 17vh auto
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

        scrollbar-width: thin; /* For Firefox */
    scrollbar-color: darkgray lightgray; /* For Firefox, scrollbar thumb and track */

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
    }
</style>
    