import React from 'react';

import { Link } from 'react-router-dom';

import image404 from '../../assets/image-404.webp';

import { NotFoundPageContainer } from './styles';

export default function NotFoundPage () {
  document.title = 'Página não encontrada';

  return (
    <NotFoundPageContainer>
      <div className="error">
        <img src={image404} alt="Erro 404" />

        <Link to="/">Voltar para a Home</Link>
      </div>
    </NotFoundPageContainer>
  );
}
