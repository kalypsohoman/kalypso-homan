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

{#if open}
    <div class='code-project-container'>
        <button class='close' on:click={() => open = !open}>X</button>
        <img src={options.image} alt={options.alt}/>
        <div class='title' >{options.name}</div>
        <div class='blurb' >{options.description}</div>
        <div class='link' >{options.link}</div>
    </div>
{:else}
    <div>
        <button class='project-icon' on:click={() => open = !open}>
            <img src={options.image} alt={options.name}/>
        </button>
    </div>
{/if}

<style>

</style>