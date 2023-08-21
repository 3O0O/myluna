<template>
  <body class="m-0 p-0 flex flex-col ">
    <div class="w-screen background flex items-center flex-col absolute justify-center bg-gradient-blue bg-opacity-100">
      <div :class="['navbar', { 'navbar-scrolled': scrollFlag }]">
        <span class="flex-none pt-2">
          <img src="../assets/LUNA-LOGO.png" alt="LUNA-LOGO" class="w-30 h-10">
        </span>
        <span class="hidden flex-none md:flex flex-row flex-nowrap max-w-1280 mx-15 font-medium">
          <button class="nav-btn">首页</button>
          <button class="nav-btn">功能</button>
          <button class="nav-btn">AI实验室</button>
          <button class="nav-btn">成员</button>
          <span class="ml-8 mt-5 mb-4 nav-line"></span>
          <button class="nav-btn">登录</button>
          <button class="nav-btn">注册</button>
        </span>
      </div>
      <div class="logo flex space-x-4">
        <span class="flex-none">
            <img src="../assets/image.png" alt="image" class="w-32 h-32">
        </span>
        <span class="flex flex-col items-center space-y-2 pt-3.5">
          <span class="logo-title">LUNA</span>
          <span class="logo-text">智慧教育知识图谱</span>
        </span>
      </div>
      <SearchBar></SearchBar>
    </div>
    <div class="introduction w-screen flex flex-col absolute items-center justify-center">
      <span class="intro-title">
        寓智于教，致知未来
      </span>
      <span class="intro-text">
        智慧教育知识图谱（LUNA）致力于为广大师生提供深层次、多维度的海量教育资源处理分析工具，与智能、个性化的教育资源组织、分析与评估服务
      </span>
    </div>
    <div class="MR w-screen flex flex-col absolute items-center justify-center">
      <MassiveResources></MassiveResources>
    </div>
    <div class="KP w-screen flex absolute items-center justify-center">
      <KnowledgePresentation></KnowledgePresentation>
    </div>
    <div class="FD w-screen flex absolute items-center justify-center">
      <FeatureDisplay></FeatureDisplay>
    </div>
    <footer class="footer w-screen p-6 flex flex-col items-center space-y-4">
        <div class="flex space-x-4">
          <button class="footer-text hover:underline border-none">服务条款</button>
          <span class="footer-text">|</span>
          <button class="footer-text hover:underline border-none">隐私政策</button>
          <span class="footer-text">|</span>
          <button class="footer-text hover:underline border-none">联系我们</button>
        </div>
        <div class="flex items-center space-x-2">
          <a href="#top" class="footer-text hover:underline">LUNA水镜智能</a>
          <span class="footer-text">©</span>
          <a href="http://bigdata.ustc.edu.cn/" target="_blank" class="footer-text hover:underline">大数据分析与应用安徽省重点实验室</a>
        </div>
      </footer>
  </body>
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
.navbar {
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  height: 80px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5rem 3.5rem;
  transition: background-color 300ms, backdrop-filter 300ms;
  z-index: 10;
  padding-top: 10px;
}
.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(24px);
}
.nav-btn {
  color: #000000;
  font-family: "Source Han Sans CN";
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  line-height: normal;
  border: none;
  margin-left: 2.5rem;
  letter-spacing: 0em;
  text-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);
  transition: transform 0.3s ease;
}
.nav-btn:hover {
  transform: scale(0.95);
  color: #60A5FA;
}
.nav-line{
  border: 1.25px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.16);
}
.logo {
  height: 128px;
  margin-top: 290px;
  margin-bottom: 202px;
}
.login-btn{
  border-radius: 104px;
  border: 2px solid #313131;
}
.logo-title{
  font-family: 思源黑体;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.24em;

  color: #222222;
}
.logo-text{
  font-family: 思源黑体;
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #555555;
}
.introduction {
  background: #FAFAFC;
  height: 632px;
  margin-top: 550px;
  z-index: 0;
}
.intro-title {
  height: 70px;
  margin-top: 233px;

  font-family: Source Han Sans CN;
  font-size: 48px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  letter-spacing: 0em;
}
.intro-text {
  height: 64px;
  margin-top: 32px;
  margin-bottom: 233px;
  margin-left: 260px;
  margin-right: 260px;

  font-family: 思源黑体;
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.03em;

  color: #444444;
}
.MR {
  margin-top: 1182px;
  background: #FAFAFC;
}
.KP {
  margin-top: 2182px;
  background: #FAFAFC;
}
.FD {
  margin-top: 3182px;
  background: linear-gradient(71deg, #F5F6FA 0%, #FFFBFB 90%);
}
.max-w-1280 { 
  max-width: 1280px;
}
.background {
  margin-top: -70px;
  height: 620px;
  z-index: 1;
}
.footer {
  top: 4182px;
  position: relative;

  background-color: gainsboro;
}
.footer-text {
  color: #4a4a4a;
}
</style>