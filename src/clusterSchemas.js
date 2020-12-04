const clusterSchemas = {
    "type": "collection",
    "links": {
        "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/clusters/schemas"
    },
    "actions": {},
    "pagination": {
        "limit": 1000,
        "total": 43
    },
    "sort": {
        "order": "asc",
        "reverse": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/clusters/schemas?order=desc"
    },
    "resourceType": "schema",
    "data": [
        {
            "baseType": "schema",
            "collectionFilters": {
                "created": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "creatorId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "group": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "groupPriorityMinimum": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "insecureSkipTLSVerify": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "removed": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "state": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "transitioning": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "transitioningMessage": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "uuid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "version": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "versionPriority": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "apiService",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/apiservices",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/apiService"
            },
            "pluralName": "apiServices",
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "caBundle": {
                    "create": true,
                    "nullable": true,
                    "type": "base64",
                    "update": true
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[apiServiceCondition]",
                    "update": false
                },
                "created": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "creatorId": {
                    "create": false,
                    "type": "reference[/v3/schemas/user]",
                    "update": false
                },
                "group": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "groupPriorityMinimum": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "insecureSkipTLSVerify": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "service": {
                    "create": true,
                    "nullable": true,
                    "type": "serviceReference",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "transitioning": {
                    "create": false,
                    "options": [
                        "yes",
                        "no",
                        "error"
                    ],
                    "type": "enum",
                    "update": false
                },
                "transitioningMessage": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "version": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "versionPriority": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "resourceMethods": [
                "PUT",
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "apiServiceCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/apiServiceCondition"
            },
            "pluralName": "apiServiceConditions",
            "resourceFields": {
                "lastTransitionTime": {
                    "create": true,
                    "nullable": true,
                    "type": "date",
                    "update": true
                },
                "message": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "reason": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "status": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "awsElasticBlockStoreVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/awsElasticBlockStoreVolumeSource"
            },
            "pluralName": "awsElasticBlockStoreVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "partition": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "volumeID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "azureDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/azureDiskVolumeSource"
            },
            "pluralName": "azureDiskVolumeSources",
            "resourceFields": {
                "cachingMode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "diskName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "diskURI": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "kind": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "azureFilePersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/azureFilePersistentVolumeSource"
            },
            "pluralName": "azureFilePersistentVolumeSources",
            "resourceFields": {
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "secretNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "shareName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "cephFSPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/cephFSPersistentVolumeSource"
            },
            "pluralName": "cephFSPersistentVolumeSources",
            "resourceFields": {
                "monitors": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretFile": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "user": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "cinderPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/cinderPersistentVolumeSource"
            },
            "pluralName": "cinderPersistentVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "volumeID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "containerResourceLimit",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/containerResourceLimit"
            },
            "pluralName": "containerResourceLimits",
            "resourceFields": {
                "limitsCpu": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "limitsMemory": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "requestsCpu": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "requestsMemory": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "csiPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/csiPersistentVolumeSource"
            },
            "pluralName": "csiPersistentVolumeSources",
            "resourceFields": {
                "controllerExpandSecretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "controllerPublishSecretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "driver": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "nodePublishSecretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "nodeStageSecretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "volumeAttributes": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": false
                },
                "volumeHandle": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "fcVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/fcVolumeSource"
            },
            "pluralName": "fcVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "lun": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "targetWWNs": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "wwids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "flexPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/flexPersistentVolumeSource"
            },
            "pluralName": "flexPersistentVolumeSources",
            "resourceFields": {
                "driver": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "options": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "flockerVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/flockerVolumeSource"
            },
            "pluralName": "flockerVolumeSources",
            "resourceFields": {
                "datasetName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "datasetUUID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "gcePersistentDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/gcePersistentDiskVolumeSource"
            },
            "pluralName": "gcePersistentDiskVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "partition": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "pdName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "glusterfsPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/glusterfsPersistentVolumeSource"
            },
            "pluralName": "glusterfsPersistentVolumeSources",
            "resourceFields": {
                "endpoints": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "endpointsNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "hostPathVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/hostPathVolumeSource"
            },
            "pluralName": "hostPathVolumeSources",
            "resourceFields": {
                "kind": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "DirectoryOrCreate",
                        "Directory",
                        "FileOrCreate",
                        "File",
                        "Socket",
                        "CharDevice",
                        "BlockDevice"
                    ],
                    "type": "enum",
                    "update": false
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "iscsiPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/iscsiPersistentVolumeSource"
            },
            "pluralName": "iscsiPersistentVolumeSources",
            "resourceFields": {
                "chapAuthDiscovery": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "chapAuthSession": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "initiatorName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "iqn": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "iscsiInterface": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "lun": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "portals": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "targetPortal": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "localVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/localVolumeSource"
            },
            "pluralName": "localVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "created": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "creatorId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "description": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "projectId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "removed": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "state": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "transitioning": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "transitioningMessage": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "uuid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "namespace",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/namespaces",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/namespace"
            },
            "pluralName": "namespaces",
            "resourceActions": {
                "move": {
                    "input": "namespaceMove"
                }
            },
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "containerDefaultResourceLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "containerResourceLimit",
                    "update": true
                },
                "created": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "creatorId": {
                    "create": false,
                    "type": "reference[/v3/schemas/user]",
                    "update": false
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "resourceQuota": {
                    "create": true,
                    "nullable": true,
                    "type": "namespaceResourceQuota",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "transitioning": {
                    "create": false,
                    "options": [
                        "yes",
                        "no",
                        "error"
                    ],
                    "type": "enum",
                    "update": false
                },
                "transitioningMessage": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "resourceMethods": [
                "PUT",
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "namespaceMove",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/namespaceMove"
            },
            "pluralName": "namespaceMoves",
            "resourceFields": {
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "namespaceResourceQuota",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/namespaceResourceQuota"
            },
            "pluralName": "namespaceResourceQuotas",
            "resourceFields": {
                "limit": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceQuotaLimit",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nfsVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/nfsVolumeSource"
            },
            "pluralName": "nfsVolumeSources",
            "resourceFields": {
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "server": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeSelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/nodeSelector"
            },
            "pluralName": "nodeSelectors",
            "resourceFields": {
                "nodeSelectorTerms": {
                    "create": true,
                    "nullable": true,
                    "type": "array[nodeSelectorTerm]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeSelectorRequirement",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/nodeSelectorRequirement"
            },
            "pluralName": "nodeSelectorRequirements",
            "resourceFields": {
                "key": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "operator": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "values": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeSelectorTerm",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/nodeSelectorTerm"
            },
            "pluralName": "nodeSelectorTerms",
            "resourceFields": {
                "matchExpressions": {
                    "create": true,
                    "nullable": true,
                    "type": "array[nodeSelectorRequirement]",
                    "update": true
                },
                "matchFields": {
                    "create": true,
                    "nullable": true,
                    "type": "array[nodeSelectorRequirement]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "objectReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/objectReference"
            },
            "pluralName": "objectReferences",
            "resourceFields": {
                "apiVersion": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fieldPath": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "kind": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "namespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "resourceVersion": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ownerReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/ownerReference"
            },
            "pluralName": "ownerReferences",
            "resourceFields": {
                "apiVersion": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "blockOwnerDeletion": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "controller": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "kind": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "created": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "creatorId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "description": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "persistentVolumeReclaimPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "removed": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "state": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "storageClassId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "transitioning": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "transitioningMessage": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "uuid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "volumeMode": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "persistentVolume",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/persistentvolumes",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/persistentVolume"
            },
            "pluralName": "persistentVolumes",
            "resourceFields": {
                "accessModes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "awsElasticBlockStore": {
                    "create": true,
                    "nullable": true,
                    "type": "awsElasticBlockStoreVolumeSource",
                    "update": false
                },
                "azureDisk": {
                    "create": true,
                    "nullable": true,
                    "type": "azureDiskVolumeSource",
                    "update": false
                },
                "azureFile": {
                    "create": true,
                    "nullable": true,
                    "type": "azureFilePersistentVolumeSource",
                    "update": false
                },
                "capacity": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "cephfs": {
                    "create": true,
                    "nullable": true,
                    "type": "cephFSPersistentVolumeSource",
                    "update": false
                },
                "cinder": {
                    "create": true,
                    "nullable": true,
                    "type": "cinderPersistentVolumeSource",
                    "update": false
                },
                "claimRef": {
                    "create": true,
                    "nullable": true,
                    "type": "objectReference",
                    "update": true
                },
                "created": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "creatorId": {
                    "create": false,
                    "type": "reference[/v3/schemas/user]",
                    "update": false
                },
                "csi": {
                    "create": true,
                    "nullable": true,
                    "type": "csiPersistentVolumeSource",
                    "update": false
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fc": {
                    "create": true,
                    "nullable": true,
                    "type": "fcVolumeSource",
                    "update": false
                },
                "flexVolume": {
                    "create": true,
                    "nullable": true,
                    "type": "flexPersistentVolumeSource",
                    "update": false
                },
                "flocker": {
                    "create": true,
                    "nullable": true,
                    "type": "flockerVolumeSource",
                    "update": false
                },
                "gcePersistentDisk": {
                    "create": true,
                    "nullable": true,
                    "type": "gcePersistentDiskVolumeSource",
                    "update": false
                },
                "glusterfs": {
                    "create": true,
                    "nullable": true,
                    "type": "glusterfsPersistentVolumeSource",
                    "update": false
                },
                "hostPath": {
                    "create": true,
                    "nullable": true,
                    "type": "hostPathVolumeSource",
                    "update": false
                },
                "iscsi": {
                    "create": true,
                    "nullable": true,
                    "type": "iscsiPersistentVolumeSource",
                    "update": false
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "local": {
                    "create": true,
                    "nullable": true,
                    "type": "localVolumeSource",
                    "update": false
                },
                "mountOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "required": true,
                    "type": "hostname",
                    "update": false
                },
                "nfs": {
                    "create": true,
                    "nullable": true,
                    "type": "nfsVolumeSource",
                    "update": false
                },
                "nodeAffinity": {
                    "create": true,
                    "nullable": true,
                    "type": "volumeNodeAffinity",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "persistentVolumeReclaimPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "photonPersistentDisk": {
                    "create": true,
                    "nullable": true,
                    "type": "photonPersistentDiskVolumeSource",
                    "update": false
                },
                "portworxVolume": {
                    "create": true,
                    "nullable": true,
                    "type": "portworxVolumeSource",
                    "update": false
                },
                "quobyte": {
                    "create": true,
                    "nullable": true,
                    "type": "quobyteVolumeSource",
                    "update": false
                },
                "rbd": {
                    "create": true,
                    "nullable": true,
                    "type": "rbdPersistentVolumeSource",
                    "update": false
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "scaleIO": {
                    "create": true,
                    "nullable": true,
                    "type": "scaleIOPersistentVolumeSource",
                    "update": false
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "persistentVolumeStatus",
                    "update": false
                },
                "storageClassId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[storageClass]",
                    "update": true
                },
                "storageos": {
                    "create": true,
                    "nullable": true,
                    "type": "storageOSPersistentVolumeSource",
                    "update": false
                },
                "transitioning": {
                    "create": false,
                    "options": [
                        "yes",
                        "no",
                        "error"
                    ],
                    "type": "enum",
                    "update": false
                },
                "transitioningMessage": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumeMode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "vsphereVolume": {
                    "create": true,
                    "nullable": true,
                    "type": "vsphereVirtualDiskVolumeSource",
                    "update": false
                }
            },
            "resourceMethods": [
                "PUT",
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "persistentVolumeStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/persistentVolumeStatus"
            },
            "pluralName": "persistentVolumeStatuses",
            "resourceFields": {
                "message": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "phase": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "reason": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "photonPersistentDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/photonPersistentDiskVolumeSource"
            },
            "pluralName": "photonPersistentDiskVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "pdID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "portworxVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/portworxVolumeSource"
            },
            "pluralName": "portworxVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "volumeID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "quobyteVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/quobyteVolumeSource"
            },
            "pluralName": "quobyteVolumeSources",
            "resourceFields": {
                "group": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "registry": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "tenant": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "user": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volume": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "rbdPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/rbdPersistentVolumeSource"
            },
            "pluralName": "rbdPersistentVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "image": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "keyring": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "monitors": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "pool": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "user": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "resourceQuotaLimit",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/resourceQuotaLimit"
            },
            "pluralName": "resourceQuotaLimits",
            "resourceFields": {
                "configMaps": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "limitsCpu": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "limitsMemory": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "persistentVolumeClaims": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "pods": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "replicationControllers": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "requestsCpu": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "requestsMemory": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "requestsStorage": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "secrets": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "services": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "servicesLoadBalancers": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "servicesNodePorts": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "scaleIOPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/scaleIOPersistentVolumeSource"
            },
            "pluralName": "scaleIOPersistentVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "gateway": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "protectionDomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretReference",
                    "update": false
                },
                "sslEnabled": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "storageMode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "storagePool": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "system": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumeName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "secretReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/secretReference"
            },
            "pluralName": "secretReferences",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "namespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "serviceReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/serviceReference"
            },
            "pluralName": "serviceReferences",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "namespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "allowVolumeExpansion": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "created": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "creatorId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "description": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "provisioner": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "reclaimPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "removed": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "uuid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "volumeBindingMode": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "storageClass",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/storageclasses",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/storageClass"
            },
            "pluralName": "storageClasses",
            "resourceFields": {
                "allowVolumeExpansion": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "allowedTopologies": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySelectorTerm]",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "created": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "creatorId": {
                    "create": false,
                    "type": "reference[/v3/schemas/user]",
                    "update": false
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "mountOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "parameters": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "provisioner": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "reclaimPolicy": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "Recycle",
                        "Delete",
                        "Retain"
                    ],
                    "type": "enum",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumeBindingMode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "resourceMethods": [
                "PUT",
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "storageOSPersistentVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/storageOSPersistentVolumeSource"
            },
            "pluralName": "storageOSPersistentVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "objectReference",
                    "update": false
                },
                "volumeName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumeNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionMethods": [
                "GET"
            ],
            "id": "subscribe",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/subscribe",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/subscribe"
            },
            "pluralName": "subscribe",
            "resourceFields": {
                "apiVersions": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": true
                },
                "resourceTypes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "topologySelectorLabelRequirement",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/topologySelectorLabelRequirement"
            },
            "pluralName": "topologySelectorLabelRequirements",
            "resourceFields": {
                "key": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "values": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "topologySelectorTerm",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/topologySelectorTerm"
            },
            "pluralName": "topologySelectorTerms",
            "resourceFields": {
                "matchLabelExpressions": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySelectorLabelRequirement]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "volumeNodeAffinity",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/volumeNodeAffinity"
            },
            "pluralName": "volumeNodeAffinities",
            "resourceFields": {
                "required": {
                    "create": true,
                    "nullable": true,
                    "type": "nodeSelector",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "vsphereVirtualDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/cluster/schemas/vsphereVirtualDiskVolumeSource"
            },
            "pluralName": "vsphereVirtualDiskVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "storagePolicyID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "storagePolicyName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumePath": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/cluster",
                "group": "cluster.cattle.io",
                "path": "/v3/cluster",
                "subContext": true,
                "version": "v3"
            }
        }
    ]
}

export default clusterSchemas;