"use strict";var e=require("@wundergraph/sdk");var r=require("@wundergraph/sdk/server"),t=(0,r.configureWunderGraphServer)(()=>({hooks:{queries:{Countries:{preResolve:async({operations:o})=>{}}},mutations:{}}}));var n=require("@wundergraph/sdk"),i=(0,n.configureWunderGraphOperations)({operations:{defaultConfig:{authentication:{required:!1}},queries:o=>({...o,caching:{enable:!1,staleWhileRevalidate:60,maxAge:60,public:!0},liveQuery:{enable:!0,pollingIntervalSeconds:1}}),mutations:o=>({...o}),subscriptions:o=>({...o}),custom:{}}});var a=e.introspect.graphql({apiNamespace:"countries",url:"https://countries.trevorblades.com/"}),s=e.introspect.graphql({apiNamespace:"pg",url:"http://localhost:5000/graphql",introspection:{pollingIntervalSeconds:30}});(0,e.configureWunderGraphApplication)({apis:[a,s],server:t,operations:i,generate:{codeGenerators:[]},cors:{...e.cors.allowAll,allowedOrigins:process.env.NODE_ENV==="production"?["http://localhost:3000"]:["http://localhost:3000",new e.EnvironmentVariable("WG_ALLOWED_ORIGIN")]},security:{enableGraphQLEndpoint:process.env.NODE_ENV!=="production"||process.env.GITPOD_WORKSPACE_ID!==void 0}});
//# sourceMappingURL=config.cjs.map
