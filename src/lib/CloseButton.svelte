<script lang="ts">
    import { quadInOut } from "svelte/easing";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function spin(node: HTMLSpanElement, {duration, rotate}: {duration: number, rotate: number}) {
		return {
			duration,
			css: (t: number) => {
				const eased = quadInOut(t);
				return `
					transform:  rotate(${eased * rotate}deg);
					`;
			}
		};
	}
</script>

<button
    class='close'
    aria-label={'close'}
    on:click={() => dispatch('close')}
    >
    <span class="close-box">
        <span class="close-inner first-line" out:spin={{ duration: 500, rotate: 125 }}/>
        <span class="close-inner second-line" out:spin={{ duration: 500, rotate: 205 }}/>
    </span>
</button>

<style lang="scss">
    .close{
        display: contents;
        &:hover {
            color: orange;
        }
    }

    .close-box {
        border: solid white 2px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        &:hover {
            border: solid orange 2px;
            cursor: pointer;
            .first-line, .second-line {  
                background-color: orange;
            }
        }
    }

    .close-inner {
        display: block;
        width: 20px;
        height: 1px;
        background-color: white;
        position: relative;
        &.first-line {
            transform: rotate(45deg);
            left: 5px;
            top: 14px;

        }
        &.second-line {
            transform: rotate(-45deg);
            left: 5px;
            top: 13px;
        }
    }
</style>

