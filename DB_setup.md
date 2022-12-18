MongoDB 

Setup a local MongoDb Connection

Dump the remote DB and restore locally in MacOS

Installing the MongoDB Database Tools via Homebrew:
brew tap mongodb/brew
brew install mongodb-database-tools




https://treehouse.github.io/installation-guides/mac/mongo-mac.html
To host mongodb locally in MacOS:
$ brew update
$ brew install mongodb/brew/mongodb-community@4.4

set mongodb-community@4.4 to the PATH / environment path:
$ echo 'export PATH="/usr/local/opt/mongodb-community@4.4/bin:$PATH"' >> /Users/<user e.g. rogerlau>/.bash_profile

start the service:
$ brew services start mongodb/brew/mongodb-community@4.4
