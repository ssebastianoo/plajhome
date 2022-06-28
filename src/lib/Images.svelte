<script>
	const images = [
		'VFL06437-min.JPG',
		'VFL06441-min.JPG',
		'VFL06443-min.JPG',
		'VFL06444-min.JPG',
		'VFL06457-min.JPG',
		'VFL06459-min.JPG',
		'VFL06462-min.JPG',
		'VFL06465-min.JPG',
		'VFL06467-min.JPG',
		'VFL06471-min.JPG',
		'VFL06472-min.JPG',
		'VFL06473-min.JPG',
		'VFL06474-min.JPG',
		'VFL06475-min.JPG',
		'VFL06476-min.JPG'
	];
</script>

<div class="images">
	{#each images as image}
		<div class="image">
			<img src={'./house/' + image} alt="img" />
		</div>
	{/each}
</div>

<style lang="scss">
	.images {
		margin-top: 200px;
		width: 94vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 3vw;
	}
	.image {
		display: flex;
		align-items: center;
		margin: 100px;
		width: 100%;
		max-width: 1000px;

		img {
			width: 400px;
		}

		&:nth-child(odd) {
			justify-content: right;
		}
	}

	@media (max-width: 750px) {
		.images {
			margin-top: 50px;

			.image {
				margin: 50px 0;
				justify-content: center;

				&:nth-child(odd) {
					justify-content: center;
				}

				img {
					width: 300px;
				}
			}
		}
	}
</style>
