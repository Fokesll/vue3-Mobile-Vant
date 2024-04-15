import { apiCore } from './core';
import { handleResponse } from '../../util/network/handle';

export function getUser(id) {
  return apiCore.get(`/user/${id}`).then(handleResponse);
}