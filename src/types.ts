export interface BonusItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  url: string;
  category: 'nutricao' | 'respiracao' | 'receitas' | 'orientacao' | 'complementar';
  isConfigured: boolean;
  highlightNote?: string;
  estimatedTime?: string;
}

export interface PortalConfig {
  programUrl: string;
  supportUrl: string;
  bonuses: BonusItem[];
}
