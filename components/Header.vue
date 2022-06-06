<template>
  <nav class="header fixed top-0 left-0 w-full bg-primary z-50 h-20">
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
          name: 'myself',
          link: '/',
        },
        {
          name: 'interests',
          link: '#interests',
        },
        {
          name: 'helpful',
          link: '#helpful',
        },
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
