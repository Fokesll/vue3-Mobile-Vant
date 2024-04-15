<template>
    <div >
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        :label="$t('langs.language')"
        :placeholder="$t('langs.languagePlaceholder')"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
      </van-popup>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useI18n } from "vue-i18n";
  import { useThemeStore } from "../store/module/theme";
  
  const { locale } = useI18n();
  const ThemeStore = useThemeStore();
  
  const fieldValue = ref(ThemeStore.getLang());
  const showPicker = ref(false);
  
  const columns = ThemeStore.getLangs();
  
  const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    const text = selectedOptions[0].text;
    const value = selectedOptions[0].value;
    fieldValue.value = text;
    locale.value = value;
    ThemeStore.setLang(value);
  
    changeVantLocaleLanguage(value);
  };
  
  import { Locale } from "vant";
  import enUS from "vant/es/locale/lang/en-US";
  import zhCN from "vant/es/locale/lang/zh-CN";
  const changeVantLocaleLanguage = (lang) => {
    if (lang === "enUS") {
      Locale.use("en-US", enUS);
    } else {
      Locale.use("zh-CN", zhCN);
    }
  };
  </script>
  
<style lang="less" scoped>

</style>
  