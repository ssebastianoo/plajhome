<script>
	import Loading from './Loading.svelte';

	let index = 0;
	let image, spinner;
	const images = [
		'VFL06437-min.webp',
		'VFL06441-min.webp',
		'VFL06443-min.webp',
		'VFL06444-min.webp',
		'VFL06457-min.webp',
		'VFL06459-min.webp',
		'VFL06462-min.webp',
		'VFL06465-min.webp',
		'VFL06467-min.webp',
		'VFL06471-min.webp',
		'VFL06472-min.webp',
		'VFL06473-min.webp',
		'VFL06474-min.webp',
		'VFL06475-min.webp',
		'VFL06476-min.webp'
	];

	const changeImage = (action) => {
		switch (action) {
			case 'prev':
				index = index === 0 ? images.length - 1 : index - 1;
				break;
			case 'next':
				index = index === images.length - 1 ? 0 : index + 1;
				break;
			default:
				break;
		}
	};

	const imageLoading = () => {
		console.log('loading');
		image.classList.add('hidden');
		spinner.classList.remove('hidden');
	}

	const imageLoaded = () => {
		console.log('loaded');
		image.classList.remove('hidden');
		spinner.classList.add('hidden');
	};
</script>

<div class="images">
	<div class="spinner hidden" bind:this={spinner}>
		<Loading />
	</div>
	<img
		on:loadstart={imageLoading}
		on:load={imageLoaded}
		bind:this={image}
		src={'./house/' + images[index]}
		alt="Apartment"
	/>
	<div class="controls">
		<button
			class="prev"
			on:click={() => {
				changeImage('prev');
			}}
		>
			<i class="fas fa-chevron-left" />
		</button>
		<p>{index + 1} / {images.length}</p>

		<button
			class="next"
			on:click={() => {
				changeImage('next');
			}}
		>
			<i class="fas fa-chevron-right" />
		</button>
	</div>
</div>

<style lang="scss">
	.hidden {
		display: none !important;
	}

	.images {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 300px;
		margin-top: 40px;
		margin-bottom: 80px;
	}

	img {
		width: 90vw;
		max-width: 400px;
	}

	.spinner {
		height: 216.733px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.controls {
		display: flex;
		gap: 50px;

		button {
			background: none;
			border: none;
			padding: 0;
			margin: 0;
			font-size: 2em;
			color: unset;
			cursor: pointer;
		}
	}
</style>
