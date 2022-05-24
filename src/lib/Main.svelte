<script>
	import Nav from './Nav.svelte';
	import Book from './Book.svelte';

	export let title, map;
	export let image = './san marco.png';
</script>

<div class="main">
	<div class="horizontal">
		<img src="./san marco horizontal.png" alt="San Marco" />
	</div>
	<div class="left">
		<div class="title">
			<Nav />
			<h1 class="title">{title}</h1>
		</div>
		<div class="text">
			<p><slot /></p>
			{#if map}
				<div class="map">
					<iframe
						title="Google Maps"
						src={map}
						width="100%"
						height="200"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					/>
				</div>
			{/if}
		</div>
		<Book />
	</div>
	<div class={image === './san marco.png' ? 'right right-san-marco' : 'right'}>
		<img src={image} alt="Cover" />
	</div>
	<div class="horizontal">
		<img src="./san marco horizontal.png" alt="San Marco" />
	</div>
</div>

<style lang="scss">
	.main {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		min-height: 100vh;

		.horizontal {
			display: none;
		}

		.left {
			width: 466px;
			display: flex;
			flex-direction: column;
			gap: 100px;
			margin: 20px 0;

			.title {
				font-size: 100px;
				margin: 0;
			}

			.text {
				p {
					margin-top: 0;
				}
			}

			.nav {
				display: flex;
				justify-content: space-between;
				align-items: center;

				a {
					color: unset;
					text-decoration: none;
					font-size: 20px;
				}
			}
		}

		.right {
			height: 100vh;
			display: flex;

			&:has(.right-san-marco) {
				flex-direction: column;
				justify-content: flex-end;

				img {
					height: 90vh;
				}
			}

			&:not(.right-san-marco) {
				align-items: center;

				img {
					width: 500px;
					border-radius: 18px;
					box-shadow: 5px 5px 30px black;
				}
			}
		}
	}

	@media screen and (max-width: 778px) {
		.main {
			flex-direction: column;

			.horizontal {
				display: block;
				width: 100vw;
				margin: 10px 0;

				img {
					width: 90%;
				}

				&:nth-child(even) {
					transform: rotate(180deg);
				}
			}

			.left {
				width: 373.433px;
				justify-content: space-around;
				gap: 50px;

				.title {
					h1 {
						font-size: 80px;
						text-align: center;
					}
				}

				.text {
					width: 100%;
				}
			}

			.right {
				display: none;
			}
		}
	}

	@media screen and (max-width: 400px) {
		.main {
			.left {
				width: 300px;

				.title {
					h1 {
						font-size: 65px;
					}
				}
			}
		}
	}
</style>
