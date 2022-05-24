<div class="images">
	<div class="image">
		<img src="./house/VFL06288.jpg" alt="img" />
	</div>
	<div class="image">
		<img src="./house/VFL06288.jpg" alt="img" />
	</div>
	<div class="image">
		<img src="./house/VFL06288.jpg" alt="img" />
	</div>
	<div class="image">
		<img src="./house/VFL06288.jpg" alt="img" />
	</div>
	<div class="image">
		<img src="./house/VFL06288.jpg" alt="img" />
	</div>
	<div class="image">
		<img src="./house/VFL06288.jpg" alt="img" />
	</div>
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
</style>
