#!/bin/bash

# package the project
mvn package

mv target/action-0.0.1-SNAPSHOT-jar-with-dependencies.jar action.jar

# install jar in openwhisk
bx wsk action update Schwimmbad --main de.hska.action.Schwimmbad --kind java action.jar --web true

mvn clean
rm action.jar
