// Generated by Xata Codegen 0.18.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "products",
    columns: [
      { name: "name", type: "string" },
      { name: "description", type: "text" },
      { name: "price", type: "float" },
      { name: "stock", type: "int" },
      { name: "thumbnail", type: "string" },
      { name: "media", type: "multiple" },
    ],
  },
  {
    name: "customers",
    columns: [
      { name: "username", type: "string" },
      { name: "email", type: "email" },
      { name: "password", type: "string" },
      { name: "avatar", type: "string" },
    ],
  },
  {
    name: "orders",
    columns: [
      { name: "product", type: "link", link: { table: "products" } },
      { name: "user", type: "link", link: { table: "customers" } },
    ],
  },
  {
    name: "users",
    columns: [
      { name: "email", type: "email" },
      { name: "password", type: "string" },
    ],
  },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Giridhar-s-workspace-bc9633.eu-west-1.xata.sh/db/ecommerce-admin",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};