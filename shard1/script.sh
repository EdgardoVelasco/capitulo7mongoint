#!/bin/bash

mongod --config nodo1Shard.conf
mongod --config nodo2Shard.conf
mongod --config nodo3Shard.conf

echo "Nodos iniciados"
