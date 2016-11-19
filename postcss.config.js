module.exports = (ctx) => {
  return {
    plugins: function() {
      return [
        require('postcss-smart-import')(),
        require('postcss-url')(),
        require('postcss-mixins')(),
        require('postcss-cssnext')(),
        require('postcss-inline-comment')()
      ] 
    }
  }
};
