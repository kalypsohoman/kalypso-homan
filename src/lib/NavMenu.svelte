<script lang=ts>
    import Hamburger from "./Hamburger.svelte";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";


    let currentPage: string | null;
    page.subscribe(page => {currentPage = page.route.id})
    let open:boolean = false;

    export const links = ['art', 'coding', 'about'];
</script>

<Hamburger bind:open/>

{#if open}
    <div class='hamburger-menu-contents' transition:fly={{ y: -15}}>
        {#each links as link, i}
            <a class={currentPage === '/' + link ? 'current-page' : ''}
                href={'/' + link}
                on:click={()=> open = !open}
                transition:fly={{ y: -15, delay: 50 }}>
                    {link.toUpperCase()}
                
            </a>
        {/each}
    </div>
{/if}

<style>
    .hamburger-menu-contents {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100vw;
        background-color: rgb(0 0 0);
        z-index: 1000;
        border: white solid 1px;
        border-inline: none;
        display: none;
        flex-direction: column;
    }

    a {
        font-family: 'Mourgen';
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
        text-decoration: none;
        color: white;
    }

    a:hover {
        box-shadow: inset 0px -1px 0px 0px orange;
    }

    .current-page {
        color: orange;
    }

    /* // MOBILE STYLING */
    @media (max-width: 850px) {
        .hamburger-menu-contents {
            display: flex;
        }
    }
</style>