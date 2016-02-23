module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
	grunt.initConfig({
    shell: {
        start: {
            command: "open userDetail/user_details_form.html" 
        }
    }
});

grunt.registerTask('default', ['shell']);
};