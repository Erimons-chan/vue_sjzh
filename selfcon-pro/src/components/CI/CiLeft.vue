<template>
	<div id="Content">
		<div class="content_left">
			<v-jstree :data="asyncData" :async="loadData" allow-batch @item-click="itemClick"></v-jstree>
		</div>
	</div>
</template>

<script>
	import VJstree from 'vue-jstree'
	export default {
		data() {
			return {
				asyncData: [],
				isCreat:true
			}
		},
		created() {

		},

		methods: {
			itemClick(node) {
				console.log(node)
			},
			loadData(oriNode, resolve) {
				console.log(oriNode.data)
				let isFirst = this.isCreat
				//判断是否为第一次，root节点
				if(isFirst) {
					setTimeout(() => {
						let data = []
						data = [{
							"text": "数据库",
							"icon": null,
							"id": {
								"databaseName": null,
								"date": 1516606451007,
								"schema": null,
								"levelCode": "database",
								"tableName": null,
								"isRequest": "N",
								"isLeaf": null
							},
							"item": null,
							"children": [{
								"text": "mydatabase",
								"icon": null,
								"params": {
									"databaseName": "mydatabase",
									"date": 1516606451007,
									"schema": null,
									"levelCode": "database",
									"tableName": null,
									"isRequest": "Y",
									"isLeaf": null
								},
								"item": {
									"datname": "mydatabase",
									"datdba": 10,
									"encoding": 6,
									"datistemplate": false,
									"datallowconn": true,
									"datconnlimit": -1,
									"datlastsysoid": 12086,
									"datfrozenxid": {
										"type": "xid",
										"value": "678"
									},
									"dattablespace": 1663,
									"datconfig": null,
									"datacl": null
								},
								"children": null
							}, {
								"text": "postgres",
								"icon": null,
								"params": {
									"databaseName": "postgres",
									"date": 1516606451007,
									"schema": null,
									"levelCode": "database",
									"tableName": null,
									"isRequest": "Y",
									"isLeaf": null
								},
								"item": {
									"datname": "postgres",
									"datdba": 10,
									"encoding": 6,
									"datistemplate": true,
									"datallowconn": true,
									"datconnlimit": -1,
									"datlastsysoid": 12086,
									"datfrozenxid": {
										"type": "xid",
										"value": "678"
									},
									"dattablespace": 1663,
									"datconfig": null,
									"datacl": null
								},
								"children": null
							}, {
								"text": "yourdatabase",
								"icon": null,
								"params": {
									"databaseName": "yourdatabase",
									"date": 1516606451007,
									"schema": null,
									"levelCode": "database",
									"tableName": null,
									"isRequest": "Y",
									"isLeaf": null
								},
								"item": {
									"datname": "yourdatabase",
									"datdba": 10,
									"encoding": 6,
									"datistemplate": false,
									"datallowconn": true,
									"datconnlimit": -1,
									"datlastsysoid": 12086,
									"datfrozenxid": {
										"type": "xid",
										"value": "678"
									},
									"dattablespace": 1663,
									"datconfig": null,
									"datacl": null
								},
								"children": null
							}]
						}, {
							"text": "表空间",
							"icon": null,
							"params": {
								"databaseName": null,
								"date": 1516606451007,
								"schema": null,
								"levelCode": "tablespace",
								"tableName": null,
								"isRequest": "N",
								"isLeaf": null
							},
							"item": null,
							"children": [{
								"text": "pg_default",
								"icon": null,
								"params": {
									"databaseName": null,
									"date": 1516606451007,
									"schema": null,
									"levelCode": "tablespace",
									"tableName": null,
									"isRequest": "N",
									"isLeaf": "Y"
								},
								"item": {
									"spcname": "pg_default",
									"spcowner": 10,
									"spcownerName": "ops",
									"spclocation": null,
									"spcacl": null,
									"spcprilocations": null,
									"spcmirlocations": null,
									"spcfsoid": 3052
								},
								"children": null
							}, {
								"text": "pg_global",
								"icon": null,
								"params": {
									"databaseName": null,
									"date": 1516606451007,
									"schema": null,
									"levelCode": "tablespace",
									"tableName": null,
									"isRequest": "N",
									"isLeaf": "Y"
								},
								"item": {
									"spcname": "pg_global",
									"spcowner": 10,
									"spcownerName": "ops",
									"spclocation": null,
									"spcacl": null,
									"spcprilocations": null,
									"spcmirlocations": null,
									"spcfsoid": 3052
								},
								"children": null
							}]
						}, {
							"text": "组角色",
							"icon": null,
							"params": {
								"databaseName": null,
								"date": 1516606451007,
								"schema": null,
								"levelCode": "root",
								"tableName": null,
								"isRequest": "N",
								"isLeaf": null
							},
							"item": null,
							"children": [{
								"text": "staff",
								"icon": null,
								"params": {
									"databaseName": null,
									"date": 1516606451007,
									"schema": null,
									"levelCode": "root",
									"tableName": null,
									"isRequest": "N",
									"isLeaf": "Y"
								},
								"item": {
									"rolname": "staff",
									"rolsuper": false,
									"rolinherit": true,
									"rolcreaterole": false,
									"rolcreatedb": false,
									"rolcatupdate": false,
									"rolcanlogin": false,
									"rolconnlimit": -1,
									"rolpassword": "********",
									"rolvaliduntil": null,
									"rolconfig": null,
									"rolresqueue": 6055,
									"oid": 86474,
									"rolcreaterextgpfd": false,
									"rolcreaterexthttp": false,
									"rolcreatewextgpfd": false,
									"rolcreaterexthdfs": false,
									"rolcreatewexthdfs": false,
									"rolresgroup": 6437
								},
								"children": null
							}]
						}, {
							"text": "登录角色",
							"icon": null,
							"params": {
								"databaseName": null,
								"date": 1516606451007,
								"schema": null,
								"levelCode": "root",
								"tableName": null,
								"isRequest": "N",
								"isLeaf": null
							},
							"item": null,
							"children": [{
								"text": "ops",
								"icon": null,
								"params": {
									"databaseName": null,
									"date": 1516606451007,
									"schema": null,
									"levelCode": "root",
									"tableName": null,
									"isRequest": "N",
									"isLeaf": "Y"
								},
								"item": {
									"rolname": "ops",
									"rolsuper": true,
									"rolinherit": true,
									"rolcreaterole": true,
									"rolcreatedb": true,
									"rolcatupdate": true,
									"rolcanlogin": true,
									"rolconnlimit": -1,
									"rolpassword": "********",
									"rolvaliduntil": null,
									"rolconfig": null,
									"rolresqueue": 6055,
									"oid": 10,
									"rolcreaterextgpfd": true,
									"rolcreaterexthttp": true,
									"rolcreatewextgpfd": true,
									"rolcreaterexthdfs": true,
									"rolcreatewexthdfs": true,
									"rolresgroup": 6438
								},
								"children": null
							}, {
								"text": "postgres",
								"icon": null,
								"params": {
									"databaseName": null,
									"date": 1516606451007,
									"schema": null,
									"levelCode": "root",
									"tableName": null,
									"isRequest": "N",
									"isLeaf": "Y"
								},
								"item": {
									"rolname": "postgres",
									"rolsuper": true,
									"rolinherit": true,
									"rolcreaterole": true,
									"rolcreatedb": true,
									"rolcatupdate": true,
									"rolcanlogin": true,
									"rolconnlimit": -1,
									"rolpassword": "********",
									"rolvaliduntil": null,
									"rolconfig": null,
									"rolresqueue": 6055,
									"oid": 82437,
									"rolcreaterextgpfd": false,
									"rolcreaterexthttp": false,
									"rolcreatewextgpfd": false,
									"rolcreaterexthdfs": false,
									"rolcreatewexthdfs": false,
									"rolresgroup": 6438
								},
								"children": null
							}, {
								"text": "fff",
								"icon": null,
								"params": {
									"databaseName": null,
									"date": 1516606451007,
									"schema": null,
									"levelCode": "root",
									"tableName": null,
									"isRequest": "N",
									"isLeaf": "Y"
								},
								"item": {
									"rolname": "fff",
									"rolsuper": false,
									"rolinherit": true,
									"rolcreaterole": false,
									"rolcreatedb": false,
									"rolcatupdate": false,
									"rolcanlogin": true,
									"rolconnlimit": -1,
									"rolpassword": "********",
									"rolvaliduntil": null,
									"rolconfig": null,
									"rolresqueue": 6055,
									"oid": 86475,
									"rolcreaterextgpfd": false,
									"rolcreaterexthttp": false,
									"rolcreatewextgpfd": false,
									"rolcreaterexthdfs": false,
									"rolcreatewexthdfs": false,
									"rolresgroup": 6437
								},
								"children": null
							}]
						}]
						resolve(data)
					}, 500)
					this.isCreat = false
				} else {
					//非root节点加载
					setTimeout(() => {
						let data = []
						data = [{
								"text": "New Item 3...",
							}

						]
						resolve(data)
					}, 500)
				}

			},
			getTree() {

			}

		},
		components: {
			VJstree
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/Ci/content.scss';
</style>