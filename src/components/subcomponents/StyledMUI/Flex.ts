import { Box, styled } from '@mui/material';

export const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '100%',
});
export const FlexStart = styled(Box)({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
});

export const FlexBetweenWhite = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '100%',
  color: 'primary.white',
});

export const FlexColumnCenter = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '100%',
});

export const FlexColumnStart = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  flexWrap: 'wrap',
  alignItems: 'start',
  width: '100%',
});

export const Flex = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '100%',
});
