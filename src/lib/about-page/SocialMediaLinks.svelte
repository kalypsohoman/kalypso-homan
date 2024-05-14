<div class='social-media-links'>
    <a class='social-media-link github' href="https://github.com/kalypsohoman" target="_blank">
        <img src="images/icons/github.png" alt="Link to my Github">
    </a>
    <a class='social-media-link linkedin' href="http://www.linkedin.com/in/kalypsohoman/" target="_blank">
        <img src="images/icons/linkedin.png" alt="Link to my LinkedIn">
    </a>
    <a class='social-media-link instagram' href="https://www.instagram.com/kalypso_designs/" target="_blank">
        <img src="images/icons/instagram.png" alt="Link to my Instagram">
    </a>
</div>

<style lang="scss">
    .social-media-links {
            display: flex;
            justify-content: space-evenly;
            margin-top: 20px;
            margin: 0px;
            flex-direction: column;
        & img {
            display: block;
            max-width: min(70%, 100px);
            height: auto;
            border: 0;
            margin-inline: auto;
        }
    }

    @media(max-width: 850px) {
        .social-media-links {
            & img {
                max-width: min(50%, 100px);
            
            }
        }
    }
</style>