<script>
	import Loading from './Loading.svelte';

	let index = 0;
	let image, spinner;
	const images = [
		'photo_2022-07-16_14-04-51.webp',
		'photo_2022-07-16_14-05-07.webp',
		'photo_2022-07-16_14-05-10.webp',
		'photo_2022-07-16_14-05-13.webp',
		'photo_2022-07-16_14-05-15.webp',
		'photo_2022-07-16_14-05-18.webp',
		'photo_2022-07-16_14-05-21.webp',
		'photo_2022-07-16_14-05-23.webp',
		'photo_2022-07-16_14-05-26.webp',
		'photo_2022-07-16_14-05-28.webp',
		'photo_2022-07-16_14-05-31.webp',
		'photo_2022-07-16_14-05-34.webp',
		'photo_2022-07-16_14-05-36.webp',
		'photo_2022-07-16_14-05-39.webp',
		'photo_2022-07-16_14-05-41.webp',
		'photo_2022-07-16_14-05-43.webp',
		'photo_2022-07-16_14-05-46.webp'
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
		image.classList.add('hidden');
		spinner.classList.remove('hidden');
	};

	const imageLoaded = () => {
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
