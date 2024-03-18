<script lang=ts>
    let open = false;

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
</script>


<div>
    <button class='project-icon' on:click={() => open = !open}>
        <img src={options.image} alt={options.name}/>
    </button>
</div>

{#if open}    
    <div class="overlay" on:click={() => open = false} />
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
        </div>
{/if}

<style lang='scss'>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .project-icon {
        box-shadow:
            inset 0 0 0 3px white,
            inset 0 0 0 15px black,
            inset 0 0 0 16px white;
        width: 300px;
        height: 300px;
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
    .project-container {
        border: solid white 6px;
        background-color: black;
        position: absolute;
        top: 15%;
        left: 9vw;
        height: 50vw;
        width: 80vw;
        display: flex;
        z-index: 2;
        .close {
            position: absolute;
            top: 1vh;
            right: 1vw;
            svg:hover circle,
            svg:hover line {
                stroke: orange;
            }
            cursor: pointer; 
        }

        .project-image {
            box-shadow:
                inset 0 0 0 .2vw white,
                inset 0 0 0 1vw black;
            padding: 1.2vw;
            border: white;
            height: 70%;
            margin: 2.5vw;
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
            font-size: min(4rem, 4vw);
        }

        .links {
            display: flex;
            flex-direction: row;
            gap: 40px;
        }
        .link {
            color: black;
            font-size: 1rem;
            background: orange;
            padding: 10px;
            border-radius: 5px;
            text-decoration: none;
            font-family: 'Caviar Dreams';
            font-weight: 600;
            position: relative;
        }

        .blurb {
            font-size: 1.5rem;
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
                font-size: 0.9rem;
                font-weight: 600;
            }
        }
    }
    }
    button {
        background: transparent;
        border: none;
        color: white;
    }



    
</style>