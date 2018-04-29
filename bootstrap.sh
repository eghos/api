#!/bin/bash

PROJECT_HOME="/var/api"
PROJECT_REPOSITORY_URL="https://github.com/eghos/api.git"

sudo mkdir -p $PROJECT_HOME

echo "running updates"
sudo apt-get update -y

echo "Installing git"
sudo apt-get install -y git

#echo "Installing development tools"
#sudo apt-get  groupinstall -y 'Development Tools'

echo "Installing mongodb"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl daemon-reload
sudo systemctl start mongod
sudo systemctl enable mongod


echo "Installing nodejs"
cd /tmp
pwd
curl -o-  https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 9.8.0
nvm installs --lts

echo "cloning repository"
cd /var
pwd
sudo git clone $PROJECT_REPOSITORY_URL $PROJECT_HOME

sudo chown -R ubuntu:ubuntu /var/api

cd api

npm install

#npm install -g nodemon

#node server.js &
nohup node server.js &

exit 
