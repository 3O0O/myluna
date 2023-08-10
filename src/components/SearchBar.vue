<template>
    <div class="search-bar">
      <div class="search-icon"></div>
      <input type="text" v-model="input" @keyup.enter="search">
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
        
        this.results = await response.json(); // 假设你的API返回JSON格式的搜索结果
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    position: absolute;
    left: 400px;
    top: 588px;
    width: 640px;
    height: 64px;
    border-radius: 32px;
    opacity: 1;
    display: flex;
    flex-direction: column; /* 修改为 column 以垂直布局输入框和结果列表 */
    justify-content: center;
    padding: 4px 4px 4px 20px;
    gap: 12px;
    background: #FFFFFF;
    box-shadow: 0px 6px 32px 0px rgba(0, 0, 0, 0.12);
}

.container-12 {
  position: static;
  left: 508px;
  top: 4px;
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
}

.search-icon {
  position: absolute;
  left: 1308px;
  top: 768px;
  width: 24px;
  height: 24px;
  opacity: 1;
  background-image: url(../assets/search.png); /* 替换为实际图片的文件路径 */
}

.search-bar input {
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
  z-index: 1
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
  