import * as apiUtils from 'fredux-api-utils';

export const apiUrl = '/api';

const decorateWithBaseUrl = fn => ({ url, options = {} }) => fn(`${apiUrl}${url}`, options);

export const get = decorateWithBaseUrl(apiUtils.get);
export const getRaw = decorateWithBaseUrl(apiUtils.getRaw);
export const post = decorateWithBaseUrl(apiUtils.post);
export const postRaw = decorateWithBaseUrl(apiUtils.postRaw);
export const put = decorateWithBaseUrl(apiUtils.put);
export const putRaw = decorateWithBaseUrl(apiUtils.putRaw);
export const del = decorateWithBaseUrl(apiUtils.del);
export const delRaw = decorateWithBaseUrl(apiUtils.delRaw);
