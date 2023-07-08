import { MenuItem } from './menu.interface';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Products',
    icon: 'shopping_basket',
    link: '/dashboard/products',
  },
  {
    id: 2,
    label: 'Services',
    icon: 'miscellaneous_services',
    link: '/dashboard/services',
  },
];
