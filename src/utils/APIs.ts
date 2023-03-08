import { Octokit } from 'octokit';
import { GithubIssues } from '../type/type';

class GithubAPIs {
  private readonly octokit

  constructor() {
    this.octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
  }

  public async get10AngularIssues(start: number) {
    try {
      const response = await this.octokit.request(`Get /repos/{owner}/{repo}/issues?page=${start}per_page=10&sort=comments`, {
        owner: 'angular',
        repo: 'angular-cli',
      });

      const issues: GithubIssues[] = response.data.map((data: any) => (
        {
          id: data.id,
          number: data.number,
          title: data.title,
          created_at: data.created_at,
          comments: data.comments,
          body: data.body,
          user: {
            avatar_url: data.user.avatar_url,
            login: data.user.login
          }
        }
      ));
      return issues;
    } catch (e) {
      const error = e as Error;
      console.log(error);
    }
  }
}

export default GithubAPIs;
