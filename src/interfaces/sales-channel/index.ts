import { SalesActivityInterface } from 'interfaces/sales-activity';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface SalesChannelInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  name: string;
  team_id?: string;
  sales_activity?: SalesActivityInterface[];
  team?: TeamInterface;
  _count?: {
    sales_activity?: number;
  };
}

export interface SalesChannelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  team_id?: string;
}
