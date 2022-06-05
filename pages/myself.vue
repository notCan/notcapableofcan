<template>
  <div class="container-lg py-8">
    <section id="summary">
      <div class="container-xs mx-auto flex flex-row space-x-40 py-8">
        <div class="image-side all-center rounded-full border-2">
          <img src="~/assets/images/me.png" alt="" />
        </div>
        <div
          class="info-side flex flex-col justify-start items-start py-12 w-2/3"
        >
          <h1 class="font-bold text-4xl pb-8">{{ summary.title }}</h1>
          <p class="text-lg text-info-100">{{ summary.description }}</p>
        </div>
      </div>
    </section>
    <section id="stack ">
      <div class="container-xs pb-20">
        <h2 class="font-bold text-2xl pb-4">My Stack</h2>
        <div class="grid grid-cols-5 gap-x-20 gap-y-2">
          <div v-for="item in tools" :key="item.id" class="all-center flex-row">
            <h3 class="py-1 font-oregano text-lg">{{ item.name }}</h3>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="container-xs all-center flex-row">
        <h2 class="all-center font-bold text-2xl">Contact Me</h2>
        <div v-for="item in contact" :key="item.id" class="all-center px-4">
          <a :href="item.link">
            <img :src="require(`~/assets/icons/${item.src}`)" :alt="item.alt" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MyselfPage',
  data() {
    return {
      summary: {
        title: "Hi! I'm Can",
        description:
          "I'm detail-oriented Computer Engineer from September 2021 on. I experienced my object-oriented programming knowledge by learning Java, C# software languages and developing many projects. I'm currently working for full stack development and pixel art.",
      },
      tools: [
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
      contact: [
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
    }
  },
}
</script>

<style lang="scss" scoped></style>
