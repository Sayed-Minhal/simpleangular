////// Gruntfile Configuration

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['<%= jshint.files %>', 'src/*.html'],
            tasks: ['']

        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    keepalive:true,
                    livereload:true,
                    open: {
                        target: 'http://localhost:9001/src/', // target url to open
                        appName: 'app', // name of the app that opens, ie: open, start, xdg-open
                        callback: function() { console.log("URL Open"); } // called when the app has opened
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);

};