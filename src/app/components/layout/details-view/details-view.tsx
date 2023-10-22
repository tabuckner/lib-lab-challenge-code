import { CircularProgress } from '@mui/material';
import { ReactNode } from 'react';
import { ActionsRow, StyledDetailsView } from './details-view.styles';

/* eslint-disable-next-line */
export interface DetailsViewProps {
  isLoading: boolean;
  children: ReactNode;
  actions: ReactNode;
}

export const DetailsView = ({
  isLoading,
  children,
  actions,
}: DetailsViewProps) => {
  if (isLoading) {
    return <CircularProgress />;
  }

  if (!children && !isLoading) {
    return 'Entity Not Found';
  }

  return (
    <StyledDetailsView>
      {children}
      <ActionsRow>{actions}</ActionsRow>
    </StyledDetailsView>
  );
};
