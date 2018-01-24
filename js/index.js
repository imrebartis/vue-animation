var Child = {
  template: '#childarea'
};

new Vue({
  el: '#app',
  data: function data() {
    return {
      isShowing: false
    };
  },

  methods: {
    toggleShow: function toggleShow() {
      this.isShowing = !this.isShowing;
    }
  },
  components: {
    appChild: Child
  }
});