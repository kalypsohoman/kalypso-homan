<script lang="ts">
    let body: string = '';
    let successMessage: string = '';
    let errorMessage: string = '';

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch('/about', {
                method: 'POST',
                body: formData,
            });

            if(response.ok) {
                successMessage = `Thanks for sending your message. I'll get back to you soon.`;
            } else {
                throw new Error('Oops, there was an error sending the message. Please try again later.')
            }
        } catch(error) {
            console.error('Error submitting form:', error);
            errorMessage = 'Oops, there was an error sending the message. Please try again later.';
        }
        }
</script>
    {#if successMessage}
        <p>{successMessage}</p>
    {:else if errorMessage}
        <p>{errorMessage}</p>
    {:else}
        <form method="POST" class="container" on:submit={handleSubmit}>
            <div class="input">
                <label for="name">Name</label>
                <input name="name" type="text" value="" required />
            </div>
            <div class="input">
                <label for="email">Email</label>
                <input name="email" type="email" value="" required />
            </div>
            <div class="input">
                <label for="subject">Subject</label>
                <input name="subject" type="text" value="" required />
            </div>
            <div class="input">
                <label for="body">Message
                    {#if body.length > 500}
                        <label for="body" class='char-count'>{body.length - 500 + ' characters over limit'} </label>
                    {/if}
                </label>
                <textarea name="body" rows="6" bind:value={body} required />
            </div>
            <button type="submit">Send</button>
        </form>
    {/if}

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin: 10px;
        margin-bottom: 20px;
        width: 90%;

        .input {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        label {
            font-family: 'Caviar Dreams';
            font-size: 0.8rem;
            .char-count {
                color: orange;
                font-size: 0.9rem;
            }
        }
        input {
            height: 30px;
            color: white;
            padding: 10px;
            font-family: 'Caviar Dreams';
            font-size: 1rem;
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
</style>