import Button from '../components/Button/Button';
import { useCallback, useMemo, MouseEvent } from 'react';
import GithubAPIs from '../utils/APIs';
import { useDispatch } from 'react-redux';
import { push10IssuesByComment } from '../store/reducers/IssuesSlicer';
import IssuesList from '../components/IssuesList/IssuesList';
import { useIssueStartPage } from '../hooks/useIssues';

const FetchButton = ({ github }: { github: GithubAPIs }) => {
  const dispatch = useDispatch();
  const start = useIssueStartPage();

  const onFetchAngularIssues = useCallback(async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = await github.get10AngularIssues(start);
    if (result) {
      dispatch(push10IssuesByComment(result));
    }
  }, [start, github, dispatch]);

  return (
    <Button
      className={'font-medium-12 max-w-sm'}
      btnType={'PRIMARY'}
      onClick={onFetchAngularIssues}
    >
      Issue 10개 로딩 시작
    </Button>
  )
}

const Home = () => {
  const github = useMemo(() => new GithubAPIs(), []);

  return (
    <div className={'flex flex-col gap-5'}>
      <header className={'font-regular-24 px-4 py-3 bg-bgGray text-blue'}>angular<strong> / angular-cli</strong></header>
      <main className={'w-content-desktop flex flex-col gap-4 mx-auto'}>
        <FetchButton github={github}/>
        <IssuesList btn={<FetchButton github={github} />}/>
      </main>
    </div>
  )
}

export default Home;
