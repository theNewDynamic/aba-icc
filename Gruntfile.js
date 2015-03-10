'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'compressed',
          sourcemap: 'auto'
          // Uncomment the below line to include outside directories as well.
          // loadPath: ['location/of/other/sass']
        },
        files: [{
          // Files in the /sass/ directory will go to /static/css/ when processed.
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },
 concat: {
    dist: {
      src: [
      'bower_components/jquery/dist/jquery.min.js',
      'static/javascript/tipue.js',
      'static/javascript/site.js'
        ],
      dest: 'static/javascript/dist/scripts.js',
    },
    modernize: {
      src: ['bower_components/html5shiv/dist/html5shiv.min.js','bower_components/respond/dest/respond.min.js'],
      dest: 'static/javascript/modernize/modernize.min.js',
    },
    maps: {
      src: [
        'static/javascript/ammap/ammap.js', 
        'static/javascript/ammap/maps/worldLow.js', 
        'bower_components/listjs/dist/list.min.js', 
        'static/javascript/listjs.js'
        ],
      dest: 'static/javascript/dist/maps.min.js',
    }
  },

  uglify: {
    options: {
      mangle: {
        except: ['jQuery']
      }
    },
    my_target: {
      files: {
        'static/javascript/dist/scripts.min.js': ['static/javascript/dist/scripts.js']
      }
    }
  },



rsync: {
    options: {
        args: ["--verbose"],
        exclude: [".git*","*.scss","node_modules"],
        recursive: true
    },
    
    backup: {
        options: {
            src: ".build/*",
            dest: "_build",
  
            delete: true // Careful this option could cause data loss, read the docs!
        }
    },

    // stage: {
    //     options: {
    //         src: ".build/*",
    //         dest: "_build",
  
    //         delete: true // Careful this option could cause data loss, read the docs!
    //     }
    // }
},


    // WHEN FILES CHANGE, RUN THE ABOVE TASKS ALONG WITH BUILD
    watch: {
      concat : {
        files:  'static/javascript/**/*.js',
        tasks: ['concat', 'uglify', 'build'],
         nonull: true,
      },
      sass : {
        files: 'sass/**/*.scss',
        tasks: ['sass', 'build'],
         nonull: true,
      }
    }

  });

  // THIS LOADS THE TASKS WE NEED ABOVE IN FROM OUR NPM
  // Note, that we need to have these installed through the package.json file as well

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-rsync");

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
