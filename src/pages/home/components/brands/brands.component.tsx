import React from "react";
import { BrandItem, BrandsContainer } from "./brands.component,style";
import macLogo from '../../../../assets/mac-logo-2.png';
import kryolanLogo2 from '../../../../assets/kryolan-logo-2.svg';

import tooFacedLogo from '../../../../assets/too-faced-logo-2.webp';
import lauraMercierLogo from '../../../../assets/laura-mercier-logo.png';
import urbanDecayLogo from '../../../../assets/urban-decay-logo.png';

export const Brands: React.FC = () => {
  return (
    <BrandsContainer id="products">
      <BrandItem src={macLogo}/>
      <BrandItem src={kryolanLogo2} />
      <BrandItem src={urbanDecayLogo} invert />
      {/*<BrandItem src={kvdLogo} />*/}
      <BrandItem src={tooFacedLogo} />
      <BrandItem src={lauraMercierLogo} />
    </BrandsContainer>
  )
}