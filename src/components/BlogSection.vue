<template>
  <!--
    eslint-disable
  -->
  <section class="relative bg-gray-50 py-16">

    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>

    <div class="relative max-w-7xl mx-auto">

      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{{ title }}</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">{{ intro }}</p>
      </div>

      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

        <div v-for='post in this.posts' :key="post.categoryTitle" class="flex flex-col rounded-lg shadow-lg overflow-hidden hover:transform hover:translate-y-6 duration-300">

          <div class="flex-shrink-0">

            <img class="h-48 w-full object-cover" :src="post.categoryImage.url" alt="posts.categoryImage.description" />

            <div class="flex-1 bg-white p-6 flex flex-col justify-between">

              <div class="flex-1">
                <!--
                <p class="text-l font-bold">
                  <a :href="post.slug" class="hover:underline">
                    {{ post.categoryTitle }}
                  </a>
                </p>
                -->
                <a :href="post.slug" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {{ post.categoryTitle }}
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    {{ post.categoryDescription }}
                  </p>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    title: String,
    intro: String,
    posts: Array
  },
  created() {
    console.log("hey", this.posts)
  },

}
</script>