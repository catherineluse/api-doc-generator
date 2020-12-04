const projectSchemas = {
    "type": "collection",
    "links": {
        "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/projects/schemas"
    },
    "actions": {},
    "pagination": {
        "limit": 1000,
        "total": 274
    },
    "sort": {
        "order": "asc",
        "reverse": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/projects/schemas?order=desc"
    },
    "resourceType": "schema",
    "data": [
        {
            "baseType": "schema",
            "id": "affinity",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/affinity"
            },
            "pluralName": "affinities",
            "resourceFields": {
                "nodeAffinity": {
                    "create": true,
                    "nullable": true,
                    "type": "nodeAffinity",
                    "update": true
                },
                "podAffinity": {
                    "create": true,
                    "nullable": true,
                    "type": "podAffinity",
                    "update": true
                },
                "podAntiAffinity": {
                    "create": true,
                    "nullable": true,
                    "type": "podAntiAffinity",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "alertingSpec",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/alertingSpec"
            },
            "pluralName": "alertingSpecs",
            "resourceFields": {
                "alertmanagers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[alertmanagerEndpoints]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "baseImage": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "configSecret": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "externalUrl": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "image": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "listenLocal": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "logFormat": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "logLevel": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "paused": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "portName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "priorityClassName": {
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
                "replicas": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "retention": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "routePrefix": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "sha": {
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
                "tag": {
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
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "alertmanager",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/alertmanagers",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/alertmanager"
            },
            "pluralName": "alertmanagers",
            "resourceFields": {
                "additionalPeers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "affinity": {
                    "create": true,
                    "nullable": true,
                    "type": "affinity",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "baseImage": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "configMaps": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "configSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "externalUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "image": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
                    "update": true
                },
                "initContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
                    "update": true
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "listenLocal": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "logFormat": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "logLevel": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "paused": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "podMetadata": {
                    "create": true,
                    "nullable": true,
                    "type": "objectMeta",
                    "update": true
                },
                "portName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "priorityClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
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
                "replicas": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "resources": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceRequirements",
                    "update": true
                },
                "retention": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "routePrefix": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "secrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "securityContext": {
                    "create": true,
                    "nullable": true,
                    "type": "podSecurityContext",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sha": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "storage": {
                    "create": true,
                    "nullable": true,
                    "type": "storageSpec",
                    "update": true
                },
                "tag": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tolerations": {
                    "create": true,
                    "nullable": true,
                    "type": "array[toleration]",
                    "update": true
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
                "volumeMounts": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volumeMount]",
                    "update": true
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "alertmanagerEndpoints",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/alertmanagerEndpoints"
            },
            "pluralName": "alertmanagerEndpointses",
            "resourceFields": {
                "apiVersion": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "bearerTokenFile": {
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
                "pathPrefix": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "scheme": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tlsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "tlsConfig",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "appRevisionId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "externalId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "helmVersion": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "lastAppliedTemplate": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "multiClusterAppId": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "notes": {
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
                "prune": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "targetNamespace": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "timeout": {
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
                "valuesYaml": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "wait": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "app",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/apps",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/app"
            },
            "pluralName": "apps",
            "resourceActions": {
                "rollback": {
                    "input": "rollbackRevision"
                },
                "upgrade": {
                    "input": "appUpgradeConfig"
                }
            },
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "answers": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "appRevisionId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/project/schemas/apprevision]",
                    "update": true
                },
                "appliedFiles": {
                    "create": false,
                    "nullable": true,
                    "type": "map[string]",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[appCondition]",
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
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "externalId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "files": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "helmVersion": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "lastAppliedTemplate": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "multiClusterAppId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/multiclusterapp]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "notes": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
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
                    "update": true
                },
                "prune": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "targetNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "timeout": {
                    "create": true,
                    "default": 300,
                    "min": 1,
                    "type": "int",
                    "update": true
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
                "valuesYaml": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "wait": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "appCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/appCondition"
            },
            "pluralName": "appConditions",
            "resourceFields": {
                "lastTransitionTime": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "lastUpdateTime": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "namespaceId": {
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
            "id": "appRevision",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/apprevisions",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/appRevision"
            },
            "pluralName": "appRevisions",
            "resourceFields": {
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
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
                    "type": "appRevisionStatus",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "appRevisionStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/appRevisionStatus"
            },
            "pluralName": "appRevisionStatuses",
            "resourceFields": {
                "answers": {
                    "create": false,
                    "nullable": true,
                    "type": "map[string]",
                    "update": false
                },
                "digest": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "externalId": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "files": {
                    "create": false,
                    "nullable": true,
                    "type": "map[string]",
                    "update": false
                },
                "projectId": {
                    "create": false,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "valuesYaml": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "appUpgradeConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/appUpgradeConfig"
            },
            "pluralName": "appUpgradeConfigs",
            "resourceFields": {
                "answers": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "externalId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "files": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "forceUpgrade": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "valuesYaml": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "applyAppConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/applyAppConfig"
            },
            "pluralName": "applyAppConfigs",
            "resourceFields": {
                "answers": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "catalogTemplate": {
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
                "targetNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "version": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "applyYamlConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/applyYamlConfig"
            },
            "pluralName": "applyYamlConfigs",
            "resourceFields": {
                "content": {
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
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "arbitraryFSAccessThroughSMsConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/arbitraryFSAccessThroughSMsConfig"
            },
            "pluralName": "arbitraryFSAccessThroughSMsConfigs",
            "resourceFields": {
                "deny": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "authUserInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/authUserInput"
            },
            "pluralName": "authUserInputs",
            "resourceFields": {
                "code": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sourceCodeType": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "required": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "awsElasticBlockStoreVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/awsElasticBlockStoreVolumeSource"
            },
            "pluralName": "awsElasticBlockStoreVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "partition": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "volumeID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "azureDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/azureDiskVolumeSource"
            },
            "pluralName": "azureDiskVolumeSources",
            "resourceFields": {
                "cachingMode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "diskName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "diskURI": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsType": {
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
                "readOnly": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "azureFileVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/azureFileVolumeSource"
            },
            "pluralName": "azureFileVolumeSources",
            "resourceFields": {
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "shareName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "password": {
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
                "username": {
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
            "id": "basicAuth",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/basicauths",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/basicAuth"
            },
            "pluralName": "basicAuths",
            "resourceFields": {
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
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "password": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
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
                "username": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "bitbucketCloudApplyInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketCloudApplyInput"
            },
            "pluralName": "bitbucketCloudApplyInputs",
            "resourceFields": {
                "clientId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "clientSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "code": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "clientId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "enabled": {
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
                "namespaceId": {
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
                "redirectUrl": {
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
                "type": {
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
            "id": "bitbucketCloudPipelineConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketCloudPipelineConfig"
            },
            "pluralName": "bitbucketCloudPipelineConfigs",
            "resourceActions": {
                "disable": {},
                "testAndApply": {
                    "input": "bitbucketCloudApplyInput"
                }
            },
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "clientId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "clientSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "password",
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
                "enabled": {
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                    "required": true,
                    "type": "reference[project]",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
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
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "redirectUrl": {
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
                "type": {
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
            "id": "bitbucketCloudProvider",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketCloudProvider"
            },
            "pluralName": "bitbucketCloudProviders",
            "resourceActions": {
                "login": {
                    "input": "authUserInput",
                    "output": "sourceCodeCredential"
                }
            },
            "resourceFields": {
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
                    "type": "reference[project]",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "resourceMethods": [
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "bitbucketServerApplyInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketServerApplyInput"
            },
            "pluralName": "bitbucketServerApplyInputs",
            "resourceFields": {
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "oauthToken": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "oauthVerifier": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "consumerKey": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "enabled": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
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
                "publicKey": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "redirectUrl": {
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
                "tls": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "type": {
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
            "id": "bitbucketServerPipelineConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketServerPipelineConfig"
            },
            "pluralName": "bitbucketServerPipelineConfigs",
            "resourceActions": {
                "disable": {},
                "generateKeys": {},
                "requestLogin": {
                    "input": "bitbucketServerRequestLoginInput",
                    "output": "bitbucketServerRequestLoginOutput"
                },
                "testAndApply": {
                    "input": "bitbucketServerApplyInput"
                }
            },
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "consumerKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "enabled": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "privateKey": {
                    "create": true,
                    "nullable": true,
                    "type": "password",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[project]",
                    "update": true
                },
                "publicKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "tls": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
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
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "redirectUrl": {
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
                "type": {
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
            "id": "bitbucketServerProvider",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketServerProvider"
            },
            "pluralName": "bitbucketServerProviders",
            "resourceActions": {
                "login": {
                    "input": "authUserInput",
                    "output": "sourceCodeCredential"
                },
                "requestLogin": {
                    "output": "bitbucketServerRequestLoginOutput"
                }
            },
            "resourceFields": {
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
                    "type": "reference[project]",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "resourceMethods": [
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "bitbucketServerRequestLoginInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketServerRequestLoginInput"
            },
            "pluralName": "bitbucketServerRequestLoginInputs",
            "resourceFields": {
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "bitbucketServerRequestLoginOutput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/bitbucketServerRequestLoginOutput"
            },
            "pluralName": "bitbucketServerRequestLoginOutputs",
            "resourceFields": {
                "loginUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "cephFSVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/cephFSVolumeSource"
            },
            "pluralName": "cephFSVolumeSources",
            "resourceFields": {
                "monitors": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretFile": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                },
                "user": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "algorithm": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "certFingerprint": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "certs": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "cn": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "expiresAt": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "issuedAt": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "issuer": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "key": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "keySize": {
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
                "namespaceId": {
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
                "serialNumber": {
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
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "certificate",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/certificates",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/certificate"
            },
            "pluralName": "certificates",
            "resourceFields": {
                "algorithm": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "certFingerprint": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "certs": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "cn": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
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
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "expiresAt": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "issuedAt": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "issuer": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "key": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
                },
                "keySize": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "serialNumber": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "subjectAlternativeNames": {
                    "create": false,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "version": {
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "cinderVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/cinderVolumeSource"
            },
            "pluralName": "cinderVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                },
                "volumeID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "clientIPConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/clientIPConfig"
            },
            "pluralName": "clientIPConfigs",
            "resourceFields": {
                "timeoutSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "immutable": {
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
                "namespaceId": {
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
            "id": "configMap",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/configmaps",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/configMap"
            },
            "pluralName": "configMaps",
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "binaryData": {
                    "create": true,
                    "nullable": true,
                    "type": "map[base64]",
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
                "data": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "immutable": {
                    "create": true,
                    "nullable": true,
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
                    "required": true,
                    "type": "hostname",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "configMapEnvSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/configMapEnvSource"
            },
            "pluralName": "configMapEnvSources",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "configMapKeySelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/configMapKeySelector"
            },
            "pluralName": "configMapKeySelectors",
            "resourceFields": {
                "key": {
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
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "configMapProjection",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/configMapProjection"
            },
            "pluralName": "configMapProjections",
            "resourceFields": {
                "items": {
                    "create": true,
                    "nullable": true,
                    "type": "array[keyToPath]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "configMapVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/configMapVolumeSource"
            },
            "pluralName": "configMapVolumeSources",
            "resourceFields": {
                "defaultMode": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "items": {
                    "create": true,
                    "nullable": true,
                    "type": "array[keyToPath]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "connectionPoolSettings",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/connectionPoolSettings"
            },
            "pluralName": "connectionPoolSettingses",
            "resourceFields": {
                "http": {
                    "create": true,
                    "nullable": true,
                    "type": "httpSettings",
                    "update": true
                },
                "tcp": {
                    "create": true,
                    "nullable": true,
                    "type": "tcpSettings",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "consistentHashLB",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/consistentHashLB"
            },
            "pluralName": "consistentHashLBs",
            "resourceFields": {
                "httpCookie": {
                    "create": true,
                    "nullable": true,
                    "type": "httpCookie",
                    "update": true
                },
                "httpHeaderName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "minimumRingSize": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "useSourceIp": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "constraint",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/constraint"
            },
            "pluralName": "constraints",
            "resourceFields": {
                "exclude": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "include": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "constraints",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/constraints"
            },
            "pluralName": "constraintses",
            "resourceFields": {
                "branch": {
                    "create": true,
                    "nullable": true,
                    "type": "constraint",
                    "update": true
                },
                "event": {
                    "create": true,
                    "nullable": true,
                    "type": "constraint",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "container",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/container"
            },
            "pluralName": "containers",
            "resourceFields": {
                "allowPrivilegeEscalation": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "capAdd": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "AUDIT_CONTROL",
                        "AUDIT_WRITE",
                        "BLOCK_SUSPEND",
                        "CHOWN",
                        "DAC_OVERRIDE",
                        "DAC_READ_SEARCH",
                        "FOWNER",
                        "FSETID",
                        "IPC_LOCK",
                        "IPC_OWNER",
                        "KILL",
                        "LEASE",
                        "LINUX_IMMUTABLE",
                        "MAC_ADMIN",
                        "MAC_OVERRIDE",
                        "MKNOD",
                        "NET_ADMIN",
                        "NET_BIND_SERVICE",
                        "NET_BROADCAST",
                        "NET_RAW",
                        "SETFCAP",
                        "SETGID",
                        "SETPCAP",
                        "SETUID",
                        "SYSLOG",
                        "SYS_ADMIN",
                        "SYS_BOOT",
                        "SYS_CHROOT",
                        "SYS_MODULE",
                        "SYS_NICE",
                        "SYS_PACCT",
                        "SYS_PTRACE",
                        "SYS_RAWIO",
                        "SYS_RESOURCE",
                        "SYS_TIME",
                        "SYS_TTY_CONFIG",
                        "WAKE_ALARM",
                        "ALL"
                    ],
                    "type": "array[enum]",
                    "update": true
                },
                "capDrop": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "AUDIT_CONTROL",
                        "AUDIT_WRITE",
                        "BLOCK_SUSPEND",
                        "CHOWN",
                        "DAC_OVERRIDE",
                        "DAC_READ_SEARCH",
                        "FOWNER",
                        "FSETID",
                        "IPC_LOCK",
                        "IPC_OWNER",
                        "KILL",
                        "LEASE",
                        "LINUX_IMMUTABLE",
                        "MAC_ADMIN",
                        "MAC_OVERRIDE",
                        "MKNOD",
                        "NET_ADMIN",
                        "NET_BIND_SERVICE",
                        "NET_BROADCAST",
                        "NET_RAW",
                        "SETFCAP",
                        "SETGID",
                        "SETPCAP",
                        "SETUID",
                        "SYSLOG",
                        "SYS_ADMIN",
                        "SYS_BOOT",
                        "SYS_CHROOT",
                        "SYS_MODULE",
                        "SYS_NICE",
                        "SYS_PACCT",
                        "SYS_PTRACE",
                        "SYS_RAWIO",
                        "SYS_RESOURCE",
                        "SYS_TIME",
                        "SYS_TTY_CONFIG",
                        "WAKE_ALARM",
                        "ALL"
                    ],
                    "type": "array[enum]",
                    "update": true
                },
                "command": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "entrypoint": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "environment": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "environmentFrom": {
                    "create": true,
                    "nullable": true,
                    "type": "array[environmentFrom]",
                    "update": true
                },
                "exitCode": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "image": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "initContainer": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "livenessProbe": {
                    "create": true,
                    "nullable": true,
                    "type": "probe",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ports": {
                    "create": true,
                    "nullable": true,
                    "type": "array[containerPort]",
                    "update": true
                },
                "postStart": {
                    "create": true,
                    "nullable": true,
                    "type": "handler",
                    "update": true
                },
                "preStop": {
                    "create": true,
                    "nullable": true,
                    "type": "handler",
                    "update": true
                },
                "privileged": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "procMount": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "readinessProbe": {
                    "create": true,
                    "nullable": true,
                    "type": "probe",
                    "update": true
                },
                "resources": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceRequirements",
                    "update": true
                },
                "restartCount": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "startupProbe": {
                    "create": true,
                    "nullable": true,
                    "type": "probe",
                    "update": true
                },
                "state": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "stdin": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "stdinOnce": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "terminationMessagePath": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "terminationMessagePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "transitioning": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "transitioningMessage": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tty": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "volumeDevices": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volumeDevice]",
                    "update": true
                },
                "volumeMounts": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volumeMount]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workingDir": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "containerPort",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/containerPort"
            },
            "pluralName": "containerPorts",
            "resourceFields": {
                "containerPort": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "dnsName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "hostIp": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "hostPort": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "kind": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "HostPort",
                        "NodePort",
                        "ClusterIP",
                        "LoadBalancer"
                    ],
                    "type": "enum",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "protocol": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sourcePort": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "containerState",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/containerState"
            },
            "pluralName": "containerStates",
            "resourceFields": {
                "running": {
                    "create": true,
                    "nullable": true,
                    "type": "containerStateRunning",
                    "update": true
                },
                "terminated": {
                    "create": true,
                    "nullable": true,
                    "type": "containerStateTerminated",
                    "update": true
                },
                "waiting": {
                    "create": true,
                    "nullable": true,
                    "type": "containerStateWaiting",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "containerStateRunning",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/containerStateRunning"
            },
            "pluralName": "containerStateRunnings",
            "resourceFields": {
                "startedAt": {
                    "create": true,
                    "nullable": true,
                    "type": "date",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "containerStateTerminated",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/containerStateTerminated"
            },
            "pluralName": "containerStateTerminateds",
            "resourceFields": {
                "containerID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "exitCode": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "finishedAt": {
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
                "signal": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "startedAt": {
                    "create": true,
                    "nullable": true,
                    "type": "date",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "containerStateWaiting",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/containerStateWaiting"
            },
            "pluralName": "containerStateWaitings",
            "resourceFields": {
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
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "containerStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/containerStatus"
            },
            "pluralName": "containerStatuses",
            "resourceFields": {
                "containerID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "image": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imageID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "lastState": {
                    "create": true,
                    "nullable": true,
                    "type": "containerState",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ready": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "restartCount": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "started": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": true,
                    "nullable": true,
                    "type": "containerState",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "corsPolicy",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/corsPolicy"
            },
            "pluralName": "corsPolicies",
            "resourceFields": {
                "allowCredentials": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "allowHeaders": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "allowMethods": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "allowOrigin": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "exposeHeaders": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "maxAge": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "ttlSecondsAfterFinished": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "uid": {
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
            "id": "cronJob",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/cronjobs",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/cronJob"
            },
            "pluralName": "cronJobs",
            "resourceActions": {
                "redeploy": {}
            },
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "cronJobConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "cronJobConfig",
                    "update": true
                },
                "cronJobStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "cronJobStatus",
                    "update": false
                },
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
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
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "ttlSecondsAfterFinished": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "cronJobConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/cronJobConfig"
            },
            "pluralName": "cronJobConfigs",
            "resourceFields": {
                "concurrencyPolicy": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "Allow",
                        "Forbid",
                        "Replace"
                    ],
                    "type": "enum",
                    "update": true
                },
                "failedJobsHistoryLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "jobAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "jobConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "jobConfig",
                    "update": true
                },
                "jobLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "schedule": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "startingDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "successfulJobsHistoryLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "suspend": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "cronJobStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/cronJobStatus"
            },
            "pluralName": "cronJobStatuses",
            "resourceFields": {
                "active": {
                    "create": false,
                    "nullable": true,
                    "type": "array[objectReference]",
                    "update": false
                },
                "lastScheduleTime": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "crossVersionObjectReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/crossVersionObjectReference"
            },
            "pluralName": "crossVersionObjectReferences",
            "resourceFields": {
                "apiVersion": {
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
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "csiVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/csiVolumeSource"
            },
            "pluralName": "csiVolumeSources",
            "resourceFields": {
                "driver": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "nodePublishSecretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "volumeAttributes": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "uid": {
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
            "id": "daemonSet",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/daemonsets",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/daemonSet"
            },
            "pluralName": "daemonSets",
            "resourceActions": {
                "redeploy": {}
            },
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "daemonSetConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "daemonSetConfig",
                    "update": true
                },
                "daemonSetStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "daemonSetStatus",
                    "update": false
                },
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
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
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "daemonSetCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/daemonSetCondition"
            },
            "pluralName": "daemonSetConditions",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "daemonSetConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/daemonSetConfig"
            },
            "pluralName": "daemonSetConfigs",
            "resourceFields": {
                "maxUnavailable": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "minReadySeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "revisionHistoryLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "strategy": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "RollingUpdate",
                        "OnDelete"
                    ],
                    "type": "enum",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "daemonSetStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/daemonSetStatus"
            },
            "pluralName": "daemonSetStatuses",
            "resourceFields": {
                "collisionCount": {
                    "create": false,
                    "nullable": true,
                    "type": "int",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[daemonSetCondition]",
                    "update": false
                },
                "currentNumberScheduled": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "desiredNumberScheduled": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "numberAvailable": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "numberMisscheduled": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "numberReady": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "numberUnavailable": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "observedGeneration": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "updatedNumberScheduled": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "paused": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "scale": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "uid": {
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
            "id": "deployment",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/deployments",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/deployment"
            },
            "pluralName": "deployments",
            "resourceActions": {
                "pause": {},
                "redeploy": {},
                "resume": {},
                "rollback": {
                    "input": "deploymentRollbackInput"
                }
            },
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "deploymentConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "deploymentConfig",
                    "update": true
                },
                "deploymentStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "deploymentStatus",
                    "update": false
                },
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
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
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "paused": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scale": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "deploymentCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/deploymentCondition"
            },
            "pluralName": "deploymentConditions",
            "resourceFields": {
                "lastTransitionTime": {
                    "create": true,
                    "nullable": true,
                    "type": "date",
                    "update": true
                },
                "lastUpdateTime": {
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "deploymentConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/deploymentConfig"
            },
            "pluralName": "deploymentConfigs",
            "resourceFields": {
                "maxSurge": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "maxUnavailable": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "minReadySeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "progressDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "revisionHistoryLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "strategy": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "Recreate",
                        "RollingUpdate"
                    ],
                    "type": "enum",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "deploymentRollbackInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/deploymentRollbackInput"
            },
            "pluralName": "deploymentRollbackInputs",
            "resourceFields": {
                "replicaSetId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[replicaSet]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "deploymentStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/deploymentStatus"
            },
            "pluralName": "deploymentStatuses",
            "resourceFields": {
                "availableReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "collisionCount": {
                    "create": false,
                    "nullable": true,
                    "type": "int",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[deploymentCondition]",
                    "update": false
                },
                "observedGeneration": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "readyReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "replicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "unavailableReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "updatedReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "destination",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/destination"
            },
            "pluralName": "destinations",
            "resourceFields": {
                "host": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "portSelector",
                    "update": true
                },
                "subset": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "host": {
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
                "namespaceId": {
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
            "id": "destinationRule",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/destinationrules",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/destinationRule"
            },
            "pluralName": "destinationRules",
            "resourceFields": {
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
                "host": {
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "json",
                    "update": false
                },
                "subsets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[subset]",
                    "update": true
                },
                "trafficPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "trafficPolicy",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "clusterIp": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "hostname": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "ipFamily": {
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
                "namespaceId": {
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
                },
                "workloadId": {
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
            "id": "dnsRecord",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/dnsrecords",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/dnsRecord"
            },
            "pluralName": "dnsRecords",
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "clusterIp": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
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
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ipAddresses": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "ipFamily": {
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
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "ports": {
                    "create": false,
                    "nullable": true,
                    "type": "array[servicePort]",
                    "update": false
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "targetDnsRecordIds": {
                    "create": true,
                    "nullable": true,
                    "type": "array[reference[dnsRecord]]",
                    "update": true
                },
                "targetWorkloadIds": {
                    "create": true,
                    "nullable": true,
                    "type": "array[reference[workload]]",
                    "update": true
                },
                "topologyKeys": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
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
                "workloadId": {
                    "create": false,
                    "nullable": true,
                    "type": "reference[workload]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "namespaceId": {
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
            "id": "dockerCredential",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/dockercredentials",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/dockerCredential"
            },
            "pluralName": "dockerCredentials",
            "resourceFields": {
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
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "registries": {
                    "create": true,
                    "nullable": true,
                    "type": "map[registryCredential]",
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
                }
            },
            "resourceMethods": [
                "PUT",
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "downwardAPIProjection",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/downwardAPIProjection"
            },
            "pluralName": "downwardAPIProjections",
            "resourceFields": {
                "items": {
                    "create": true,
                    "nullable": true,
                    "type": "array[downwardAPIVolumeFile]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "downwardAPIVolumeFile",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/downwardAPIVolumeFile"
            },
            "pluralName": "downwardAPIVolumeFiles",
            "resourceFields": {
                "fieldRef": {
                    "create": true,
                    "nullable": true,
                    "type": "objectFieldSelector",
                    "update": true
                },
                "mode": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "resourceFieldRef": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceFieldSelector",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "downwardAPIVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/downwardAPIVolumeSource"
            },
            "pluralName": "downwardAPIVolumeSources",
            "resourceFields": {
                "defaultMode": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "items": {
                    "create": true,
                    "nullable": true,
                    "type": "array[downwardAPIVolumeFile]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "emptyDirVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/emptyDirVolumeSource"
            },
            "pluralName": "emptyDirVolumeSources",
            "resourceFields": {
                "medium": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sizeLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "endpoint",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/endpoint"
            },
            "pluralName": "endpoints",
            "resourceFields": {
                "bearerTokenSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "secretKeySelector",
                    "update": true
                },
                "honorTimestamps": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "interval": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "params": {
                    "create": true,
                    "nullable": true,
                    "type": "map[array[string]]",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "relabelings": {
                    "create": true,
                    "nullable": true,
                    "type": "array[relabelConfig]",
                    "update": true
                },
                "scheme": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scrapeTimeout": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "targetPort": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "envFrom",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/envFrom"
            },
            "pluralName": "envFroms",
            "resourceFields": {
                "sourceKey": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "sourceName": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "targetKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "envFromSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/envFromSource"
            },
            "pluralName": "envFromSources",
            "resourceFields": {
                "configMapRef": {
                    "create": true,
                    "nullable": true,
                    "type": "configMapEnvSource",
                    "update": true
                },
                "prefix": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretEnvSource",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "envVar",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/envVar"
            },
            "pluralName": "envVars",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "value": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "valueFrom": {
                    "create": true,
                    "nullable": true,
                    "type": "envVarSource",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "envVarSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/envVarSource"
            },
            "pluralName": "envVarSources",
            "resourceFields": {
                "configMapKeyRef": {
                    "create": true,
                    "nullable": true,
                    "type": "configMapKeySelector",
                    "update": true
                },
                "fieldRef": {
                    "create": true,
                    "nullable": true,
                    "type": "objectFieldSelector",
                    "update": true
                },
                "resourceFieldRef": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceFieldSelector",
                    "update": true
                },
                "secretKeyRef": {
                    "create": true,
                    "nullable": true,
                    "type": "secretKeySelector",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "environmentFrom",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/environmentFrom"
            },
            "pluralName": "environmentFroms",
            "resourceFields": {
                "optional": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "prefix": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "source": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "field",
                        "resource",
                        "configMap",
                        "secret"
                    ],
                    "type": "enum",
                    "update": true
                },
                "sourceKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sourceName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "targetKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ephemeralContainer",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ephemeralContainer"
            },
            "pluralName": "ephemeralContainers",
            "resourceFields": {
                "args": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "command": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "env": {
                    "create": true,
                    "nullable": true,
                    "type": "array[envVar]",
                    "update": true
                },
                "envFrom": {
                    "create": true,
                    "nullable": true,
                    "type": "array[envFromSource]",
                    "update": true
                },
                "image": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "lifecycle": {
                    "create": true,
                    "nullable": true,
                    "type": "lifecycle",
                    "update": true
                },
                "livenessProbe": {
                    "create": true,
                    "nullable": true,
                    "type": "probe",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ports": {
                    "create": true,
                    "nullable": true,
                    "type": "array[containerPort]",
                    "update": true
                },
                "readinessProbe": {
                    "create": true,
                    "nullable": true,
                    "type": "probe",
                    "update": true
                },
                "resources": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceRequirements",
                    "update": true
                },
                "securityContext": {
                    "create": true,
                    "nullable": true,
                    "type": "securityContext",
                    "update": true
                },
                "startupProbe": {
                    "create": true,
                    "nullable": true,
                    "type": "probe",
                    "update": true
                },
                "stdin": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "stdinOnce": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "targetContainerName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "terminationMessagePath": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "terminationMessagePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tty": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "volumeDevices": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volumeDevice]",
                    "update": true
                },
                "volumeMounts": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volumeMount]",
                    "update": true
                },
                "workingDir": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ephemeralVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ephemeralVolumeSource"
            },
            "pluralName": "ephemeralVolumeSources",
            "resourceFields": {
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "volumeClaimTemplate": {
                    "create": true,
                    "nullable": true,
                    "type": "persistentVolumeClaimTemplate",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "fcVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/fcVolumeSource"
            },
            "pluralName": "fcVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "lun": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "targetWWNs": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "wwids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "flexVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/flexVolumeSource"
            },
            "pluralName": "flexVolumeSources",
            "resourceFields": {
                "driver": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "options": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "flockerVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/flockerVolumeSource"
            },
            "pluralName": "flockerVolumeSources",
            "resourceFields": {
                "datasetName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "datasetUUID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "namespaceId": {
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
            "id": "gateway",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/gateways",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/gateway"
            },
            "pluralName": "gateways",
            "resourceFields": {
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "servers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[server]",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "json",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "gcePersistentDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/gcePersistentDiskVolumeSource"
            },
            "pluralName": "gcePersistentDiskVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "partition": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "pdName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "gitRepoVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/gitRepoVolumeSource"
            },
            "pluralName": "gitRepoVolumeSources",
            "resourceFields": {
                "directory": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "repository": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "revision": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "githubApplyInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/githubApplyInput"
            },
            "pluralName": "githubApplyInputs",
            "resourceFields": {
                "clientId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "clientSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "code": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "inheritAuth": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "clientId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "enabled": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "inherit": {
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
                "namespaceId": {
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
                "tls": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "type": {
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
            "id": "githubPipelineConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/githubPipelineConfig"
            },
            "pluralName": "githubPipelineConfigs",
            "resourceActions": {
                "disable": {},
                "testAndApply": {
                    "input": "githubApplyInput"
                }
            },
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "clientId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "clientSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "password",
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
                "enabled": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "default": "github.com",
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "inherit": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": false
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                    "required": true,
                    "type": "reference[project]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "tls": {
                    "create": true,
                    "default": true,
                    "type": "boolean",
                    "update": true
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
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
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "redirectUrl": {
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
                "type": {
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
            "id": "githubProvider",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/githubProvider"
            },
            "pluralName": "githubProviders",
            "resourceActions": {
                "login": {
                    "input": "authUserInput",
                    "output": "sourceCodeCredential"
                }
            },
            "resourceFields": {
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
                    "type": "reference[project]",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "resourceMethods": [
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "gitlabApplyInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/gitlabApplyInput"
            },
            "pluralName": "gitlabApplyInputs",
            "resourceFields": {
                "clientId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "clientSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "code": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "clientId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "enabled": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
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
                "redirectUrl": {
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
                "tls": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "type": {
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
            "id": "gitlabPipelineConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/gitlabPipelineConfig"
            },
            "pluralName": "gitlabPipelineConfigs",
            "resourceActions": {
                "disable": {},
                "testAndApply": {
                    "input": "gitlabApplyInput"
                }
            },
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "clientId": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "clientSecret": {
                    "create": true,
                    "nullable": true,
                    "type": "password",
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
                "enabled": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "default": "gitlab.com",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                    "required": true,
                    "type": "reference[project]",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "tls": {
                    "create": true,
                    "default": true,
                    "type": "boolean",
                    "update": true
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
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
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "redirectUrl": {
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
                "type": {
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
            "id": "gitlabProvider",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/gitlabProvider"
            },
            "pluralName": "gitlabProviders",
            "resourceActions": {
                "login": {
                    "input": "authUserInput",
                    "output": "sourceCodeCredential"
                }
            },
            "resourceFields": {
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
                    "type": "reference[project]",
                    "update": true
                },
                "redirectUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "resourceMethods": [
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "glusterfsVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/glusterfsVolumeSource"
            },
            "pluralName": "glusterfsVolumeSources",
            "resourceFields": {
                "endpoints": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "handler",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/handler"
            },
            "pluralName": "handlers",
            "resourceFields": {
                "command": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "host": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "httpHeaders": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpHeader]",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "scheme": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tcp": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "headerOperations",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/headerOperations"
            },
            "pluralName": "headerOperationses",
            "resourceFields": {
                "add": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "remove": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "set": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "headers",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/headers"
            },
            "pluralName": "headerses",
            "resourceFields": {
                "request": {
                    "create": true,
                    "nullable": true,
                    "type": "headerOperations",
                    "update": true
                },
                "response": {
                    "create": true,
                    "nullable": true,
                    "type": "headerOperations",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "currentReplicas": {
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
                "desiredReplicas": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "id": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "lastScaleTime": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "maxReplicas": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "minReplicas": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "observedGeneration": {
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
                },
                "workloadId": {
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
            "id": "horizontalPodAutoscaler",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/horizontalpodautoscalers",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/horizontalPodAutoscaler"
            },
            "pluralName": "horizontalPodAutoscalers",
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "behavior": {
                    "create": true,
                    "nullable": true,
                    "type": "horizontalPodAutoscalerBehavior",
                    "update": true
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[horizontalPodAutoscalerCondition]",
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
                "currentReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "desiredReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "id": {
                    "create": false,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "lastScaleTime": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "maxReplicas": {
                    "create": true,
                    "default": 0,
                    "required": true,
                    "type": "int",
                    "update": true
                },
                "metrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[metric]",
                    "update": true
                },
                "minReplicas": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "observedGeneration": {
                    "create": false,
                    "nullable": true,
                    "type": "int",
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
                "workloadId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[workload]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "horizontalPodAutoscalerBehavior",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/horizontalPodAutoscalerBehavior"
            },
            "pluralName": "horizontalPodAutoscalerBehaviors",
            "resourceFields": {
                "scaleDown": {
                    "create": true,
                    "nullable": true,
                    "type": "hpaScalingRules",
                    "update": true
                },
                "scaleUp": {
                    "create": true,
                    "nullable": true,
                    "type": "hpaScalingRules",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "horizontalPodAutoscalerCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/horizontalPodAutoscalerCondition"
            },
            "pluralName": "horizontalPodAutoscalerConditions",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "hostAlias",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/hostAlias"
            },
            "pluralName": "hostAliases",
            "resourceFields": {
                "hostnames": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "ip": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "hostPathVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/hostPathVolumeSource"
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
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "hpaScalingPolicy",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/hpaScalingPolicy"
            },
            "pluralName": "hpaScalingPolicies",
            "resourceFields": {
                "periodSeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "value": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "hpaScalingRules",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/hpaScalingRules"
            },
            "pluralName": "hpaScalingRuleses",
            "resourceFields": {
                "policies": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hpaScalingPolicy]",
                    "update": true
                },
                "selectPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "stabilizationWindowSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpCookie",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpCookie"
            },
            "pluralName": "httpCookies",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ttl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpFaultInjection",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpFaultInjection"
            },
            "pluralName": "httpFaultInjections",
            "resourceFields": {
                "abort": {
                    "create": true,
                    "nullable": true,
                    "type": "injectAbort",
                    "update": true
                },
                "delay": {
                    "create": true,
                    "nullable": true,
                    "type": "injectDelay",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpHeader",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpHeader"
            },
            "pluralName": "httpHeaders",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "value": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpIngressPath",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpIngressPath"
            },
            "pluralName": "httpIngressPaths",
            "resourceFields": {
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "pathType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "resource": {
                    "create": true,
                    "nullable": true,
                    "type": "typedLocalObjectReference",
                    "update": true
                },
                "serviceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[service]",
                    "update": true
                },
                "targetPort": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "workloadIds": {
                    "create": true,
                    "nullable": true,
                    "type": "array[reference[workload]]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpMatchRequest",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpMatchRequest"
            },
            "pluralName": "httpMatchRequests",
            "resourceFields": {
                "authority": {
                    "create": true,
                    "nullable": true,
                    "type": "stringMatch",
                    "update": true
                },
                "gateways": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "headers": {
                    "create": true,
                    "nullable": true,
                    "type": "map[stringMatch]",
                    "update": true
                },
                "method": {
                    "create": true,
                    "nullable": true,
                    "type": "stringMatch",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "scheme": {
                    "create": true,
                    "nullable": true,
                    "type": "stringMatch",
                    "update": true
                },
                "sourceLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "uri": {
                    "create": true,
                    "nullable": true,
                    "type": "stringMatch",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpRedirect",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpRedirect"
            },
            "pluralName": "httpRedirects",
            "resourceFields": {
                "authority": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "uri": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpRetry",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpRetry"
            },
            "pluralName": "httpRetries",
            "resourceFields": {
                "attempts": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "perTryTimeout": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpRewrite",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpRewrite"
            },
            "pluralName": "httpRewrites",
            "resourceFields": {
                "authority": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "uri": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpRoute",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpRoute"
            },
            "pluralName": "httpRoutes",
            "resourceFields": {
                "appendHeaders": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "corsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "corsPolicy",
                    "update": true
                },
                "fault": {
                    "create": true,
                    "nullable": true,
                    "type": "httpFaultInjection",
                    "update": true
                },
                "headers": {
                    "create": true,
                    "nullable": true,
                    "type": "headers",
                    "update": true
                },
                "match": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpMatchRequest]",
                    "update": true
                },
                "mirror": {
                    "create": true,
                    "nullable": true,
                    "type": "destination",
                    "update": true
                },
                "redirect": {
                    "create": true,
                    "nullable": true,
                    "type": "httpRedirect",
                    "update": true
                },
                "removeResponseHeaders": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "retries": {
                    "create": true,
                    "nullable": true,
                    "type": "httpRetry",
                    "update": true
                },
                "rewrite": {
                    "create": true,
                    "nullable": true,
                    "type": "httpRewrite",
                    "update": true
                },
                "route": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpRouteDestination]",
                    "update": true
                },
                "timeout": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "websocketUpgrade": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpRouteDestination",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpRouteDestination"
            },
            "pluralName": "httpRouteDestinations",
            "resourceFields": {
                "destination": {
                    "create": true,
                    "nullable": true,
                    "type": "destination",
                    "update": true
                },
                "headers": {
                    "create": true,
                    "nullable": true,
                    "type": "headers",
                    "update": true
                },
                "weight": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "httpSettings",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/httpSettings"
            },
            "pluralName": "httpSettingses",
            "resourceFields": {
                "http1MaxPendingRequests": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "http2MaxRequests": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "maxRequestsPerConnection": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "maxRetries": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "ingressClassName": {
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
                "namespaceId": {
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
            "id": "ingress",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/ingresses",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ingress"
            },
            "pluralName": "ingresses",
            "resourceFields": {
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
                "defaultBackend": {
                    "create": true,
                    "nullable": true,
                    "type": "ingressBackend",
                    "update": true
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ingressClassName": {
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
                    "required": true,
                    "type": "hostname",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "rules": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ingressRule]",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "ingressStatus",
                    "update": false
                },
                "tls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ingressTLS]",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ingressBackend",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ingressBackend"
            },
            "pluralName": "ingressBackends",
            "resourceFields": {
                "resource": {
                    "create": true,
                    "nullable": true,
                    "type": "typedLocalObjectReference",
                    "update": true
                },
                "serviceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[service]",
                    "update": true
                },
                "targetPort": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "workloadIds": {
                    "create": true,
                    "nullable": true,
                    "type": "array[reference[workload]]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ingressRule",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ingressRule"
            },
            "pluralName": "ingressRules",
            "resourceFields": {
                "host": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "paths": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpIngressPath]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ingressStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ingressStatus"
            },
            "pluralName": "ingressStatuses",
            "resourceFields": {
                "loadBalancer": {
                    "create": false,
                    "nullable": true,
                    "type": "loadBalancerStatus",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ingressTLS",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ingressTLS"
            },
            "pluralName": "ingressTLSs",
            "resourceFields": {
                "certificateId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[certificate]",
                    "update": true
                },
                "hosts": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "injectAbort",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/injectAbort"
            },
            "pluralName": "injectAborts",
            "resourceFields": {
                "httpStatus": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "percent": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "injectDelay",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/injectDelay"
            },
            "pluralName": "injectDelays",
            "resourceFields": {
                "exponentialDelay": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fixedDelay": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "percent": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "iscsiVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/iscsiVolumeSource"
            },
            "pluralName": "iscsiVolumeSources",
            "resourceFields": {
                "chapAuthDiscovery": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "chapAuthSession": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "initiatorName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "iqn": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "iscsiInterface": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "lun": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "portals": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                },
                "targetPortal": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "ttlSecondsAfterFinished": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "uid": {
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
            "id": "job",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/jobs",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/job"
            },
            "pluralName": "jobs",
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
                    "update": true
                },
                "jobConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "jobConfig",
                    "update": true
                },
                "jobStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "jobStatus",
                    "update": false
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "ttlSecondsAfterFinished": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "jobCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/jobCondition"
            },
            "pluralName": "jobConditions",
            "resourceFields": {
                "lastProbeTime": {
                    "create": true,
                    "nullable": true,
                    "type": "date",
                    "update": true
                },
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "jobConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/jobConfig"
            },
            "pluralName": "jobConfigs",
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "backoffLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "completions": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "manualSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "parallelism": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "jobStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/jobStatus"
            },
            "pluralName": "jobStatuses",
            "resourceFields": {
                "active": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "completionTime": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[jobCondition]",
                    "update": false
                },
                "failed": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "startTime": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "succeeded": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "keyToPath",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/keyToPath"
            },
            "pluralName": "keyToPaths",
            "resourceFields": {
                "key": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "mode": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "l4MatchAttributes",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/l4MatchAttributes"
            },
            "pluralName": "l4MatchAttributeses",
            "resourceFields": {
                "destinationSubnets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "gateways": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "port": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "sourceLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "labelSelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/labelSelector"
            },
            "pluralName": "labelSelectors",
            "resourceFields": {
                "matchExpressions": {
                    "create": true,
                    "nullable": true,
                    "type": "array[labelSelectorRequirement]",
                    "update": true
                },
                "matchLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "labelSelectorRequirement",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/labelSelectorRequirement"
            },
            "pluralName": "labelSelectorRequirements",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "lifecycle",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/lifecycle"
            },
            "pluralName": "lifecycles",
            "resourceFields": {
                "postStart": {
                    "create": true,
                    "nullable": true,
                    "type": "handler",
                    "update": true
                },
                "preStop": {
                    "create": true,
                    "nullable": true,
                    "type": "handler",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "loadBalancerIngress",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/loadBalancerIngress"
            },
            "pluralName": "loadBalancerIngresses",
            "resourceFields": {
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ip": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "loadBalancerSettings",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/loadBalancerSettings"
            },
            "pluralName": "loadBalancerSettingses",
            "resourceFields": {
                "consistentHash": {
                    "create": true,
                    "nullable": true,
                    "type": "consistentHashLB",
                    "update": true
                },
                "simple": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "loadBalancerStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/loadBalancerStatus"
            },
            "pluralName": "loadBalancerStatuses",
            "resourceFields": {
                "ingress": {
                    "create": true,
                    "nullable": true,
                    "type": "array[loadBalancerIngress]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "localObjectReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/localObjectReference"
            },
            "pluralName": "localObjectReferences",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "metric",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/metric"
            },
            "pluralName": "metrics",
            "resourceFields": {
                "current": {
                    "create": false,
                    "nullable": true,
                    "type": "metricValueStatus",
                    "update": false
                },
                "describedObject": {
                    "create": true,
                    "nullable": true,
                    "type": "crossVersionObjectReference",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "target": {
                    "create": true,
                    "nullable": true,
                    "type": "metricTarget",
                    "update": true
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "Object",
                        "Pods",
                        "Resource",
                        "External"
                    ],
                    "type": "enum",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "metricTarget",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/metricTarget"
            },
            "pluralName": "metricTargets",
            "resourceFields": {
                "averageValue": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "Utilization",
                        "Value",
                        "AverageValue"
                    ],
                    "type": "enum",
                    "update": true
                },
                "utilization": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "value": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "metricValueStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/metricValueStatus"
            },
            "pluralName": "metricValueStatuses",
            "resourceFields": {
                "averageValue": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "utilization": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "value": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "password": {
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
                "username": {
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
            "id": "namespacedBasicAuth",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/namespacedbasicauths",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/namespacedBasicAuth"
            },
            "pluralName": "namespacedBasicAuths",
            "resourceFields": {
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
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "password": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
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
                "username": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "algorithm": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "certFingerprint": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "certs": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "cn": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "expiresAt": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "issuedAt": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "issuer": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "key": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "keySize": {
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
                "namespaceId": {
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
                "serialNumber": {
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
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "namespacedCertificate",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/namespacedcertificates",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/namespacedCertificate"
            },
            "pluralName": "namespacedCertificates",
            "resourceFields": {
                "algorithm": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "certFingerprint": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "certs": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "cn": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
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
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "expiresAt": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "issuedAt": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "issuer": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "key": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
                },
                "keySize": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "serialNumber": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "subjectAlternativeNames": {
                    "create": false,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "version": {
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "namespaceId": {
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
            "id": "namespacedDockerCredential",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/namespaceddockercredentials",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/namespacedDockerCredential"
            },
            "pluralName": "namespacedDockerCredentials",
            "resourceFields": {
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
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "registries": {
                    "create": true,
                    "nullable": true,
                    "type": "map[registryCredential]",
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
                }
            },
            "resourceMethods": [
                "PUT",
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "immutable": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "kind": {
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
                "namespaceId": {
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
            "id": "namespacedSecret",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/namespacedsecrets",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/namespacedSecret"
            },
            "pluralName": "namespacedSecrets",
            "resourceFields": {
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
                "data": {
                    "create": true,
                    "nullable": true,
                    "type": "map[base64]",
                    "update": true
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "immutable": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "kind": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "Opaque",
                        "serviceAccountToken",
                        "dockerCredential",
                        "basicAuth",
                        "sshAuth",
                        "certificate"
                    ],
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
                    "required": true,
                    "type": "hostname",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "stringData": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "accountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "accountUid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "caCrt": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "namespaceId": {
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
                "token": {
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
            "id": "namespacedServiceAccountToken",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/namespacedserviceaccounttokens",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/namespacedServiceAccountToken"
            },
            "pluralName": "namespacedServiceAccountTokens",
            "resourceFields": {
                "accountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "accountUid": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "caCrt": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "token": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "certFingerprint": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "privateKey": {
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
            "id": "namespacedSshAuth",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/namespacedsshauths",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/namespacedSshAuth"
            },
            "pluralName": "namespacedSshAuths",
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "certFingerprint": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "privateKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nfsVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/nfsVolumeSource"
            },
            "pluralName": "nfsVolumeSources",
            "resourceFields": {
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "server": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeAffinity",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/nodeAffinity"
            },
            "pluralName": "nodeAffinities",
            "resourceFields": {
                "preferredDuringSchedulingIgnoredDuringExecution": {
                    "create": true,
                    "nullable": true,
                    "type": "array[preferredSchedulingTerm]",
                    "update": true
                },
                "requiredDuringSchedulingIgnoredDuringExecution": {
                    "create": true,
                    "nullable": true,
                    "type": "nodeSelector",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeScheduling",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/nodeScheduling"
            },
            "pluralName": "nodeSchedulings",
            "resourceFields": {
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "preferred": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "requireAll": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "requireAny": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeSelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/nodeSelector"
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeSelectorRequirement",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/nodeSelectorRequirement"
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "nodeSelectorTerm",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/nodeSelectorTerm"
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "objectFieldSelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/objectFieldSelector"
            },
            "pluralName": "objectFieldSelectors",
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
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "objectMeta",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/objectMeta"
            },
            "pluralName": "objectMetas",
            "resourceFields": {
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
                "finalizers": {
                    "create": false,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
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
                "namespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "selfLink": {
                    "create": false,
                    "nullable": true,
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
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "objectReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/objectReference"
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "outlierDetection",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/outlierDetection"
            },
            "pluralName": "outlierDetections",
            "resourceFields": {
                "baseEjectionTime": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "consecutiveErrors": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "interval": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "maxEjectionPercent": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ownerReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ownerReference"
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "namespaceId": {
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
                "volumeId": {
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
            "id": "persistentVolumeClaim",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/persistentvolumeclaims",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/persistentVolumeClaim"
            },
            "pluralName": "persistentVolumeClaims",
            "resourceFields": {
                "accessModes": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "ReadWriteOnce",
                        "ReadOnlyMany",
                        "ReadWriteMany"
                    ],
                    "type": "array[enum]",
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
                "dataSource": {
                    "create": true,
                    "nullable": true,
                    "type": "typedLocalObjectReference",
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
                    "required": true,
                    "type": "hostname",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "resources": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceRequirements",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "persistentVolumeClaimStatus",
                    "update": false
                },
                "storageClassId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/cluster/storageClass]",
                    "update": true
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
                "volumeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/cluster/persistentVolume]",
                    "update": true
                },
                "volumeMode": {
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "persistentVolumeClaimCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/persistentVolumeClaimCondition"
            },
            "pluralName": "persistentVolumeClaimConditions",
            "resourceFields": {
                "lastProbeTime": {
                    "create": true,
                    "nullable": true,
                    "type": "date",
                    "update": true
                },
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "persistentVolumeClaimSpec",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/persistentVolumeClaimSpec"
            },
            "pluralName": "persistentVolumeClaimSpecs",
            "resourceFields": {
                "accessModes": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "ReadWriteOnce",
                        "ReadOnlyMany",
                        "ReadWriteMany"
                    ],
                    "type": "array[enum]",
                    "update": true
                },
                "dataSource": {
                    "create": true,
                    "nullable": true,
                    "type": "typedLocalObjectReference",
                    "update": true
                },
                "resources": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceRequirements",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "storageClassId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/cluster/storageClass]",
                    "update": true
                },
                "volumeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/cluster/persistentVolume]",
                    "update": true
                },
                "volumeMode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "persistentVolumeClaimStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/persistentVolumeClaimStatus"
            },
            "pluralName": "persistentVolumeClaimStatuses",
            "resourceFields": {
                "accessModes": {
                    "create": false,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "capacity": {
                    "create": false,
                    "nullable": true,
                    "type": "map[string]",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[persistentVolumeClaimCondition]",
                    "update": false
                },
                "phase": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "persistentVolumeClaimTemplate",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/persistentVolumeClaimTemplate"
            },
            "pluralName": "persistentVolumeClaimTemplates",
            "resourceFields": {
                "metadata": {
                    "create": true,
                    "nullable": true,
                    "type": "objectMeta",
                    "update": true
                },
                "spec": {
                    "create": true,
                    "nullable": true,
                    "type": "persistentVolumeClaimSpec",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "persistentVolumeClaimVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/persistentVolumeClaimVolumeSource"
            },
            "pluralName": "persistentVolumeClaimVolumeSources",
            "resourceFields": {
                "persistentVolumeClaimId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[persistentVolumeClaim]",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "photonPersistentDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/photonPersistentDiskVolumeSource"
            },
            "pluralName": "photonPersistentDiskVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "pdID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "id": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "lastExecutionId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "lastRunState": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "lastStarted": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nextRun": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nextStart": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "pipelineState": {
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
                "repositoryUrl": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "sourceCodeCredentialId": {
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
                "token": {
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
                "triggerWebhookPr": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "triggerWebhookPush": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "triggerWebhookTag": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "webhookId": {
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
            "id": "pipeline",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/pipelines",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pipeline"
            },
            "pluralName": "pipelines",
            "resourceActions": {
                "activate": {},
                "deactivate": {},
                "pushconfig": {
                    "input": "pushPipelineConfigInput"
                },
                "run": {
                    "input": "runPipelineInput"
                }
            },
            "resourceFields": {
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
                "id": {
                    "create": false,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "lastExecutionId": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "lastRunState": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "lastStarted": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nextRun": {
                    "create": false,
                    "default": 1,
                    "min": 1,
                    "type": "int",
                    "update": false
                },
                "nextStart": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "pipelineState": {
                    "create": false,
                    "default": "active",
                    "nullable": true,
                    "options": [
                        "active",
                        "inactive"
                    ],
                    "required": true,
                    "type": "enum",
                    "update": false
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[project]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "repositoryUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sourceCodeCredential": {
                    "create": false,
                    "nullable": true,
                    "type": "sourceCodeCredential",
                    "update": false
                },
                "sourceCodeCredentialId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[sourceCodeCredential]",
                    "update": false
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "token": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false,
                    "writeOnly": true
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
                "triggerWebhookPr": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "triggerWebhookPush": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "triggerWebhookTag": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "webhookId": {
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "pipelineCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pipelineCondition"
            },
            "pluralName": "pipelineConditions",
            "resourceFields": {
                "lastTransitionTime": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "lastUpdateTime": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "pipelineConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pipelineConfig"
            },
            "pluralName": "pipelineConfigs",
            "resourceFields": {
                "branch": {
                    "create": true,
                    "nullable": true,
                    "type": "constraint",
                    "update": true
                },
                "notification": {
                    "create": true,
                    "nullable": true,
                    "type": "pipelineNotification",
                    "update": true
                },
                "stages": {
                    "create": true,
                    "nullable": true,
                    "type": "array[stage]",
                    "update": true
                },
                "timeout": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "author": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "avatarUrl": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "branch": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "commit": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "email": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "ended": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "event": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "executionState": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "htmlLink": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "message": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "pipelineId": {
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
                "ref": {
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
                "repositoryUrl": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "run": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "started": {
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
                "title": {
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
                "triggerUserId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "triggeredBy": {
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
            "id": "pipelineExecution",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/pipelineexecutions",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pipelineExecution"
            },
            "pluralName": "pipelineExecutions",
            "resourceActions": {
                "rerun": {},
                "stop": {}
            },
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "author": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "avatarUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "branch": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "commit": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[pipelineCondition]",
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
                "email": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ended": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "event": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "executionState": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "htmlLink": {
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
                "message": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "pipelineConfig": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "pipelineConfig",
                    "update": true
                },
                "pipelineId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[pipeline]",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[project]",
                    "update": true
                },
                "ref": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "repositoryUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "run": {
                    "create": true,
                    "default": 0,
                    "min": 1,
                    "required": true,
                    "type": "int",
                    "update": true
                },
                "stages": {
                    "create": false,
                    "nullable": true,
                    "type": "array[stageStatus]",
                    "update": false
                },
                "started": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "title": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
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
                "triggerUserId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[user]",
                    "update": true
                },
                "triggeredBy": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "user",
                        "cron",
                        "webhook"
                    ],
                    "required": true,
                    "type": "enum",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "pipelineNotification",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pipelineNotification"
            },
            "pluralName": "pipelineNotifications",
            "resourceFields": {
                "condition": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "message": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "recipients": {
                    "create": true,
                    "nullable": true,
                    "type": "array[recipient]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "customized": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "default": {
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
                "namespaceId": {
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
                "uuid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "value": {
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
            "id": "pipelineSetting",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/pipelinesettings",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pipelineSetting"
            },
            "pluralName": "pipelineSettings",
            "resourceFields": {
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
                "customized": {
                    "create": false,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "default": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
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
                    "required": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                    "type": "reference[project]",
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
                "value": {
                    "create": true,
                    "nullable": true,
                    "required": true,
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "uid": {
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
                "workloadId": {
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
            "id": "pod",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/pods",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pod"
            },
            "pluralName": "pods",
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "podStatus",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[workload]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": false,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podAffinity",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podAffinity"
            },
            "pluralName": "podAffinities",
            "resourceFields": {
                "preferredDuringSchedulingIgnoredDuringExecution": {
                    "create": true,
                    "nullable": true,
                    "type": "array[weightedPodAffinityTerm]",
                    "update": true
                },
                "requiredDuringSchedulingIgnoredDuringExecution": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podAffinityTerm]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podAffinityTerm",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podAffinityTerm"
            },
            "pluralName": "podAffinityTerms",
            "resourceFields": {
                "labelSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "namespaces": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "topologyKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podAntiAffinity",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podAntiAffinity"
            },
            "pluralName": "podAntiAffinities",
            "resourceFields": {
                "preferredDuringSchedulingIgnoredDuringExecution": {
                    "create": true,
                    "nullable": true,
                    "type": "array[weightedPodAffinityTerm]",
                    "update": true
                },
                "requiredDuringSchedulingIgnoredDuringExecution": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podAffinityTerm]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podCondition"
            },
            "pluralName": "podConditions",
            "resourceFields": {
                "lastProbeTime": {
                    "create": true,
                    "nullable": true,
                    "type": "date",
                    "update": true
                },
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podDNSConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podDNSConfig"
            },
            "pluralName": "podDNSConfigs",
            "resourceFields": {
                "nameservers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "options": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podDNSConfigOption]",
                    "update": true
                },
                "searches": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podDNSConfigOption",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podDNSConfigOption"
            },
            "pluralName": "podDNSConfigOptions",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "value": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podIP",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podIP"
            },
            "pluralName": "podIPs",
            "resourceFields": {
                "ip": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podReadinessGate",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podReadinessGate"
            },
            "pluralName": "podReadinessGates",
            "resourceFields": {
                "conditionType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podSecurityContext",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podSecurityContext"
            },
            "pluralName": "podSecurityContexts",
            "resourceFields": {
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "podStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/podStatus"
            },
            "pluralName": "podStatuses",
            "resourceFields": {
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[podCondition]",
                    "update": false
                },
                "containerStatuses": {
                    "create": false,
                    "nullable": true,
                    "type": "array[containerStatus]",
                    "update": false
                },
                "ephemeralContainerStatuses": {
                    "create": false,
                    "nullable": true,
                    "type": "array[containerStatus]",
                    "update": false
                },
                "initContainerStatuses": {
                    "create": false,
                    "nullable": true,
                    "type": "array[containerStatus]",
                    "update": false
                },
                "message": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "nodeIp": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "nominatedNodeName": {
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
                "podIPs": {
                    "create": false,
                    "nullable": true,
                    "type": "array[podIP]",
                    "update": false
                },
                "podIp": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "qosClass": {
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
                },
                "startTime": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "port",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/port"
            },
            "pluralName": "ports",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "number": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "protocol": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "portSelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/portSelector"
            },
            "pluralName": "portSelectors",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "number": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "portTrafficPolicy",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/portTrafficPolicy"
            },
            "pluralName": "portTrafficPolicies",
            "resourceFields": {
                "connectionPool": {
                    "create": true,
                    "nullable": true,
                    "type": "connectionPoolSettings",
                    "update": true
                },
                "loadBalancer": {
                    "create": true,
                    "nullable": true,
                    "type": "loadBalancerSettings",
                    "update": true
                },
                "outlierDetection": {
                    "create": true,
                    "nullable": true,
                    "type": "outlierDetection",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "portSelector",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "nullable": true,
                    "type": "tlsSettings",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "portworxVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/portworxVolumeSource"
            },
            "pluralName": "portworxVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "volumeID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "preferredSchedulingTerm",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/preferredSchedulingTerm"
            },
            "pluralName": "preferredSchedulingTerms",
            "resourceFields": {
                "preference": {
                    "create": true,
                    "nullable": true,
                    "type": "nodeSelectorTerm",
                    "update": true
                },
                "weight": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "probe",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/probe"
            },
            "pluralName": "probes",
            "resourceFields": {
                "command": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "failureThreshold": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "host": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "httpHeaders": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpHeader]",
                    "update": true
                },
                "initialDelaySeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "periodSeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "scheme": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "successThreshold": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "tcp": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "timeoutSeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "projectedVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/projectedVolumeSource"
            },
            "pluralName": "projectedVolumeSources",
            "resourceFields": {
                "defaultMode": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "sources": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volumeProjection]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "baseImage": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "disableCompaction": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "enableAdminAPI": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "enforcedNamespaceLabel": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "evaluationInterval": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "externalUrl": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "ignoreNamespaceSelectors": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "image": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "listenLocal": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "logFormat": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "logLevel": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "overrideHonorLabels": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "overrideHonorTimestamps": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "portName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "priorityClassName": {
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
                "prometheusExternalLabelName": {
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
                "replicaExternalLabelName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "replicas": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "retention": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "retentionSize": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "routePrefix": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "scrapeInterval": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "sha": {
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
                "tag": {
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
                "walCompression": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "prometheus",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/prometheuses",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/prometheus"
            },
            "pluralName": "prometheuses",
            "resourceFields": {
                "additionalAlertManagerConfigs": {
                    "create": true,
                    "nullable": true,
                    "type": "secretKeySelector",
                    "update": true
                },
                "additionalAlertRelabelConfigs": {
                    "create": true,
                    "nullable": true,
                    "type": "secretKeySelector",
                    "update": true
                },
                "additionalScrapeConfigs": {
                    "create": true,
                    "nullable": true,
                    "type": "secretKeySelector",
                    "update": true
                },
                "affinity": {
                    "create": true,
                    "nullable": true,
                    "type": "affinity",
                    "update": true
                },
                "alerting": {
                    "create": true,
                    "nullable": true,
                    "type": "alertingSpec",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "arbitraryFSAccessThroughSMs": {
                    "create": true,
                    "nullable": true,
                    "type": "arbitraryFSAccessThroughSMsConfig",
                    "update": true
                },
                "baseImage": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "configMaps": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "disableCompaction": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "enableAdminAPI": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "enforcedNamespaceLabel": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "evaluationInterval": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "externalLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "externalUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ignoreNamespaceSelectors": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "image": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
                    "update": true
                },
                "initContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
                    "update": true
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "listenLocal": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "logFormat": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "logLevel": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "all",
                        "debug",
                        "info",
                        "warn",
                        "error",
                        "none"
                    ],
                    "type": "enum",
                    "update": true
                },
                "name": {
                    "create": true,
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "overrideHonorLabels": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "overrideHonorTimestamps": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "podMetadata": {
                    "create": true,
                    "nullable": true,
                    "type": "objectMeta",
                    "update": true
                },
                "podMonitorNamespaceSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "podMonitorSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "portName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "priorityClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "prometheusExternalLabelName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "query": {
                    "create": true,
                    "nullable": true,
                    "type": "querySpec",
                    "update": true
                },
                "remoteRead": {
                    "create": true,
                    "nullable": true,
                    "type": "array[remoteReadSpec]",
                    "update": true
                },
                "remoteWrite": {
                    "create": true,
                    "nullable": true,
                    "type": "array[remoteWriteSpec]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "replicaExternalLabelName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "replicas": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "resources": {
                    "create": true,
                    "nullable": true,
                    "type": "resourceRequirements",
                    "update": true
                },
                "retention": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "retentionSize": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "routePrefix": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ruleSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "rules": {
                    "create": true,
                    "nullable": true,
                    "type": "rules",
                    "update": true
                },
                "scrapeInterval": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "secrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "securityContext": {
                    "create": true,
                    "nullable": true,
                    "type": "podSecurityContext",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "serviceMonitorSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "sha": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "storage": {
                    "create": true,
                    "nullable": true,
                    "type": "storageSpec",
                    "update": true
                },
                "tag": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tolerations": {
                    "create": true,
                    "nullable": true,
                    "type": "array[toleration]",
                    "update": true
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
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "walCompression": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "namespaceId": {
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
            "id": "prometheusRule",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/prometheusrules",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/prometheusRule"
            },
            "pluralName": "prometheusRules",
            "resourceFields": {
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
                "groups": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ruleGroup]",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "publicEndpoint",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/publicEndpoint"
            },
            "pluralName": "publicEndpoints",
            "resourceFields": {
                "addresses": {
                    "create": false,
                    "nullable": true,
                    "type": "array[string]",
                    "update": false
                },
                "allNodes": {
                    "create": false,
                    "default": false,
                    "type": "boolean",
                    "update": false
                },
                "hostname": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "ingressId": {
                    "create": false,
                    "nullable": true,
                    "type": "reference[ingress]",
                    "update": false
                },
                "nodeId": {
                    "create": false,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": false
                },
                "path": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "podId": {
                    "create": false,
                    "nullable": true,
                    "type": "reference[pod]",
                    "update": false
                },
                "port": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "protocol": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "serviceId": {
                    "create": false,
                    "nullable": true,
                    "type": "reference[service]",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "publishCatalogConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/publishCatalogConfig"
            },
            "pluralName": "publishCatalogConfigs",
            "resourceFields": {
                "catalogTemplate": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "gitAuthor": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "gitBranch": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "gitEmail": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "gitUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "version": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "publishImageConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/publishImageConfig"
            },
            "pluralName": "publishImageConfigs",
            "resourceFields": {
                "buildContext": {
                    "create": true,
                    "default": ".",
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "dockerfilePath": {
                    "create": true,
                    "default": "./Dockerfile",
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "pushRemote": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "registry": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tag": {
                    "create": true,
                    "default": "${CICD_GIT_REPOSITORY_NAME}:${CICD_GIT_BRANCH}",
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "pushPipelineConfigInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/pushPipelineConfigInput"
            },
            "pluralName": "pushPipelineConfigInputs",
            "resourceFields": {
                "configs": {
                    "create": true,
                    "nullable": true,
                    "type": "map[pipelineConfig]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "querySpec",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/querySpec"
            },
            "pluralName": "querySpecs",
            "resourceFields": {
                "lookbackDelta": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "maxConcurrency": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "maxSamples": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "timeout": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "queueConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/queueConfig"
            },
            "pluralName": "queueConfigs",
            "resourceFields": {
                "batchSendDeadline": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "capacity": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "maxBackoff": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "maxRetries": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "maxSamplesPerSend": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "maxShards": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "minBackoff": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "minShards": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "quobyteVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/quobyteVolumeSource"
            },
            "pluralName": "quobyteVolumeSources",
            "resourceFields": {
                "group": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "registry": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tenant": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "user": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "volume": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "rbdVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/rbdVolumeSource"
            },
            "pluralName": "rbdVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "image": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "keyring": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "monitors": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "pool": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                },
                "user": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "recipient",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/recipient"
            },
            "pluralName": "recipients",
            "resourceFields": {
                "notifier": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "recipient": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "registryCredential",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/registryCredential"
            },
            "pluralName": "registryCredentials",
            "resourceFields": {
                "auth": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "email": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "password": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
                },
                "username": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "relabelConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/relabelConfig"
            },
            "pluralName": "relabelConfigs",
            "resourceFields": {
                "action": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "modulus": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "regex": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "replacement": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "separator": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sourceLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "targetLabel": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "remoteReadSpec",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/remoteReadSpec"
            },
            "pluralName": "remoteReadSpecs",
            "resourceFields": {
                "basicAuth": {
                    "create": true,
                    "nullable": true,
                    "type": "basicAuth",
                    "update": true
                },
                "bearerToken": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "bearerTokenFile": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "proxyUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readRecent": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "remoteTimeout": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "requiredMatchers": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "tlsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "tlsConfig",
                    "update": true
                },
                "url": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "remoteWriteSpec",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/remoteWriteSpec"
            },
            "pluralName": "remoteWriteSpecs",
            "resourceFields": {
                "basicAuth": {
                    "create": true,
                    "nullable": true,
                    "type": "basicAuth",
                    "update": true
                },
                "bearerToken": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "bearerTokenFile": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "proxyUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "queueConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "queueConfig",
                    "update": true
                },
                "remoteTimeout": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tlsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "tlsConfig",
                    "update": true
                },
                "url": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "writeRelabelConfigs": {
                    "create": true,
                    "nullable": true,
                    "type": "array[relabelConfig]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "scale": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "uid": {
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
            "id": "replicaSet",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/replicasets",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicaSet"
            },
            "pluralName": "replicaSets",
            "resourceActions": {
                "redeploy": {}
            },
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
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
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "replicaSetConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "replicaSetConfig",
                    "update": true
                },
                "replicaSetStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "replicaSetStatus",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scale": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "replicaSetCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicaSetCondition"
            },
            "pluralName": "replicaSetConditions",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "replicaSetConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicaSetConfig"
            },
            "pluralName": "replicaSetConfigs",
            "resourceFields": {
                "minReadySeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "replicaSetStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicaSetStatus"
            },
            "pluralName": "replicaSetStatuses",
            "resourceFields": {
                "availableReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[replicaSetCondition]",
                    "update": false
                },
                "fullyLabeledReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "observedGeneration": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "readyReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "replicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "scale": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "uid": {
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
                "GET"
            ],
            "id": "replicationController",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/replicationcontrollers",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicationController"
            },
            "pluralName": "replicationControllers",
            "resourceActions": {
                "redeploy": {}
            },
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
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
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "replicationControllerConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "replicationControllerConfig",
                    "update": true
                },
                "replicationControllerStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "replicationControllerStatus",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scale": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
                    "update": true
                }
            },
            "resourceMethods": [
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "replicationControllerCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicationControllerCondition"
            },
            "pluralName": "replicationControllerConditions",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "replicationControllerConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicationControllerConfig"
            },
            "pluralName": "replicationControllerConfigs",
            "resourceFields": {
                "minReadySeconds": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "replicationControllerStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/replicationControllerStatus"
            },
            "pluralName": "replicationControllerStatuses",
            "resourceFields": {
                "availableReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[replicationControllerCondition]",
                    "update": false
                },
                "fullyLabeledReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "observedGeneration": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "readyReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "replicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "repoPerm",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/repoPerm"
            },
            "pluralName": "repoPerms",
            "resourceFields": {
                "admin": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "pull": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "push": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "resourceFieldSelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/resourceFieldSelector"
            },
            "pluralName": "resourceFieldSelectors",
            "resourceFields": {
                "containerName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "divisor": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "resource": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "resourceRequirements",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/resourceRequirements"
            },
            "pluralName": "resourceRequirementses",
            "resourceFields": {
                "limits": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "requests": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "rollbackRevision",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/rollbackRevision"
            },
            "pluralName": "rollbackRevisions",
            "resourceFields": {
                "forceUpgrade": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "revisionId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/project/schemas/apprevision]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "rule",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/rule"
            },
            "pluralName": "rules",
            "resourceFields": {
                "alert": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "expr": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                },
                "for": {
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
                "record": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "ruleGroup",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/ruleGroup"
            },
            "pluralName": "ruleGroups",
            "resourceFields": {
                "interval": {
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
                "partial_response_strategy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "rules": {
                    "create": true,
                    "nullable": true,
                    "type": "array[rule]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "rules",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/rules"
            },
            "pluralName": "ruleses",
            "resourceFields": {
                "alert": {
                    "create": true,
                    "nullable": true,
                    "type": "rulesAlert",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "rulesAlert",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/rulesAlert"
            },
            "pluralName": "rulesAlerts",
            "resourceFields": {
                "forGracePeriod": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "forOutageTolerance": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "resendDelay": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "runPipelineInput",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/runPipelineInput"
            },
            "pluralName": "runPipelineInputs",
            "resourceFields": {
                "branch": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "runScriptConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/runScriptConfig"
            },
            "pluralName": "runScriptConfigs",
            "resourceFields": {
                "image": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "shellScript": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "scaleIOVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/scaleIOVolumeSource"
            },
            "pluralName": "scaleIOVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "gateway": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "protectionDomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                },
                "sslEnabled": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "storageMode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "storagePool": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "system": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "volumeName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "scheduling",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/scheduling"
            },
            "pluralName": "schedulings",
            "resourceFields": {
                "node": {
                    "create": true,
                    "nullable": true,
                    "type": "nodeScheduling",
                    "update": true
                },
                "priority": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "priorityClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scheduler": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "tolerate": {
                    "create": true,
                    "nullable": true,
                    "type": "array[toleration]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "seccompProfile",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/seccompProfile"
            },
            "pluralName": "seccompProfiles",
            "resourceFields": {
                "localhostProfile": {
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "immutable": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "kind": {
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
                "namespaceId": {
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
            "id": "secret",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/secrets",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/secret"
            },
            "pluralName": "secrets",
            "resourceFields": {
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
                "data": {
                    "create": true,
                    "nullable": true,
                    "type": "map[base64]",
                    "update": true
                },
                "description": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "immutable": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "kind": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "Opaque",
                        "serviceAccountToken",
                        "dockerCredential",
                        "basicAuth",
                        "sshAuth",
                        "certificate"
                    ],
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
                    "required": true,
                    "type": "hostname",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "stringData": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "secretEnvSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/secretEnvSource"
            },
            "pluralName": "secretEnvSources",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "secretKeySelector",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/secretKeySelector"
            },
            "pluralName": "secretKeySelectors",
            "resourceFields": {
                "key": {
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
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "secretOrConfigMap",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/secretOrConfigMap"
            },
            "pluralName": "secretOrConfigMaps",
            "resourceFields": {
                "configMap": {
                    "create": true,
                    "nullable": true,
                    "type": "configMapKeySelector",
                    "update": true
                },
                "secret": {
                    "create": true,
                    "nullable": true,
                    "type": "secretKeySelector",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "secretProjection",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/secretProjection"
            },
            "pluralName": "secretProjections",
            "resourceFields": {
                "items": {
                    "create": true,
                    "nullable": true,
                    "type": "array[keyToPath]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "secretVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/secretVolumeSource"
            },
            "pluralName": "secretVolumeSources",
            "resourceFields": {
                "defaultMode": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "items": {
                    "create": true,
                    "nullable": true,
                    "type": "array[keyToPath]",
                    "update": true
                },
                "optional": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "secretName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "securityContext",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/securityContext"
            },
            "pluralName": "securityContexts",
            "resourceFields": {
                "allowPrivilegeEscalation": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "capAdd": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "AUDIT_CONTROL",
                        "AUDIT_WRITE",
                        "BLOCK_SUSPEND",
                        "CHOWN",
                        "DAC_OVERRIDE",
                        "DAC_READ_SEARCH",
                        "FOWNER",
                        "FSETID",
                        "IPC_LOCK",
                        "IPC_OWNER",
                        "KILL",
                        "LEASE",
                        "LINUX_IMMUTABLE",
                        "MAC_ADMIN",
                        "MAC_OVERRIDE",
                        "MKNOD",
                        "NET_ADMIN",
                        "NET_BIND_SERVICE",
                        "NET_BROADCAST",
                        "NET_RAW",
                        "SETFCAP",
                        "SETGID",
                        "SETPCAP",
                        "SETUID",
                        "SYSLOG",
                        "SYS_ADMIN",
                        "SYS_BOOT",
                        "SYS_CHROOT",
                        "SYS_MODULE",
                        "SYS_NICE",
                        "SYS_PACCT",
                        "SYS_PTRACE",
                        "SYS_RAWIO",
                        "SYS_RESOURCE",
                        "SYS_TIME",
                        "SYS_TTY_CONFIG",
                        "WAKE_ALARM",
                        "ALL"
                    ],
                    "type": "array[enum]",
                    "update": true
                },
                "capDrop": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "AUDIT_CONTROL",
                        "AUDIT_WRITE",
                        "BLOCK_SUSPEND",
                        "CHOWN",
                        "DAC_OVERRIDE",
                        "DAC_READ_SEARCH",
                        "FOWNER",
                        "FSETID",
                        "IPC_LOCK",
                        "IPC_OWNER",
                        "KILL",
                        "LEASE",
                        "LINUX_IMMUTABLE",
                        "MAC_ADMIN",
                        "MAC_OVERRIDE",
                        "MKNOD",
                        "NET_ADMIN",
                        "NET_BIND_SERVICE",
                        "NET_BROADCAST",
                        "NET_RAW",
                        "SETFCAP",
                        "SETGID",
                        "SETPCAP",
                        "SETUID",
                        "SYSLOG",
                        "SYS_ADMIN",
                        "SYS_BOOT",
                        "SYS_CHROOT",
                        "SYS_MODULE",
                        "SYS_NICE",
                        "SYS_PACCT",
                        "SYS_PTRACE",
                        "SYS_RAWIO",
                        "SYS_RESOURCE",
                        "SYS_TIME",
                        "SYS_TTY_CONFIG",
                        "WAKE_ALARM",
                        "ALL"
                    ],
                    "type": "array[enum]",
                    "update": true
                },
                "privileged": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "procMount": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "server",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/server"
            },
            "pluralName": "servers",
            "resourceFields": {
                "hosts": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "port": {
                    "create": true,
                    "nullable": true,
                    "type": "port",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "nullable": true,
                    "type": "tlsOptions",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "clusterIp": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "externalTrafficPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "healthCheckNodePort": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostname": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "ipFamily": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "kind": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "loadBalancerIP": {
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
                "namespaceId": {
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
                "publishNotReadyAddresses": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "sessionAffinity": {
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
                "workloadId": {
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
            "id": "service",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/services",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/service"
            },
            "pluralName": "services",
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "clusterIp": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "externalIPs": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "externalTrafficPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "healthCheckNodePort": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "ipAddresses": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "ipFamily": {
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
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "loadBalancerIP": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "loadBalancerSourceRanges": {
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "ports": {
                    "create": true,
                    "nullable": true,
                    "type": "array[servicePort]",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "publishNotReadyAddresses": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "sessionAffinity": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sessionAffinityConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "sessionAffinityConfig",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "targetDnsRecordIds": {
                    "create": true,
                    "nullable": true,
                    "type": "array[reference[dnsRecord]]",
                    "update": true
                },
                "targetWorkloadIds": {
                    "create": true,
                    "nullable": true,
                    "type": "array[reference[workload]]",
                    "update": true
                },
                "topologyKeys": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
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
                "workloadId": {
                    "create": false,
                    "nullable": true,
                    "type": "reference[workload]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "accountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "accountUid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "caCrt": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "namespaceId": {
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
                "token": {
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
            "id": "serviceAccountToken",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/serviceaccounttokens",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/serviceAccountToken"
            },
            "pluralName": "serviceAccountTokens",
            "resourceFields": {
                "accountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "accountUid": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "caCrt": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "token": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "serviceAccountTokenProjection",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/serviceAccountTokenProjection"
            },
            "pluralName": "serviceAccountTokenProjections",
            "resourceFields": {
                "audience": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "expirationSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "id": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "jobLabel": {
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
                "namespaceId": {
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
                "sampleLimit": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "targetService": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "targetWorkload": {
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
            "id": "serviceMonitor",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/servicemonitors",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/serviceMonitor"
            },
            "pluralName": "serviceMonitors",
            "resourceFields": {
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
                "endpoints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[endpoint]",
                    "update": true
                },
                "id": {
                    "create": false,
                    "nullable": true,
                    "type": "dnsLabel",
                    "update": false
                },
                "jobLabel": {
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
                    "type": "string",
                    "update": true
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "namespaceSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "podTargetLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
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
                "sampleLimit": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "targetLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "targetService": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "targetWorkload": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "servicePort",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/servicePort"
            },
            "pluralName": "servicePorts",
            "resourceFields": {
                "appProtocol": {
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
                "nodePort": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "port": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "protocol": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "targetPort": {
                    "create": true,
                    "nullable": true,
                    "type": "intOrString",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "sessionAffinityConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sessionAffinityConfig"
            },
            "pluralName": "sessionAffinityConfigs",
            "resourceFields": {
                "clientIP": {
                    "create": true,
                    "nullable": true,
                    "type": "clientIPConfig",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "sourceCodeConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sourceCodeConfig"
            },
            "pluralName": "sourceCodeConfigs",
            "resourceFields": {},
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "accessToken": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "avatarUrl": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "displayName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "expiry": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "gitCloneToken": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "gitLoginName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "htmlUrl": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "loginName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "logout": {
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
                "namespaceId": {
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
                "refreshToken": {
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
                "sourceCodeType": {
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
                "userId": {
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
            "id": "sourceCodeCredential",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/sourcecodecredentials",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sourceCodeCredential"
            },
            "pluralName": "sourceCodeCredentials",
            "resourceActions": {
                "logout": {},
                "refreshrepos": {}
            },
            "resourceFields": {
                "accessToken": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false,
                    "writeOnly": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "avatarUrl": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "displayName": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "expiry": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "gitCloneToken": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false,
                    "writeOnly": true
                },
                "gitLoginName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "htmlUrl": {
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
                "loginName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "logout": {
                    "create": false,
                    "default": false,
                    "type": "boolean",
                    "update": false
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
                    "type": "reference[project]",
                    "update": true
                },
                "refreshToken": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": false,
                    "writeOnly": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "sourceCodeType": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "required": true,
                    "type": "enum",
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
                "userId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[user]",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "resourceMethods": [
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "type": {
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
                "GET"
            ],
            "id": "sourceCodeProvider",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/sourcecodeproviders",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sourceCodeProvider"
            },
            "pluralName": "sourceCodeProviders",
            "resourceFields": {
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
                    "type": "reference[project]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "enabled": {
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
                "namespaceId": {
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
                "type": {
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
                "GET"
            ],
            "id": "sourceCodeProviderConfig",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/sourcecodeproviderconfigs",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sourceCodeProviderConfig"
            },
            "pluralName": "sourceCodeProviderConfigs",
            "resourceFields": {
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
                "enabled": {
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                    "required": true,
                    "type": "reference[project]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "type": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "type": "enum",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "defaultBranch": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "language": {
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
                "namespaceId": {
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
                "sourceCodeCredentialId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "sourceCodeType": {
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
                "url": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "userId": {
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
            "id": "sourceCodeRepository",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/sourcecoderepositories",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sourceCodeRepository"
            },
            "pluralName": "sourceCodeRepositories",
            "resourceFields": {
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
                "defaultBranch": {
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
                "language": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
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
                "permissions": {
                    "create": true,
                    "nullable": true,
                    "type": "repoPerm",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[project]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "sourceCodeCredentialId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[sourceCodeCredential]",
                    "update": true
                },
                "sourceCodeType": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "github",
                        "gitlab",
                        "bitbucketcloud",
                        "bitbucketserver"
                    ],
                    "required": true,
                    "type": "enum",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "sourceCodeRepositoryStatus",
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
                "url": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "userId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[user]",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                }
            },
            "resourceMethods": [
                "DELETE",
                "GET"
            ],
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "sourceCodeRepositoryStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sourceCodeRepositoryStatus"
            },
            "pluralName": "sourceCodeRepositoryStatuses",
            "resourceFields": {},
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "certFingerprint": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "privateKey": {
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
            "id": "sshAuth",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/sshauths",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sshAuth"
            },
            "pluralName": "sshAuths",
            "resourceFields": {
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "certFingerprint": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "privateKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true,
                    "writeOnly": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "stage",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/stage"
            },
            "pluralName": "stages",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "steps": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "array[step]",
                    "update": true
                },
                "when": {
                    "create": true,
                    "nullable": true,
                    "type": "constraints",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "stageStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/stageStatus"
            },
            "pluralName": "stageStatuses",
            "resourceFields": {
                "ended": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "started": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "state": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "steps": {
                    "create": true,
                    "nullable": true,
                    "type": "array[stepStatus]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "collectionFilters": {
                "activeDeadlineSeconds": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "automountServiceAccountToken": {
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
                "dnsPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "enableServiceLinks": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "fsGroupChangePolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "fsgid": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "hostIPC": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostNetwork": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostPID": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "hostname": {
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
                "namespaceId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "nodeId": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "preemptionPolicy": {
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
                "restartPolicy": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsGroup": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "runAsNonRoot": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "runtimeClassName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "scale": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "serviceAccountName": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "setHostnameAsFQDN": {
                    "modifiers": [
                        "eq",
                        "ne"
                    ]
                },
                "shareProcessNamespace": {
                    "modifiers": [
                        "eq",
                        "ne"
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
                "subdomain": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "terminationGracePeriodSeconds": {
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
                "uid": {
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
            "id": "statefulSet",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/statefulsets",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/statefulSet"
            },
            "pluralName": "statefulSets",
            "resourceActions": {
                "redeploy": {}
            },
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
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
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scale": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "statefulSetConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "statefulSetConfig",
                    "update": true
                },
                "statefulSetStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "statefulSetStatus",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "statefulSetCondition",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/statefulSetCondition"
            },
            "pluralName": "statefulSetConditions",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "statefulSetConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/statefulSetConfig"
            },
            "pluralName": "statefulSetConfigs",
            "resourceFields": {
                "partition": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "podManagementPolicy": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "OrderedReady",
                        "Parallel"
                    ],
                    "type": "enum",
                    "update": true
                },
                "revisionHistoryLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "serviceName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "strategy": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "RollingUpdate",
                        "OnDelete"
                    ],
                    "type": "enum",
                    "update": true
                },
                "volumeClaimTemplates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[persistentVolumeClaim]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "statefulSetStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/statefulSetStatus"
            },
            "pluralName": "statefulSetStatuses",
            "resourceFields": {
                "collisionCount": {
                    "create": false,
                    "nullable": true,
                    "type": "int",
                    "update": false
                },
                "conditions": {
                    "create": false,
                    "nullable": true,
                    "type": "array[statefulSetCondition]",
                    "update": false
                },
                "currentReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "currentRevision": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "observedGeneration": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "readyReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "replicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                },
                "updateRevision": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "updatedReplicas": {
                    "create": false,
                    "default": 0,
                    "type": "int",
                    "update": false
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "step",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/step"
            },
            "pluralName": "steps",
            "resourceFields": {
                "applyAppConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "applyAppConfig",
                    "update": true
                },
                "applyYamlConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "applyYamlConfig",
                    "update": true
                },
                "cpuLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "cpuRequest": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "env": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "envFrom": {
                    "create": true,
                    "nullable": true,
                    "type": "array[envFrom]",
                    "update": true
                },
                "memoryLimit": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "memoryRequest": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "privileged": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "publishCatalogConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "publishCatalogConfig",
                    "update": true
                },
                "publishImageConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "publishImageConfig",
                    "update": true
                },
                "runScriptConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "runScriptConfig",
                    "update": true
                },
                "sourceCodeConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "sourceCodeConfig",
                    "update": true
                },
                "when": {
                    "create": true,
                    "nullable": true,
                    "type": "constraints",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "stepStatus",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/stepStatus"
            },
            "pluralName": "stepStatuses",
            "resourceFields": {
                "ended": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "started": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "state": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "storageOSVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/storageOSVolumeSource"
            },
            "pluralName": "storageOSVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "secretRef": {
                    "create": true,
                    "nullable": true,
                    "type": "localObjectReference",
                    "update": true
                },
                "volumeName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "volumeNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "storageSpec",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/storageSpec"
            },
            "pluralName": "storageSpecs",
            "resourceFields": {
                "emptyDir": {
                    "create": true,
                    "nullable": true,
                    "type": "emptyDirVolumeSource",
                    "update": true
                },
                "volumeClaimTemplate": {
                    "create": true,
                    "nullable": true,
                    "type": "persistentVolumeClaim",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "stringMatch",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/stringMatch"
            },
            "pluralName": "stringMatches",
            "resourceFields": {
                "exact": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "prefix": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "regex": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "suffix": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/subscribe",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/subscribe"
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "subset",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/subset"
            },
            "pluralName": "subsets",
            "resourceFields": {
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "trafficPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "trafficPolicy",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "sysctl",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/sysctl"
            },
            "pluralName": "sysctls",
            "resourceFields": {
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "value": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "tcpRoute",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/tcpRoute"
            },
            "pluralName": "tcpRoutes",
            "resourceFields": {
                "match": {
                    "create": true,
                    "nullable": true,
                    "type": "array[l4MatchAttributes]",
                    "update": true
                },
                "route": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpRouteDestination]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "tcpSettings",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/tcpSettings"
            },
            "pluralName": "tcpSettingses",
            "resourceFields": {
                "connectTimeout": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "maxConnections": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "tlsConfig",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/tlsConfig"
            },
            "pluralName": "tlsConfigs",
            "resourceFields": {
                "ca": {
                    "create": true,
                    "nullable": true,
                    "type": "secretOrConfigMap",
                    "update": true
                },
                "caFile": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "cert": {
                    "create": true,
                    "nullable": true,
                    "type": "secretOrConfigMap",
                    "update": true
                },
                "certFile": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "insecureSkipVerify": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "keyFile": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "keySecret": {
                    "create": true,
                    "nullable": true,
                    "type": "secretKeySelector",
                    "update": true
                },
                "serverName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "tlsMatchAttributes",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/tlsMatchAttributes"
            },
            "pluralName": "tlsMatchAttributeses",
            "resourceFields": {
                "destinationSubnets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "gateways": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "port": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "sniHosts": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "sourceLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "tlsOptions",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/tlsOptions"
            },
            "pluralName": "tlsOptionses",
            "resourceFields": {
                "caCertificates": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "credentialName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "httpsRedirect": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "mode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "privateKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "serverCertificate": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "subjectAltNames": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "tlsRoute",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/tlsRoute"
            },
            "pluralName": "tlsRoutes",
            "resourceFields": {
                "match": {
                    "create": true,
                    "nullable": true,
                    "type": "array[tlsMatchAttributes]",
                    "update": true
                },
                "route": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpRouteDestination]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "tlsSettings",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/tlsSettings"
            },
            "pluralName": "tlsSettingses",
            "resourceFields": {
                "caCertificates": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "clientCertificate": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "mode": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "privateKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sni": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "subjectAltNames": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "toleration",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/toleration"
            },
            "pluralName": "tolerations",
            "resourceFields": {
                "effect": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
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
                "tolerationSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "value": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "topologySpreadConstraint",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/topologySpreadConstraint"
            },
            "pluralName": "topologySpreadConstraints",
            "resourceFields": {
                "labelSelector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "maxSkew": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "topologyKey": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "whenUnsatisfiable": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "trafficPolicy",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/trafficPolicy"
            },
            "pluralName": "trafficPolicies",
            "resourceFields": {
                "connectionPool": {
                    "create": true,
                    "nullable": true,
                    "type": "connectionPoolSettings",
                    "update": true
                },
                "loadBalancer": {
                    "create": true,
                    "nullable": true,
                    "type": "loadBalancerSettings",
                    "update": true
                },
                "outlierDetection": {
                    "create": true,
                    "nullable": true,
                    "type": "outlierDetection",
                    "update": true
                },
                "portLevelSettings": {
                    "create": true,
                    "nullable": true,
                    "type": "array[portTrafficPolicy]",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "nullable": true,
                    "type": "tlsSettings",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "typedLocalObjectReference",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/typedLocalObjectReference"
            },
            "pluralName": "typedLocalObjectReferences",
            "resourceFields": {
                "apiGroup": {
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
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "namespaceId": {
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
            "id": "virtualService",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/virtualservices",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/virtualService"
            },
            "pluralName": "virtualServices",
            "resourceFields": {
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
                "gateways": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "hosts": {
                    "create": true,
                    "nullable": true,
                    "type": "array[string]",
                    "update": true
                },
                "http": {
                    "create": true,
                    "nullable": true,
                    "type": "array[httpRoute]",
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
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
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
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "status": {
                    "create": false,
                    "nullable": true,
                    "type": "json",
                    "update": false
                },
                "tcp": {
                    "create": true,
                    "nullable": true,
                    "type": "array[tcpRoute]",
                    "update": true
                },
                "tls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[tlsRoute]",
                    "update": true
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "volume",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/volume"
            },
            "pluralName": "volumes",
            "resourceFields": {
                "awsElasticBlockStore": {
                    "create": true,
                    "nullable": true,
                    "type": "awsElasticBlockStoreVolumeSource",
                    "update": true
                },
                "azureDisk": {
                    "create": true,
                    "nullable": true,
                    "type": "azureDiskVolumeSource",
                    "update": true
                },
                "azureFile": {
                    "create": true,
                    "nullable": true,
                    "type": "azureFileVolumeSource",
                    "update": true
                },
                "cephfs": {
                    "create": true,
                    "nullable": true,
                    "type": "cephFSVolumeSource",
                    "update": true
                },
                "cinder": {
                    "create": true,
                    "nullable": true,
                    "type": "cinderVolumeSource",
                    "update": true
                },
                "configMap": {
                    "create": true,
                    "nullable": true,
                    "type": "configMapVolumeSource",
                    "update": true
                },
                "csi": {
                    "create": true,
                    "nullable": true,
                    "type": "csiVolumeSource",
                    "update": true
                },
                "downwardAPI": {
                    "create": true,
                    "nullable": true,
                    "type": "downwardAPIVolumeSource",
                    "update": true
                },
                "emptyDir": {
                    "create": true,
                    "nullable": true,
                    "type": "emptyDirVolumeSource",
                    "update": true
                },
                "ephemeral": {
                    "create": true,
                    "nullable": true,
                    "type": "ephemeralVolumeSource",
                    "update": true
                },
                "fc": {
                    "create": true,
                    "nullable": true,
                    "type": "fcVolumeSource",
                    "update": true
                },
                "flexVolume": {
                    "create": true,
                    "nullable": true,
                    "type": "flexVolumeSource",
                    "update": true
                },
                "flocker": {
                    "create": true,
                    "nullable": true,
                    "type": "flockerVolumeSource",
                    "update": true
                },
                "gcePersistentDisk": {
                    "create": true,
                    "nullable": true,
                    "type": "gcePersistentDiskVolumeSource",
                    "update": true
                },
                "gitRepo": {
                    "create": true,
                    "nullable": true,
                    "type": "gitRepoVolumeSource",
                    "update": true
                },
                "glusterfs": {
                    "create": true,
                    "nullable": true,
                    "type": "glusterfsVolumeSource",
                    "update": true
                },
                "hostPath": {
                    "create": true,
                    "nullable": true,
                    "type": "hostPathVolumeSource",
                    "update": true
                },
                "iscsi": {
                    "create": true,
                    "nullable": true,
                    "type": "iscsiVolumeSource",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "nfs": {
                    "create": true,
                    "nullable": true,
                    "type": "nfsVolumeSource",
                    "update": true
                },
                "persistentVolumeClaim": {
                    "create": true,
                    "nullable": true,
                    "type": "persistentVolumeClaimVolumeSource",
                    "update": true
                },
                "photonPersistentDisk": {
                    "create": true,
                    "nullable": true,
                    "type": "photonPersistentDiskVolumeSource",
                    "update": true
                },
                "portworxVolume": {
                    "create": true,
                    "nullable": true,
                    "type": "portworxVolumeSource",
                    "update": true
                },
                "projected": {
                    "create": true,
                    "nullable": true,
                    "type": "projectedVolumeSource",
                    "update": true
                },
                "quobyte": {
                    "create": true,
                    "nullable": true,
                    "type": "quobyteVolumeSource",
                    "update": true
                },
                "rbd": {
                    "create": true,
                    "nullable": true,
                    "type": "rbdVolumeSource",
                    "update": true
                },
                "scaleIO": {
                    "create": true,
                    "nullable": true,
                    "type": "scaleIOVolumeSource",
                    "update": true
                },
                "secret": {
                    "create": true,
                    "nullable": true,
                    "type": "secretVolumeSource",
                    "update": true
                },
                "storageos": {
                    "create": true,
                    "nullable": true,
                    "type": "storageOSVolumeSource",
                    "update": true
                },
                "vsphereVolume": {
                    "create": true,
                    "nullable": true,
                    "type": "vsphereVirtualDiskVolumeSource",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "volumeDevice",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/volumeDevice"
            },
            "pluralName": "volumeDevices",
            "resourceFields": {
                "devicePath": {
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
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "volumeMount",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/volumeMount"
            },
            "pluralName": "volumeMounts",
            "resourceFields": {
                "mountPath": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "mountPropagation": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "name": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "string",
                    "update": true
                },
                "readOnly": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "subPath": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "subPathExpr": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "volumeProjection",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/volumeProjection"
            },
            "pluralName": "volumeProjections",
            "resourceFields": {
                "configMap": {
                    "create": true,
                    "nullable": true,
                    "type": "configMapProjection",
                    "update": true
                },
                "downwardAPI": {
                    "create": true,
                    "nullable": true,
                    "type": "downwardAPIProjection",
                    "update": true
                },
                "secret": {
                    "create": true,
                    "nullable": true,
                    "type": "secretProjection",
                    "update": true
                },
                "serviceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "serviceAccountTokenProjection",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "vsphereVirtualDiskVolumeSource",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/vsphereVirtualDiskVolumeSource"
            },
            "pluralName": "vsphereVirtualDiskVolumeSources",
            "resourceFields": {
                "fsType": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "storagePolicyID": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "storagePolicyName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "volumePath": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "weightedPodAffinityTerm",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/weightedPodAffinityTerm"
            },
            "pluralName": "weightedPodAffinityTerms",
            "resourceFields": {
                "podAffinityTerm": {
                    "create": true,
                    "nullable": true,
                    "type": "podAffinityTerm",
                    "update": true
                },
                "weight": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "windowsSecurityContextOptions",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/windowsSecurityContextOptions"
            },
            "pluralName": "windowsSecurityContextOptionses",
            "resourceFields": {
                "gmsaCredentialSpec": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "gmsaCredentialSpecName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsUserName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
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
                "name": {
                    "modifiers": [
                        "eq",
                        "ne",
                        "in",
                        "notin"
                    ]
                },
                "namespaceId": {
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
                }
            },
            "collectionMethods": [
                "POST",
                "GET"
            ],
            "id": "workload",
            "links": {
                "collection": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/workloads",
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/workload"
            },
            "pluralName": "workloads",
            "resourceActions": {
                "pause": {},
                "redeploy": {},
                "resume": {},
                "rollback": {
                    "input": "rollbackRevision"
                }
            },
            "resourceFields": {
                "activeDeadlineSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "annotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "automountServiceAccountToken": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "containers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[container]",
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
                "cronJobConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "cronJobConfig",
                    "update": true
                },
                "cronJobStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "cronJobStatus",
                    "update": false
                },
                "daemonSetConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "daemonSetConfig",
                    "update": true
                },
                "daemonSetStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "daemonSetStatus",
                    "update": false
                },
                "deploymentConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "deploymentConfig",
                    "update": true
                },
                "deploymentStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "deploymentStatus",
                    "update": false
                },
                "dnsConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "podDNSConfig",
                    "update": true
                },
                "dnsPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "enableServiceLinks": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "ephemeralContainers": {
                    "create": true,
                    "nullable": true,
                    "type": "array[ephemeralContainer]",
                    "update": true
                },
                "fsGroupChangePolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "fsgid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "gids": {
                    "create": true,
                    "nullable": true,
                    "type": "array[int]",
                    "update": true
                },
                "hostAliases": {
                    "create": true,
                    "nullable": true,
                    "type": "array[hostAlias]",
                    "update": true
                },
                "hostIPC": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostNetwork": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostPID": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "hostname": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "imagePullSecrets": {
                    "create": true,
                    "nullable": true,
                    "type": "array[localObjectReference]",
                    "update": true
                },
                "jobConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "jobConfig",
                    "update": true
                },
                "jobStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "jobStatus",
                    "update": false
                },
                "labels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "name": {
                    "create": true,
                    "required": true,
                    "type": "dnsLabelRestricted",
                    "update": false
                },
                "namespaceId": {
                    "create": true,
                    "nullable": true,
                    "required": true,
                    "type": "reference[/v3/clusters/schemas/namespace]",
                    "update": false
                },
                "nodeId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/node]",
                    "update": true
                },
                "overhead": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "ownerReferences": {
                    "create": false,
                    "nullable": true,
                    "type": "array[ownerReference]",
                    "update": false
                },
                "paused": {
                    "create": true,
                    "default": false,
                    "type": "boolean",
                    "update": true
                },
                "preemptionPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "projectId": {
                    "create": true,
                    "nullable": true,
                    "type": "reference[/v3/schemas/project]",
                    "update": false
                },
                "publicEndpoints": {
                    "create": false,
                    "nullable": true,
                    "type": "array[publicEndpoint]",
                    "update": false
                },
                "readinessGates": {
                    "create": true,
                    "nullable": true,
                    "type": "array[podReadinessGate]",
                    "update": true
                },
                "removed": {
                    "create": false,
                    "nullable": true,
                    "type": "date",
                    "update": false
                },
                "replicaSetConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "replicaSetConfig",
                    "update": true
                },
                "replicaSetStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "replicaSetStatus",
                    "update": false
                },
                "replicationControllerConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "replicationControllerConfig",
                    "update": true
                },
                "replicationControllerStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "replicationControllerStatus",
                    "update": false
                },
                "restartPolicy": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "runAsGroup": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "runAsNonRoot": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "runtimeClassName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "scale": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "scheduling": {
                    "create": true,
                    "nullable": true,
                    "type": "scheduling",
                    "update": true
                },
                "seccompProfile": {
                    "create": true,
                    "nullable": true,
                    "type": "seccompProfile",
                    "update": true
                },
                "selector": {
                    "create": true,
                    "nullable": true,
                    "type": "labelSelector",
                    "update": true
                },
                "serviceAccountName": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "setHostnameAsFQDN": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "shareProcessNamespace": {
                    "create": true,
                    "nullable": true,
                    "type": "boolean",
                    "update": true
                },
                "state": {
                    "create": false,
                    "type": "string",
                    "update": false
                },
                "statefulSetConfig": {
                    "create": true,
                    "nullable": true,
                    "type": "statefulSetConfig",
                    "update": true
                },
                "statefulSetStatus": {
                    "create": false,
                    "nullable": true,
                    "type": "statefulSetStatus",
                    "update": false
                },
                "subdomain": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "sysctls": {
                    "create": true,
                    "nullable": true,
                    "type": "array[sysctl]",
                    "update": true
                },
                "terminationGracePeriodSeconds": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "topologySpreadConstraints": {
                    "create": true,
                    "nullable": true,
                    "type": "array[topologySpreadConstraint]",
                    "update": true
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
                "ttlSecondsAfterFinished": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uid": {
                    "create": true,
                    "nullable": true,
                    "type": "int",
                    "update": true
                },
                "uuid": {
                    "create": false,
                    "nullable": true,
                    "type": "string",
                    "update": false
                },
                "volumes": {
                    "create": true,
                    "nullable": true,
                    "type": "array[volume]",
                    "update": true
                },
                "windowsOptions": {
                    "create": true,
                    "nullable": true,
                    "type": "windowsSecurityContextOptions",
                    "update": true
                },
                "workloadAnnotations": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadLabels": {
                    "create": true,
                    "nullable": true,
                    "type": "map[string]",
                    "update": true
                },
                "workloadMetrics": {
                    "create": true,
                    "nullable": true,
                    "type": "array[workloadMetric]",
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
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        },
        {
            "baseType": "schema",
            "id": "workloadMetric",
            "links": {
                "self": "https://ec2-34-219-113-131.us-west-2.compute.amazonaws.com/v3/project/schemas/workloadMetric"
            },
            "pluralName": "workloadMetrics",
            "resourceFields": {
                "path": {
                    "create": true,
                    "nullable": true,
                    "type": "string",
                    "update": true
                },
                "port": {
                    "create": true,
                    "default": 0,
                    "type": "int",
                    "update": true
                },
                "schema": {
                    "create": true,
                    "nullable": true,
                    "options": [
                        "HTTP",
                        "HTTPS"
                    ],
                    "type": "enum",
                    "update": true
                }
            },
            "type": "schema",
            "version": {
                "filterField": "/v3/schemas/project",
                "group": "project.cattle.io",
                "path": "/v3/project",
                "subContext": true,
                "version": "v3"
            }
        }
    ]
}
export default projectSchemas