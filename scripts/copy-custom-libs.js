const existingConfig = require('../node_modules/@ionic/app-scripts/config/copy.config');
module.exports = Object.assign(existingConfig, {
    copyFontawesomeFonts: {
      src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
      dest: '{{WWW}}/assets/fonts'
    },
    copyFontawesomeCss: {
      src: ['{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css'],
      dest: '{{WWW}}/assets/css'
    }
  }
);
