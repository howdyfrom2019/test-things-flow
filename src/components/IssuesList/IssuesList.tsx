import useIssues from '../../hooks/useIssues';
import { ReactNode } from 'react';

interface Props {
  btn?: ReactNode;
}
const IssuesList = ({ btn }: Props) => {
  const issues = useIssues();

  return (
    <article className={'flex flex-col rounded-sm'}>
      {issues.map((issue, i) => {
        const { id, created_at, number, comments, title, user: { login } } = issue;
        return (
          <>
            <section className={'px-4 py-3 flex justify-between border border-border mt-[-1px] items-center'} key={id}>
              <div className={'flex flex-col gap-2'}>
                <span className={'font-medium-24'}>#{number} {title}</span>
                <span className={'font-regular-12'}>{login} {created_at}</span>
              </div>
              <span className={'font-medium-12'}>{comments}</span>
            </section>
            {(i + 1) % 10 === 0 && (
              <>
                <img src={'https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7'} alt={'ad'} />
                {btn}
              </>
            )}
          </>
        )
      })}
    </article>
  )
}

export default IssuesList;
