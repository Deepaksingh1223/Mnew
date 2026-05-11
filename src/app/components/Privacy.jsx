'use client';

import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "1. INTRODUCTION",
    content: `
      <p>Thank you for choosing the relevant service(s) (the "<strong>Services</strong>") and/or product(s) (the "<strong>Product</strong>") provided by Mudra Group (as defined in the General Terms and Services available at <strong>www.mudra.com/terms/general</strong>, hereinafter also referred to as "<strong>I</strong>", "<strong>me</strong>", "<strong>my</strong>", "<strong>we</strong>", "<strong>us</strong>" and "<strong>our</strong>" or "<strong>Mudra</strong>"). By accessing or using our Services/Products, you CONSENT to the policies and practices set out in this privacy policy, including all appendices (collectively, the "<strong>Privacy Policy</strong>"), and represent and warrant that you have the valid consent and authority from the Relevant Person(s) (defined below) for us to collect, use, disclose and/or process your Personal Data as described herein. This Privacy Policy describes how we will collect, use and disclose your personal data when you access or use our Services/Products. You agree that Mudra may update this Privacy Policy at any time by posting the amended version on our website and associated application program interface or mobile applications (the "<strong>Site</strong>") or sending the latest Privacy Policy to you via email. To the extent that we have notified you of the updated Privacy Policy, your use or continued use of any Services/Products after such amendment shall be deemed as your acceptance and agreement to the same.</p>
      <p><em>Last Updated: 29 January 2026</em></p>
    `,
  },
  {
    id: 2,
    title: "2. WHAT PERSONAL DATA WE COLLECT",
    content: `
      <p>We may from time to time collect, process, and store certain personally identifiable information that can be used to contact or identify you and your beneficial owners, directors, officers, authorized signatories, employees, representatives, guarantee/security providers and other natural persons related to you (the "<strong>Relevant Persons</strong>") via your use of the Services/Products or where you have given your consent (collectively, the "<strong>Personal Data</strong>"). Such Personal Data may include contact details, information and data generated in the ordinary course of your relationship with us, information and data collected when you or a Relevant Person participates in events organized by us and information from cookies or the use of any information technology applications.</p>
      <p>Personal Data may also include, without limitation:</p>
      <p><strong>A. Personal Identifying Information:</strong></p>
      <ul>
        <li>Full legal name (including former name, and names in English and other languages if applicable)</li>
        <li>Identification document type (e.g., Passport)</li>
        <li>Identification document number (e.g., Passport No., National ID)</li>
        <li>Gender</li>
        <li>Date of birth</li>
        <li>Place of birth</li>
        <li>Nationality</li>
        <li>Residential address</li>
        <li>Country/state of residence</li>
        <li>Level of activity anticipated</li>
        <li>Contact phone number</li>
        <li>Email address</li>
        <li>Blockchain address</li>
        <li>Biometric data (e.g., facial and/or finger recognition for identity verification, where applicable)</li>
        <li>Additional Personal Data or documentation at the discretion of our compliance team</li>
      </ul>
      <p><strong>B. Personal Financial Information:</strong></p>
      <ul>
        <li>Total net wealth (approximately in USD or equivalent)</li>
        <li>Purpose of account opening</li>
        <li>Initial and ongoing sources of wealth or income</li>
        <li>Nature and details of the business/occupation/employment</li>
        <li>Source of funds/digital assets</li>
        <li>Credit history and score</li>
        <li>Transaction history and spending pattern</li>
        <li>Bank account information</li>
      </ul>
      <p><strong>C. Personal Location Information:</strong></p>
      <ul>
        <li>Location data</li>
        <li>IP address</li>
        <li>Device information</li>
      </ul>
      <p><strong>D. Sensitive Personal Information:</strong></p>
      <p>In certain cases, we may collect "<strong>Sensitive Personal Information</strong>" as defined under applicable laws. This includes data revealing family, racial origin, political or philosophical opinions, religious beliefs, criminal records, biometric data, or any data related to the health of such person, such as his/her physical, psychological, mental, genetic or sexual condition. We collect and use Sensitive Personal Information only to the limited extent necessary for specific purposes.</p>
    `,
  },
  {
    id: 3,
    title: "3. HOW WE USE YOUR PERSONAL DATA",
    content: `
      <p>We may use the collected Personal Data for the following purposes:</p>
      <table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:0.93em;">
        <thead>
          <tr style="background:rgba(255,255,255,0.08);">
            <th style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;text-align:left;">Category of Personal Data</th>
            <th style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;text-align:left;">Specific Purposes</th>
            <th style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;text-align:left;">Legal Basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">A. Personal Identifying Information (e.g., name, ID number, date of birth, address, email, phone)</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Identity verification and account setup; Providing and personalizing Services/Products; Communicating with you (e.g., support, notifications); Compliance with KYC/AML regulations; Fraud detection and security</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Contractual necessity, your consent where applicable, legal obligations, and legitimate interests such as ensuring security.</td>
          </tr>
          <tr>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">B. Personal Financial Information (e.g., wealth sources, transaction history, bank details)</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Processing payments, deposits, withdrawals, and transactions; Risk assessment and credit analysis; Generating statements, invoices, and reports; Monitoring fraud or suspicious activity; Internal audits and compliance</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Contractual necessity, legal obligations such as AML requirements, and legitimate interests such as risk management.</td>
          </tr>
          <tr>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">C. Personal Location Information (e.g., IP address, GPS data)</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Detecting and preventing fraud (e.g., unusual login locations); Enhancing user experience (e.g., location-based services); Compliance reporting (e.g., jurisdictional requirements)</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Legitimate interests, such as ensuring security, and your consent for precise location data where applicable.</td>
          </tr>
          <tr>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">D. Sensitive Personal Information (e.g., biometrics)</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Enhanced identity verification; Limited fraud prevention where required</td>
            <td style="border:1px solid rgba(255,255,255,0.15);padding:10px 12px;vertical-align:top;">Your explicit consent and legal obligations, such as those for high-risk KYC procedures.</td>
          </tr>
        </tbody>
      </table>
      <p>In addition to the purposes outlined above, we may also use collected Personal Data:</p>
      <p><strong>To provide and manage our Services/Products:</strong></p>
      <ul>
        <li>To make decisions relating to the provision or continued provision of the Services/Products to you.</li>
        <li>To verify or maintain the quality or safety of the Services/Products, and administer, operate, deliver, improve, and personalize the Services/Products.</li>
        <li>To provide Services/Products to you, such as maintaining or servicing accounts, providing customer service, processing your payments and transactions, verifying customer information and providing storage.</li>
      </ul>
      <p><strong>For security and fraud prevention:</strong></p>
      <ul>
        <li>To monitor and record the usage of the Services/Products and communications with you and/or the Relevant Persons (including for investigation and fraud prevention purposes).</li>
        <li>To detect, prevent and address technical issues and security incidents that compromise the availability, authenticity, integrity, and confidentiality of stored or transmitted personal information.</li>
      </ul>
      <p><strong>For risk management:</strong></p>
      <ul>
        <li>To conduct risk assessment and data analysis (including data processing, anti-money laundering and credit analyses), internal management and carry out internal/external audits.</li>
        <li>To resist malicious, deceptive, fraudulent, or illegal actions directed at Mudra or the users' business and to prosecute those responsible for those actions.</li>
      </ul>
      <p><strong>For communication:</strong></p>
      <ul>
        <li>To communicate with you, your affiliates and/or your representatives in relation to events, our Services/Products and other products or services offered by Mudra or its affiliates, unless you have opted not to receive such information.</li>
        <li>To provide you with statements, invoices, receipts and other related information in relation to the Services/Products.</li>
      </ul>
      <p><strong>For marketing and analytics:</strong></p>
      <ul>
        <li>To conduct market research, surveys, promotions and contests, and to analyse your preferences, interests and behaviour in relation to the Services/Products.</li>
      </ul>
      <p><strong>For compliance:</strong></p>
      <ul>
        <li>To fulfil any applicable legal, regulatory and compliance requirements (including anti-money laundering and tax obligations applicable to us).</li>
      </ul>
      <p><strong>For legal purposes:</strong></p>
      <ul>
        <li>To enforce or defend the rights or property of Mudra, its affiliates and other Users.</li>
      </ul>
      <p><strong>For other purposes:</strong></p>
      <ul>
        <li>To carry out any other purpose(s) described to you at the time the data was collected.</li>
      </ul>
      <p>We do not use or disclose Personal Data for any purpose other than those expressly permitted under this Privacy Policy and the applicable law.</p>
    `,
  },
  {
    id: 4,
    title: "4. DO WE SHARE YOUR PERSONAL DATA",
    content: `
      <p>We may share your Personal Data with the following persons for the purposes stated above:</p>
      <ul>
        <li><strong>Identity Verification &amp; Compliance Providers:</strong> We share your Personal Data with "Know Your Client" (KYC) and other blockchain analytics service providers to verify your identity and comply with anti-money laundering regulations.</li>
        <li><strong>Payment Processors &amp; Financial Institutions:</strong> We share your Personal Data with credit card networks, banks, financial institutions, and/or payment processors, merchants, loyalty programs partners to facilitate deposits, withdrawals, and transactions.</li>
        <li><strong>IT &amp; Infrastructure Providers:</strong> We share your Personal Data with service providers that provide website hosting, data analysis, information technology, mailing, and telecommunications data processing, payments, credit references or other services.</li>
        <li><strong>Marketing &amp; Analytics Partners:</strong> We share your Personal Data with social media platforms, online platforms, or third-party websites for marketing, advertising, or promoting our Services/Products, but only if you have provided consent for such sharing.</li>
        <li><strong>Professional Advisers:</strong> We share your Personal Data with our professional advisers, as necessary to help administer, operate, deliver and improve the Services/Products, including any person to whom we are under an obligation or otherwise to make disclosure pursuant to legal process or pursuant to any foreign or domestic legal, tax, and/or regulatory obligation or request.</li>
        <li><strong>Mudra's affiliates:</strong> We share your Personal Data with any actual or proposed assignee or business transferee of Mudra and/or its affiliate who is under a duty of confidentiality to the disclosing entity.</li>
        <li><strong>Others:</strong> We share your Personal Data with persons or entities that you authorize or consent to receive your Personal Data, such as your authorized representatives, agents, advisors, or beneficiaries.</li>
      </ul>
      <p>We do not allow our third-party service providers to use your Personal Data for their own purposes and only permit them to process your Personal Data for specified purposes and in accordance with our instructions.</p>
    `,
  },
  {
    id: 5,
    title: "5. DO WE TRANSFER YOUR PERSONAL DATA",
    content: `
      <p>Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. Please note that we may transfer the data, including Personal Data, outside your jurisdiction and process it there. Your consent to this Privacy Policy and your submission of such information represent your agreement and consent to that transfer. Information you provide to us may also be stored on our and/or third-party cloud servers.</p>
      <p>We will take reasonable measures to ensure that your Personal Data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place, including the security of your Personal Data and other personal information.</p>
      <p>We rely on appropriate safeguards for data transfers, which may include:</p>
      <ul>
        <li><strong>Standard Contractual Clauses (SCCs):</strong> We use EU Standard Contractual Clauses approved by the European Commission for transfers from the EEA to third countries.</li>
        <li><strong>Data Protection Impact Assessments (DPIAs):</strong> We conduct DPIAs for high-risk processing activities, including transfers to countries without an adequacy decision, to ensure your data is protected.</li>
        <li><strong>Due Diligence:</strong> We conduct rigorous information security due diligence on all third-party vendors and sub-processors who will receive your data.</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "6. HOW LONG DO WE RETAIN YOUR DATA",
    content: `
      <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies. By accessing/using our Services/Products, you are giving consent for us to retain your Personal Data.</p>
    `,
  },
  {
    id: 7,
    title: "7. MARKETING COMMUNICATIONS",
    content: `
      <p>We may communicate company news, promotions, and information relating to our products and services provided by us. We may share Personal Data with our affiliates to send marketing communications. We will only send you such marketing communications if we have received your express consent in the relevant channels in the Services/Products.</p>
      <p>If you change your mind and wish not to receive these communications, please send an email to <strong>support@mudra.com</strong> with the subject "MARKETING OPT OUT".</p>
      <p>To ensure the quality of our Services/Products, for Services/Products-related communications, such as amendments to terms and conditions, updates and operational notifications, you understand you will not be able to opt out of receiving such information.</p>
    `,
  },
  {
    id: 8,
    title: "8. COOKIE USAGE AND TRACKING TECHNOLOGIES",
    content: `
      <p>While you access the Site, we may use the industry practice of placing a small amount of data that will be saved by your browser ("<strong>Cookies</strong>"). This information can be placed on your computer or other devices used to visit the Site. This information helps us recognize you as a customer, collect information about your use of our Services/Products to better customize our services and better your experience. We may also use the information collected to ensure compliance with our compliance program and to ensure your account security has not been compromised by detecting irregular or suspicious account activities.</p>
      <p>We provide you with the ability to customize your Cookie preferences. When you first visit our Site, you will be presented with a Cookie consent banner that allows you to:</p>
      <ul>
        <li><strong>Accept All Cookies:</strong> This allows all cookies, including those for analytics and marketing.</li>
        <li><strong>Reject All Cookies:</strong> This rejects all cookies except for those strictly necessary for the website to function.</li>
        <li><strong>Manage Cookies:</strong> This allows you to choose which categories of cookies you wish to accept.</li>
      </ul>
      <p>Most browsers are set up to accept Cookies automatically. Some Cookies expire when you finalize the session and other Cookies remain on your computer or other devices until deleted or expired. You have the option to decline the use of our Cookies, but this may affect the functionality of the Services/Products or your user experience.</p>
      <p>Some browsers have a do-not-track feature that lets you tell websites that you do not want to have your online activities tracked. As of the date of this Privacy Policy, we do not respond to browser do-not-track signals.</p>
    `,
  },
  {
    id: 9,
    title: "9. INFORMATION SECURITY",
    content: `
      <p>We endeavor to protect ourselves and you from unauthorized access, alteration, disclosure, or destruction of data we collect and store. We take various measures to ensure information security, including encryption of our communications with SSL, requiring two-factor authentication for all sessions, periodic review of our Personal Data collection, storage, and processing practices and restricted access to your Personal Data on a need-to-know basis.</p>
      <p>The Security of your data is important to us, but you understand and acknowledge that no method of transmission over the Internet, or method of electronic storage, is fully secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
    `,
  },
  {
    id: 10,
    title: "10. LINKS TO OTHER SITES",
    content: `
      <p>Our Site may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit. You understand we have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
    `,
  },
  {
    id: 11,
    title: "11. MINOR POLICY",
    content: `
      <p>We do not provide Services/Products to anyone who is regarded as a "minor" or equivalent under applicable law. We do not knowingly and intentionally collect the personally identifiable information from anyone who is regarded as a "minor" or equivalent under applicable law. If you are a parent or guardian and you are aware that your child (being a "minor" or equivalent under applicable law) has provided us with Personal Data, please contact us and we will take appropriate measures.</p>
    `,
  },
  {
    id: 12,
    title: "12. YOUR CONTACT WITH OTHER CUSTOMERS",
    content: `
      <p>You understand you are solely responsible for your interactions with other Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users.</p>
    `,
  },
  {
    id: 13,
    title: "13. YOUR RIGHTS",
    content: `
      <p><strong>A. Contacting Us about Privacy Questions or Concerns</strong></p>
      <p>If you have any questions about this Privacy Policy or the use of your Personal Data, please contact us by sending an email to <strong>support@mudra.com</strong> with the subject "PRIVACY ENQUIRY".</p>
      <p><strong>B. Right to Know and Data Portability</strong></p>
      <p>You have the right to request that we disclose certain information to you about our collection and use of your Personal Data over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:</p>
      <ul>
        <li>The categories of Personal Data we collected about you.</li>
        <li>The categories of sources for the Personal Data we collected about you.</li>
        <li>Our purposes for collecting that Personal Data.</li>
        <li>The categories of third parties with whom we share that Personal Data.</li>
        <li>The specific pieces of Personal Data we collected about you (also called a data portability request).</li>
      </ul>
      <p>To exercise your right to data portability, you may request a machine-readable copy of your Personal Data by contacting <strong>support@mudra.com</strong>.</p>
      <p><strong>C. Right to Correct, Delete and Limit the Use of Personal Data</strong></p>
      <p>You have the right to request that we correct any inaccurate Personal Data we hold about you. You also have the right to request that we delete any of your Personal Data that we collected from you and retained, subject to certain exceptions (e.g., for compliance with law or legal purposes).</p>
      <p>You have the right to request to limit the use of your Personal Data, or withdraw your consent to the use of your Personal Data. Where you or a Relevant Person withdraws your/its/their consent or fails to supply relevant information or data required for us to provide our Services/Products to you, we may be unable to provide or continue to provide Services/Products to you.</p>
      <p>To make your request, please contact <strong>support@mudra.com</strong> with the subject "DATA REQUEST". We will do our best to respond to your request as soon as possible (generally within less than 15 working days of the receipt of your request), with the exception that we may refuse your deletion request in certain circumstances, such as compliance with law or legal purposes.</p>
      <p>Additionally, we provide functionality within the Mudra application (app) that enables you to delete your transaction records, including payment, deposit, and withdrawal history, directly from the app's frontend interface.</p>
      <p>In response to data access, correction, deletion or data portability request, we will verify the requesting party's identity to ensure that he or she is legally entitled to make such a request. While we aim to respond to these requests free of charge, we reserve the right to charge you a reasonable fee, especially if the request is repetitive or onerous.</p>
    `,
  },
  {
    id: 14,
    title: "14. LANGUAGE",
    content: `
      <p>The official and controlling language of this Privacy Policy is English. If this Agreement is translated into any other language from English, the English language version shall prevail to the extent of any inconsistency.</p>
    `,
  },
  {
    id: 15,
    title: "15. DATA PROTECTION OFFICER (DPO) AND COMPLAINTS",
    content: `
      <p>We have appointed an independent Data Protection Officer (the "<strong>DPO</strong>") who is responsible for overseeing questions about this Privacy Policy. If you have any questions or complaints concerning the security of your Personal Data, or wish to exercise your data rights, please contact the DPO at: <strong>support@mudra.com</strong>.</p>
      <p>We are committed to resolving any complaints about our collection or use of your Personal Data. We will acknowledge receipt of your complaint and respond to you generally within 15 working days.</p>
    `,
  },
];

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <>
      <div className="mxd-section overflow-hidden">
        <div className="mxd-container">
          <div className="mxd-block">
            <div className="mxd-promo">
              <div className="terms-wrap">

                <div className="terms-alert">
                  <strong>THIS IS AN IMPORTANT DOCUMENT. PLEASE READ IT CAREFULLY.</strong>{" "}
                  This privacy policy contains important information about how Mudra collects, uses, and protects your personal data. You should not construe this Privacy Policy as legal, tax or financial advice. You should consult your own independent professional advisers before entering into any transaction.
                </div>

                {sections.map((sec) => (
                  <div
                    key={sec.id}
                    className={`acc-item${openSection === sec.id ? " open" : ""}`}
                  >
                    <button
                      className="acc-btn"
                      onClick={() => toggle(sec.id)}
                      aria-expanded={openSection === sec.id}
                    >
                      <span className="acc-num">{String(sec.id).padStart(2, "0")}</span>
                      <span className="acc-label">{sec.title}</span>
                      <span className="acc-icon">▾</span>
                    </button>

                    {openSection === sec.id && (
                      <div
                        className="acc-body"
                        dangerouslySetInnerHTML={{ __html: sec.content }}
                      />
                    )}
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}