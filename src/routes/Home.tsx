import Button from '../components/Button/Button';
import { useCallback, useMemo, MouseEvent } from 'react';
import GithubAPIs from '../utils/APIs';
import { useDispatch } from 'react-redux';
import { push10IssuesByComment } from '../store/reducers/IssuesSlicer';
import IssuesList from '../components/IssuesList/IssuesList';

const Home = () => {
  const github = useMemo(() => new GithubAPIs(),[]);
  const dispatch = useDispatch();

  const onFetchAngularIssues = useCallback(async(e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await github.get10AngularIssues();
    if (result) {
      dispatch(push10IssuesByComment(result));
    }
  }, [dispatch, github]);

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
        <IssuesList />
      </main>
    </article>
  )
}

export default Home;
