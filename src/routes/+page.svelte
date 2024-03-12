<script>
    import { onMount } from 'svelte';
  
    let repeatCount = 10; // Initial guess, gets adjusted based on screen width
  
    function calculateRepeats() {
      const approximateWidth = 130; // Approximate width of text block
      repeatCount = Math.ceil(window.innerWidth / approximateWidth);
    }
  
    onMount(() => {
      calculateRepeats();
      window.addEventListener('resize', calculateRepeats);
      return () => {
        window.removeEventListener('resize', calculateRepeats);
      };
    });
</script>

<div class="repeating-text-container programmer">
    {#each Array(repeatCount) as _}
        <div class="repeating-text">
            <span>P</span>ROGRAMMER
        </div>
    {/each}
</div>
<img class='logo' src='images/kalypso.png' alt='kalypso'>
<div class="repeating-text-container graphic-designer">
    {#each Array(repeatCount) as _}
        <div class="repeating-text">
            <span>G</span>RAPHIC
        </div>
        <div class="repeating-text">
            <span>D</span>ESIGNER
        </div>
    {/each}
</div>

<style lang=scss>
.repeating-text-container {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    height: 200px;
}

.programmer {
    position: relative;
    top: -10px;
    font-size: 2rem;
    .repeating-text{
        transform: scaleY(2.5);
    }
}

.graphic-designer {
    position: fixed;
    bottom: 10px;
    font-size: 2rem;
    .repeating-text{
        transform: scaleY(3.4);
    }
}

.repeating-text {
    color: white;
    display: inline-block;
    font-family: 'Aesthico';
    display: inline-block;
    transform-origin: top;
}

.repeating-text span {
    color: orange; /* Styles the first letter differently */
}
.logo {
    width: 100%;
    height: 57%;
    position: absolute;
    top: 22%;
    }
</style>
    