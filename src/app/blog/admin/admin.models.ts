export interface FetchAdminData {
  message?: string;
  denied?: boolean;
  userList: Array<{
    username: string;
    isAdmin?: boolean;
  }>;

  articleList: Array<{
    _id: string,
    name: string,
    genre: string
  }>;
}
