import React, { useEffect } from "react";

const TermsConditions: React.FC = () => {
  useEffect(()=>{

      document.body.style.background = "#fff"
      let footer = document.querySelector(".footer") as HTMLElement;
      footer.style.paddingBottom = "20px"

      return ()=>{
        document.body.style.background = "#000"
        footer.style.paddingBottom = "220px"
      }
  },[])
  return (
    <div className="terms" style={{ padding: "2rem", color:"#000" ,marginTop: "100px", maxWidth: "800px", marginInline: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>Terms and Conditions for Mevot</h1>

      <p>Welcome to Mevot!<br />
        Our mission is to redefine urban mobility with premium e-boards. By accessing or purchasing our products through our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before placing an order.
      </p>

      <h2>1. General Information</h2>
      <p><strong>Seller Identification:</strong> Mevot S.L.U., legally registered in Andorra</p>
      <p><strong>Tax Identification Number (NRT):</strong> L-719599-Z</p>
      <p><strong>Address:</strong> Carrer Ubr els Espuis, Edifici Maia 1r 1ra, AD500, Andorra La Vella, Andorra</p>
      <p><strong>📞 Customer Support:</strong> +376 335426</p>
      <p><strong>📧 Email:</strong> contact@ridemevot.com</p>
      <p><strong>🌐 Website:</strong> www.ridemevot.com</p>
      <p>Mevot complies with Royal Legislative Decree 1/2007 and Law 34/2002 on e-commerce and consumer protection.</p>

      <h2>2. Products and Availability</h2>
      <p><strong>Product Features:</strong> High-quality electric boards engineered for navigating urban areas and campuses.</p>
      <p>Product descriptions aim to be as accurate as possible, but slight variations may occur due to manufacturing or screen settings.</p>
      <p>Product availability is subject to stock. We reserve the right to modify or discontinue products at any time without notice.</p>

      <h2>3. Pricing and Payment</h2>
      <p>All prices are listed in USD ($) and include applicable taxes unless stated otherwise.</p>
      <p>Additional fees, such as customs duties for international orders, may apply and are the responsibility of the customer.</p>
      <p><strong>Accepted Payment Methods:</strong></p>
      <ul>
        <li>Credit and debit cards (Visa, Mastercard, etc.) via Banc Creand</li>
        <li>PayPal (you can pay with card even without an account)</li>
      </ul>
      <p>Orders will only be processed upon successful payment authorization.</p>
      <p>Mevot reserves the right to change prices at any time without prior notice.</p>

      <h2>4. Shipping and Delivery</h2>
      <p><strong>Courier:</strong> DHL Express or equivalent</p>
      <p><strong>Estimated delivery times:</strong></p>
      <ul>
        <li>Europe: 3–7 business days</li>
        <li>United States and Canada: 5–10 business days</li>
        <li>Rest of the world: 7–14 business days</li>
      </ul>
      <p>Shipping fees are calculated at checkout. Mevot is not liable for incorrect shipping details.</p>

      <h2>5. Returns and Refunds</h2>
      <p><strong>Return Window:</strong> 14 days from delivery</p>
      <p><strong>Conditions:</strong> Unused, undamaged, in original packaging</p>
      <p><strong>Shipping Costs:</strong> Covered by customer unless defective</p>
      <p><strong>Refund Timeline:</strong> 14 business days after inspection</p>
      <p>Start a return via email or contact page: <a href="https://www.ridemevot.com/contact" target="_blank" rel="noopener noreferrer">Contact Mevot</a></p>

      <h2>6. Warranty Information</h2>
      <p><strong>Duration:</strong> 2-Year Limited Warranty</p>
      <p><strong>Covered:</strong> Deck, motors, battery, electronic controller</p>
      <p><strong>Not Covered:</strong> Wear & tear, misuse, water damage, mods</p>
      <p><strong>Claim Process:</strong> Email contact@ridemevot.com with proof</p>
      <p><strong>Repair Shipping:</strong> Customer covers unless defect confirmed</p>

      <h2>7. Safety Guidelines</h2>
      <ul>
        <li><strong>Gear:</strong> Helmet, wrist guards, knee pads recommended</li>
        <li><strong>Age Restriction:</strong> 12+ only</li>
        <li><strong>Conditions:</strong> Avoid rain, ice, and traffic</li>
        <li><strong>Modifications:</strong> Voids warranty, increases risk</li>
      </ul>

      <h2>8. Battery and Charging Safety</h2>
      <p><strong>Charger:</strong> Only use Mevot-supplied charger</p>
      <p><strong>Environment:</strong> Charge indoors, ventilated, never overnight</p>
      <p><strong>Water Resistance:</strong> IP55 — dust and light rain only</p>

      <h2>9. Liability</h2>
      <p>Mevot is not liable for injury or damage from improper use. Riders are responsible for safety and legal compliance.</p>

      <h2>10. Intellectual Property</h2>
      <p>All site content is protected by copyright and trademark. Unauthorized use is prohibited.</p>

      <h2>11. Privacy and Cookie Policy</h2>
      <p><strong>Privacy:</strong> Only necessary data collected, handled securely per GDPR</p>
      <p><strong>Cookies:</strong> Shopify default cookies in use; continued browsing implies acceptance</p>

      <h2>12. Governing Law</h2>
      <p>These terms are governed by the laws of Andorra. Disputes resolved in Andorran courts.</p>

      <h2>13. Changes to Terms and Conditions</h2>
      <p>We may modify these terms at any time. Continued use implies acceptance.</p>

      <h2>14. Acceptance of Terms</h2>
      <p>By purchasing a Mevot product, you agree to all listed terms and policies.</p>

      <h2>15. Contact Information</h2>
      <p><strong>📧 Email:</strong> contact@ridemevot.com</p>
      <p><strong>📞 Phone:</strong> +376 335426</p>
      <p><strong>🌐 Website:</strong> www.ridemevot.com</p>
    </div>
  );
};

export default TermsConditions;
