var Child = {
  template: '#childarea',
  props: ['isShowing'],
  methods: {
    toggleShow: function toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};

new Vue({
  el: '#app',
  data: function data() {
    return {
      isShowing: false
    };
  },

  components: {
    appChild: Child
  }
});