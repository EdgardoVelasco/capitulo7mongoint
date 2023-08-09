rs.initiate(
  {
	_id:"replicaConfig",
	configsvr: true,
	members:[
		{_id:0, host:"localhost:27005"},
		{_id:1, host:"localhost:27006"},
		{_id:2, host:"localhost:27007"}
	]

  }
)
