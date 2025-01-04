import React from 'react';
import './Terms&Privacy.css';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const privacyContent = (
    <div className="terms-sections">
      <section className="terms-section">
        <h3>Privacy Policy</h3>
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
      </section>
      <section className="terms-section">
        <h3>Information Collection</h3>
        <p>We collect information that you provide directly to us, including name, email address, and other account details.</p>
      </section>
      <section className="terms-section">
        <h3>Information Usage</h3>
        <p>We use the information we collect to provide and maintain our services, process your transactions, and communicate with you.</p>
      </section>
    </div>
  );

  const termsContent = (
    <div className="terms-sections">
      <section className="terms-section">
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      </section>
      <section className="terms-section">
        <h3>2. Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>
      </section>
      <section className="terms-section">
        <h3>3. User Accounts</h3>
        <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>
      </section>
    </div>
  );

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-container">
        <div className="modal-header">
          <h2>{type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-content">
          {type === 'privacy' ? privacyContent : termsContent}
        </div>
      </div>
    </>
  );
};

export default TermsModal;