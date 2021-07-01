import Vue from 'vue';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default new Vue({
  methods: {
    get(url, success, fail) {
      axios.get(url)
        .then((response) => {
          success(response);
        })
        .catch((reason) => {
          fail(reason);
        });
    },
  },
});
