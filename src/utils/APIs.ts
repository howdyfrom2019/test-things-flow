import { Octokit } from 'octokit';

class GithubAPIs {
  private readonly octokit
  constructor() {
    this.octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
  }

  public async get10AngularIssues() {
    try {
      return await this.octokit.request('Get /repos/{owner}/{repo}/issues?per_page=10&sort=comments', {
        owner: 'angular',
        repo: 'angular-cli',
      });
    } catch (e) {
      const error = e as Error;
      console.log(error);
    }
  }
}

export default GithubAPIs;
