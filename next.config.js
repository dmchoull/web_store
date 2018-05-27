module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
  excludeFile: str => /\*.{spec,test}.js/.test(str),
};
