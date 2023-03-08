import { GithubIssues } from '../../type/type';

interface Props {
  issue: GithubIssues;
  showAvatar?: boolean;
}

const IssueRow = ({ issue, showAvatar }: Props) => {
  const { id, created_at, number, comments, title, user: { login, avatar_url } } = issue;
  return (
    <section className={'px-4 py-3 flex justify-between border border-border mt-[-1px] items-center'} key={id}>
      <div className={'flex items-center'}>
        { showAvatar && (<img className={'border border-border rounded-full w-8 h-8 object-fill mr-4'} src={avatar_url} alt={'profile_img'} />) }
        <div className={'flex flex-col gap-2'}>
          <span className={'font-medium-24'}>#{number} {title}</span>
          <span className={'font-regular-12'}>{login} {created_at}</span>
        </div>
      </div>
      <span className={'font-medium-12'}>{comments}</span>
    </section>
  )
}

export default IssueRow;
