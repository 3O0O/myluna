<template>
    <div class="search-bar">
      <div class="search-icon-wrapper">
        <div class="search-icon"></div>
      </div>
      <input type="text" v-model="input" placeholder="三角函数" @keyup.enter="search"> <!-- 添加占位符 -->
      <button class="container-12">搜索</button> <!-- 添加搜索按钮 -->
      <!-- 搜索结果列表 -->
      <div v-for="(result, index) in results" :key="index" class="search-result">
        {{ result }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        input: '', // 用户输入值
        results: [], // 搜索结果列表
      };
    },
    methods: {
      async search() {
        /*
          此处应该替换为实际调用的搜索 API
          使用 this.input 得到用户输入的搜索内容
          改变 this.results 来更新搜索结果列表
        */
        const response = await fetch('https://your_api_endpoint', { // 用真实的API地址替换
          method: 'POST',
          body: JSON.stringify({ query: this.input }),
        });
        
        this.results = await response.json(); // 假设API返回JSON格式的搜索结果
      },
    },
  };
  </script>
  
<style scoped>
.search-bar {
  position: relative;
  width: 640px;
  height: 64px;
  border-radius: 32px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4px 4px 4px 20px;
  gap: 12px;
  background: #FFFFFF;
  box-shadow: 0px 6px 32px 0px rgba(0, 0, 0, 0.12);
  align-items: center;
  z-index: 2;
}
.container-12 {
  position: static;
  margin-left: auto;
  width: 128px;
  height: 56px;
  border-radius: 32px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  align-self: stretch;
  background: linear-gradient(90deg, #7BAFEE 3%, #7786EB 99%);
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.08);
  z-index: 2;

  font-family: Source Han Sans CN;
  font-size: 20px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: 0em;

  color: #FFFFFF;

  border: none;

  transition: transform 0.3s ease;
}
.container-12:hover {
  transform: scale(0.95); /* 缩小到95%的原始大小 */
}
.container-12:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.search-icon-wrapper {
  flex: 0 0 24px; /* 确保图标容器的宽度 */
  height: 24px; /* 确保图标容器的高度 */
  display: flex; /* 使其成为flex容器 */
  align-items: center; /* 垂直居中图标 */
  justify-content: center; /* 水平居中图标 */
  margin-right: 10px; /* 在图标和输入框之间增加一些间距 */
}
.search-icon {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 24px;
  height: 24px;
  opacity: 1;
  background-image: url(../assets/search1.png); 
}
.search-bar input {
  background-color: white;
  position: static;
  left: 56px;
  top: 19px;
  width: 440px;
  height: 26px;
  opacity: 1;
  font-family: 'Source Han Sans CN';
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #737373;
  z-index: 2;
  border: none;
  }
  
.search-bar input:focus {
  outline: none; /* 移除获得焦点时的默认外边框 */
}
.search-result {
  background-color: #F9F9F9;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-family: 'Source Han Sans CN';
  font-size: 16px;
  color: #333333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
}
</style>
  