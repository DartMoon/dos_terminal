import { ListEntity } from '@/app/types/globl';

export type SubMenuType = Array<ListEntity & { subValue: string }>;

export type NavList = Array<
  ListEntity & {
    submenu: SubMenuType;
  }
>;

export type HelperList = Array<ListEntity>;
