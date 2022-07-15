module.exports = {
  transpileDependencies: ["vuetify"],

  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(5000000).maxAssetSize(5000000);
    config.plugin("html").tap((args) => {
      args[0].title = "FieldTech";
      return args;
    });
  },

  css: {
    extract: { ignoreOrder: true }
  },

  runtimeCompiler: true
};
