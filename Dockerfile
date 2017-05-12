FROM node:6.9.2
ENV node_env production
COPY . /opt/rds-rdmp-portal/
RUN cd /opt/rds-rdmp-portal && npm install && npm install grunt -g && grunt --force --gruntfile Gruntfile-ts-compile.js
RUN echo "Australia/Brisbane" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata
CMD NODE_ENV=$node_env node app.js
