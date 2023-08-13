<template>
  <div class="min-h-screen bg-white flex flex-col justify-center items-center">
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
    <div class="content flex-grow justify-center items-center">
      <div class="container-4">
        <img src="../assets/image.png" alt="image" class="image">
        <div class="container-1">
          <div class="luna">LUNA</div>
          <div class="education">智慧教育知识图谱</div>
        </div>
      </div>
      <SearchBar></SearchBar>
      <!-- 简介容器 -->
      <div class="introduction bg-white">
        <!-- 简介内容容器 -->
        <div class="introduction-content">
          <!-- 第一段文字 -->
          <div class="title-text">
            寓智于教，致知未来
          </div>
          <!-- 第二段文字 -->
          <div class="description-text">
            <span class="highlighted">智慧教育知识图谱</span>（LUNA）致力于为广大师生提供深层次、多维度的海量教育资源处理分析工具，与智能、个性化的教育资源组织、分析与评估服务
          </div>
        </div>
      </div>

      <!-- 海量资源部分 -->
      <massive-resources></massive-resources>

      <!-- 知识呈现部分 -->
      <knowledge-presentation></knowledge-presentation>

      <!-- 功能展示部分 -->
      <feature-display></feature-display>
    </div>
  </div>
  
  <!-- 页脚部分 -->
  <footer class="footer-bg p-6">
    <!-- 第一行：服务条款 | 隐私政策 | 联系我们 -->
    <div class="flex justify-center space-x-4 mb-4">
        <button class="footer-text hover:underline">服务条款</button>
        <span class="footer-text">|</span>
        <button class="footer-text hover:underline">隐私政策</button>
        <span class="footer-text">|</span>
        <button class="footer-text hover:underline">联系我们</button>
    </div>

    <!-- 第二行 -->
    <div class="flex justify-center items-center space-x-2">
        <a href="#top" class="footer-text hover:underline">LUNA水镜智能</a>
        <span class="footer-text">©</span>
        <a href="http://bigdata.ustc.edu.cn/" target="_blank" class="footer-text hover:underline">大数据分析与应用安徽省重点实验室</a>
    </div>
  </footer>

</template>
  
<script>
import SearchBar from '../components/SearchBar.vue';
import MassiveResources from '../components/MassiveResources.vue';
import KnowledgePresentation from '../components/KnowledgePresentation.vue';
import FeatureDisplay from '../components/FeatureDisplay.vue';

export default {
  components: {
    SearchBar,
    MassiveResources,
    KnowledgePresentation,
    FeatureDisplay,
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
.content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px; /* 或你想要的任何宽度 */
  margin-left: auto;
  margin-right: auto;
}
.min-h-screen {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.parent-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;           /* 使容器占据整个视口高度 */
  width: 100vw;
}
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
  top: 0px;
  width: 100vw;
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

/*简介部分*/
.introduction {
  position: absolute;
  left: 0px;
  top: 620px;
  width: 1440px;
  height: 632px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 80px;
  gap: 10px;
}
.introduction-content {
  position: static;
  left: 80px;
  top: 0px;
  width: 1280px;
  height: 632px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
  flex-grow: 1;
  align-self: stretch;
  z-index: 0;
}
.title-text {
  position: static;
  left: 0px;
  top: 233px;
  width: 1280px;
  height: 70px;
  font-family: 'Source Han Sans CN';
  font-size: 48px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  letter-spacing: 0em;
  color: #000000;
  z-index: 0;
}
.description-text {
  position: static;
  left: 260px;
  top: 335px;
  width: 59.38%;
  height: 64px;
  font-family: '思源黑体';
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #444444;
  z-index: 1;
}
.highlighted {
  font-weight: 500;
}
.footer-bg {
  background-color: #f1f1f1; /* 浅灰色背景 */
}
.footer-text {
  color: #4a4a4a; /* 深灰色文字 */
}




</style>