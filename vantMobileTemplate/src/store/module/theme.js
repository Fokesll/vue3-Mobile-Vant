import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme',{
    state: () =>{
        return {
            lang:'zhCN',
            langs:[{text:'中文',value:'zhCN'},{text:'english',value:'enUS'}],
            theme:'dark',
        }
    },
    actions:{
        setLang(lang){
            this.lang = lang;
        },
        getLang(){
            if(this.lang === 'zhCN'){
                return '中文'
            }else{
                return 'english'
            }
        },
        getLangs(){
            return this.langs;
        },
        changeTheme(){
            if(this.theme === 'dark'){
                this.theme = 'light';
            }else{
                this.theme = 'dark';
            }
        },
        getTheme(){
            return this.theme;
        }
    }
});