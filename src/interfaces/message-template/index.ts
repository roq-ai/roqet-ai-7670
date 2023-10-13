import { DefaultMessageVariablesInterface } from 'interfaces/default-message-variables';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface MessageTemplateInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  body: string;
  subject: string;
  team_id: string;
  default_message_variables?: DefaultMessageVariablesInterface[];
  team?: TeamInterface;
  _count?: {
    default_message_variables?: number;
  };
}

export interface MessageTemplateGetQueryInterface extends GetQueryInterface {
  id?: string;
  body?: string;
  subject?: string;
  team_id?: string;
}
