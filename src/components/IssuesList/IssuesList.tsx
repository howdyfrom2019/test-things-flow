import useIssues from '../../hooks/useIssues';
import { ReactNode, useCallback, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import IssueRow from '../IssueRow/IssueRow';

interface Props {
  btn?: ReactNode;
}
const IssuesList = ({ btn }: Props) => {
  const issues = useIssues();

  const moveToAdLink = useCallback((e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    window.open('https://thingsflow.com/ko/home');
  }, []);

  return (
    <article className={'flex flex-col rounded-sm'}>
      {issues.map((issue, i) => {
        const { id, number } = issue;
        return (
          <div key={id}>
            <Link to={`/issue/${number}`}>
              <IssueRow issue={issue} />
            </Link>
            {(i + 1) % 10 === 0 && (
              <div className={'flex flex-col gap-4'}>
                <img className={'cursor-pointer'} src={'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7'} alt={'ad'} onClick={moveToAdLink} />
                {btn}
              </div>
            )}
          </div>
        )
      })}
    </article>
  )
}

export default IssuesList;
