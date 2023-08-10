<template>
  <div class="min-h-screen bg-white">
    <div class="bg-gradient"></div>
    <!-- 导航栏 -->
    <!-- 给 navbar 使用 :class 根据 scrollFlag 的值动态调整样式 -->
    <nav :class="['navbar', { 'navbar-scrolled': scrollFlag }]">
      <!-- 容器5: LUNA-LOGO -->
      <div class="container-5">
        <img src="../assets/LUNA-LOGO.png" alt="LUNA-LOGO" class="h-8">
      </div>
      <!-- 容器3: 导航栏主体 -->
      <div class="container-3 flex items-center space-x-4">
        <button class="nav-btn">首页</button>
        <button class="nav-btn">功能</button>
        <button class="nav-btn">AI实验室</button>
        <button class="nav-btn">成员</button>
        <div class="line"></div>
        <button class="nav-btn">登录</button>
        <!-- 容器9: 注册按钮 -->
        <div class="container-9">
          <button>注册</button>
        </div>
      </div>
    </nav>
    <div class="container-4">
      <img src="../assets/image.png" alt="image" class="image">
      <div class="container-1">
        <div class="luna">LUNA</div>
        <div class="education">智慧教育知识图谱</div>
    </div>
  </div>

    <search-bar></search-bar>

    <!-- 内容块 -->
    <section class="h-screen flex items-center justify-center">
      <!-- 内容块内容 -->
    </section>
  </div>
</template>
  
<script>
import SearchBar from '../components/SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      // 数据
      scrollFlag: false, // 是否滚动超过 120px
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 120) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    },
  },
};
</script>

  
<style scoped>
.navbar {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 55px;
  gap: 566px;
  transition: background-color 300ms, backdrop-filter 300ms; /* 添加过渡效果 */
  z-index: 2;
}

.navbar-scrolled { /* 定义滚动后的样式 */
  position: fixed;
  background-color: rgba(255, 255, 255, .75);
  backdrop-filter: blur(24px);
}

.nav-btn {
  transition: transform 300ms ease-in-out;
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.nav-btn:hover {
  transform: scale(0.95);
}

.nav-btn.special {
  background-color: #4A90E2;
  color: white;
  border-radius: 4px;
}

.container-5 img {
  opacity: 1;
}

.container-3 {
  font-family: 'Source Han Sans CN';
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #000000;
}

.line{
  /* 直线 1 */

  /* 自动布局子元素 */
  position: static;
  left: 327px;
  top: 13.5px;
  width: 18px;
  height: 0px;
  transform: rotate(90deg);
  opacity: 1;

  border: 2px solid rgba(0, 0, 0, 0.5);

  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);

  z-index: 4;
}

.container-3 button {
  text-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);
}

.container-9 {
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1440px;
  height: 620px;
  opacity: 1;
  background: linear-gradient(247deg, #ABC5F3 0%, #C2DEF4 55%, #D5F2F4 100%);
}

.container-4 {
  position: absolute;
  left: 549.5px;
  top: 290px;
  width: 341px;
  height: 128px;
  opacity: 1;
}

.image {
  position: absolute;
  left: 0;
  top: 0;
  width: 128px;
  height: 128px;
  transform: rotate(0deg);
  opacity: 1;
}

.container-1 {
  position: absolute;
  left: 140px;
  top: 10px;
  width: 201px;
  height: 108px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  padding: 0;
  gap: 8px;
}

.luna {
  position: static;
  left: 19.5px;
  top: 0;
  width: 162px;
  height: 56px;
  opacity: 1;
  font-family: 思源黑体;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.24em;
  color: #222222;
  z-index: 0;
}

.education {
  position: static;
  left: 0;
  top: 64px;
  width: 201px;
  height: 44px;
  opacity: 1;
  font-family: 思源黑体;
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #555555;
  z-index: 1;
}

</style>