import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#565264',
            secondary: '#776274',
            anchor: '#8c9eff',
          },
        },
      },
});
