<script>
	import Nav from './Nav.svelte';
	import Book from './Book.svelte';

	export let title, map;
	export let image = './san marco.png';
</script>

<div class="main">
	<div class="left">
		<div class="title">
			<Nav />
			<h1 class="title">
				{#each title as t}
					<!-- i hate this -->
					<span>
						{t}
					</span>
				{/each}
			</h1>
		</div>
		<div class="text">
			<p><slot /></p>
			{#if map}
				<div class="map">
					<iframe
						title="Google Maps"
						src={map}
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					/>
				</div>
			{/if}
		</div>
		{#if image === './san marco.png'}
			<img src="./san marco horizontal.png" alt="Cover" class="mobile-img san-marco" />
		{:else}
			<img src={image} alt="Cover" class="mobile-img" />
		{/if}
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
			min-height: 65vh;
			width: 40vw;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin: 20px 0;

			.title {
				font-size: 100px;
				margin: 0;

				h1 {
					display: flex;
					justify-content: space-between;
				}
			}

			.text {
				margin: 10px 0;

				p {
					margin: 0;
				}

				.map {
					margin-top: 10px;
					iframe {
						width: 100%;
						height: 8vh;
						border-radius: 5px;
						box-shadow: 2px 2px 10px black;
					}
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

			.mobile-img {
				display: none;
			}
		}

		.right-san-marco {
			flex-direction: column;
			justify-content: flex-end;

			img {
				height: 90vh;
			}
		}

		.right {
			min-height: 100vh;
			display: flex;

			&:not(.right-san-marco) {
				align-items: center;

				img {
					height: 67vh;
					border-radius: 18px;
					box-shadow: 5px 5px 30px black;
				}
			}
		}
	}

	@media screen and (max-width: 750px) {
		.main {
			flex-direction: column;

			/* .horizontal {
				display: block;
				width: 100vw;
				margin: 10px 0;

				img {
					width: 90%;
				}

				&:nth-child(even) {
					transform: rotate(180deg);
				}
			} */

			.left {
				width: 373.433px;
				min-height: 100vh;
				justify-content: space-around;
				margin: 0;

				.title {
					h1 {
						font-size: 80px;
						text-align: center;
					}
				}

				.text {
					width: 100%;
				}

				.mobile-img {
					display: block;
					width: 100%;
					height: 15vh;
					object-fit: cover;
					border-radius: 7px;
					margin-bottom: 10px;

					&:not(.san-marco) {
						box-shadow: 5px 5px 30px black;
					}
				}

				.san-marco {
					object-position: right;
				}
			}

			/* .right {
				&:has(.right-san-marco) {
					img {
						transform: rotate(90deg);
					}
				}
			} */

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
