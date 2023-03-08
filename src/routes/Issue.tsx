import { useNavigate, useParams } from 'react-router-dom';
import { useSpecificIssue } from '../hooks/useIssues';
import Viewer from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useEffect, useRef } from 'react';
import IssueRow from '../components/IssueRow/IssueRow';

const Issue = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const githubIssue = useSpecificIssue(Number(id));
  const ViewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ViewerRef.current) return;
    if (!githubIssue) return;
    const viewer = new Viewer({
      el: ViewerRef.current,
      height: '100%',
      initialValue: githubIssue?.body || '',
    })

  }, [githubIssue]);

  return (
    <article className={'flex flex-col gap-6'}>
      <header className={'font-regular-24 px-4 py-3 bg-bgGray text-blue'}>angular<strong> / angular-cli</strong></header>
      {githubIssue && <IssueRow issue={githubIssue} showAvatar />}
      <div className={'w-content-desktop border border-border mx-auto'} id={'viewer'} ref={ViewerRef} />
    </article>
  )
}

export default Issue;
