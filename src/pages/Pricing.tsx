import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pricingPlans } from '../data/pricing';
import { activateSubscription } from '../utils/subscription';
import './Pricing.css';

export default function Pricing() {
  const [selectedPeriod, setSelectedPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (planId: string, tier: string) => {
    if (planId === 'free') {
      return;
    }

    // In a real app, this would redirect to payment gateway
    if (planId.includes('yearly')) {
      activateSubscription(tier as any, 12);
    } else {
      activateSubscription(tier as any, 1);
    }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const filteredPlans = pricingPlans.filter(plan => {
    if (plan.id === 'free') return true;
    if (selectedPeriod === 'monthly') {
      return plan.period === 'monthly' || plan.id === 'premium-yearly';
    }
    return plan.period === 'yearly' || plan.period === 'one-time';
  });

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="pricing-header">
          <h1 className="page-title">Planet dhe Çmimet</h1>
          <p className="page-subtitle">
            Zgjidhni planin që ju përshtatet më mirë
          </p>

          <div className="period-toggle">
            <button
              className={selectedPeriod === 'monthly' ? 'active' : ''}
              onClick={() => setSelectedPeriod('monthly')}
            >
              Mujor
            </button>
            <button
              className={selectedPeriod === 'yearly' ? 'active' : ''}
              onClick={() => setSelectedPeriod('yearly')}
            >
              Vjetor <span className="discount-badge">Kursim 16%</span>
            </button>
          </div>
        </div>

        {showSuccess && (
          <div className="success-banner">
            <span>✅</span> Abonimi u aktivizua me sukses!
          </div>
        )}

        <div className="pricing-grid">
          {filteredPlans.map(plan => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">Më i Popullarizuar</div>
              )}

              <div className="plan-header">
                <div className="plan-icon" style={{ backgroundColor: plan.color + '20' }}>
                  {plan.icon}
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  {plan.price === 0 ? (
                    <span className="price-amount">FALAS</span>
                  ) : (
                    <>
                      <span className="price-amount">{plan.price.toLocaleString()}</span>
                      <span className="price-currency">{plan.currency}</span>
                      {plan.period !== 'one-time' && (
                        <span className="price-period">/{plan.period === 'yearly' ? 'vit' : 'muaj'}</span>
                      )}
                    </>
                  )}
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.startsWith('✅') ? 'included' : 'excluded'}>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.id, plan.tier)}
                className={`subscribe-button ${plan.popular ? 'popular' : ''}`}
                style={{ backgroundColor: plan.color }}
                disabled={plan.id === 'free'}
              >
                {plan.id === 'free' ? 'Aktualisht Aktiv' : 'Abonohu Tani'}
              </button>

              {plan.tier === 'school' && (
                <Link to="/kontakt" className="contact-link">
                  Kontaktoni për paketa shkollore
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="pricing-faq">
          <h2>Pyetje të Shpeshta</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Çfarë përfshin versioni falas?</h3>
              <p>Versioni falas përfshin akses në të gjitha kurse, ushtrime dhe lojëra. Testime dhe çertifikata kërkojnë abonim premium.</p>
            </div>
            <div className="faq-item">
              <h3>Si funksionon abonimi premium?</h3>
              <p>Me abonim premium merrni akses në testime, çertifikata dhe raporte të detajuara. Abonimi mund të anulohet në çdo kohë.</p>
            </div>
            <div className="faq-item">
              <h3>A ka paketa për shkolla?</h3>
              <p>Po! Ofertojmë paketa speciale për shkolla me dashboard për mësues, gjurmim të klasës dhe raporte të avancuara.</p>
            </div>
            <div className="faq-item">
              <h3>Si mund të anuloj abonimin?</h3>
              <p>Mund të anuloni abonimin në çdo kohë nga faqja e profilit tuaj. Nuk ka tarifa anulimi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

