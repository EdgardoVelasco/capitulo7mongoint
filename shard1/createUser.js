var database=db.getSiblingDB("admin")
var resultado=database.createUser(
	{
	  user:"administrador",
          pwd:"1234",
          roles:[{
		   role:"userAdminAnyDatabase",
		   db:"admin"
		}]
	}

)


print(resultado)
