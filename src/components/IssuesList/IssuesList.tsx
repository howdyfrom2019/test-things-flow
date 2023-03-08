import useIssues from '../../hooks/useIssues';

const IssuesList = () => {
  const issues = useIssues();

  return (
    <div>
      {issues.map((issue) => (
        <div key={issue.id}>{issue.title}</div>
      ))}
    </div>
  )
}

export default IssuesList;
