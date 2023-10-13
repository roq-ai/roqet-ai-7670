interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Sales Manager', 'Sales Representative'],
  tenantName: 'Team',
  applicationName: 'ROQet AI',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage default message variables',
    'Manage sales activity',
    'Manage message template',
    'Manage sales channel',
    'Manage user',
    'Manage team',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/72e3cb23-cea0-42cf-926c-a72e1492c486',
};
