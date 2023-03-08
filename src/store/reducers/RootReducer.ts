import { combineReducers } from 'redux';
import { GithubIssues } from '../../type/type';
import IssuesSlicer from './IssuesSlicer';

const rootReducer = combineReducers<{ issues: GithubIssues[] }>({
  issues: IssuesSlicer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
