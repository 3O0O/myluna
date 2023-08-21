<template>
  <div class="massive-rescources">
    <!-- 容器23 -->
    <div class="container-23">
      <button class="text-btn hover:underline border-none">试题资源</button>
      <button class="text-btn hover:underline border-none">试卷资源</button>
      <button class="text-btn hover:underline border-none">教材教辅</button>
    </div>

    <!-- 容器16 -->
    <div class="container-16 flex">
      <!-- 容器17 -->
      <div class="container-17">
        <!-- 容器32 -->
        <div class="container-32 flex items-center">
          <span class="resources-title-1">各学科数据统计</span>
          <button class="container-31 border-none">
            <span class="btn">显示学段细分</span>
          </button>
        </div>
        <img src="../assets/chart.png" alt="图表" class="chart">
      </div>

      <!-- 容器21 -->
      <div class="container-21">
        <div class="resources-title-2">海量教学资源，智能处理</div>
        <!-- 容器25 -->
        <div class="container-25">
          <div class="text1">海量标准化、体系化的教学资源</div>
          <div class="text2">基于高效准确的试题相似度评估算法的高质量资源库</div>
          <div class="text3">智能与个性化的资源录入、查询和管理服务</div>
        </div>
        <!-- 容器30 -->
        <div class="container-30 flex">
          <button class="container-27 flex items-center border-none">
            <img src="../assets/type.png" alt="logo" class="logo1">
            <div class="btn-text text-white">试题录入</div>
          </button>
          <button class="container-28 flex items-center border-none">
            <img src="../assets/search.png" alt="logo" class="logo2">
            <div class="btn-text text-white">试题检索</div>
          </button>
          <button class="container-29 flex items-center border-none">
            <img src="../assets/book-open.png" alt="logo" class="logo3">
            <div class="btn-text text-white">智能分析</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'MassiveResources'
}
</script>
  
<style scoped>
/* 海量资源部分 */
.massive-rescources {
  position: relative;
  width: 1440px;
  height: 1000px;
  opacity: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: flex-start;
  padding: 200px 80px;
  gap: 32px;
    
  background: #FAFAFC;
  z-index: 0;
}
.container-23 {
  position: static;
  width: 390px;
  height: 48px;
  opacity: 1;
      
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 40px;
  justify-content: flex-start;
  text-align: left;
  
  border: none;
  z-index: 0;
}
.text-btn {
  width: 98px;
  height: 32px;
  opacity: 1;
    
  font-family: 阿里巴巴普惠体 2.0;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.05em;
    
  color: #707070;

  white-space: nowrap;
    
  z-index: 2;
}
.text-btn:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.container-16 {
  width: 1280px;
  height: 520px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: flex-start; 
  align-items: center;
  padding: 0px;
  gap: 60px;
  flex-grow: 1;
  align-self: stretch;
    
  z-index: 1;
}
.container-17 {
  width: 610px;
  height: 520px;
  border-radius: 24px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 90px;
  align-self: stretch;
  text-align: left;
    
  background: #FFFFFF;
    
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.08);
    
  z-index: 0;
}
.chart {
  width: 546px;
  height: 254px;
  opacity: 1;
    
  align-self: stretch;
    
  z-index: 1;
}
.container-32 {
  width: 546px;
  height: 44px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  align-self: stretch;
    
  z-index: 0;
}
.container-31 {
  width: 124px;
  height: 44px;
  border-radius: 12px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 6px 12px;
  gap: 10px;
    
  background: #F7F7F7;
    
  z-index: 1;
  transition: transform 0.3s ease;
}
.container-31:hover {
  transform: scale(0.95); /* 缩小到95%的原始大小 */
}
.container-31:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.resources-title-1 {
  width: 412px;
  height: 32px;
  opacity: 1;

  font-family: 思源黑体;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.05em;

  color: #000000;

  z-index: 0;
}
.btn {
  width: 100px;
  height: 32px;
  opacity: 1;
    
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.05em;
    
  color: #5C87BF;
    
  z-index: 0;

  white-space: nowrap;
}
.container-21 {
  width: 610px;
  height: 308px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 40px;
  flex-grow: 1;
    
  z-index: 1;
}
.resources-title-2 {
  width: 414px;
  height: 32px;
  opacity: 1;
    
  font-family: 思源黑体;
  font-size: 36px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.05em;
  white-space: nowrap;
    
  z-index: 0;
  /* 海量 */ 
  color: linear-gradient(90deg, #FF4848 0%, #F0BC2D 47%); 

  /* 教学资源， */ 
  color: #000000; 

  /* 智能 */ 
  color: linear-gradient(270deg, #4CC1F7 0%, #1A52EE 100%); 

  /* 处理 */ 
  color: #000000; 
}
.container-25 {
  width: 610px;
  height: 144px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
  align-self: stretch;
  text-align: left;
    
  z-index: 1;
}
.text1 {
  width: 472px;
  height: 32px;
  opacity: 1;
    
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0.05em;
    
  color: #787878;
    
  z-index: 0;
}
.text2 {
  width: 610px;
  height: 32px;
  opacity: 1;
    
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0.05em;
    
  color: #787878;
    
  z-index: 1;
}
.text3 {
  width: 610px;
  height: 32px;
  opacity: 1;
    
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0.05em;
    
  color: #787878;
    
  z-index: 2;
}
.container-30 {
  width: 610px;
  height: 52px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 16px;
  align-self: stretch;
    
  z-index: 2;
}
.container-27 {
  width: 137px;
  height: 52px;
  border-radius: 10px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 20px;
  gap: 6px;
  align-self: stretch;
    
  background: linear-gradient(270deg, #D46A6A 0%, #D45959 100%);
    
  z-index: 0;
  transition: transform 0.3s ease;
}
.container-27:hover {
  transform: scale(0.95); /* 缩小到95%的原始大小 */
}
.container-27:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.container-28 {
  width: 137px;
  height: 52px;
  border-radius: 10px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 20px;
  gap: 6px;
  align-self: stretch;
    
  background: linear-gradient(270deg, #6A91D4 0%, #5986D4 100%);
    
  z-index: 1;
  transition: transform 0.3s ease;
}
.container-28:hover {
  transform: scale(0.95); /* 缩小到95%的原始大小 */
}
.container-28:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.container-29 {
  width: 137px;
  height: 52px;
  border-radius: 10px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 20px;
  gap: 6px;
  align-self: stretch;
    
  background: linear-gradient(270deg, #766AD4 0%, #6759D4 100%);
    
  z-index: 2;
  transition: transform 0.3s ease;
}
.container-29:hover {
  transform: scale(0.95); /* 缩小到95%的原始大小 */
}
.container-29:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.logo{
  width: 16px;
  height: 16px;
  opacity: 1;
    
  z-index: 0;
}
.container-16, .container-17, .container-32, .container-31, .container-21, .container-25, .container-30 {
  margin: auto;
}
</style>
