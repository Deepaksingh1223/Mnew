'use client';

import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "1. INTRODUCTION",
    content: `
      <p><strong>1.1</strong> The Account and the related Services are provided to you by the Mudra group, including:</p>
      <ul>
        <li><strong>(a)</strong> Mudra Financial Technologies Private Limited, a private limited company incorporated in India, having its registered office at 404, Tower A, Cyber Hub, Gurugram, Haryana 122002, India (<strong>"MFTL"</strong>);</li>
        <li><strong>(b)</strong> Mudra Payments Solutions Limited, a company incorporated in India with its registered office at the same address (<strong>"MPSL"</strong>);</li>
        <li><strong>(c)</strong> Mudra Trust Services Limited, a public company incorporated in India, having its registered office at the same address (<strong>"Mudra Trust"</strong>);</li>
        <li><strong>(d)</strong> Affiliates of any of the above, as applicable,</li>
      </ul>
      <p>together, <strong>"Group"</strong> or <strong>"us"</strong>.</p>
    `,
  },
  {
    id: 2,
    title: "2. SCOPE",
    content: `
      <p><strong>2.1</strong> These Terms govern your Account and your use of the Services. Please take the time to read and understand these Terms before using these services so that you are aware of your legal rights and obligations. By using any of the Services and/or completing the registration process, you are entering into a legally binding contract with the Group and shall be deemed to have expressly read, understood, and agreed to be bound by these Terms.</p>
      <p><strong>2.2</strong> These Terms comprise:</p>
      <ul>
        <li><strong>(a)</strong> these general terms and conditions, which apply to your Account and the Services generally;</li>
        <li><strong>(b)</strong> Part A — Custodian Account(s);</li>
        <li><strong>(c)</strong> Part B — Mudra Card (including Card Issuance Services);</li>
        <li><strong>(d)</strong> Part C — Swap Transactions;</li>
        <li><strong>(e)</strong> Part D — Self-custody Wallet and Smart Contract Vault, and Virtual Account;</li>
        <li><strong>(f)</strong> Part E — Other Third Party Services;</li>
        <li><strong>(g)</strong> Part F — Credit Account and Loan Services;</li>
        <li><strong>(h)</strong> Part G — Crypto Earn Services;</li>
        <li><strong>(i)</strong> Part H — P2P Services;</li>
        <li><strong>(j)</strong> Part I — Fiat Remittance Services;</li>
        <li><strong>(k)</strong> Part J — Crypto Transfer Services;</li>
        <li><strong>(l)</strong> Part K — Scan to Pay Services;</li>
        <li><strong>(m)</strong> Our Privacy Policy; and</li>
        <li><strong>(n)</strong> Any other rules, notifications, guidelines, or terms designated by us from time to time.</li>
      </ul>
      <p><strong>2.3 Inconsistency</strong><br/>If there is any inconsistency between the English version and any other language version of the Terms, the English version prevails.</p>
    `,
  },
  {
    id: 3,
    title: "3. THE SERVICES",
    content: `
      <p><strong>3.1</strong> The Services provided to users encompass a range of financial activities, including but not limited to:</p>
      <ul>
        <li><strong>(a)</strong> Custodian Account;</li>
        <li><strong>(b)</strong> Mudra Card (including Card Issuance Services);</li>
        <li><strong>(c)</strong> Swap Transactions;</li>
        <li><strong>(d)</strong> Management of the Self-custody Wallet and Smart Contract Vault;</li>
        <li><strong>(e)</strong> Provision of Virtual Accounts;</li>
        <li><strong>(f)</strong> Other Third Party Services;</li>
        <li><strong>(g)</strong> Credit Account and Loan Services;</li>
        <li><strong>(h)</strong> Crypto Earn Services;</li>
        <li><strong>(i)</strong> P2P Services;</li>
        <li><strong>(j)</strong> Fiat Remittance Services;</li>
        <li><strong>(k)</strong> Crypto Transfer Services; and</li>
        <li><strong>(l)</strong> Scan to Pay Services.</li>
      </ul>
      <p><strong>3.2</strong> The Group reserves the right to update, modify, suspend, disable, or restrict access to, or discontinue the Services, or any features, components, or content thereof at any time, for any reason, without notice or liability to the user.</p>
      <p><strong>3.3 Pre-conditions for Services</strong><br/>
      <strong>(a)</strong> We may determine the Services made available to you at our sole discretion. To access the Services, you must open and maintain an Account with us.<br/><br/>
      <strong>(b)</strong> We may refuse to provide any Service if an Event of Default has occurred, you have provided incorrect information, or you have not satisfied pre-conditions imposed by us.<br/><br/>
      <strong>(c)</strong> We may also suspend or refuse to provide any Service if it may not comply with Applicable Law, including any AML/CTF requirements.</p>
    `,
  },
  {
    id: 4,
    title: "4. ONBOARDING",
    content: `
      <p><strong>4.1</strong> To open and maintain an Account with us and access Services, you must: (i) complete an applicable application as requested by us; and (ii) provide such information as we reasonably request. The information that you provide must be complete, accurate and up-to-date.</p>
      <p><strong>4.2</strong> We have the sole discretion as to the opening, operation and closure of the Account. We may, at any time, without liability: (i) vary, suspend or close your Account; (ii) specify or vary the scope of the Services; (iii) prescribe the types of Digital Assets and currencies of fiat supported; and/or (iv) restrict or impose conditions or limits on the Account.</p>
      <p><strong>4.3</strong> Any Account is established and maintained by us for the sole purpose of providing the Services. In no circumstances should any Account be interpreted as a banking service, or a stored value facility, of any kind.</p>
      <p><strong>4.4</strong> By signing up for the Account, you represent and warrant that you have read and agreed to our privacy policy; you have attained the minimum age required under all relevant Applicable Laws; you have the full right, power, and authority to agree to these Terms; and you are not impersonating any other person or concealing your identity.</p>
      <p><strong>4.5</strong> You agree to provide us with all information and/or documents requested by us from time to time, including for compliance with Applicable Law.</p>
      <p><strong>4.6</strong> You agree to cooperate with all requests made by us or any of our third-party service providers in connection with your use of the Services, including to identify or authenticate your identity or validate your funding sources or transactions.</p>
    `,
  },
  {
    id: 5,
    title: "5. THE APP",
    content: `
      <p><strong>5.1</strong> The functions of the App allow you to perform one or more of the following actions, including but not limited to:</p>
      <ul>
        <li><strong>(a)</strong> Request for the issuance of Mudra Cards;</li>
        <li><strong>(b)</strong> Change the settings associated with your Mudra Cards, e.g. setting and changing your Mudra Card PIN number;</li>
        <li><strong>(c)</strong> Conduct Swap Transactions;</li>
        <li><strong>(d)</strong> View the Transaction History by month;</li>
        <li><strong>(e)</strong> Request for the Services to be disabled, enabled or blocked;</li>
        <li><strong>(f)</strong> Load your Custodian Account (including a Debit Account and a Credit Account);</li>
        <li><strong>(g)</strong> Top-up or withdraw Digital Assets to or from your Custodian Account(s);</li>
        <li><strong>(h)</strong> Top-up fiat monies to or from your Custodian Account(s);</li>
        <li><strong>(i)</strong> Withdraw or transfer fiat monies to or from your Custodian Account(s) or Virtual Account;</li>
        <li><strong>(j)</strong> Transfer Digital Assets from your Custodian Account(s) to a third party's cryptocurrency wallet;</li>
        <li><strong>(k)</strong> Borrow money through our Loan Services; and</li>
        <li><strong>(l)</strong> Scan QR codes through the App to initiate Scan to Pay Transactions.</li>
      </ul>
      <p><strong>5.2</strong> Subject always to your continuing compliance with these Terms, the Group will grant to you a limited, non-transferable, non-exclusive licence to use the App on your Enabled Device and only for your own purposes. All other rights not expressly granted to you are reserved.</p>
    `,
  },
  {
    id: 6,
    title: "6. YOUR DEVICE",
    content: `
      <p><strong>6.1</strong> You acknowledge and agree that, in connection with your use of the App, you shall be responsible for the following, at your own cost:</p>
      <ul>
        <li><strong>(a)</strong> Obtaining all necessary hardware, software and communications services necessary for your use of the App;</li>
        <li><strong>(b)</strong> Installing antivirus or other mobile security software on your Enabled Device to protect against any security or other vulnerabilities; and</li>
        <li><strong>(c)</strong> Installing updates and patches for the App and your Enabled Device in a prompt and timely manner.</li>
      </ul>
      <p><strong>6.2</strong> You shall be solely responsible and liable for any access to and use of the App and Services through your Enabled Device, notwithstanding that such access may have been effected without your knowledge, authority or consent. The Group shall not be liable to you for any loss or damage resulting from such use.</p>
      <p><strong>6.3</strong> Should you discover that your Enabled Device is lost or stolen or has been accessed or used in an unauthorised way, you shall notify us immediately at <strong>support@mudra.com</strong>.</p>
    `,
  },
  {
    id: 7,
    title: "7. FEES",
    content: `
      <p><strong>7.1</strong> Your use of the Services may be subject to certain Fees, which will, if applicable, be debited from your Wallet Balance of the Custodian Account(s). You undertake to settle any outstanding Fees immediately upon request, failing which we reserve the right to suspend your use of the Services until all such outstanding Fees have been settled.</p>
      <p><strong>7.2</strong> All applicable Fees are exclusive of any applicable taxes and the actual Fee charged will be increased to account for any such applicable taxes.</p>
      <p><strong>7.3</strong> All Fees paid shall be non-refundable.</p>
      <p><strong>7.4</strong> Your obligation to pay any amount under these Terms is separate from each of your other obligations to pay.</p>
    `,
  },
  {
    id: 8,
    title: "8. RIGHTS OF NETTING, SET-OFF AND LIEN",
    content: `
      <p><strong>8.1</strong> If, on any day, you and we have payment and delivery obligations in the same fiat or the same Acceptable Token in respect of two or more transactions, then we may elect for such obligations to be settled on a net basis so that such obligations will be automatically satisfied and discharged.</p>
      <p><strong>8.2</strong> We may, at any time during the course of or following the termination of the Terms and without notice to you, set off any amount or other obligation due from you to the Group against sums due from the Group to you.</p>
      <p><strong>8.3</strong> We are entitled to exercise a general lien over any or all of your property which (for any reason) is in or comes into our possession or control. We have the right to sell such property and apply the proceeds of sale, after deduction of reasonable costs, to satisfy any amount you owe us.</p>
    `,
  },
  {
    id: 9,
    title: "9. INTELLECTUAL PROPERTY RIGHTS",
    content: `
      <p>You acknowledge and agree that:</p>
      <ul>
        <li><strong>(a)</strong> The Group's and its affiliates' trade marks and logos, and any other logos, service marks, product names and other proprietary indicia used in the App are the property of the Group, its affiliates, or third-party licensors (collectively, the <strong>"Trade Marks"</strong>);</li>
        <li><strong>(b)</strong> The intellectual property rights in and to the Services are either owned by us or licensed to us by third-party licensors;</li>
        <li><strong>(c)</strong> Other than the licence expressly granted by you in these Terms, no other rights are granted to you in respect of either the Trade Marks, the App or the Services; and</li>
        <li><strong>(d)</strong> No part or parts of the App may be reproduced, distributed, republished, displayed, broadcast, hyperlinked, transmitted, adapted, modified to create derivative works or otherwise commercially exploited in any manner without our prior written permission.</li>
      </ul>
    `,
  },
  {
    id: 10,
    title: "10. CONDUCT",
    content: `
      <p>Without prejudice to the foregoing, you shall not (and shall not authorise, allow or assist any other party to):</p>
      <ul>
        <li><strong>(a)</strong> Use the App to conduct electronic spamming;</li>
        <li><strong>(b)</strong> Use the App to perform unlawful or immoral activities (including but not limited to money laundering, terrorism financing and fraudulent activities);</li>
        <li><strong>(c)</strong> Use the App to upload content that has viruses, malicious codes, immoral or illegal content;</li>
        <li><strong>(d)</strong> Modify or adapt the whole or any part of the App or combine or incorporate the App into another programme or application;</li>
        <li><strong>(e)</strong> Disassemble, decompile, reverse-engineer or otherwise attempt to derive the source code of the App or any components thereof;</li>
        <li><strong>(f)</strong> Use the App in any manner that would lead to the infringement of our intellectual property rights or those of any third-party;</li>
        <li><strong>(g)</strong> Use the App in a way that could damage, disable, impair or compromise the App or the provision of the Services; or</li>
        <li><strong>(h)</strong> Demonstrate or use any abusive, threatening and/or violent behaviour or language towards our personnel.</li>
      </ul>
    `,
  },
  {
    id: 11,
    title: "11. DATA PROTECTION",
    content: `
      <p>By using the Services, you confirm that you have read and understood our privacy policy and consent to us collecting, using, disclosing and sharing amongst ourselves your Personal Data and disclosing such Personal Data to the Group, our authorised service providers and relevant third parties for purposes required by us to facilitate and administer your use of the Services. These purposes are set out in greater detail in our privacy policy, which is accessible at <strong>https://www.mudra.com/privacy-policy</strong>.</p>
    `,
  },
  {
    id: 12,
    title: "12. ELECTRONIC COMMUNICATIONS",
    content: `
      <p><strong>12.1</strong> You shall accept full responsibility for the security and authenticity of all Instructions sent via the App and you shall be bound by all such Instructions. We shall be entitled to assume that all Instructions received from your Enabled Devices via the App are yours.</p>
      <p><strong>12.2</strong> You are aware that Instructions and information transmitted via the App are generally transmitted via the Internet and may be routed via public, transnational installations which are not specifically protected. We cannot guarantee complete protection against unauthorised access, and you accept these associated risks.</p>
      <p><strong>12.3</strong> Any Instructions sent by you to us shall only be deemed to be received by us when we have successfully retrieved such Instructions from the relevant system and duly informed you of such receipt.</p>
      <p><strong>12.4</strong> Without prejudice to any of the terms in these Terms, you shall be liable for any damage that may be caused through the use of the Internet – i.e. through loss, delay, misunderstandings, corrupted texts, unauthorised interceptions by third parties or duplicates.</p>
      <p><strong>12.5</strong> You acknowledge and agree that in the event of any dispute arising in connection with your use of the Services, our records of all matters relating to your use of the Services at any specified date shall be conclusive of their accuracy and shall be binding on you for all purposes whatsoever.</p>
    `,
  },
  {
    id: 13,
    title: "13. LIMITATION OF ACCOUNT AND SERVICES / TERMINATION",
    content: `
      <p><strong>13.1</strong> The Group may at any time, without notice and in its sole and absolute discretion, terminate, suspend or limit your use of your Account and the Services for any reason, including: (a) any breach by you of these Terms; (b) for compliance with Applicable Laws; (c) where the Group suspects unlawful activities (including money laundering, terrorism financing and fraudulent activities); (d) in the event you become Insolvent; (e) you act fraudulently or dishonestly; or (f) anything occurs which, in our opinion, is likely to have a material adverse effect on your ability to comply with your obligations (each, an <strong>"Event of Default"</strong>).</p>
      <p><strong>13.2</strong> The Group reserves the right to reverse, cancel, refuse to honour or exclude you from participating in any incentive programmes (including reward, cashback or referral programmes) if you are found in breach of any of these Terms.</p>
      <p><strong>13.3</strong> Your obligations under these Terms will continue and the Group shall remain entitled to debit your Wallet Balance for any amount and charges incurred in or related to Services and Card Transactions that are carried out before or after the termination of your Services.</p>
      <p><strong>13.4</strong> You shall not be entitled to any payment, compensation or damages from us in relation to any suspension or termination of your use of the Services for any reason whatsoever.</p>
      <p><strong>13.5</strong> You are entitled to a refund of your Wallet Balance of the Custodian Account(s) upon termination of your Services, subject to applicable conditions and fees.</p>
    `,
  },
  {
    id: 14,
    title: "14. LIMITATION OF LIABILITY",
    content: `
      <p><strong>14.1</strong> Except as expressly provided in these Terms, to the fullest extent permitted by law, we disclaim all other representations or warranties, express or implied, including without limitation, any warranties regarding quality, suitability, merchantability, or fitness for a particular purpose of any service provided under these Terms.</p>
      <p><strong>14.2</strong> To the extent permitted by law, in no event shall the Group or any of its representatives be liable to you for any losses or damage arising from: (A) any delay, suspension, discontinuance or failure of the App or Services; (B) any rejection of the Mudra Card or the Services; (C) any refusal to process or authorise any transaction for any reason; (D) your inability to effect or complete any transaction due to system maintenance or breakdown; or (E) use of your Enabled Device and the Services by third parties, whether authorised or unauthorised by you.</p>
      <p><strong>14.3</strong> In any case, the total liability of the Group arising out of or in connection with the provision of any service under these Terms shall be limited to your Wallet Balance of Custodian Account(s) as of the date your claim arises.</p>
      <p><strong>14.4</strong> Nothing in these Terms shall operate to limit or exclude any liability for fraud or for death or personal injury resulting from negligence.</p>
    `,
  },
  {
    id: 15,
    title: "15. INDEMNIFICATION",
    content: `
      <p>You agree to indemnify and hold the Group, each of its affiliates and third-party service providers, and each of their respective officers, directors, agents, joint venturers, employees and representatives (<strong>"Indemnified Parties"</strong>), harmless from any claim or demand (including attorneys' fees and any fines, fees or penalties imposed by any regulatory authority) arising out of or related to (i) your breach of these Terms; (ii) your use of the App and the Services; (iii) your violation of any rule or regulation, or the rights of any third-party; and (iv) any transactions resulting from your wilful default, fraud, gross negligence or breach of these Terms.</p>
    `,
  },
  {
    id: 16,
    title: "16. AMENDMENT AND VARIATION",
    content: `
      <p>These Terms may from time to time be updated or amended, and the Group will post any such updates on the App and the Site. Such updated Terms will take effect immediately upon posting. You should regularly check the App and the Site to inform yourself of any such changes. By continuing to use the App and the Services after any such changes have taken effect, you are indicating your acceptance of the updated Terms. If you do not wish to be bound by any changes, you should stop using the App and the Services immediately.</p>
    `,
  },
  {
    id: 17,
    title: "17. ASSIGNMENT AND SUBCONTRACTING",
    content: `
      <p>These Terms, and any rights and licences granted hereunder, are personal to you and may not be transferred or assigned by you, but may be assigned by the Group without restriction, including without limitation to any of the Group's affiliates or subsidiaries, or to any successor in interest of any business associated with the Services. Any attempted transfer or assignment in violation hereof shall be null and void.</p>
    `,
  },
  {
    id: 18,
    title: "18. SEVERABILITY",
    content: `
      <p>If any provision of these Terms shall be found by any court or administrative body of competent jurisdiction to be invalid or unenforceable, the invalidity or unenforceability of such provision shall not affect the other provisions of these Terms and all provisions not affected by such invalidity or unenforceability shall remain in full force and effect.</p>
    `,
  },
  {
    id: 19,
    title: "19. ENTIRE AGREEMENT AND LANGUAGE",
    content: `
      <p><strong>19.1</strong> These Terms constitute the entire agreement between you and the Group with regard to its subject matter and supersede and invalidate all other prior representations, arrangements, understandings, and agreements relating to the same subject matter.</p>
      <p><strong>19.2</strong> These Terms are concluded in the English language and all communications including any notices or information being transmitted shall be in English. If these Terms or any part of them are translated into any other language, the English language text shall prevail.</p>
    `,
  },
  {
    id: 20,
    title: "20. WAIVER",
    content: `
      <p><strong>20.1</strong> These Terms shall be waived in whole or in part only with the written consent of the Group.</p>
      <p><strong>20.2</strong> The delay of enforcement or the non-enforcement of any of the terms of these Terms by the Group shall not be construed as a waiver of any of the other rights of the Group arising out of the breach or any subsequent breach of any of these Terms.</p>
    `,
  },
  {
    id: 21,
    title: "21. NOTICES AND COMMUNICATIONS",
    content: `
      <p><strong>21.1</strong> By using the Services, you agree that the Group may provide you with any notices or other communications electronically: (a) via email, SMS message, or telephone call to the contact details you provide, or (b) by posting to the Site. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted.</p>
      <p><strong>21.2</strong> We prefer receiving notices to us electronically through our support system at <strong>support@mudra.com</strong>.</p>
    `,
  },
  {
    id: 22,
    title: "22. THIRD PARTY RIGHTS",
    content: `
      <p><strong>22.1</strong> These Terms and documents that confer benefits on Indemnified Parties are intended to be enforceable by each Indemnified Party. The parties to these Terms do not intend that any term should be enforceable by any person other than an Indemnified Party. Notwithstanding this, these Terms may be rescinded or varied at any time by the Group and you without the consent of any Indemnified Parties.</p>
    `,
  },
  {
    id: 23,
    title: "23. GOVERNING LAW AND SUBMISSION TO ARBITRATION",
    content: `
      <p><strong>23.1</strong> Unless otherwise specified in the relevant Parts, these Terms shall be governed by and construed in accordance with the laws of India.</p>
      <p><strong>23.2</strong> Any dispute, controversy, difference or claim arising out of or relating to these Terms will be referred to and finally resolved by arbitration administered by the Indian Council of Arbitration (<strong>"ICA"</strong>) under the ICA Administered Arbitration Rules in force when the Notice of Arbitration is submitted.</p>
      <p><strong>23.3</strong> You and we agree that:</p>
      <ul>
        <li><strong>(a)</strong> The governing law of this Clause is Indian law;</li>
        <li><strong>(b)</strong> The seat of arbitration will be New Delhi, India;</li>
        <li><strong>(c)</strong> Unless you and we agree otherwise, the number of arbitrators will be one (1) and the arbitrator must have relevant legal and technological expertise; and</li>
        <li><strong>(d)</strong> The arbitration proceedings will be conducted in English or Hindi.</li>
      </ul>
      <p><strong>23.4</strong> Notwithstanding any other provision of these Terms, you agree that we have the right to apply for injunctive remedies (or an equivalent type of urgent legal relief) in any jurisdiction.</p>
    `,
  },
  {
    id: 24,
    title: "24. DEFINITIONS",
    content: `
      <p>In these Terms, except where the context otherwise requires, the following words and expressions have the following meanings:</p>
      <div class="def-table">
        <div class="def-row"><span class="def-term">"Account"</span><span class="def-desc">means the account established in respect of the Services, which includes the Custodian Account, the Credit Account, Self-custody Wallet and/or Virtual Account, as applicable;</span></div>
        <div class="def-row"><span class="def-term">"Acceptable Tokens"</span><span class="def-desc">means such Digital Assets which would be accepted by the Group to be deposited into the Custodian Account, which include Bitcoin (BTC), Ethereum (ETH), Tether (USDT) and USD Coin (USDC). Such list may be updated at the sole discretion of the Group;</span></div>
        <div class="def-row"><span class="def-term">"AML/CTF"</span><span class="def-desc">means anti-money laundering and counter-terrorist financing;</span></div>
        <div class="def-row"><span class="def-term">"App"</span><span class="def-desc">means the mobile application software owned and released by the Group, available for download for Android or Apple iOS, including all content and services made available on or through the same, and any and all updates, upgrades, supplements, releases and versions thereof;</span></div>
        <div class="def-row"><span class="def-term">"Applicable Law"</span><span class="def-desc">means any Indian or foreign law, rule, statute, subordinate legislation, regulation, by-law, order, ordinance, protocol, code, guideline, treaty, policy, notice, direction or judicial, arbitral, administrative, ministerial or departmental judgment, award, decree, treaty, directive, or other requirement or guideline published or in force at any time;</span></div>
        <div class="def-row"><span class="def-term">"Digital Assets"</span><span class="def-desc">means digital representations of value which may be in the form of digital tokens (such as digital currencies, utility tokens or security or asset-backed tokens), any other virtual commodities, crypto assets or other assets of essentially the same nature;</span></div>
        <div class="def-row"><span class="def-term">"Enabled Device"</span><span class="def-desc">means the mobile communications or other device successfully registered by you for use in connection with the App and Services;</span></div>
        <div class="def-row"><span class="def-term">"Event of Default"</span><span class="def-desc">shall have the meaning ascribed to the term in Clause 13.1;</span></div>
        <div class="def-row"><span class="def-term">"Fees"</span><span class="def-desc">means all applicable fees and charges imposed by the Group, the relevant BIN Sponsor, the Custodian, the Smart Contract, the Card Network and/or otherwise in relation to the use of the Services;</span></div>
        <div class="def-row"><span class="def-term">"Group/we/us/our"</span><span class="def-desc">means the Mudra group, including MFTL, MPSL, Mudra Trust, and/or their affiliates. The rights and obligations of each member of the Group under these Terms are several and not joint;</span></div>
        <div class="def-row"><span class="def-term">"Instructions"</span><span class="def-desc">means any written instructions given by a user, including communications effected directly between protected electromechanical or electronic devices, whether automated or not, referable to you;</span></div>
        <div class="def-row"><span class="def-term">"KYC"</span><span class="def-desc">means know-your-customer;</span></div>
        <div class="def-row"><span class="def-term">"Mudra Card"</span><span class="def-desc">means Mudra crypto card, available as either a virtual or physical card, which is provided to you by the Group, allowing for transactions and (where applicable) access to credit secured by your deposited Digital Assets held by the Custodian;</span></div>
        <div class="def-row"><span class="def-term">"Personal Data"</span><span class="def-desc">means data, whether true or not, about an individual who can be identified: (a) from that data, or (b) from that data and other information to which the organisation has or is likely to have access;</span></div>
        <div class="def-row"><span class="def-term">"Services"</span><span class="def-desc">means the Site, App, Service Content and all related features, services, content and applications which the Group may make available to you from time to time;</span></div>
        <div class="def-row"><span class="def-term">"Site"</span><span class="def-desc">means the website https://www.mudra.com/;</span></div>
        <div class="def-row"><span class="def-term">"Transaction History"</span><span class="def-desc">means the transaction history of your Account and Services and details of your Custodian Account(s), Smart Contract Vault and/or Virtual Account (as applicable);</span></div>
        <div class="def-row"><span class="def-term">"Wallet Balance"</span><span class="def-desc">means the total amount of fiat currency and Digital Assets (as applicable) held in your Custodian Account(s), as may be increased or decreased according to these Terms; and</span></div>
        <div class="def-row"><span class="def-term">"you/your"</span><span class="def-desc">means, jointly and severally, the individual(s) who is/are the user(s) of the Services provided by the Group.</span></div>
      </div>
    `,
  },
];

export default function Terms() {
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
                  These terms and conditions contain important information which applies to your dealings with us in relation to your Account and the Services. You should not construe these Terms as legal, tax or financial advice. You should consult your own independent professional advisers before entering into any transaction.
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