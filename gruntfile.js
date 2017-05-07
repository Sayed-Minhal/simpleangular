////// Gruntfile Configuration

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // copy: {
        //     main: {
        //         files: [
        //             // includes files within path 
        //             { expand: true, src: 'src/**', dest: 'dist/' }
        //         ]
        //     },
        // },
        // concat: {
        //     options: {
        //         separator: ';'
        //     },
        //     dist: {
        //         src: ['src/**/*.js','src/view/*.html'],
        //         dest: ['dist/<%= pkg.name %>.js','dist/view/default.html']
        //     }
        // },
        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        //     },
        //     dist: {
        //         files: {
        //             'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        //         }
        //     }
        // },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                //esversion: 6,
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        sass: { // Task 
            dist: { // Target 
                options: { // Target options 
                    style: 'expanded',
                    loadPath: ['bower_components/foundation/scss']
                },

                files: { // Dictionary of files 
                    './src/css/main.css': './src/scss/styles.scss' // 'destination': 'source' 
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>', 'src/*.html'],
            tasks: ['jshint', 'sass']

        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    open: {
                        target: 'http://localhost:9001/src/', // target url to open
                        appName: 'app', // name of the app that opens, ie: open, start, xdg-open
                        callback: function() { console.log("URL Open"); } // called when the app has opened
                    }
                }
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['jshint', 'sass', 'connect', 'watch']);

};