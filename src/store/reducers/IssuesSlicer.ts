import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GithubIssues } from '../../type/type';

const IssuesSlicer = createSlice({
  name: 'issue',
  initialState: [] as GithubIssues[],
  reducers: {
    push10IssuesByComment: (state, action: PayloadAction<GithubIssues[]>) => {
      state.push(...action.payload);
    }
  }
});

const { actions, reducer } = IssuesSlicer;
export const { push10IssuesByComment } = actions;
export default reducer;
