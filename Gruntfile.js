module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
	grunt.initConfig({
    shell: {
        start: {
            command: "open login/login.html" 
        }
    }
});

grunt.registerTask('default', ['shell']);
};