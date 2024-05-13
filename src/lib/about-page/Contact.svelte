<!-- <script lang="ts">
    import { browser } from '$app/environment'; // Import this only if you need to check if you're running on the client side
    
    let name: string = 'test';
    let email: string = 'test@test.com';
    let message: string = 'test2';

    async function handleSubmit() {
        if (browser) { // Ensures this code runs only in the browser

            // Prepare the form data
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);

            // Send the form data to SvelteKit server endpoint
            try {
                const response = await fetch('?/submit', {
                method: 'POST',
                body: formData
                });
                
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                
                const result = await response.json();
                console.log(result)
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
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
</form>

<style lang="scss">
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



<script>
    export let form;
</script>

<div class="wrapper">
    <fieldset>
        <legend>Send Emails</legend>
        <form method="POST" class="container">
            <div class="input">
                <label for="">To:</label>
                <input name="to" type="email" value="hello@crocodaily.com" />
            </div>
            <div class="input">
                <label for="">Subject:</label>
                <input name="subject" type="text" value="" />
            </div>
            <div class="input">
                <label for="">Body:</label>
                <textarea name="body" rows="6" value="" />
            </div>
            <button type="submit">Send</button>
        </form>
        <p class="success">{form?.success || ""}</p>
    </fieldset>
</div>









<!-- <div class='contact'>
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
</style> -->
