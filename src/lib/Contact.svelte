<div class='contact'>
    <h1>Want to work on something together?</h1>
    <div class='email-box'>
        <h3>email:</h3>
        <p>kalypsohoman@gmail.com</p>
    </div>
</div>
    

<style lang="scss">
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 80%;
    }

    .email-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

<!-- <script lang='ts'>
    let name: string = '';
    let email: string = '';
    let message: string = '';

    function handleSubmit() {
        
        if(message.length < 500 ) {

        }
    }

	export let form: any;




</script>


<form method="POST" action="?/login">
	{#if form?.missing}<p class="error">Please complete the form before sending.</p>{/if}
	{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
	<label>
		Email
		<input name="email" type="email" value={form?.email ?? ''}>
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Log in</button>
	<button formaction="?/register">Register</button>
</form>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	<!-- <p>Message Sent!</p>
{/if} -->

<!-- <form on:submit|preventDefault={handleSubmit}>
    <div class='header'>
        <h3>Want to work on something together?</h3>
        <h1>Send me a message!</h1>
    </div>
    <div class='input-box'>
        <label for="name">Name </label>
        <input type="text" id="name" bind:value={name} required>
    </div>
    <div class='input-box'>
        <label for="name">Email </label>
        <input type="email" id="email" bind:value={email} required>
    </div>
    <div class='input-box'>
        <label for="message">Message </label>
        <textarea id="message" bind:value={message} required/>
        {#if message.length > 500}
            <p class='char-count'>{message.length - 500 + ' characters over limit.'} </p>
        {/if}
    </div>
    <button type="submit">Send</button>
</form> -->

<!-- <style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin: 10px;
        h3, h1 {
            margin: 0;
            font-weight: 400;
        }
        .input-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            .char-count {
                color: orange;
                font-size: 0.9rem;
                position: relative;
                bottom: 23vh;
                left: 36vw;
            }
        }
        label {
            font-family: 'Caviar Dreams';
            font-size: 1.2rem;
        }
        input {
            height: 30px;
            color: white;
            padding: 10px;
            font-family: 'Caviar Dreams';
            font-size: 1.5rem;
            background-color: black;
            border: solid white;
            &:focus {
                border: solid orange;
                outline: none;
            }
        }
        textarea {
            height: 18vh;
            color: white;
            padding: 2vh;
            font-family: "Caviar Dreams";
            font-size: 1.2rem;
            background-color: black;
            border: 1px solid white;
            &::-webkit-scrollbar-thumb {
                background: orange;
            }
            &::-webkit-scrollbar {
                width: 1px;
            }
            &:focus {
                border: 1px solid orange;
                outline: none;
            }
        }

        button {
            background: black;
            border: solid orange;
            color: orange;
            width: 100%;
            height: 60px;
            margin-top: 15px;
            padding: 10px;
            font-family: "Caviar Dreams";
            font-size: 1.2rem;
        }
    }
</style> -->