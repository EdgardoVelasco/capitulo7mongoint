#!/bin/bash

mongod --config nodo1Config.conf
mongod --config nodo2Config.conf
mongod --config nodo3Config.conf

echo "Nodos configuración iniciados"
