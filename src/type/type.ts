export interface GithubIssues {
  id: number;
  number: number;
  title: string;
  created_at: string;
  comments: number;
  body: string;
  user: {
    avatar_url: string;
    login: string;
  }
}
