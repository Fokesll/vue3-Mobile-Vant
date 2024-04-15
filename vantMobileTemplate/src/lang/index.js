import enUS from "vant/es/locale/lang/en-US";
import zhCN from "vant/es/locale/lang/zh-CN";

import en from './languages/en'
import zh from './languages/cn'




 import { createI18n } from "vue-i18n";

 const messages = {
    'zhCN':{
        ...zh,
        ...zhCN
    },
    'enUS':{
        ...en,
        ...enUS
    }
 }



 const i18n = createI18n({
    legacy: false,
     locale:localStorage.getItem('lang') || 'zhCN',
     fallbackLocale: 'zhCN',
     globalInjection: true,
     silentTranslationWarn:true,
     messages
 
 });

export default i18n