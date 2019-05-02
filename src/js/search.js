import axios from 'axios';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
    data() {
        return {
            year: '',
            season: '',
            animes: [],
            selectYear: this.getYear(),
            selectSeason: [
                {value: '1', text: '冬 (1 ～ 3 月)'},
                {value: '2', text: '春 (4 ～ 6 月)'},
                {value: '3', text: '夏 (7 ～ 9 月)'},
                {value: '4', text: '秋 (10 ～ 12 月)'},
            ]
        }
    },
    methods: {
        /**
         * 2014 ～ 現在までの年数を取得する関数
         */
        getYear: function() {
            const currentYear = (new Date()).getFullYear();
            let baseYear = 2014;
            let years = []
            while(currentYear >= baseYear) {
                years.push({value: baseYear, text: baseYear + '年'})
                baseYear += 1;
            }
            return years
        },
        /**
         * 年 + クールから対象のアニメリストを取得する関数
         */
        getAnime: function() {
            this.getYear();
            if (this.year && this.season) {
                // API: ShangriLa Anime API V1
                let api_url = "https://api.moemoe.tokyo/anime/v1/master/"
                this.animes = []
                axios.get(api_url + this.year + '/' + this.season, {
                }).then(response => {
                    for (let i = 0; i < Object.keys(response.data).length; i++) {
                        this.animes.push(response.data[i])
                    }
                })
            }
        }
    }
}
