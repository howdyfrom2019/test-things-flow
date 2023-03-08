import Button from '../components/Button/Button';
import { useCallback, useEffect, useMemo, MouseEvent } from 'react';
import { Octokit } from 'octokit';
import GithubAPIs from '../utils/APIs';

const Home = () => {
  const github = useMemo(() => new GithubAPIs(),[])

  const onFetchAngularIssues = useCallback(async(e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await github.get10AngularIssues();
    console.log(result);
  }, [github]);

  return (
    <article className={'flex flex-col gap-5'}>
      <header className={'font-regular-24 px-4 py-3 bg-bgGray text-blue'}>angular<strong> / angular-cli</strong></header>
      <main className={'w-content-desktop flex flex-col gap-4'}>
        <Button
          className={'font-medium-12 max-w-sm'}
          btnType={'PRIMARY'}
          onClick={onFetchAngularIssues}
        >
          Issue 10개 로딩 시작
        </Button>
      </main>
    </article>
  )
}

export default Home;
