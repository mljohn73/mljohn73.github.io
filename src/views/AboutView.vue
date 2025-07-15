<script setup lang="ts">
  import '@material/web/button/outlined-button.js';
</script>
<template>
  <div class="about-container">
    <md-outlined-button>Back</md-outlined-button>
    <div class="about-body">
      <img alt="Profile Picture" class="about-picture" id="profPic" src="@/assets/Max_RMBL.JPG"/>
      <div class="about-blur-text-backdrop"></div>
      <div class="about-text">
      <h3>
        max.lucas.johnson@gmail.com<br/>
        (336) 831-6394
      </h3>
        <p>I am currently employed as an Software Engineer with Fidelity Investments. In my day-to-day I design and develop with Nodejs/Vuejs 
        applications as well as other front end frameworks. For the last 3+ years I have been updating and modernizing the Customer Profile 
        Experience for Fidelity.com.
        <br/>
        <br/>
        In an industry that does not always lend itself to the warmest of people I have always striven to be a kind, flexible, and sociable 
        member of the team. I know how important understanding and cooperation are to bring a project to completion. With a background in 
        leadership as an Eagle Scout I have the experience necessary to bring a team together under the goal of putting forward the best 
        work that they can.
        <br/>
        <br/>
        Feel free to contact me with questions and inquiries!

        </p>
      </div>
    </div>
  </div>
</template>

<style>

.about-container {
  display: flex;
  justify-content: center;
}

.about-body {
  padding-top: 4vh;
  min-width: 75vw;
  max-height: 78vh;
  overflow: hidden;
}
.about-blur-text-backdrop {
  position: absolute;
  backdrop-filter: blur(10px);
  margin-right: -1px;
  height: 60vh;
  width: 45vw;
  left: 35vw;
  top: 15vh;
  float: right;
}

.about-text {
  position: absolute;
  text-align: center;
  color: black;
  width: 45vw;
  left: 35vw;
  top: 25vh;
}

.about-picture {
  max-width: 75vw;
}
</style>
