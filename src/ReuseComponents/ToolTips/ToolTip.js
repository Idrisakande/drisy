import { styled, Tooltip, tooltipClasses, Zoom } from "@mui/material";
import { blue } from "@mui/material/colors";

export const ExpTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    arrow
    TransitionComponent={Zoom}
    TransitionProps={{ timeout: 500 }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#ffffff",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: theme.typography.pxToRem(11.2),
    backgroundColor: "#ffffff",
    color: "#6b7688",
    fontWeight: 500,
    maxWidth: 250,
    boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px ",
    padding: "0.8rem",
    textAlign: "center",
  },
}));

export const SocialToolTip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    arrow
    TransitionComponent={Zoom}
    TransitionProps={{ timeout: 500 }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: blue[900],
  },
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: theme.typography.pxToRem(11.5),
    backgroundColor: "#313bac",
    fontWeight: 700,
  },
}));

export const BackToTopToolTip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    arrow
    leaveDelay={1}
    TransitionComponent={Zoom}
    TransitionProps={{ timeout: 500 }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: blue[900],
  },
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: theme.typography.pxToRem(11.5),
    backgroundColor: "#313bac",
    fontWeight: 700,
  },
}));
