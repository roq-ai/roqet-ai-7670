import queryString from 'query-string';
import {
  DefaultMessageVariablesInterface,
  DefaultMessageVariablesGetQueryInterface,
} from 'interfaces/default-message-variables';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDefaultMessageVariables = async (
  query?: DefaultMessageVariablesGetQueryInterface,
): Promise<PaginatedInterface<DefaultMessageVariablesInterface>> => {
  return fetcher('/api/default-message-variables', {}, query);
};

export const createDefaultMessageVariables = async (defaultMessageVariables: DefaultMessageVariablesInterface) => {
  return fetcher('/api/default-message-variables', { method: 'POST', body: JSON.stringify(defaultMessageVariables) });
};

export const updateDefaultMessageVariablesById = async (
  id: string,
  defaultMessageVariables: DefaultMessageVariablesInterface,
) => {
  return fetcher(`/api/default-message-variables/${id}`, {
    method: 'PUT',
    body: JSON.stringify(defaultMessageVariables),
  });
};

export const getDefaultMessageVariablesById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/default-message-variables/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteDefaultMessageVariablesById = async (id: string) => {
  return fetcher(`/api/default-message-variables/${id}`, { method: 'DELETE' });
};
