import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-3/4 p-4 lg:p-20 flex flex-col gap-6">
          <div className="heading text-custom-brown font-semibold text-[25px]">
            Impressum
          </div>
          <div>Kollektiv Archiv</div>
          <div className="paragraphs">
            Tölzer Straße 1, 82031 Grünwald, Germany
          </div>
          <div className="paragraphs">Tel.: +49 (0)89 66 77 88 33</div>

          <div className="paragraphs">E-Mail: info@kollektiv-archiv.de</div>
          <div className="paragraphs">Internet: kollektiv-archiv.de</div>
          <div className="paragraphs">Registergericht: Amtsgericht München</div>
          <div className="paragraphs">Registernummer: HRB 275073</div>
          <div className="paragraphs">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            wird nachgereicht
          </div>
          <div className="paragraphs">
            Plattform der EU-Kommission zur Online-Streitbeilegung:
            https://ec.europa.eu/odr
          </div>
          <div className="paragraphs">
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          </div>
          <div className="paragraphs">
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
