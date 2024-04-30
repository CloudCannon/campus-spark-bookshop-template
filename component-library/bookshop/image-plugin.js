module.exports = function (Liquid) {
    this.registerTag('image', (src, alt, width) => {
      return `<picture><img src="${src}" alt="${alt}" width="${width}" /></picture>`;
    });
}