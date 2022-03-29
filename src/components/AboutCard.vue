<template>
  <!--
    eslint-disable
  -->
  <section class="py-12 bg-gray-50 overflow-hidden">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-pink shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h2 class="font-bold text-xl text-pink">{{ title }}</h2>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>{{ description }}</p>
                <ul class="space-y-2">
                  <li class="flex items-start list-disc">
                      {{ line1 }}
                  </li>
                  <li class="flex items-start list-disc">
                      {{ line2 }}
                  </li>
                  <li class="flex items-start list-disc">
                    {{ line3 }}
                  </li>
                </ul>
                <p>{{ paragraph }}</p>
              </div>
              <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>{{ conclusion }}</p>
                <p>
                  <a href="/" class="text-pink hover:text-cyan-700" noopener noreferrer>en savoir plus</a>
                </p>
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
    description: String,
    line1: String,
    line2: String,
    line3: String,
    paragraph: String,
    conclusion: String,
    link: String,
  },
  created() {
    console.log(this.title)
  },

}
</script>