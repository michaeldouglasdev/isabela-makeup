import React from "react";
import { GalleryItemContainer, GalleryItemOverlay, GalleryItemOverlaySearchIcon } from './gallery-item.component.style';
import { AiOutlineSearch } from 'react-icons/ai';

interface GalleryItemProps {
  src?: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ src }) => {

  return (
    <GalleryItemContainer src={src}>
      <GalleryItemOverlay>
        <GalleryItemOverlaySearchIcon>
          <AiOutlineSearch />
        </GalleryItemOverlaySearchIcon>
      </GalleryItemOverlay>
    </GalleryItemContainer>
  )
}