<template>
  <div id="app">
    <nav>
      <a href="/">
        <img class="h-20 w-auto" src="./assets/logo.jpeg" alt="logo cats crazy market" />
      </a>
      <router-link to="/" class="text-sm text-gray-500 hover:active:text-pink active:text-pink">Accueil</router-link> |
      <router-link to="/about" class="text-sm text-gray-500 active:text-pink">A propos</router-link> |
      <router-link to="/tests-avis-de-chats" class="text-sm text-gray-500 active:text-pink">Tests et Avis</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
}
</style>

<!--

<template>
  <header class="bg-white">
    <div id="app" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-pink lg:border-none">
          <a href="/">
            <img class="h-10 w-auto" src="./assets/logo.jpeg" alt="logo cats crazy market" />
          </a>
         <nav class="hidden ml-10 space-x-8 lg:block">
          <router-link to="/" class="text-xl font-semibold hover:text-pink">Accueil</router-link> |
          <router-link to="/about" class="text-xl font-semibold hover:text-pink">A propos</router-link>
          <router-link to="/tests-avis-de-chats" class="text-xl font-semibold hover:text-pink">Tests et Avis</router-link>
        </nav>
        <router-view/>
      </div>
    </div>
  </header>
</template>

-->