<template>
  <div>
    <section id="helpful-web-pages">
      <div class="container-md flex justify-start items-center py-10">
        <h1 class="text-4xl font-semibold">
          {{ helpful.title }}
        </h1>
      </div>
      <div class="container-sm grid grid-cols-2 gap-12">
        <div
          v-for="item in helpful.cards"
          :key="item.id"
          class="flex justify-between items-center flex-row bg-success p-4 border-2 rounded-xl shadow-lg h-auto"
        >
          <h6 class="pr-6">{{ item.title }}</h6>
          <p class="pr-6 hidden lg:block">
            {{ item.description }}
          </p>
          <a :href="item.link"><i class="ri-arrow-right-circle-line"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelpfulPage',
  data() {
    return {
      helpful: {
        title: 'some useful links improve coding',
        cards: [
          {
            title: 'CSS Battle',
            description:
              'You can improve your css knowledge and compete other css lovers.',
            link: '',
          },
          {
            title: 'CSS Battle',
            description:
              'You can improve your css knowledge and compete other css lovers.',
            link: '',
          },
          {
            title: 'CSS Battle',
            description:
              'You can improve your css knowledge and compete other css lovers.',
            link: '',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
