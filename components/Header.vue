<template>
  <nav class="header w-full">
    <ul v-for="(item, index) in header" :key="index">
      <li class="m-2">
        <nuxt-link exact-active-class="text-primary-200" :to="item.link"
          ><span>{{ item.name }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      header: [
        {
          name: 'welcome',
          link: '/',
        },
        {
          name: 'myself',
          link: '/myself',
        },
        // {
        //   name: 'tryings',
        //   link: '/tryings',
        // },
        {
          name: 'helpful',
          link: '/helpful',
        },
        // {
        //   name: 'contact',
        //   link: '/contact',
        // },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.header {
  @apply flex items-center justify-center;
}
.header ul li {
  padding: 2px;
  border-radius: 5px;
}
</style>
