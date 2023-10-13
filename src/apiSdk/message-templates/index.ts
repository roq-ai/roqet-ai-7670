import queryString from 'query-string';
import { MessageTemplateInterface, MessageTemplateGetQueryInterface } from 'interfaces/message-template';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMessageTemplates = async (
  query?: MessageTemplateGetQueryInterface,
): Promise<PaginatedInterface<MessageTemplateInterface>> => {
  return fetcher('/api/message-templates', {}, query);
};

export const createMessageTemplate = async (messageTemplate: MessageTemplateInterface) => {
  return fetcher('/api/message-templates', { method: 'POST', body: JSON.stringify(messageTemplate) });
};

export const updateMessageTemplateById = async (id: string, messageTemplate: MessageTemplateInterface) => {
  return fetcher(`/api/message-templates/${id}`, { method: 'PUT', body: JSON.stringify(messageTemplate) });
};

export const getMessageTemplateById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/message-templates/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMessageTemplateById = async (id: string) => {
  return fetcher(`/api/message-templates/${id}`, { method: 'DELETE' });
};
