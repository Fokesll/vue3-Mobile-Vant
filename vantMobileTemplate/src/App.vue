<template>
  <van-config-provider :theme="vantTheme" >
    <van-button @click="change">切换主题</van-button>
    <languageComponents/>
  </van-config-provider>
</template>

<script setup>
import { ref ,watchEffect ,computed } from "vue";
import { useThemeStore } from "./store/module/theme";
import languageComponents from './components/language.vue'

const ThemeStore = useThemeStore();

const vantTheme = computed ( ()=> ThemeStore.getTheme());

const change = () =>{
    ThemeStore.changeTheme();
}

watchEffect(() =>{
  const theme =ThemeStore.getTheme();
  
  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
})

</script>

<style lang="less">

* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.dark{
  background-color: #16202B;
  color: #E9E9D7;
}
.light{
  background-color: #EFF2F5;
}
</style>
