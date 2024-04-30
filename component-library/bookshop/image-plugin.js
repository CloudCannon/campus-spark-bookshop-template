module.exports = function (Liquid) {
    this.registerTag('image', {
      parse: function(token, remainingTokens) {
        this.src = token.args.split(' ')[0];
      },
      render: function(scope, hash) {
        return `<picture><img src="${scope.get(this.src.split("."))}" alt="" width="" /></picture>`;
      }
    });
    
    
    // (src, alt, widths, sizes) => {
    //   return `<picture><img src="${src}" alt="${alt}" width="${width}" /></picture>`;
    // });
}