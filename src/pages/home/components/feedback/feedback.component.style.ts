import { shade } from 'polished';
import styled from 'styled-components';
import feedbackUnknownWoman from '../../../../assets/feedback-unknown-woman.png';

export const FeedbackContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 64px;

  @media(max-width: 640px) {
    padding: 32px;
  }
`;

export const FeedbackItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 124px;

  @media(max-width: 640px) {
    flex-direction: column;
    gap: 48px;
  }

`
export const FeedbackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  box-shadow: ${({ theme}) => `0px 4px 8px 0 ${theme.colors.secondary}`};
  border: 1px solid #ffd7e4aa;
  border-radius: 8px;
  padding: 32px;

  transition: 0.3s;
  &:hover{
    transform: scale(1.1);
  }
`

export const FeedbackItemQuote = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const FeedbackItemText = styled.span`
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => shade(0.5, theme.colors.primary)};
`;

export const FeedbackItemClient = styled.div``;

export const FeedbackItemClientImage = styled.div`
  height: 64px;
  width: 64px;
  background: url(${feedbackUnknownWoman}) no-repeat center;
  background-size: cover;
  border-radius: 50px;
`

export const FeedbackItemClientName = styled.span`
  color: ${({ theme }) => theme.colors.gray.dark};
  font-weight: 500;
`;