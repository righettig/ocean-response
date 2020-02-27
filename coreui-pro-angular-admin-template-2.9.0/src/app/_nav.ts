import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Response',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Data'
  },
  {
    name: 'Vessels',
    url: '/data/vessels',
    icon: 'icon-note'
  },
  {
    name: 'Emergencies',
    url: '/data/emergencies',
    icon: 'icon-note'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Emergencies'
  },
  {
    name: 'Map',
    url: '/emergencies-maps',
    icon: 'icon-map',
    badge: {
      variant: 'danger',
      text: 'PRO'
    }
  },
  {
    name: 'List',
    url: '/base/tabs',
    icon: 'icon-puzzle'
  }
];
