import {JsonSchema} from "../interfaces/jsonschema";

export const userSchema: JsonSchema = {
    id: "/User",
    type: "object",
    properties: {
        id: {type: "string"},
        isOnline: {type: "string"},
        roles: {$ref: "#/definitions/RolesType"},
        visitList: {
            type: "array",
            items: {$ref: "#/definitions/VisitType"}
        },
        local: {$ref: "#/definitions/LocalType"},
        org: {$ref: "#/definitions/OrgType"}
        // orgList: {
        //     type: "array",
        //     items: {$ref: "#/definitions/OrgType"}
        // }
    },
    additionalProperties: false,
    definitions: {
        GeoType: {
            type: "object",
            required: ["latitude", "longitude"],
            properties: {
                latitude: {type: "number"},
                longitude: {type: "number"},
                geo_id: {type: "number"},
                country_iso_code: {type: "string"},
                country: {type: "string"},
                city: {type: "string"},
                time_zone: {type: "string"}
            },
            additionalProperties: false
        },
        RolesType: {
            type: "object",
            properties: {
                isAdmin: {type: "boolean"},
                isModerator: {type: "boolean"}
            },
            additionalProperties: false
        },
        VisitType: {
            type: "object",
            properties: {
                language: {type: "string"},
                ip: {type: "string"},
                userAgent: {type: "string"},
                timezone: {type: "number"},
                geo: {$ref: "#/definitions/GeoType"},
                connectTime: {type: "Date"},
                disconnectTime: {type: "Date"},
                currentRoom: {type: "string"}
            },
            additionalProperties: false
        },
        LocalType: {
            type: "object",
            required: ["email", "password", "firstName", "lastName", "taxNumber"],
            properties: {
                email: {
                    type: "string",
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                },
                password: {type: "string"},
                firstName: {type: "string", minLength: 2},
                lastName: {type: "string", minLength: 2},
                taxNumber: {type: "string", minLength: 5},
                token: {type: "string"},
                avatar: {type: "string"},
                language: {type: "string"}
            },
            additionalProperties: false
        },
        OrgType: {
            type: "object",
            properties: {
                id: {type: "string"},
                kind: {
                    type: "number",
                    minimum: 0,
                    maximum: 4
                },
                name: {type: "string", minLength: 2},
                country: {type: "string"},
                city: {type: "string"},
                address: {type: "string", minLength: 5},
                zip: {type: "string", minLength: 6, maxLength: 6},
                phone: {
                    type: "string",
                    pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
                },
                // phoneList: {
                //     type: "array",
                //     items: {
                //         type: "string",
                //         pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
                //     }
                // },
                isNeedSendPaperInvoice: {type: "boolean"},
                seatAmount: {type: "number"},
                operatingTime: {
                    type: "array",
                    items: {type: "Date"}
                },
                cameraList: {
                    type: "array",
                    items: {$ref: "#/definitions/CameraType"}
                },
                photo_id: {type: "string"},
                about: {type: "string"}
            },
            additionalProperties: false
        },
        CameraType: {
            type: "object",
            properties: {
                isInside: {type: "boolean"},
                hasSound: {type: "boolean"},
                lastScreenShot: {type: "string"},
                kind: {type: "string"},
                resolution: {type: "array", items: {type: "number"}}
            },
            additionalProperties: false
        }
    }
};
