<template>
  <div class="container-17">
    <img :src="imageUrl" alt="Feature Image" class="feature-image">
    <div class="container-18">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
      <button class="container-19">
        <span class="learn-more">{{ btntext }}</span>
        <img src="../assets/arrow-states.png" alt="Arrow Logo" class="arrow-logo">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    btntext: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.container-17 {
  position: static;
  left: 0px;
  top: 0px;
  width: 300px;
  height: 400px;
  border-radius: 24px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 0px;
    
  background: #FFFFFF;
    
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.08);
    
  z-index: 0;

  transition: transform 0.3s ease; /* 添加过渡效果 */
}
.container-17:hover {
  transform: scale(1.05); /* 在悬停时放大5% */
}
.feature-image {
  position: static;
  left: 0px;
  top: 0px;
  width: 302px;
  height: 150px;
  border-radius: 24px 24px 0px 0px;
  opacity: 1;

  z-index: 0;
}
.container-18 {
  position: static;
  left: 0px;
  top: 150px;
  width: 300px;
  height: 250px;
  opacity: 1;

  /* 自动布局 */
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  flex-grow: 1;
  align-self: stretch;

  z-index: 1;
}
.title {
  position: static;
  left: 20px;
  top: 20px;
  width: 100px;
  height: 32px;
  opacity: 1;

  font-family: Roboto;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0.05em;

  color: #000000;

  z-index: 0;

  white-space: nowrap;
}
.description {
  position: static;
  left: 20px;
  top: 62px;
  width: 260px;
  height: 126px;
  opacity: 1;

  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0.05em;

  color: #9E9E9E;

  z-index: 1;

  text-align: left;
}
.container-19 {
  position: static;
  left: 20px;
  top: 198px;
  width: 99px;
  height: 32px;
  opacity: 1;
    
  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
    
  z-index: 2;

  border: none;
  transition: transform 0.3s ease; /* 添加过渡效果，0.3s是动画时间 */
}
.container-19:hover {
  transform: scale(0.95); /* 缩小到95%的原始大小 */
}
.container-19:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}

.learn-more {
  position: static;
  left: 0px;
  top: 0px;
  width: 75px;
  height: 32px;
  opacity: 1;
    
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.05em;
    
  color: #4E89FF;
    
  z-index: 1;

  white-space: nowrap;
  }
.arrow-logo {
  position: static;
  left: 79px;
  top: 6px;
  width: 20px;
  height: 20px;
  opacity: 1;
    
  z-index: 1;
}
</style>
