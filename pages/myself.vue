<template>
  <div class="container-lg py-8">
    <section class="summary shadow-xl">
      <div class="container-lg mx-auto flex flex-row space-x-40 py-8">
        <div class="image-side all-center rounded-full border-2">
          <img src="/images/me.png" alt="" />
        </div>
        <div
          class="info-side flex flex-col justify-start items-start py-12 w-2/3"
        >
          <h1 class="font-bold text-4xl pb-8 text-black">Hi! I'm Can</h1>
          <p class="text-lg text-black">
            I'm detail-oriented Computer Engineer from September 2021 on. I
            experienced my object-oriented programming knowledge by learning
            Java, C# software languages and developing many projects. I'm
            currently working for full stack development and pixel art.
          </p>
        </div>
      </div>
    </section>
    <section class="experience">
      <div class="container-lg">
        <div
          class="container-lg flex justify-start items-center border-b-4 border-dotted drop-shadow-lg py-6"
        >
          <h2 class="text-black font-semibold text-xl">Experience History</h2>
        </div>
        <div
          v-for="item in experienceCard"
          :key="item.ID"
          class="container-md flex flex-row space-x-12 text-black py-10"
        >
          <div class="h-16 w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 15v4h16v-4H4zm7-4v2h2v-2h-2zM9 3v2h6V3H9z"
              />
            </svg>
          </div>
          <div
            class="left-side flex flex-col justify-start items-start space-y-2 w-1/3"
          >
            <h3 class="font-semibold text-lg">{{ item.date }}</h3>
            <p class="text-info-400">{{ item.jobTitle }}</p>
          </div>
          <div
            class="right-side flex flex-col justify-start items-start space-y-2"
          >
            <span
              ><a :href="item.workPlaceContact" target="_blank"
                ><h3 class="font-semibold text-2xl">{{ item.workPlace }}</h3></a
              ></span
            >
            <p class="text-lg">{{ item.jobDescription }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-lg">
        <div
          class="container-lg flex justify-start items-center border-b-4 border-dotted drop-shadow-lg py-6"
        >
          <h2 class="text-black font-semibold text-xl">Education History</h2>
        </div>
        <div
          v-for="item in educationCard"
          :key="item.ID"
          class="container-md flex flex-row space-x-12 text-black py-10"
        >
          <div class="h-16 w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05zM16 9H8V7h8v2z"
              />
            </svg>
          </div>
          <div
            class="left-side flex flex-col justify-start items-start space-y-2 w-1/3"
          >
            <h3 class="font-semibold text-lg">{{ item.date }}</h3>
            <div class="flex flex-row">
              <p class="text-info-400">{{ item.city + ' - ' + item.GPA }}</p>
            </div>
          </div>
          <div
            class="right-side flex flex-col justify-start items-start space-y-2"
          >
            <h3 class="font-semibold text-2xl">{{ item.school }}</h3>
            <p class="text-lg">{{ item.program }}</p>
          </div>
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
      experienceCard: [
        {
          date: '05 July - 09 August 2021',
          jobTitle: 'Software Engineer Intern',
          workPlace: 'TR EĞİTİM VE TEKNOLOJİ A.Ş.',
          workPlaceContact:
            'https://www.linkedin.com/company/tregitimveteknoloji/',
          jobDescription:
            'Şirket bünyesinde geliştirilmekte ve ülkemizde kullanılmakta olan VizyonerGenç projeleri için ekip arkadaşlarımla beraber bir test modülü geliştirdim. Bu projede Nest.js ile backend programlama yaptım ve database kısmında MongoDB kullandım.',
        },
        {
          date: '05 July - 09 August 2021',
          jobTitle: 'Software Engineer Intern',
          workPlace: 'TR EĞİTİM VE TEKNOLOJİ A.Ş.',
          workPlaceContact:
            'https://www.linkedin.com/company/tregitimveteknoloji/',
          jobDescription:
            'Şirket bünyesinde geliştirilmekte ve ülkemizde kullanılmakta olan VizyonerGenç projeleri için ekip arkadaşlarımla beraber bir test modülü geliştirdim. Bu projede Nest.js ile backend programlama yaptım ve database kısmında MongoDB kullandım.',
        },
        {
          date: '05 July - 09 August 2021',
          jobTitle: 'Software Engineer Intern',
          workPlace: 'TR EĞİTİM VE TEKNOLOJİ A.Ş.',
          workPlaceContact:
            'https://www.linkedin.com/company/tregitimveteknoloji/',
          jobDescription:
            'Şirket bünyesinde geliştirilmekte ve ülkemizde kullanılmakta olan VizyonerGenç projeleri için ekip arkadaşlarımla beraber bir test modülü geliştirdim. Bu projede Nest.js ile backend programlama yaptım ve database kısmında MongoDB kullandım.',
        },
      ],
      educationCard: [
        {
          date: 'September 2017 - October 2021',
          school: 'Süleyman Demirel University',
          program: 'Computer Engineering',
          city: 'Isparta',
          GPA: '2.99/4',
        },
        {
          date: 'September 2013 - June 2017',
          school: 'Prof. Dr. Necati Erşen Anatolian High School',
          program: 'Math/Science',
          city: 'Sivas',
          GPA: '80.84/100',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
