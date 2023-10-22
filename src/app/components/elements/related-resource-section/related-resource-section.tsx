import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { StyledRelatedResourceSection } from "./related-resource-section.styles";

interface RelatedResourceSectionProps {
  label: string;
  children: ReactNode;
}

export const RelatedResourceSection = ({
  label,
  children,
}: RelatedResourceSectionProps) => {
  return (
    <StyledRelatedResourceSection>
      <Typography variant="h5" gutterBottom>{label}</Typography>
      {children}
    </StyledRelatedResourceSection>
  );
};