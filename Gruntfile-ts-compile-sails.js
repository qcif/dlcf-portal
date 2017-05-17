module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      default : {
        tsconfig:'tsconfig-sails.json'
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};
