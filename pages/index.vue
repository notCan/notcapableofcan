<template>
  <div>
    <section id="myself" class="pb-16">
      <div class="container-lg py-8">
        <section id="summary">
          <Summary
            :img-src="summary.src"
            :img-alt="summary.alt"
            :title="summary.title"
            :description="summary.description"
          ></Summary>
        </section>
        <section id="stack ">
          <my-stack :title="tools.title" :list="tools.list"></my-stack>
        </section>
      </div>
      <section id="contact" class="bg-primary-600 w-full">
        <Contact :title="contact.title" :cards="contact.cards"></Contact>
      </section>
    </section>
    <section id="interests" class="pb-16">
      <div class="pt-4">
        <div
          class="interest_hero container-sm flex justify-center items-center"
        >
          <h1
            class="font-extrabold text-4xl bg-clip-text bg-gradient-to-r from-gLeft via-gMiddle to-gRight m-2 p-2"
          >
            {{ interests.title }}
          </h1>
        </div>
        <div
          class="container-lg flex flex-row flex-wrap lg:flex-nowrap items-center justify-center pb-12"
        >
          <div v-for="item in interests.cards" :key="item.id">
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
      <div class="container-md flex justify-start items-center py-10">
        <h1 class="text-4xl font-semibold">
          {{ helpful.title }}
        </h1>
      </div>
      <div class="container-sm grid lg:grid-cols-2 grid-cols-1 gap-12">
        <div v-for="item in helpful.cards" :key="item.id">
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
  data() {
    return {
      summary: {
        src: 'profile.jpg',
        alt: 'can deve',
        title: "Hi! I'm Can",
        description:
          "I'm detail-oriented Computer Engineer from September 2021 on. I experienced my object-oriented programming knowledge by learning Java, C# software languages and developing many projects. I'm currently working for full stack development and pixel art.",
      },
      tools: {
        title: 'My Stack',
        list: [
          {
            name: 'HTML',
          },
          {
            name: 'CSS',
          },
          {
            name: 'JavaScript',
          },
          {
            name: 'TypeScript',
          },
          {
            name: 'NodeJS',
          },
          {
            name: 'VueJS',
          },
          {
            name: 'NuxtJS',
          },
          {
            name: 'ExpressJS',
          },
          {
            name: 'NestJS',
          },
          {
            name: 'Bootstrap',
          },
          {
            name: 'Tailwind',
          },
          {
            name: 'Dart',
          },
          {
            name: 'Flutter',
          },
          {
            name: 'Java',
          },
          {
            name: 'Php',
          },
        ],
      },
      contact: {
        title: 'Contact Me',
        cards: [
          {
            src: 'linkedinsm.png',
            alt: 'linkedin',
            link: 'https://www.linkedin.com/in/candeve/',
          },
          {
            src: 'githubsm.png',
            alt: 'github',
            link: 'https://github.com/notCan',
          },
          {
            src: 'gmailsm.png',
            alt: 'gmail',
            link: 'mailto:devecann@gmail.com',
          },
          {
            src: 'mediumsm.png',
            alt: 'medium',
            link: 'https://medium.com/@notcan',
          },
          {
            src: 'notionsm.png',
            alt: 'notion',
            link: 'https://notcan.notion.site/CV-Resume-073772d981ca4ae1bce2b09d63bfab93',
          },
          {
            src: 'twittersm.png',
            alt: 'twitter',
            link: 'https://twitter.com/nottCan',
          },
          {
            src: 'discordsm.png',
            alt: 'discord',
            link: 'https://discord.gg/ER7Cc4VSWQ',
          },
        ],
      },
      interests: {
        title: 'i do a bit of everything',
        cards: [
          {
            id: 1,
            src: 'mesm.png',
            alt: 'me',
            name: 'Pixel Art',
            link: '/pixelart',
          },
          {
            id: 2,
            src: 'frontend.png',
            alt: 'frontend',
            name: 'Frontend Development',
            link: '/frontend',
          },
          {
            id: 3,
            src: 'backend.png',
            alt: 'backend',
            name: 'Backend Development',
            link: '/backend',
          },
          {
            id: 4,
            src: 'mobile.png',
            alt: 'mobile',
            name: 'Mobile App Dev',
            link: '/mobile',
          },
        ],
        button: {
          label: 'Some research',
          link: '/working',
        },
      },
      helpful: {
        title: 'some useful links',
        cards: [
          {
            name: 'CSS Battle',
            description:
              'You can improve your css knowledge and compete other css lovers.',
            link: 'https://cssbattle.dev/',
          },
        ],
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
