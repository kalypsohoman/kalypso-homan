<script lang=ts>
	import { PopupContainer } from '$lib';

    interface Project {
        name: string;
        image: string;
        alt: string;
        description: string;
        techStack: string[];
        gitLink?: string;
        link?: string;
    }
    
    export let options: Project;

    let open = false;
</script>


<div>
    <button class='project-icon' on:click={() => open = !open}>
        <img src={options.image} alt={options.name}/>
    </button>
</div>

{#if open}   
    <PopupContainer on:close={() => open = !open}>
        <img class='project-image' src={options.image} alt={options.alt}/>
        <div class='info-container'>
            <div class='title' >{options.name}</div>
            <div class='links' >
                {#if options.link}
                    <a class='link' href={options.link}>View Website</a>
                {/if}
                {#if options.gitLink}
                    <a class='link' href={options.gitLink}>View Code</a>
                {/if}
            </div>
            <div class='blurb' >{options.description}</div>
            <ul class='tech-stack'>
                {#each options.techStack as techStackItem}
                    <li class='tech-stack-item'>{techStackItem.toLowerCase()}</li>
                {/each}
            </ul>
        </div>
    </PopupContainer>
{/if}

<style lang='scss'>
    .project-icon {
        box-shadow:
            inset 0 0 0 3px white,
            inset 0 0 0 15px black,
            inset 0 0 0 16px white;
        width: 250px;
        height: 250px;
        margin: 20px;
        overflow: hidden;
        position: relative;
        padding: 20px;
        cursor: pointer; 
        img {
            width: 100%;
            height: 100%;
            position: relative;
        }
    }
    .project-icon:hover {
    box-shadow:
        inset 0 0 0 3px white,
        inset 0 0 0 15px black,
        inset 0 0 0 16px orange;
    }

    .project-image {
        box-shadow:
            inset 0 0 0 .2vw white,
            inset 0 0 0 1vw black;
        padding: 1.2vw;
        border: white;
        height: clamp(1px, 40vw, 60vh);
        width: clamp(1px, 40vw, 60vh);
        margin: 3vw;
        margin-right: 0;
    }
    .info-container {
        display: flex;
        flex-direction: column;
        width: 34vw;
        padding: 3vw;
        gap: 20px;
    .title {
        font-family: 'Mourgen';
        font-size: max(2rem, 3.6vw);
    }
    .links {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
    .link {
        color: black;
        font-size: clamp(0.8rem, 1.2vw, 1.3rem);
        background: orange;
        padding: 10px;
        border-radius: 5px;
        text-decoration: none;
        font-family: 'Caviar Dreams';
        font-weight: 600;
        position: relative;
    }
    .blurb {
        font-size: clamp(1rem, 1.22vw, 1.4rem);
        font-family: 'Caviar Dreams';
    }
    .tech-stack {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0;
            .tech-stack-item {
                background: floralwhite;
                border: orange solid 3px;
                color: black;
                border-radius: 20px;
                padding: 6px;
                margin: 5px;
                font-family: "Caviar Dreams";
                font-size: clamp(0.7rem, 1.4vw, 1rem);
                font-weight: 600;
            }
        }
    }
    
    button {
        background: transparent;
        border: none;
        color: white;
    }

    //REACTIVE STYLING
    @media(max-width: 850px) {
        .project-icon {
            width: min(80vw, 350px);
            height: min(80vw, 350px);
        }
        .project-image {
            width: 30%;
            height: fit-content;
            min-width: 200px;
            margin: 0;
        }
        .info-container {
            width: 90%;
            .title {
                margin:auto;
                font-size: clamp(1.7rem, 10vw, 3rem);
            }
            .links {
                justify-content: center;
                gap: min(40px, 6vw);
                .link {
                    font-size: clamp(0.7rem, 1.2vw, 1.3rem);
                }
            }
            .tech-stack {
                margin-top: 0;
            }
        }
    }
</style>