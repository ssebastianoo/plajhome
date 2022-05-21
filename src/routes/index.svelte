<main>
	<div class="container">
		<div class="left">
			<div class="nav">
				<a href="#about">about</a>
				<a href="#prices">prices</a>
				<a href="#contact">contact</a>
			</div>
			<h1 class="title">plajhouse</h1>
			<p class="text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
				sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam
				eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
			</p>
            <a href="#book" class="book-a">
                <div class="book-btn">
                    <i class="fa-brands fa-airbnb"></i>
                    <span>Book</span>
                </div>
            </a>
		</div>
		<div class="right">
			<img src="./san marco.png" alt="San Marco" />
		</div>
	</div>
</main>

<style lang="scss">
	.container {
		display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        min-height: 100vh;

		.left {
            width: 466px;
            display: flex;
            flex-direction: column;
            gap: 100px;

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
                    box-shadow: 4px 4px 10px RGBA(0,0,0,0.5);
                    transition: scale .3s ease-in-out;

                    &:hover {
                        scale: 1.1;
                    }
                }
            }
		}

		.right {
			img {
				height: 80vh;
			}
		}
	}
</style>
