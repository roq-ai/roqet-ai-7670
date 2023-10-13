import { MessageTemplateInterface } from 'interfaces/message-template';
import { SalesChannelInterface } from 'interfaces/sales-channel';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  message_template?: MessageTemplateInterface[];
  sales_channel?: SalesChannelInterface[];
  user?: UserInterface;
  _count?: {
    message_template?: number;
    sales_channel?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
