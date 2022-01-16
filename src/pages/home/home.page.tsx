import React from 'react';
import { Layout } from '../../components/layout/layout.component';
import { Brands } from './components/brands/brands.component';
import { Feedback } from './components/feedback/feedback.component';
import { Gallery } from './components/gallery/gallery.component';
import { Presentation } from './components/presentation/presentation.component';

export const HomePage: React.FC = () => {

  return (
    <Layout>
      <Presentation />
      <Feedback />
      <Brands />
      <Gallery />
    </Layout>
  )
}