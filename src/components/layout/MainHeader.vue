<template>
   <header class="header">
        <nav class="header__nav main-nav">
            <ul class="main-nav__list">
                <li class="main-nav__item">
                    <router-link class="main-nav__link logo-link d-block"  to="/">
                        <img alt="Vue logo" src="../../assets/logo.png" class="img-fluid"/>
                    </router-link>
                </li>
                <li class="main-nav__item"><router-link class="main-nav__link"  to="/products">product list</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<style>
.main-nav {
    padding: 20px;
}

.main-nav__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-link {
    max-width: 50px;

    transform: scale(1);
    transition: 0.2s linear transform;
}

.logo-link:hover,
.logo-link:focus {
    transform: scale(1.2);
}

.logo-link img {

}
</style>

