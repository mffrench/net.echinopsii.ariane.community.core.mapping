#!/usr/bin/python3

import getpass
import requests
import json

username = input("%-- >> Username : ")
password = getpass.getpass("%-- >> Password : ")
srvurl = input("%-- >> Ariane server url (like http://serverFQDN:6969/) : ")

# CREATE REQUESTS SESSION
s = requests.Session()
s.auth = (username, password)


containerParams = {'primaryAdminURL':'http://rbqnode-fake.lab01.dev.dekatonshivr.echinopsii.net:15672', 'primaryAdminGateName':'webadmingate.rbqnode-fake'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/create', params=containerParams)
containerID = r.json().get('containerID')

# MANDATORY FOR GRAPH RENDER
containerCompany = {'ID':containerID,'company':'Pivotal'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/company', params=containerCompany)

containerProduct = {'ID':containerID,'product':'RabbitMQ'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/product', params=containerProduct)

containerType = {'ID':containerID,'type':'Message Broker'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/type', params=containerType)

datacenter = {"dc":["String","My little paradise"], "gpsLng":["double",2.246621], "address":["String","26 rue de Belfort"], "gpsLat":["double",48.895308], "town":["String","Courbevoie"], "country":["String","France"]}
containerProperty = {'ID':containerID,'propertyName':'Datacenter','propertyValue':json.dumps(datacenter),'propertyType':'map'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/properties/add', params=containerProperty)

network = {'subnetip':['String','192.168.38.0'], 'subnetmask':['String','255.255.255.0'], 'type':['String','LAN'], 'lan':['String','lab01.lan4'], 'marea':['String',"angelsMind"]}
containerProperty = {'ID':containerID,'propertyName':'Network','propertyValue':json.dumps(network),'propertyType':'map'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/properties/add', params=containerProperty)

supportTeam = {"color":["String","ad853b"], "name":["String","DEV BPP"]}
containerProperty = {'ID':containerID,'propertyName':'supportTeam','propertyValue':json.dumps(supportTeam),'propertyType':'map'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/properties/add', params=containerProperty)

server = { "os":["String","Fedora 18 - x86_64"], "hostname":["String","bpphisto11"] }
containerProperty = {'ID':containerID,'propertyName':'Server','propertyValue':json.dumps(server),'propertyType':'map'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/properties/add', params=containerProperty)


fanoutEx = { "enabled": ["boolean", "true"], "description": ["String", "AMQP fanout exchange, as per the AMQP specification"], "name": ["String", "fanout"] }
directEx = { "enabled": ["boolean", "true"], "description": ["String", "AMQP direct exchange, as per the AMQP specification"], "name": ["String", "direct"] }

exchangeTypes = ["map", [fanoutEx, directEx]]
containerProperty = {'ID': containerID, 'propertyName': 'exchange_types', 'propertyValue': json.dumps(exchangeTypes), 'propertyType':'array'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/containers/update/properties/add', params=containerProperty)


## ADD A NODE
nodeParams = {"name":"/ (vhost)", "containerID":containerID, "parentNodeID":0}
r = s.get(srvurl + 'ariane/rest/mapping/domain/nodes/create', params=nodeParams)
vhostNodeID = r.json().get('nodeID')

primaryApp = {"color":["String","852e48"], "name":["String","BPP"]}
nodeProperty = {'ID':vhostNodeID,'propertyName':'primaryApplication','propertyValue':json.dumps(primaryApp), 'propertyType':'map'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/nodes/update/properties/add', params=nodeProperty)

pubDetails = {"rate" : ["double",0.0]}
delGetDetails = {"rate" : ["double", 0.0]}
msgStats = { "publish_details": ["map", pubDetails], "deliver_get_details": ["map", delGetDetails], "deliver": ["double", 15072]}
nodeProperty = {'ID':vhostNodeID, 'propertyName': 'message_stats', 'propertyValue': json.dumps(msgStats), 'propertyType': 'map'}
r = s.get(srvurl + 'ariane/rest/mapping/domain/nodes/update/properties/add', params=nodeProperty)