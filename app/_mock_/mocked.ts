import { DirListType, HelperList, NavListType, TreeListType } from '@/app/types/list';

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
    value: 'Disk',
  },
  {
    id: 3,
    value: 'Commands',
  },
] as NavListType;

export const helperList = [
  { id: 1, value: 'Help' },
  { id: 2, value: 'Menu' },
  { id: 3, value: 'View' },
  { id: 4, value: 'Edit' },
  { id: 5, value: 'Copy' },
  { id: 6, value: 'RenMov' },
  { id: 7, value: 'Mkdir' },
  { id: 8, value: 'Delete' },
  { id: 9, value: 'PullDn' },
  { id: 10, value: 'Quit' },
] as HelperList;

export const treeList = [
  { id: 1, value: 'ncd' },
  { id: 2, value: 'Tools' },
  { id: 3, value: 'xtgold' },
  { id: 4, value: 'laplink' },
  { id: 5, value: 'dn' },
] as TreeListType;

export const dirData = [
  { id: 1, value: 'DN' },
  { id: 2, value: 'autoexec', subValue: 'bat' },
  { id: 3, value: 'command', subValue: 'com' },
  { id: 4, value: 'config', subValue: 'sys' },
  { id: 5, value: 'Io', subValue: 'sys' },
  { id: 6, value: '11Pro', subValue: 'sys' },
  { id: 7, value: 'Msdod', subValue: 'sys' },
] as DirListType;
