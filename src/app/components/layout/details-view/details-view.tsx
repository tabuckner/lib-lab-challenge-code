import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";
import { StyledDetailsView } from "./details-view.styles";

/* eslint-disable-next-line */
export interface DetailsViewProps {
  isLoading: boolean;
  children: ReactNode;
}

export const DetailsView = ({ isLoading, children }: DetailsViewProps) => {

  if (isLoading) {
    return <CircularProgress />
  }

  if (!children && !isLoading) {
    return 'Entity Not Found';
  }

  return (
    <StyledDetailsView>
      {children}
    </StyledDetailsView>
  );
}
