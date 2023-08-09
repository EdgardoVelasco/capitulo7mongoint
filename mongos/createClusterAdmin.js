var database=db.getSiblingDB("admin")
var salida=database.createUser(
  {
    "user" : "adminCluster",
    "pwd" :"1234",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
print(salida)
