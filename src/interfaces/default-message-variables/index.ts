import { MessageTemplateInterface } from 'interfaces/message-template';
import { GetQueryInterface } from 'interfaces';

export interface DefaultMessageVariablesInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  name: string;
  value: string;
  message_template_id: string;

  message_template?: MessageTemplateInterface;
  _count?: {};
}

export interface DefaultMessageVariablesGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  value?: string;
  message_template_id?: string;
}
