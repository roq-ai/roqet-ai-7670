import queryString from 'query-string';
import { SalesChannelInterface, SalesChannelGetQueryInterface } from 'interfaces/sales-channel';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesChannels = async (
  query?: SalesChannelGetQueryInterface,
): Promise<PaginatedInterface<SalesChannelInterface>> => {
  return fetcher('/api/sales-channels', {}, query);
};

export const createSalesChannel = async (salesChannel: SalesChannelInterface) => {
  return fetcher('/api/sales-channels', { method: 'POST', body: JSON.stringify(salesChannel) });
};

export const updateSalesChannelById = async (id: string, salesChannel: SalesChannelInterface) => {
  return fetcher(`/api/sales-channels/${id}`, { method: 'PUT', body: JSON.stringify(salesChannel) });
};

export const getSalesChannelById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/sales-channels/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSalesChannelById = async (id: string) => {
  return fetcher(`/api/sales-channels/${id}`, { method: 'DELETE' });
};
