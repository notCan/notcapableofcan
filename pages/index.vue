<template>
  <div>
    <section id="myself" class="pb-16">
      <div class="container-lg py-8">
        <section id="summary">
          <Summary
            :img-src="pageData[0].summary.src"
            :img-alt="pageData[0].summary.alt"
            :title="pageData[0].summary.title"
            :description="pageData[0].summary.description"
            :cards="pageData[0].contact.cards"
          ></Summary>
        </section>
        <section id="stack ">
          <my-stack
            :title="pageData[0].tools.title"
            :list="pageData[0].tools.list"
          ></my-stack>
        </section>
      </div>
      <section id="contact" class="bg-primary-600 w-full"></section>
    </section>
    <section id="interests" class="pb-16">
      <div class="pt-4">
        <div
          class="interest_hero container-sm flex justify-center items-center"
        >
          <h1
            class="font-extrabold lg:text-4xl text-2xl bg-clip-text bg-gradient-to-r from-gLeft via-gMiddle to-gRight m-2 p-2"
          >
            {{ pageData[0].interests.title }}
          </h1>
        </div>
        <div
          class="container-lg flex flex-row flex-wrap lg:flex-nowrap items-center justify-center pb-12"
        >
          <div v-for="item in pageData[0].interests.cards" :key="item.id">
            <interest-cards
              :link="item.link"
              :img-src="item.src"
              :img-alt="item.alt"
              :name="item.name"
            ></interest-cards>
          </div>
        </div>
        <div class="container-sm flex justify-center items-center">
          <button
            class="working-on rotate-12 rounded-lg border-2 border-dotted hover:border-solid hover:rotate-0 p-1"
          >
            <nuxt-link :to="interests.button.link">{{
              interests.button.label
            }}</nuxt-link>
          </button>
        </div>
      </div>
    </section>
    <section id="helpful" class="pb-16">
      <div class="container-md all-center py-10">
        <h1 class="text-4xl font-semibold">
          {{ pageData[0].helpful.title }}
        </h1>
      </div>
      <div class="container-sm grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div v-for="item in pageData[0].helpful.cards" :key="item.id">
          <helpful-card
            :name="item.name"
            :description="item.description"
            :link="item.link"
          ></helpful-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData({ $content }) {
    const pageData = await $content('contentrain/Home').fetch()
    return {
      pageData,
    }
  },
  data() {
    return {
      interests: {
        button: {
          label: 'Some research',
          link: '/working',
        },
      },
    }
  },
}
</script>
<style scoped>
.interest_hero h1 {
  color: transparent;
}
</style>
