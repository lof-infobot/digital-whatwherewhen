// https://nono.ma/load-a-json-file-with-typescript

declare module "*.json"
{ const value: any;
    export default value;
}