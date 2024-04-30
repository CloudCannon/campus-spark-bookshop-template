module.exports = function (Liquid) {
    this.registerTag('image', {
      parse: function(token, remainingTokens) {
        this.src = token.args.split(' ')[0];
        this.alt = token.args.split(' ')[1];
      },
      render: function(scope, hash) {
        return `<picture><img src="${scope.get(this.src.split("."))}" alt="${scope.get(this.alt.split("."))}" /></picture>`;
      }
    });
}