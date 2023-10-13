import queryString from 'query-string';
import { SalesActivityInterface, SalesActivityGetQueryInterface } from 'interfaces/sales-activity';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesActivities = async (
  query?: SalesActivityGetQueryInterface,
): Promise<PaginatedInterface<SalesActivityInterface>> => {
  return fetcher('/api/sales-activities', {}, query);
};

export const createSalesActivity = async (salesActivity: SalesActivityInterface) => {
  return fetcher('/api/sales-activities', { method: 'POST', body: JSON.stringify(salesActivity) });
};

export const updateSalesActivityById = async (id: string, salesActivity: SalesActivityInterface) => {
  return fetcher(`/api/sales-activities/${id}`, { method: 'PUT', body: JSON.stringify(salesActivity) });
};

export const getSalesActivityById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/sales-activities/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSalesActivityById = async (id: string) => {
  return fetcher(`/api/sales-activities/${id}`, { method: 'DELETE' });
};
