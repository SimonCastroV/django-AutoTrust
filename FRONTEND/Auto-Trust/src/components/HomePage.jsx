import React, { Suspense } from 'react';
import '../styles/HomePage.css';
import spline from '@splinetool/react-spline';
import carImage from '../assets/porsche.png';
<assets />

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Top Bar */}
      <div className="top-bar">
        <a href="#financing" className="top-link">Financiamiento</a>
        <a href="#support" className="top-link">soporte</a>
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1 className="logo-text">AUTOTRUST</h1>
          <span className="tagline">CARROS USADOS</span>
        </div>
        
        <nav className="nav">
          <a href="#inventory" className="nav-link">Inventario</a>
          <a href="#sell" className="nav-link">Compra/Venta</a>
          <a href="#financing" className="nav-link">Financiamiento</a>
          <a href="#about" className="nav-link">Sobre nosotros</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>

        <button className="cta-button header-cta">Log in</button>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="text-section">
            <span className="badge">
              CERTIFICADOS & GARANTIZADOS
            </span>
            
            <h2 className="main-title">
              Encuentra Tu<br />
              Siguiente Carro<br />
              Con Confianza
            </h2>
            
            <p className="description">
              Historial con transparencia. Facil Financiamiento. Entregas Nacionales.
            </p>
            
            <div className="button-group">
              <button className="btn-primary">Compra autos usados</button>
              <button className="btn-secondary">Financia con nosotros</button>
            </div>
          </div>

          <div className="spline-section">
            <Suspense fallback={
              <div className="loading-container">
                <div className="loading-text">Loading 3D Model...</div>
              </div>
            }>
              <img src= {carImage} alt='car' className='car-image' />
              {/* <Spline scene="https://prod.spline.design/IIo6mLPSbMW-nRZS/scene.splinecode" /> */}
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;