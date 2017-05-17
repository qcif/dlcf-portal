#!/bin/bash
source dev_build/buildFns.sh
sudo chown -R vagrant:vagrant *
cleanUpAllJs
linkNodeLib "lodash-es" "lodash-lib"
compileAoT
export ENV=production
docker run -it --rm -v $PWD:/opt/rds-rdmp-portal qcifengineering/dlcf-portal:latest /bin/bash -c "cd /opt/rds-rdmp-portal; npm install;"
docker-compose up
