<script>
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';

    export let form;

    let loading = false;

    const handleSubmit = () => {
        loading = true;
        return async () => {
            console.log(form, $page.form);
            loading = false;
        };
    };
</script>

<form
    method="post"
    action="?/testaction"
    use:enhance={handleSubmit}
>
    <input
        name="field1"
        type="text"
        required
    />
    <input
        name="field2"
        type="text"
        required
    />
    <input type="submit" />
</form>

<button on:click={() => console.log(form, $page.form)}>click me </button>
