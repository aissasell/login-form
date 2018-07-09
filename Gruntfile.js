module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            target: {
                files: {
                    'dist/css/style.min.css': ['dist/css/style.css']
                }
            }
        },
        watch: {
            cssfiles: {
                files: ['dist/css/style.css'],
                tasks: ['cssmin']
            }
        }
    }) 

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

}