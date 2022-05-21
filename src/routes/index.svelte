<main>
	<div class="container">
		<div class="horizontal">
			<img src="./san marco horizontal.png" alt="San Marco" />
		</div>
		<div class="left">
			<div class="title">
				<div class="nav">
					<a href="#about">about</a>
					<a href="#prices">prices</a>
					<a href="#contact">contact</a>
				</div>
				<h1 class="title">plajhouse</h1>
			</div>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
				sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
				eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
			</p>
			<a href="#book" class="book-a">
				<div class="book-btn">
					<i class="fa-brands fa-airbnb" />
					<span>Book</span>
				</div>
			</a>
		</div>
		<div class="right">
			<img src="./san marco.png" alt="San Marco" />
		</div>
		<div class="horizontal">
			<img src="./san marco horizontal.png" alt="San Marco" />
		</div>
	</div>
</main>

<style lang="scss">
	.container {
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
				margin: 0;
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

			.book-a {
				text-decoration: none;
				color: unset;

				.book-btn {
					width: 150px;
					display: inline-flex;
					align-items: center;
					justify-content: space-around;
					color: white;
					background-color: #ff5a5f;
					gap: 10px;
					font-size: 40px;
					padding: 10px;
					border-radius: 10px;
					box-shadow: 4px 4px 10px RGBA(0, 0, 0, 0.5);
					transition: scale 0.3s ease-in-out;

					&:hover {
						scale: 1.1;
					}
				}
			}
		}

		.right {
			height: 100vh;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			img {
				height: 90vh;
			}
		}
	}

	@media screen and (max-width: 778px) {
		.container {
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
        .container {
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
