module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      options: {
        sourceMap: false
      },
      default : {
        src: ["**/*.ts", "!node_modules/**"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};
