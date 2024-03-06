<template>
  <div id="app">
    <div class="carousel">
      <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ 'active': currentSlide === index }"
        >
          <img :src="slide.imageSrc" :alt="slide.text" class="slide-image">
          <p class="slide-text">{{ slide.text }}</p>
        </div>
      </div>
      <div class="buttons">
        <button @click="prev" :disabled="currentSlide === 0" class="arrow left"></button>
        <button @click="next" :disabled="currentSlide === slides.length - 1" class="arrow right"></button>
      </div>
    </div>
  </div>
      <div class="content wow fadeInUp" data-wow-delay="0.2s">
      <div class="Home">
        <h1 class="text1">Enjoy Our</h1>
        <h1>Delicious Meal</h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.Aliqu diam amet diam et</p>
        <p>eot.Clita erat ipsum et lorem et sit, sad stet lorem sit clita duo justo magna dolore</p>
        <p>erat amet</p>
        <router-link to="/menu">
          <button class="btn-menu">Menu</button>
        </router-link>
        <br>
        <router-link to="/book-a-table">
          <button class="btn-book-a-table">Book A Table</button>
        </router-link>
      </div>
    </div>
    <footer class="footer">
      <p>&copy; 2024 Your Restaurant Name. All rights reserved.</p>
    </footer>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentSlide: 0,
      slides: [
        { text: 'Slide 1', imageSrc: 'https://picsum.photos/200/300'  },
        { text: 'Slide 2', imageSrc: 'https://picsum.photos/200'  },
        { text: 'Slide 3', imageSrc: 'https://picsum.photos/200/300'  },
      ],
    };
  },
  methods: {
    prev() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    next() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      }
    },
    goToSlide(index) {
      if (this.currentSlide !== index) {
        this.animateSlideTransition(this.currentSlide, index);
      }
    },
    animateSlideTransition(from, to) {
      this.slides[from].in = false;
      this.slides[from].inActive = true;
      this.slides[from].out = true;
      this.slides[from].outActive = false;

      this.currentSlide = to;

      this.slides[to].in = true;
      this.slides[to].inActive = false;
      this.slides[to].out = false;
      this.slides[to].outActive = true;
    },
  },
};
</script>

<style scoped>

#app {
  background-color: gray;
  width: 600px;
  height: 300px;
  margin-top: 40px;
  margin-right: 40px;
}
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  width: 560px;
  right: 2%;
  top: 3%;

}
.slides {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.slide-text {
  margin-top: 10px;
  font-size: 18px;
}

.slides.animated {
  animation: slide 0.5s forwards;
}

.slides.slide-in {
  transform: translateX(100%);
}

.slides.slide-in-active {
  transform: translateX(0%);
}

.slides.slide-out {
  transform: translateX(-100%);
}

.slides.slide-out-active {
  transform: translateX(0%);
}

.buttons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.arrow.left::before {
  content: '\2039'; /* Left arrow Unicode character */
}

.arrow.right::before {
  content: '\203A'; /* Right arrow Unicode character */
}
/* button {

} */

.dots {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.dots li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}

.dots li.active {
  background-color: #000;
}

.btn-menu{
  background-color: #B6BBC4;
  width: 100px;
  height: 30px;
  margin-top: 10px;

}
.btn-book-a-table{
  background-color: #B6BBC4;
  width: 100px;
  height: 30px;
  margin-top: 10px;
}

.footer {
  background-color: rgba(51, 51, 51, 0.8); 
  color: white;
  text-align: center;
  padding: 0.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}



</style>
