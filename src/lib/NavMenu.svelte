<script lang=ts>
    import Hamburger from "./Hamburger.svelte";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";


    let currentPage: string | null;
    page.subscribe(page => {currentPage = page.route.id})
    let open:boolean = false;

</script>

<Hamburger bind:open/>

{#if open}
    <div class='hamburger-menu-contents' transition:fly={{ y: -15}}>
        <a class={currentPage === '/' ? 'current-page' : ''}
            href={'/'}
            on:click={()=> open = !open}
            transition:fly={{ y: -15, delay: 50 }}>
            CODING
        </a>
        <a class={currentPage === '/about' ? 'current-page' : ''}
            href={'/about'}
            on:click={()=> open = !open}
            transition:fly={{ y: -15, delay: 50 }}>
            ABOUT
        </a>
    </div>
{/if}

<style>
    .hamburger-menu-contents {
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        position: absolute;
        padding: 20px 0;
        top: 80px;
        width: 100vw;
        background-color: rgb(0 0 0);
        z-index: 1000;
        border: white solid 1px;
        border-inline: none;
        flex-direction: column;
        gap: 1rem;
    }

    a {
        font-family: 'Mourgen';
        cursor: pointer;
        width: max-content;
        margin: 10px auto;
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