import { ReactNode } from 'react';
import { StyledListView } from './list-view.styles';
import { CircularProgress } from '@mui/material';

/* eslint-disable-next-line */
export interface ListViewProps {
  isLoading: boolean;
  children: ReactNode;
}

export const ListView = ({ isLoading, children }: ListViewProps) => {
  return (
    <StyledListView>
      {isLoading ? <CircularProgress /> : children}
    </StyledListView>
  );
}
