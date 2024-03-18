<script>
    import { codeProjects, Project } from "$lib";
</script>

<img class='logo' src='images/kalypso.png' alt='kalypso'>
{#each codeProjects as codeProject}
    <Project options={codeProject}/>
{/each}

<style lang=scss>

.logo {
    width: min(80%, 70vh);
    margin: 150px auto
    }
</style>
    