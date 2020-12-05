FROM node:8

RUN apt-get update
RUN apt-get install nano

ENV SAPNWRFC_HOME /usr/local/sap/nwrfcsdk

WORKDIR $SAPNWRFC_HOME

COPY rfc/nwrfcsdk/ .

RUN echo "$SAPNWRFC_HOME/lib" > /etc/ld.so.conf.d/saprfc.conf && \
    ldconfig    

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]