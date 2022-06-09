<script>
	const images = [
		'VFL06421.JPG',
		'VFL06424.JPG',
		'VFL06426.JPG',
		'VFL06427.JPG',
		'VFL06433.JPG',
		'VFL06434.JPG',
		'VFL06435.JPG',
		'VFL06436.JPG',
		'VFL06437.JPG',
		'VFL06441.JPG',
		'VFL06443.JPG',
		'VFL06444.JPG',
		'VFL06445.JPG',
		'VFL06446.JPG',
		'VFL06453.JPG',
		'VFL06454.JPG',
		'VFL06455.JPG',
		'VFL06456.JPG',
		'VFL06457.JPG',
		'VFL06459.JPG',
		'VFL06462.JPG',
		'VFL06465.JPG',
		'VFL06467.JPG',
		'VFL06471.JPG',
		'VFL06472.JPG',
		'VFL06473.JPG',
		'VFL06474.JPG',
		'VFL06475.JPG',
		'VFL06476.JPG',
		'VFL06482.JPG'
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
	}
	.image {
		display: flex;
		align-items: center;
		margin: 100px;

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
