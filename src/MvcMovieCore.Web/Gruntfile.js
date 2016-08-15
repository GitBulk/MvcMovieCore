/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    // load grunt plugins from npm
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // configure plugins
    grunt.initConfig({
        uglify: {
            //The Uglify plugin is configured so that it combines and minifies
            //all of the files from the Scripts folder and places the results
            //in a file named app.js in the wwwroot folder
            my_target: {
                files: { "wwwroot/app.js": ["Scripts/app.js", "Scripts/**/*.js"] }
            }
        },

        //The Watch plugin is configured to watch any changes to the JavaScript
        //files in the Scripts folder with the following code
        watch: {
            scripts: {
                files: ["Scripts/**/*.js"],
                taks: ["uglify"]
            }
        }
    });

    //The final section of the Grunt file contains a definitions for your tasks.
    //In our Grunt file, we define a single “default” task that runs Uglify and
    //then watches for changes in our JavaScript files.
    grunt.registerTask("default", ["uglify", "watch"]);
};



