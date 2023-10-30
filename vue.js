new Vue({
  el: '#app',
  data: {
      expression: '',
      buttons: ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/', 'C', '=']
  },
  methods: {
      handleButtonClick(button) {
          if (button === 'C') {
              this.expression = '';
          } else if (button === '=') {
              try {
                  this.expression = eval(this.expression);
              } catch (error) {
                  this.expression = 'Error';
              }
          } else {
              this.expression += button;
          }
      }
  }
});