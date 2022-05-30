<template>
  <div
    v-show="show"
    id="dialog"
    v-bind="$attrs"
    role="dialog"
    aria-labelledby="dialog1_label"
    aria-modal="true"
    class="w-screen h-screen fixed top-0 left-0 flex pt-[74px]"
    style="z-index: 60"
  >
    <div
      class="content relative flex flex-col mx-auto mb-auto shadow-xl bg-primary-50 p-12 rounded-2xl lg:min-w-[35vw] min-w-[90vw] max-w-[90vw]"
    >
      <div class="flex items-end justify-end">
        <button @click="closeModal"><i class="ri-close-line"></i></button>
      </div>
      <div class="flex flex-row space-x-4">
        <div class="image border-2 rounded-lg">
          <img :src="imgSrc" :alt="imgAlt" />
        </div>
        <div class="text-center text-info-600 mt-4">
          <h1 class="font-semibold mb-4 text-info-800">
            {{ name }}
          </h1>
          <!-- <div class="flex flex-row justify-start items-center">
            <p class="pr-2 font-bold">Creation Date :</p>
            <p>{{ date }}</p>
          </div> -->
          <div class="flex flex-row justify-start items-center">
            <p class="pr-2 font-bold">Tags :</p>
            <div class="flex flex-row flex-wrap">
              <p
                v-for="tag in tags"
                :key="tag.ID"
                class="px-2 text-black font-semibold"
              >
                {{ tag }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'Imagesss',
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    tags: {
      type: Array,
      default: () => ['notCan', 'pixel art'],
    },
    imgSrc: {
      type: String,
      default: '/images/questionmark.png',
    },
    imgAlt: {
      type: String,
      default: 'notcapableofcan',
    },
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    closeModal() {
      this.show = false
      document.body.style.overflowY = 'auto'
    },
  },
}
</script>
