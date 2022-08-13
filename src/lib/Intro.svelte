<div class="intro">
	<img src="./san marco.png" alt="San Marco" />
	<div class="title-container">
        <h1 class="title">PlajHome</h1>
    </div>
</div>

<style lang="scss">

    @keyframes title {
        100% {
            transform: translateY(0);
        }
    }

    @keyframes image {
        100% {
            width: 80px;
        }
    }

    @keyframes hide {
        100% {
            opacity: 0;
            transform: translateY(-100%);
        }
    }

	.intro {
		position: absolute;
		background-color: #18181a;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
        flex-direction: column;
        animation: hide .5s cubic-bezier(.22,.61,.36,1) 2.5s forwards;

		img {
			width: 0;
            animation: image .7s cubic-bezier(.22,.61,.36,1) 1.5s forwards;
            object-fit: cover;
            object-position: top;
		}

        .title-container {
            overflow: hidden;

            .title {
                transform: translateY(-100px);
                animation: title .7s cubic-bezier(.22,.61,.36,1) .5s forwards;
            }
        }
	}
</style>
