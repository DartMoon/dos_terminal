import { ListEntity } from '@/app/types/global';

export type SubMenuType = Array<ListEntity & { subValue: string }>;

export type NavListType = Array<
  ListEntity & {
    submenu: SubMenuType;
  }
>;

export type DirListType = Array<
  ListEntity & {
    subValue: string;
  }
>;

export type TreeListType = Array<ListEntity>;
export type HelperList = Array<ListEntity>;
