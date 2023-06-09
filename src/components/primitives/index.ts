import { Box, styled } from '@mui/material';

export const Flex = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});
export const FlexStart = styled(Box)({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100%',
});
export const FlexCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const FlexEnd = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  width: '100%',
});

export const FlexBetweenWhite = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  color: 'primary.white',
});

export const FlexColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const FlexColumnCenter = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const FlexColumnStart = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
});

export const FlexColumnEnd = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'end',
  width: '100%',
});
