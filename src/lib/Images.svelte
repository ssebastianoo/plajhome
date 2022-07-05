<script>
	let index = 0;
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
</script>

<div class="images">
	<img src={'./house/' + images[index]} alt="Apartment" />
	<div class="controls">
		<button class="prev" on:click={() => (index = (index - 1 + images.length) % images.length)}>
			<i class="fas fa-chevron-left" />
		</button>
		<p>{index + 1} / {images.length}</p>

		<button class="next" on:click={() => (index = (index + 1) % images.length)}>
			<i class="fas fa-chevron-right" />
		</button>
	</div>
</div>

<style lang="scss">
	.images {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 500px;
	}

	img {
		width: 90vw;
		max-width: 400px;
	}

	.controls {
		margin-top: 40px;
		display: flex;
		gap: 50px;

		button {
			background: none;
			border: none;
			padding: 0;
			margin: 0;
			font-size: 2em;
			color: #fff;
			cursor: pointer;
		}
	}
</style>
