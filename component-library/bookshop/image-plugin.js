module.exports = function (Liquid) {
    this.registerTag('image', (src, alt, width) => {
      return `<img src="${src}" alt="${alt}" width="${width}" />`;
    });
}