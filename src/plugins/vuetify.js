import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import pt from 'vuetify/es5/locale/pt';


Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { pt },
        current: 'pt',
      },
    icons: {
        iconfont: 'md',
    },
    theme: {
        themes: {
            light: {
                success: '#68B6D1'
            }
        }

    }
});