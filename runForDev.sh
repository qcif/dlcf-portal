#!/bin/bash

# Not really needed but I'm putting this in a for loop in case we want to add more arguments later
for var in "$@"
do
    if [ $var = "install" ]; then
        docker run -it --rm -v $PWD:/opt/rds-rdmp-portal qcifengineering/dlcf-portal:latest /bin/bash -c "cd /opt/rds-rdmp-portal && npm install sails-hook-autoreload && npm install -g typings && npm install"
    fi
    if [ $var = "compile" ]; then
      docker run -it --rm -v $PWD:/opt/rds-rdmp-portal qcifengineering/dlcf-portal:latest /bin/bash -c "cd /opt/rds-rdmp-portal && npm install grunt -g && grunt --gruntfile Gruntfile-ts-compile.js"
    fi
done

docker-compose up
