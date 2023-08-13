<template>
  <!-- 功能展示部分 -->
  <div class="feature-display">
    <div class="feature-title">
      <span class="feature">特色</span>教育功能，<span class="effort">倾力</span>打造
    </div>
    <div class="container-16">
      <FeatureCard 
        title="试卷分析" 
        description="使用人工智能和数据挖掘技术在多个层次和维度上分析试卷，如各题型占比、知识点分值和难度变化" 
        imageUrl="/img/feature-display-img-1.png"
        btntext="了解更多"
      />
      <FeatureCard 
        title="组卷系统" 
        description="智能组卷系统提供丰富的选题方式，自动组卷，以及个性化试卷和答题卡编辑、预览与下载功能" 
        imageUrl="/img/feature-display-img-2.png"
        btntext="了解更多"
      />
      <FeatureCard 
        title="AI实验室" 
        description="由LUNA团队提供和维护，依托领先的技术实力，为用户提供高品质的教育产品及服务" 
        imageUrl="/img/feature-display-img-3.png"
        btntext="立即前往"
      />
      <FeatureCard 
        title="智能教辅平台" 
        description="深层次多维度海量教育资源分析，个性化资源管理、组织功能，为教师提供智能化教学服务" 
        imageUrl="/img/feature-display-img-4.png"
        btntext="立即前往"
      />
    </div>
  </div>
</template>

<script>
import FeatureCard from '../components/FeatureCard.vue';

export default {
  components: {
    FeatureCard,
  },
  name: 'FeatureDisplay'
}
</script>

<style scoped>
/* 功能展示部分 */
.feature-display {
  position: absolute;
  left: 0px;
  top: 3252px;
  width: 1440px;
  height: 1000px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  gap: 48px;
  background: linear-gradient(71deg, #F5F6FA 0%, #FFFBFB 90%);
}

.feature-title {
  position: static;
  left: 80px;
  top: 260px;
  width: 414px;
  height: 32px;
  opacity: 1;
  font-family: Roboto;
  font-size: 36px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.05em;
  z-index: 0;
  color: #000000;

  white-space: nowrap;
}

.feature {
  color: linear-gradient(270deg, #FF3C3C 0%, #663CFF 100%);
  font-family: Roboto;
  font-weight: 700;
  font-size: 36px;
}

.effort {
  color: linear-gradient(90deg, #F74C88 0%, #CA0F9E 100%);
  font-family: 思源黑体;
  font-weight: 700;
  font-size: 36px;
}

.container-16 {
  position: static;
  left: 80px;
  top: 340px;
  width: 1296px;
  height: 400px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
  z-index: 1;
}

</style>