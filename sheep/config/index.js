// 开发环境配置
export let baseUrl;
export let version;
if (process.env.NODE_ENV === 'development') {
  baseUrl = import.meta.env.SHOPRO_DEV_BASE_URL;
} else {
  baseUrl = import.meta.env.SHOPRO_BASE_URL;
}
version = import.meta.env.SHOPRO_VERSION;
console.log(`[eco商城 ${version}]  http://doc.econets.cn`);

export const apiPath = import.meta.env.SHOPRO_API_PATH;
export const staticUrl = import.meta.env.SHOPRO_STATIC_URL;

export default {
  baseUrl,
  apiPath,
  staticUrl,
};
