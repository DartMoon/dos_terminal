import { HelperList, NavList } from '@/app/types/list';

export const navList = [
  {
    id: 1,
    value: 'File',
    submenu: [
      {
        id: 1,
        value: 'NCD Tree',
        subValue: 'Alt + F4',
      },
      {
        id: 2,
        value: 'Exit',
        subValue: 'Esc',
      },
    ],
  },
  {
    id: 2,
    value: 'Disc',
  },
  {
    id: 3,
    value: 'Commands',
  },
] as NavList;

export const helperList = [
  {
    id: 1,
    value: 'Help',
  },
  {
    id: 2,
    value: 'Menu',
  },
  {
    id: 3,
    value: 'View',
  },
  {
    id: 4,
    value: 'Edit',
  },
  {
    id: 5,
    value: 'Copy',
  },
  {
    id: 6,
    value: 'RenMov',
  },
  {
    id: 7,
    value: 'Mkdir',
  },
  {
    id: 8,
    value: 'Delete',
  },
  {
    id: 9,
    value: 'PullDn',
  },
  {
    id: 10,
    value: 'Quit',
  },
] as HelperList;
