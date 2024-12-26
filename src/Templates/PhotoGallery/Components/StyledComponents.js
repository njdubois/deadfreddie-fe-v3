import styled from "styled-components/macro";
import StyledRow from "../../StyledRow";
import StyledCol from "../../StyledCol";

export const YearSelectorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const YearOption = styled.div`
  cursor: pointer;
  color: ${({ theme, ...props }) => props.open ? theme.colors.NeonBlue : theme.colors.ElectricRed};

  color: ${({ theme, ...props }) => props.open ? theme.colors.NeonBlue : theme.colors.ElectricRed};
  text-shadow: 1px 1px  ${({ theme, ...props }) => theme.colors.VividYellow};

  &:hover {
    color: ${({ theme }) => theme.colors.NeonBlue};
    //text-shadow: 1px 1px  ${({ theme }) => theme.colors.LimeGreen};
  }
`

export const PhotoSetRow = styled(StyledRow)`
`

export const PhotoSetCol = styled(StyledCol)`
  cursor: pointer;
`
export const GalleryRow = styled(StyledRow)`

`

export const GalleryCol = styled(StyledCol)`
`

export const SetDescription = styled.div`
  background-image: ${props => `url("${props.background}")`};
  color: ${({ theme, ...props }) => props.open ? theme.colors.VividYellow : theme.colors.ElectricRed};
`
export const StyledThumbnail = styled.div`
  background-image: ${props => `url("${props.background}")`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 200px;
  display: inline-block;
  cursor: pointer;
`;
