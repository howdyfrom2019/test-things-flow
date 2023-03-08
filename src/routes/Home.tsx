import { useMemo } from 'react';
import FetchButton from '../components/Button/FetchButton';
import GithubAPIs from '../utils/APIs';
import IssuesList from '../components/IssuesList/IssuesList';
import ClearButton from '../components/Button/ClearButton';

const Home = () => {
  const github = useMemo(() => new GithubAPIs(), []);

  return (
    <div className={'flex flex-col gap-5 min-h-screen'}>
      <header className={'font-regular-24 px-4 py-3 bg-bgGray text-blue'}>angular<strong> / angular-cli</strong></header>
      <main className={'w-content-desktop flex flex-col gap-4 mx-auto md:w-content-mobile flex-1'}>
        <FetchButton github={github}/>
        <IssuesList btn={<FetchButton github={github} />}/>
      </main>
      <footer className={'flex justify-between items-center sticky bottom-0 left-0 w-full w-screen px-4 py-3 mx-auto border border-border bg-bgGray'}>
        <FetchButton github={github} text={'load'} />
        <ClearButton />
      </footer>
    </div>
  )
}

export default Home;
