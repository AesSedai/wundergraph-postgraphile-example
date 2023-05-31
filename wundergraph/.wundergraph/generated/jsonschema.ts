// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import { JSONSchema7 } from "json-schema";

interface Schema {
	UsersGet: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	UsersSubscribe: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
	UsersUpdate: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
	UsersGet: {
		input: {
			type: "object",
			properties: { id: { type: "string" } },
			required: ["id"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: { type: "object", properties: { data: {} } },
	},
	UsersSubscribe: {
		input: {
			type: "object",
			properties: { id: { type: "string" } },
			required: ["id"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: { type: "object", properties: { data: {} } },
	},
	UsersUpdate: {
		input: {
			type: "object",
			properties: { id: { type: "string" }, name: { type: "string" }, bio: { type: "string" } },
			required: ["id", "name", "bio"],
			additionalProperties: false,
			$schema: "http://json-schema.org/draft-07/schema#",
		},
		response: { type: "object", properties: { data: {} } },
	},
};
export default jsonSchema;