import { useDispatch } from 'react-redux';
import { MouseEvent, useCallback } from 'react';
import Button from './Button';
import { clearIssues } from '../../store/reducers/IssuesSlicer';

const ClearButton = () => {
  const dispatch = useDispatch();

  const onFetchAngularIssues = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(clearIssues())
  }, [dispatch]);

  return (
    <Button
      className={'font-medium-12 max-w-sm'}
      btnType={'WHITE'}
      onClick={onFetchAngularIssues}
    >
      초기화
    </Button>
  )
}

export default ClearButton;
