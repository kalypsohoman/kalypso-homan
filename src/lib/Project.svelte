<script lang=ts>
    let open = false;

    interface Project {
        name: string;
        image: string;
        alt: string;
        description: string;
        gitLink?: string;
        link?: string;
    }
    
    export let options: Project;
</script>

{#if !open}
    <div>
        <button class='project-icon' on:click={() => open = !open}>
            <img src={options.image} alt={options.name}/>
        </button>
    </div>
{:else}
    <div class='project-container'>
        <button class='close' on:click={() => open = !open}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="white" stroke-width="2"/>
                <line x1="16" y1="16" x2="32" y2="32" stroke="white" stroke-width="4"/>
                <line x1="16" y1="32" x2="32" y2="16" stroke="white" stroke-width="4"/>
            </svg>
        </button>
        <img class='project-image' src={options.image} alt={options.alt}/>
        <div class='info-container'>
            <div class='title' >{options.name}</div>
            <div class='blurb' >{options.description}</div>
            <div class='link' >{options.link}</div>
        </div>
    </div>
{/if}

<style>
    .project-icon {
        border: solid white 1px;
        border-radius: 40px;
        width: 300px;
        height: 300px;
        margin: 20px;
    }

    .project-container {
        border: solid white 6px;
        border-radius: 50px;
        background-color: black;
        position: absolute;
        top: 20%;
        height: 60vh;
        width: 80vw;
        display: flex;
    }

    button {
        background: transparent;
        border: none;
        color: white;
    }

    .close {
        position: absolute;
        top: 2vh;
        font-size: 2rem;
        right: 3vw;
    }

    .project-image {
        border: white;
        height: 200px;
        width: 66%;
    }

    .info-container {
        flex-direction: column;
        width: 33%;
    }
</style>