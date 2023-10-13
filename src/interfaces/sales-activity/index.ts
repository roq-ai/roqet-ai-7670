import { SalesChannelInterface } from 'interfaces/sales-channel';
import { GetQueryInterface } from 'interfaces';

export interface SalesActivityInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  sales_channel_id?: string;

  sales_channel?: SalesChannelInterface;
  _count?: {};
}

export interface SalesActivityGetQueryInterface extends GetQueryInterface {
  id?: string;
  sales_channel_id?: string;
}
