FROM node:6.9.2
ENV node_env production
COPY . /opt/rds-rdmp-portal/
RUN apt-get update && apt-get -y install git
RUN cd /tmp && git clone git@bitbucket.org:qcifltd/rds-rdmp-portal.git && cp /tmp/rds-rdmp-portal/production.js /opt/rds-rdmp-portal/config/env/
RUN chmod +x /opt/rds-rdmp-portal/buildTypescript.sh
RUN cd /opt/rds-rdmp-portal && ./buildTypescript.sh
RUN echo "Australia/Brisbane" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata
CMD NODE_ENV=$node_env node app.js
