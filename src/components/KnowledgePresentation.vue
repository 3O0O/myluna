<template>
  <!-- 知识呈现部分 -->
  <div class="knowledge-presentation">
      <!-- 容器 16 -->
      <div class="container-16">
        <!-- 容器 21 -->
        <div class="container-21">
          <div class="title-of-knowledge">
            <span class="duoyuan">多元</span>
            <span class="zhishidian">知识点，</span>
            <span class="zhiguan">直观</span>
            <span class="chengxian">呈现</span>
          </div>
          <!-- 容器 25 -->
          <div class="container-25">
            <span class="text-of-knowledge" top="0px">知识点智能化组织与展示</span>
            <span class="text-of-knowledge" top="56px">结构清晰，辅助学生梳理知识</span>
            <span class="text-of-knowledge" top="112px">前驱后继、共同学习和层级关系三种知识关系展示</span>
          </div>
            <!-- 容器 27 -->
            <button class="container-27">
              <div class="corner-down-right">
                <img src="../assets/corner-down-right.png" alt="corner-down-right">
              </div>
              <div class="knowledge-btn-text">立即前往</div>
            </button>
        </div>
        <!-- 容器 33 -->
        <div class="container-33">
          <!-- 容器 17 -->
          <div class="container-17">
            <div class="knowledge-image">
              <img src="../assets/knowledge-img-1.png" alt="knowledge-img-1" class="knowledge-img-1">
              <img src="../assets/knowledge-img-2.png" alt="knowledge-img-2" class="knowledge-img-2">
            </div>>
            <!-- 容器 32 -->
            <div class="container-32">
              <div class="title-of-knowledge-right">三角函数</div>
              <div class="text-of-knowledge-right">三角函数是基本初等函数之一，是以角度（数学上最常用弧度制，下同）为自变量，角度对应任意角终边与单位圆交点坐标或其比值为因变量的函数...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'KnowledgePresentation'
}
</script>
  
<style scoped>
/* 知识呈现部分 */
.knowledge-presentation {
  position: absolute;
  left: 0px;
  top: 2252px;
  width: 1440px;
  height: 1000px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 180px 80px;
  gap: 32px;
  background: linear-gradient(109deg, #FFF5F5 0%, #DDE2F6 90%);
}

.container-16 {
  position: static;
  left: 80px;
  top: 180px;
  width: 1280px;
  height: 640px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 40px;
  flex-grow: 1;
  align-self: stretch;
  z-index: 0;
}

.container-21 {
  position: static;
  left: 0px;
  top: 166px;
  width: 472px;
  height: 308px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 40px;
  z-index: 0;
}
.title-of-knowledge {
  position: static;
  left: 0px;
  top: 0px;
  width: 414px;
  height: auto;
  opacity: 1;
  font-family: '思源黑体';
  font-size: 36px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.05em;
  text-align: left;
  display: flex; /* 使内部span并排显示 */
}

.duoyuan {
  color: #23A1CB;
}

.zhishidian {
  color: #000000;
}

.zhiguan {
  color: #F74CBE;
}

.chengxian {
  color: #000000;
}
.text-of-knowledge {
  position: static;
  left: 0px;
  top: 0px;
  width: 472px;
  height: 32px;
  opacity: 1;

  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0.05em;

  color: #787878;
  text-align: left;

  z-index: 0;
}
.title-of-knowledge-right {
  position: static;
  left: 0px;
  top: 0px;
  width: 100px;
  height: 32px;
  opacity: 1;

  font-family: 思源黑体;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.05em;
  white-space: nowrap;

  color: #000000;

  z-index: 0;
}
.text-of-knowledge-right {
  position: static;
  left: 0px;
  top: 48px;
  width: 456px;
  height: 96px;
  opacity: 1;

  font-family: 思源黑体;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.05em;
  text-align: left;

  color: #9E9E9E;

  z-index: 1;
}
.container-25 {
  position: static;
  left: 0px;
  top: 72px;
  width: 472px;
  height: 144px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
  z-index: 1;
}

.container-33 {
  position: static;
  left: 512px;
  top: 44px;
  width: 768px;
  height: 552px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  flex-grow: 1;
  z-index: 1;
}

.container-17 {
  position: relative;
  left: 124px;
  top: 0px;
  width: 520px;
  height: 552px;
  border-radius: 24px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 36px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
  z-index: 0;
}

.knowledge-image {
  position: relative;
  width: 456px;
  height: 308px;
  opacity: 1;

  z-index: 0;
}
.knowledge-img-1 {
  position: relative;
  left: 0px;
  top: 0px;
  width: 456px;
  height: 308px;
  mix-blend-mode: multiply;
  opacity: 1;

  align-self: stretch;
}
.knowledge-img-2 {
  position: absolute;
  left: 375px;
  top: 189.5px;
  width: 71px;
  height: 108px;
  mix-blend-mode: multiply;
  opacity: 1;
}
.container-32 {
  position: static;
  margin-top: -65px;
  left: 32px;
  top: 376px;
  width: 456px;
  height: 144px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
  align-self: stretch;
  z-index: 1;
}
.container-27 {
  position: static;
  left: 0px;
  top: 256px;
  width: 145px;
  height: 52px;
  border-radius: 10px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 24px;
  gap: 6px;
    
  background: linear-gradient(270deg, #6291C4 0%, #4F87C2 100%);
    
  z-index: 2;
  transition: transform 0.3s ease; /* 添加过渡效果，0.3s是动画时间 */
}
.container-27:hover {
  transform: scale(0.95); /* 缩小到95%的原始大小 */
}
.container-27:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.knowledge-btn-text {
  position: static;
  left: 46px;
  top: 17px;
  width: 75px;
  height: 18px;
  opacity: 1;
    
  font-family: 思源黑体;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.05em;
  white-space: nowrap;
    
  color: #FFFFFF;
    
  z-index: 1;
}
.corner-down-right {
  position: static;
  left: 24px;
  top: 18px;
  width: 16px;
  height: 16px;
  opacity: 1;
    
  z-index: 0;
}
.btn-text {
  /* 自动布局子元素 */
  position: static;
  left: 42px;
  top: 17px;
  width: 75px;
  height: 18px;
  opacity: 1;
    
  font-family: 思源黑体;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.05em;
    
  color: #FFFFFF;
    
  z-index: 1;
}
</style>