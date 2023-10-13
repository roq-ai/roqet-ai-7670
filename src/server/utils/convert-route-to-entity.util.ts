const mapping: Record<string, string> = {
  'default-message-variables': 'default_message_variables',
  'message-templates': 'message_template',
  'sales-activities': 'sales_activity',
  'sales-channels': 'sales_channel',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
