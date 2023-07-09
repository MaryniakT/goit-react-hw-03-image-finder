import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  height: 260px;
  overflow: hidden;
  flex-basis: calc((100% - 90px) / 4);
  background-color: rgb(248, 248, 248);

  border: 3px solid ${p => p.theme.colors.white};
  border-radius: 5px;
  transform: scale(1);
  cursor: zoom-in;
  box-shadow: ${p => p.theme.shadow.itemShadow};
  transition: box-shadow ${p => p.theme.cubic.cubicBezier},
    transform ${p => p.theme.cubic.cubicBezier};

  &:hover {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.shadow.itemHoverShadow};
  }
`;

export const GalleryImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;