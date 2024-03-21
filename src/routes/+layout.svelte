
<script>
// @ts-nocheck

    import { page } from "$app/stores";
    import { NavMenu } from "$lib";

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
        <a class:active={currentPage === '/'} href={'/'}>CODE</a>
        <p>•</p>
        <a class:active={currentPage === '/about'} href={'/about'}>ABOUT</a>
    </div>
</nav>
  
<slot/>

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
                margin-inline: 10px;
                margin-bottom: 3px;
                &:not(.active):hover {  //only applies the hover color change if the class isn't active
                    color: orange;
                }
            }
            p{
                display: contents;
                font-size: 4.5rem;
            }

            .active {
                border-top: solid orange;
                border-bottom: solid orange;
                cursor: default;
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
