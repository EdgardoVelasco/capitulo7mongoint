#!/bin/bash

mkdir db logs
cd logs
mkdir  nodo1 nodo2 nodo3
cd nodo1
touch mongod.log
cd ..
cd nodo2
touch mongod.log
cd ..
cd nodo3
touch mongod.log
cd ..
cd ..
cd db
mkdir nodo1 nodo2 nodo3
echo "Creado la estructura de archivos"
cd ..
