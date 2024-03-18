
<script>
// @ts-nocheck

    import { page } from "$app/stores";
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
    import { NavMenu } from "$lib";
    let open = false;

    /**
	 * @type {string | null}
	 */
    let currentPage;
    page.subscribe(page => currentPage = page.route.id)
</script>

<nav>
    <a href="/">
        <img src='images/nav-logo.png' alt='Home'/>
    </a>
    <NavMenu />
    <div class='links'>
        <a class={(currentPage === '/') ? 'active' : ''} href={'/'}>CODE</a>
        <p>•</p>
        <a class={(currentPage === '/about') ? 'active' : ''} href={'/about'}>ABOUT</a>
    </div>
</nav>

<div class='main'>    
    <slot/>
</div>

<style lang='scss'>
    nav {
        height: 80px;
        border-bottom: 1px solid white;
        display: flex;
        align-items: center;
        
        a:first-child {
            margin-right: auto; // Pushes the first child to the left and others to the right
            img {
                width: 200px;
                margin: 10px;
            }
        }

        .links {
            display: flex;
            align-items: flex-end;
            height: 80px;

            a {
                color: white;
                text-decoration: none;
                display: flex;
                font-family: "Mourgen", sans-serif;
                font-size: 3rem;
            }

            p{
                display: contents;
                font-size: 4rem;
            }

            .active {
                color: orange;
            }
        }

        // MOBILE STYLING
        @media (max-width: 850px) {
            .links {
                display: none;
            }
        }
    }
</style>
