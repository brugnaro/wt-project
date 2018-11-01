class WhatsAppController {

  constructor() {

    console.log('wt-controller- ok !');

    this.loadElements();

  }

  loadElements() {

    this.el = {};

    document.querySelectorAll('[id]').forEach(element => {

      this.el[Format.getCamelCase(element.id)] = element;

    });

  }

}