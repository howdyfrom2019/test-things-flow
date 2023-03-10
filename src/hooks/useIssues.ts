import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/RootReducer';
import { GithubIssues } from '../type/type';

export default function useIssues(): GithubIssues[] {
  return useSelector((state: RootState) => state.issues);
}

export function useIssueStartPage(): number {
  return useSelector((state: RootState) => state.issues.length);
}

export function useSpecificIssue(number: number): GithubIssues | undefined {
  return useSelector((state: RootState) => state.issues.find(val => val.number === number));
}
