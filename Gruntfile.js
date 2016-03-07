module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
	grunt.initConfig({
    shell: {
    	clean_npm: {
    		command: "rm -rf node_module"
    	},
    	clean_bower: {
    		command: "rm -rf bower_components"
    	},
    	build_npm: {
    		command: "npm install"
    	},
    	build_bower: {
    		command: "bower install"
    	},
        start: {
            command: "open login/login.html" 
        }
    }
});

grunt.registerTask('default', ["shell:start"]);
grunt.registerTask('clean_build', ['shell']);
};