<template>
  <div class="portfolio-page" id="portfolio">
    <section class="portfolio">
      <header>
        <h2><span>02</span>portfolio</h2>
        <h4>My Latest work</h4>
      </header>
    </section>
  </div>
</template>
<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}
div.portfolio-page {
  padding: 40px;
  width: calc(100%-40px);
  background-color: #555252;
  /* background-image: url('../../assets/image.jpg'); */
  /* background-size: cover; */
  color: #ffffff;
  /* display: none; */
  position: relative;
}
div.portfolio-page section.portfolio {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
}
section.portfolio header {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 50%;
  line-height: 30px;
  text-transform: uppercase;
  z-index: 1;
}
section.portfolio header h2 {
  font-weight: bolder;
  letter-spacing: 6px;
  margin-bottom: 30px;
}
section.portfolio header h2 span {
  margin-right: 10px;
}
section.portfolio header h4 {
  letter-spacing: 1px;
  font-weight: lighter;
  margin-bottom: 30px;
}
</style>
