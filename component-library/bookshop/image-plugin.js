module.exports = function (Liquid) {
    this.registerTag('image', {
      parse: function(token, remainingTokens) {
        this.src = token.args.split(' ')[0];
      },
      render: function(scope, hash) {
        return `<img src="${this.src}" alt="" width="" />`;
      }
    }
    
    
    // (src, alt, widths, sizes) => {
    //   return `<picture><img src="${src}" alt="${alt}" width="${width}" /></picture>`;
    // });
}