import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2 className="text-orange-500 text-3xl font-bold text-center">Please read the term and condition!</h2>
      <ul>
        <li className="text-xl font-semibold text-sky-500">
          1. User Consent: By registering on our platform, you agree to comply with
          these terms and conditions and consent to the collection, use, and
          processing of your personal information as outlined in our privacy
          policy.
        </li>
        <ol className="text-xl font-semibold text-red-500">
         2. Eligibility: You must be at least 18 years old or have obtained legal
          consent from a parent or guardian to register and use our services.
          You are responsible for providing accurate and complete information
          during the registration process.
        </ol>
        <ol className="text-xl font-semibold text-green-300">
          3.Account Security: You are responsible for maintaining the
          confidentiality of your account credentials and ensuring the security
          of your account. Any activity conducted using your account will be
          attributed to you.
        </ol>
        <ol className="text-xl font-semibold text-black">
         4. Prohibited Activities: You agree not to engage in any unlawful,
          fraudulent, or unauthorized activities while using our platform. This
          includes, but is not limited to, uploading malicious content,
          infringing on intellectual property rights, or engaging in
          unauthorized access or use of our systems.
        </ol>
        <ol className="text-xl font-semibold text-orange-700">
         5. User Content: You retain ownership of the content you submit to our
          platform, but you grant us a non-exclusive, royalty-free license to
          use, reproduce, modify, and distribute that content for the purpose of
          providing our services.
        </ol>
        <ol className="text-xl font-semibold text-emerald-400">
          6.Intellectual Property: All trademarks, logos, and intellectual
          property displayed on our platform are the property of their
          respective owners. You agree not to use or reproduce any of these
          without obtaining the necessary permissions.
        </ol>
        <h2 className="font-bold text-center mt-10">Go Back to <Link to="/register" className="text-error hover:link">Register</Link> </h2>
      </ul>
    </div>
  );
};

export default Terms;
