<template>
  <div class="bg-white min-h-screen flex flex-col lg:relative">
    <div class="flex-grow flex">
      <main class="flex-grow flex bg-white">
        <div class="flex-grow mx-auto max-w-7xl w-full flex px-4 sm:px-6 lg:px-8">
          <div class="flex-shrink-0 my-auto py-16 sm:py-32">
            <p class="text-sm font-extrabold text-pink tracking-wide sm:text-5xl">Page en construction</p>
            <p class="mt-2 text-base font-bold text-gray-500">Encore un peu de patience, on vous prépare une page au top !</p>
            <button type="button" class="mt-6">
              <a href="/" class="inline-flex items-center px-4 py-2 border rounded hover:bg-pink hover:text-white text-sm font-bold rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">Retour</a>
            </button>
          </div>
        </div>
      </main>
    </div>
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-cover bg-construction">
    </div>
  </div>
</template>


<script>

export default {
  created() {
    console.log("hey", this.posts)
  },
}
</script>