<script>
	import preview from '$lib/assets/VFL06306.jpg';
	const imgs = import.meta.glob('/src/lib/assets/*.{png,svg,jpg,jpeg}');

	console.log(Object.keys(imgs));
</script>

<main>
	<div class="top">
		<div class="description">
			<p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</em></p>
		</div>
		<div class="title">
			<h1>plaj@house</h1>
		</div>
		<div class="image">
			<img src={preview} alt="Preview" />
		</div>
	</div>
	<div class="images">
		<div class="image">
			<img src={Object.keys(imgs)[0]} alt="img" />
			<p>asdasdLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</div>
		<div class="image">
			<p>asdasdLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<img src={Object.keys(imgs)[1]} alt="img" />
		</div>
		<div class="image">
			<img src={Object.keys(imgs)[2]} alt="img" />
			<p>asdasdLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</div>
		<div class="image">
			<p>asdasdLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<img src={Object.keys(imgs)[3]} alt="img" />
		</div>
	</div>
</main>

<style lang="scss">
	.top {
		min-height: 100vh;
		position: relative;

		.image {
			min-height: 100vh;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			
			img {
				z-index: -1;
				position: absolute;
				height: 50vh;
				width: 100vw;
				object-fit: cover;
			}
		}

		.description {
			min-height: 50vh;
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 2;
			width: 100%;
		}

		.title {
			position: absolute;
			min-height: 100vh;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			h1 {
				text-align: center;
				font-size: 50px;
				letter-spacing: 20px;
				color: black;
				text-shadow: 2px 2px white;
				user-select: none;
			}
		}
	}

	.images {
		display: flex;
		flex-direction: column;
		margin-bottom: 100px;

		.image {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-top: 100px;

			img {
				width: 400px;
			}
		}

		.image:nth-child(even) {
			img {
				float: right;
			}
		}
	}
</style>
