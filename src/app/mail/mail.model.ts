export interface AddressObject {
  address: string;
}

export enum MailDirection {
  INCOMING = 1,
  OUTGOING = 2,
}

export enum MailStatus {
  READ = 1,
  UNREAD = 2,
}

export type Folder = 'Inbox' | 'Outbox' | 'Spam' | 'Trash' | 'Draft';

export interface Mail {
  id: number;
  from: AddressObject;
  to: AddressObject[];
  cc: AddressObject[];
  bcc: AddressObject[];
  title: string;
  content: string;
  date: string;
  direction: MailDirection;
  status: MailStatus;
  sendToTrashFrom: null | string;
}

export interface MailList {
  items: Mail[];
  itemsCount: number;
}

export interface MailListState {
  folder: Folder;
  mailList: MailList;
  isLoading: boolean;
  error: string;
  searchText: string;
  skip: number;
  take: number;
  newestFirst: boolean;
}

export interface RequestParams {
  folder?: Folder;
  searchText?: string;
  skip?: number;
  take?: number;
  newestFirst?: boolean;
}

export interface MailViewState {
  mail: Mail | null;
  isLoading: boolean,
}

export interface PostMail {
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  title: string;
  content: string;
}
