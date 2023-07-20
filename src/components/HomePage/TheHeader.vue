<template>
  <header>
    <div class="container">
      <div class="box">
        <div class="name">
          <span>Abdalhameed <span color="#dd93f7">Emad</span></span>
        </div>
        <div class="contents">
          <nav>
            <ul>
              <li><a href="">Education </a></li>
              <li><a href="">Clients </a></li>
              <li><a href="">Skills </a></li>
              <li><a href="">Expertise </a></li>
              <li><a href="">Contact </a></li>
            </ul>
            <i>=</i>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style scoped>
header {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
header div div.box {
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  align-items: center;
  font-size: 25px;
  width: 100%;
}
.contents {
  display: flex;
  align-items: center;
  font-size: 18px;
}
.contents nav {
  display: flex;
  align-items: center;
}
.contents nav ul {
  display: flex;
  align-items: center;
}
.contents nav ul li {
  margin-left: 40px;
}
.contents nav ul li a {
  transition: 0.3s;
}
.contents nav ul li a:hover {
  color: #dd93f7;
}
.name {
  cursor: pointer;
}
.name span span {
  color: #dd93f7;
}
.name span span,
.name span {
  transition: 0.3s;
}
.name:hover span span {
  color: #ffffff;
}
.name:hover span {
  color: #dd93f7;
}
.container {
  padding: 0 60px;
  width: 100%;
}
div.contents nav i {
  display: none;
}
@media (max-width: 865px) {
  nav i {
    display: block !important;
  }
  nav ul {
    display: none !important;
  }
}
</style>
