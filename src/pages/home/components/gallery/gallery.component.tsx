import React from "react";
import { SectionCaption, SectionTitle } from "../../../../components/typography/typography.style";
import { GalleryItem } from "./gallery-item.component";
import { GalleryContainer, GalleryItemWrapper } from "./gallery.component.style";
import gallery1 from '../../../../assets/gallery1.jpeg';
import gallery2 from '../../../../assets/gallery2.jpeg';
import gallery4 from '../../../../assets/gallery3.jpeg';
import gallery5 from '../../../../assets/gallery4.jpeg';
import gallery6 from '../../../../assets/gallery5.jpeg';
import gallery7 from '../../../../assets/gallery6.jpeg';
import gallery8 from '../../../../assets/gallery7.jpeg';
import gallery9 from '../../../../assets/gallery8.jpeg';

export const Gallery: React.FC = () => {
  return (
    <GalleryContainer id="gallery">
      <SectionTitle>Galeria</SectionTitle>
      <SectionCaption>Nosso Portfolio</SectionCaption>

      <GalleryItemWrapper>
        <GalleryItem src={gallery1} />
        <GalleryItem src={gallery2} />
        <GalleryItem src={gallery4} />
        <GalleryItem src={gallery5} />
        <GalleryItem src={gallery6} />
        <GalleryItem src={gallery7} />
        <GalleryItem src={gallery8} />
        <GalleryItem src={gallery9} />
      </GalleryItemWrapper>
    </GalleryContainer>
  )
}