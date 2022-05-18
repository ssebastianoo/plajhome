<div class="nav">
	<div class="nav-item">
		<a href="./">home</a>
	</div>
	<div class="nav-item">
		<a href="./about">about</a>
	</div>
	<div class="nav-item"><a href="#book">book</a></div>
</div>

<style lang="scss">
	.nav {
		display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        z-index: 999;
        width: 100%;
        background-color: RGBA(255,255,255,0.5);;

		.nav-item {
            padding: 20px;

            a {
                text-decoration: none;
                color: unset;
            }
		}
	}
</style>
