<script setup lang="ts">
useHead({
  title: 'Natchathirapattarai - Home',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
  ]
})
</script>

<template>
  <div id="main">
    <div class="inner">

      <!-- Header -->
        <header id="header">
          <a href="index.html" class="logo"><img width="100%" height="auto" src="~/assets/images/logo-full.png" alt="" /></a>
          <ul class="icons" style="margin: 50px;">
            <li><a target="_new" href="https://www.instagram.com/natchathirapattarai" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a target="_new" href="https://www.youtube.com/channel/UCP5m45CU8qFCyFdl26dAYUA" class="icon brands fa-youtube"><span class="label">Twitter</span></a></li>
            <li><a target="_new" href="https://www.facebook.com/npattarai" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
            <li><a target="_new" href="https://www.google.com/maps/place/Natchathirapattarai+(Acting,+VJ,+RJ,+Dubbing,+Direction,+Newsreading,+Music+%26+Dance)/@13.0565096,80.2077474,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52669558d23f59:0x2c44e7458a51f68!8m2!3d13.0565096!4d80.2099361?hl=en-IN" class="icon brands fa-google"><span class="label">Snapchat</span></a></li>
          </ul>
        </header>

      <!-- Banner -->
        <section id="banner">
          <div class="content">
            <header>
              <h1>Welcome to <br />
                Natchathirapattarai
              </h1>
              <p>We teach Acting, VJ, RJ, Dubbing, Direction, NewsReading, Music & Dance</p>
            </header>
          </div>
          <span class="image object" style="background-image: url('~/assets/images/banner.jpg'); background-size: cover; background-position: 50% 50%;">
            <img src="~/assets/images/banner.jpg" alt="Natchathirapattarai Banner" style="opacity: 0;">
          </span>
        </section>

      <!-- Section -->
        <section>
          <header class="major">
            <h2>About Us</h2>
          </header>
          <div>
            <article>
              <div class="content">
                <p>Natchathirapattarai was founded by Mr. Jega in 2012.</p>
                <p>Our vision is to train and place students on various platforms in the media field.</p>
                <p>The courses are both theoretical and practical.</p>
                <p>Not only train them by their talents but also mold them into well-disciplined and professional artists.</p>
                <p>We are a globally recognized training institute and have trained 1500+ students since 2012.</p>
                <p>The best part considered about us is the placement we provide.</p>
                <p>We have tied up with the leading production houses and Satellite channels to pave way for our students and make them have a successful career.</p>
                <p>Join us as a student and leave us as a <span style="color: #FFB404">★ star ★</span></p>
              </div>
            </article>
          </div>
        </section>

      <!-- Section -->
      <section>
        <header class="major">
          <h2>Services</h2>
        </header>
        <div class="features">
          <article>
            <span class="icon fa-star"></span>
            <div class="content">
              <h3><strong>Acting</strong> is an activity in which a story is told by means of its <a href="https://en.wikipedia.org/wiki/Enactment_(psychology)" title="Enactment (psychology)">enactment</a> by an actor or actress who adopts a character</h3>
            </div>
          </article>
          <article>
            <span class="icon solid fa-music"></span>
            <div class="content">
              <h3>The job of any <strong>Radio Jockey</strong> is to entertain the listeners through various types of shows with current updates.</h3>
              <h3><strong>Video Jockey</strong>&nbsp; can anchor various television programs, such as musical phone-in program, a talk show, or reality shows&nbsp;</h3>
            </div>
          </article>
          <article>
            <span class="icon solid fa-microphone"></span>
            <div class="content">
              <h3>Three forms of <strong>D</strong><strong>ubbing</strong> which includes Character, Cartoon and Voice Over</h3>
            </div>
          </article>
          <article>
            <span class="icon solid fa-newspaper"></span>
            <div class="content">
              <h3><strong>Newreading</strong> course begins with pronounciation, diction then &nbsp;topics like politics, debate, celebrity interview etc. will be covered</h3>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
