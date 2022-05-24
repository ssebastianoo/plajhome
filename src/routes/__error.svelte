<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status // same as status: status
			}
		};
	}
</script>

<script>
	import Main from '$lib/Main.svelte';
	export let message, status;
</script>

<Main title={status}>{message}</Main>
