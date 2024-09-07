import React from 'react'
import "./Footer.css";
export const Footer = () => {
  const footerData = {
    companyInfo: {
      title: "Company Info",
      details: [
        "TechCorp Inc.",
        "123 Innovation Drive, Silicon Valley, CA 94043",
        "Email: contact@techcorp.com",
        "Phone: +1-800-123-4567",
      ],
      links: [{ name: "About Us", url: "/about-us" }],
    },
    sections: [
      {
        title: "Products",
        links: [
          { name: "AI Platform", url: "/products/ai-platform" },
          { name: "Cloud Storage", url: "/products/cloud-storage" },
          { name: "Data Analytics", url: "/products/data-analytics" },
          { name: "Cyber Security", url: "/products/cyber-security" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Blog", url: "/blog" },
          { name: "Case Studies", url: "/case-studies" },
          { name: "Documentation", url: "/documentation" },
          { name: "Webinars", url: "/webinars" },
        ],
      },
      {
        title: "Support",
        links: [
          { name: "Customer Support", url: "/support" },
          { name: "FAQs", url: "/faq" },
          { name: "Help Center", url: "/help-center" },
          { name: "Contact Us", url: "/contact-us" },
        ],
      },
      {
        title: "Support",
        links: [
          { name: "Customer Support", url: "/support" },
          { name: "FAQs", url: "/faq" },
          { name: "Help Center", url: "/help-center" },
          { name: "Contact Us", url: "/contact-us" },
        ],
      },
    ],
  };
  const { companyInfo, sections } = footerData;

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-section company-info">
              <h4>{companyInfo.title}</h4>
              {companyInfo.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
              {companyInfo.links.map((link, index) => (
                <p key={index}>
                  <a href={link.url}>{link.name}</a>
                </p>
              ))}
            </div>
          </div>

          {sections.map((section, index) => (
            <div className="col-md-2">
              <div className="footer-section" key={index}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}