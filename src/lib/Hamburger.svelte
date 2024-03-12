<script lang="ts">
    export let open: boolean = false;
</script>

<button
    class="hamburger"
    aria-label={'menu'}
    class:is-active={open}
    on:click={() => (open = !open)}>
    <span class="hamburger-box">
        <span class="hamburger-inner" />
    </span>
</button>

<style lang="scss">
.hamburger {
    padding: var(--padding, 15px);
    display: none;
    cursor: pointer;

    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    // Normalize (<button>)
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    &:active {
        background-color: transparent !important;
    }

    &:hover {
        opacity: var(--hover-opacity, 0.7);
    }

    &.is-active {
        &:hover {
            opacity: var(--hover-opacity-active, var(--hover-opacity, 0.7));
        }

        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
            background-color: var(--active-color, var(--color, white));
        }
    }
}

.hamburger-box {
    width: var(--layer-width, 30px);
    height: calc(var(--layer-height, 4px) * 3 + var(--layer-spacing, 6px) * 2);
    display: inline-block;
    position: relative;
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: var(--layer-height, 4px) / -2;

    &,
    &::before,
    &::after {
        width: var(--layer-width, 30px);
        height: var(--layer-height, 4px);
        background-color: var(--color, white);
        border-radius: var(--border-radius, 4px);
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }

    &::before,
    &::after {
        content: '';
        display: block;
    }

    &::before {
        top: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
    }

    &::after {
        bottom: calc(
            (var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1
        );
    }
}

/*
* Spin
*/
.hamburger {
    .hamburger-inner {
        transition-duration: 0.22s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

        &::before {
            transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
        }

        &::after {
            transition: bottom 0.1s 0.25s ease-in,
                transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
    }

    &.is-active {
        .hamburger-inner {
            transform: rotate(225deg);
            transition-delay: 0.12s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

            &::before {
                top: 0;
                opacity: 0;
                transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
            }

            &::after {
                bottom: 0;
                transform: rotate(-90deg);
                transition: bottom 0.1s ease-out,
                    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
            }
        }
    }
}

/* // MOBILE STYLING */
@media (max-width: 850px) {
    .hamburger {
        display: inline-block;
    }
}
</style>