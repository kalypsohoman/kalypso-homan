<script>
    export const poem = [
        "They try to envelope themselves in",
        "the patterns of objects, and acts, and others.",
        "On a cold night, wrap yourself in a blanket ",
        "you find on the side of the road.",
        "",
        "They are no longer sure if",
        "they want to have never existed.",
        "A cloud that never collapsed.",
        "“What do I do when the",
        "options I have are not enough?”",
        "The stars do not answer.",
        "",
        "Given the time,",
        "you might might stretch out",
        "your hands,",
        "touch every last moon",
        "and stone.",
        "Search breadth without bias,",
        "one node at a time until lifetimes of sun",
        "were shed like dust from skin in a black,",
        "and endless sky.",
        "",
        "Given the time, you would choose",
        "to go mad searching for a younger earth,",
        "where he hadn't yet been born,",
        "and there was still time to save him.",
        "",
        "The stars putter and watch their feet,",
        "contrite, abashed, one gestures to a sign.",
        "“No solicitation”",
        "And I burst to know, “Where the fuck is he?”",
        "",
        "I see them pretending not to stare.",
        "I move slowly so as to not scare them, and breathe:",
        "“Who am I if I don’t want to die anymore?”",
        "Emptied of conviction.",
        "Polyvinyl chloride sewn together",
        "can suspend bodies on air.",
        "They say it lasts forever,",
        "But I am deflated, heavy. A lifetime collapsed",
        "to a single point. I silently",
        "open to gasp for light,",
        "and every time you look away.",
        "",
        "I step out into the night.",
        "",
        "So ours is not an endless sky,",
        "and all I have left are the clothes you wore,",
        "kissed by the lint you left behind.",
        "",
        "In your lifetime, you will never twice find",
        "the same grain of sand.",
        "and in the span of space,",
        "you will never be rewritten.",
        "",
        "I look at the stars and see he is nowhere and never or weighted again.",
        "He has no more bias.",
        "His body claims no bounds.",
        "But I have begun to consistently see",
        "the same figure at the corners of my vision.",
        "",
        "Perhaps you do not need",
        "to travel through forever",
        "to find his shape again.",
        "",
        "Perhaps you just need now,",
        "and to let the stars crash in.",
        "",
        ""
    ]
</script>

<div class='poem'>
  {#each poem as line}
    {#if (line === '')}
      <br/>
    {/if}
    <p>{line}</p>
  {/each}
</div>

<style>
  .poem {
    padding: 10px;
  }
</style>