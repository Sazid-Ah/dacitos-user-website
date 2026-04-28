export const metadata = {
  title: 'Terms of Service — dacitos',
  description: 'Terms governing use of dacitos services, website access, and legal rights and responsibilities.',
  alternates: { canonical: 'https://dacitos.com/terms-of-service' }
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: November 4, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using the dacitos website (&quot;Site&quot;) and any services provided by dacitos
            (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms,
            do not use the Site or Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Services</h2>
          <p className="text-gray-700 leading-relaxed">
            dacitos provides technology consulting, software development, cloud and security services, and related
            professional services. The scope, fees and delivery schedule for any specific engagement will be set forth in
            a separate written agreement between you and dacitos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Accounts and Access</h2>
          <p className="text-gray-700 leading-relaxed">
            If you create an account for any dacitos service, you are responsible for maintaining the confidentiality
            of your account credentials and for all activity that occurs under your account. You must notify dacitos
            immediately of any unauthorized use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Fees and Payment</h2>
          <p className="text-gray-700 leading-relaxed">
            Fees for Services are agreed in writing and are due according to the payment schedule in the applicable
            agreement. Late payments may be subject to interest and/or suspension of services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            Except as expressly provided in a separate agreement, dacitos retains ownership of all intellectual
            property, deliverables, tools and materials used or developed by dacitos in providing the Services.
            Customer is granted a limited license to use delivered work as set forth in the applicable service agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Warranties and Disclaimers</h2>
          <p className="text-gray-700 leading-relaxed">
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, dacitos
            DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO,
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL dacitos BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, REVENUE, DATA OR USE,
            ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES. dacitos&apos;S AGGREGATE LIABILITY FOR DIRECT DAMAGES ARISING OUT OF OR RELATED TO THESE TERMS
            SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO dacitos UNDER THE APPLICABLE AGREEMENT IN THE TWELVE (12)
            MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Indemnification</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to indemnify and hold harmless dacitos and its officers, directors, employees and agents
            from and against any claims, liabilities, damages, losses and expenses (including reasonable attorneys&apos; fees)
            arising out of or in any way connected with your use of the Site or Services, your violation of these Terms,
            or your violation of any rights of a third party.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            Either party may terminate the provision of Services in accordance with the terms of the applicable service
            agreement. Upon termination, you will pay for all Services performed and expenses incurred up to the date of
            termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of the jurisdiction in which
            dacitos is incorporated, without regard to its conflict of law principles. Any dispute arising under or
            related to these Terms will be subject to the exclusive jurisdiction of the courts located in that jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            dacitos may modify these Terms from time to time. We will post the updated Terms on this page with a
            revised &quot;Last updated&quot; date. Your continued use of the Site or Services following any changes constitutes
            acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about these Terms, please contact us at <a href="mailto:contact@dacitos.com" className="text-blue-800 underline">contact@dacitos.com</a>.
          </p>
        </section>

      </div>
    </main>
  );
}
