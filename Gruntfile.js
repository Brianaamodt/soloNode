/**
 * Created by brianaamodt on 5/8/15.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/css/bootstrap-theme.min.css",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "client/style.css"
                ],
                "dest": "server/public/vendor/"
            }
        }
});

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', ['copy', 'uglify']);

};
