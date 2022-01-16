
import styled from 'styled-components';

export enum JustifyContent {
  CENTER = 'center',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  SPACE_AROUND = 'space-around',
  SPACE_BETWEEN = 'space-between',
  SPACE_EVENLY = 'space-evenly'
}

export enum AlignItems {
  BASELINE = 'baseline',
  CENTER = 'center',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  STRETCH = 'stretch'
}

interface BoxProps {
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  noSpacing?: boolean;
  expanded?: boolean;
  gap?: number;
}

interface VBoxProps extends BoxProps {

}

export const VBox = styled.div<VBoxProps>`
  display: flex;
  flex: ${({ expanded }) => expanded ? 1 : 'unset'};
  width: ${({ expanded }) => expanded ? '100%' : 'unset'};
  flex-direction: column;
  padding: ${({ noSpacing, theme }) => noSpacing ? 0 : theme.spacing.large}px;
  justify-content: ${({ justifyContent }) => justifyContent ?? JustifyContent.FLEX_START};
  align-items: ${({ alignItems }) => alignItems ?? AlignItems.STRETCH};

  @media(max-width: 640px) {
    flex: 1;
    width: 100%;
  }
`;

interface HBoxProps extends BoxProps {

}
export const HBox = styled.div<HBoxProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent ?? JustifyContent.FLEX_START};
  align-items: ${({ alignItems }) => alignItems ?? AlignItems.STRETCH};
  gap: ${({ gap }) => gap}px;

  @media(max-width: 480px) {
    flex-direction: column;
  }
`

export const VDivider = styled.div`
  height: 1px;
  background: #efefef;
  margin-top: ${({ theme }) => theme.spacing.xSmall};
  margin-bottom: ${({ theme }) => theme.spacing.xSmall};
`

interface VSeparatorProps {
  small?: boolean;
}

export const VSeparator = styled.div<VSeparatorProps>`
  height: ${({ small, theme }) => small ? theme.spacing.small : theme.spacing.large}px;

  @media(max-width: 640px) {
    height: ${({ small, theme }) => (small ? theme.spacing.small : theme.spacing.large)/2}px;

  }
`

export const Root = styled.div`
  background-color: white;
`;
