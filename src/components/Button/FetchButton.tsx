import GithubAPIs from '../../utils/APIs';
import { useDispatch } from 'react-redux';
import { useIssueStartPage } from '../../hooks/useIssues';
import { MouseEvent, useCallback } from 'react';
import { push10IssuesByComment } from '../../store/reducers/IssuesSlicer';
import Button from './Button';

const FetchButton = ({ github, text }: { github: GithubAPIs, text?: string }) => {
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
      {text ? text : 'Issue 10개 로딩 시작'}
    </Button>
  )
}

export default FetchButton;
