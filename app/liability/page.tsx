import Layout from "@/components/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="w-3/4 p-4 lg:p-20 flex flex-col gap-6">
          <div className="heading text-custom-brown font-semibold text-[25px]">
            Haftungsausschluss
          </div>
          <div>Inhalt des Onlineangebotes</div>
          <div className="paragraphs">
            Der Autor übernimmt keinerlei Gewähr für die Aktualität, Richtigkeit
            und Vollständigkeit der bereitgestellten Informationen auf unserer
            Website. Haftungsansprüche gegen den Autor, welche sich auf Schäden
            materieller oder ideeller Art beziehen, die durch die Nutzung oder
            Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung
            fehlerhafter und unvollständiger Informationen verursacht wurden,
            sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein
            nachweislich vorsätzliches oder grob fahrlässiges Verschulden
            vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der
            Autor behält es sich ausdrücklich vor, Teile der Seiten oder das
            gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu
            ergänzen, zu löschen oder die Veröffentlichung zeitweise oder
            endgültig einzustellen.
          </div>
          <div className="paragraphs">Verweise und Links</div>
          <div className="paragraphs">
            Bei direkten oder indirekten Verweisen auf fremde Webseiten
            (“Hyperlinks”), die außerhalb des Verantwortungsbereiches des Autors
            liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall
            in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und
            es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
            rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit
            ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen
            Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die
            aktuelle und zukünftige Gestaltung, die Inhalte oder die
            Urheberschaft der verlinkten/verknüpften Seiten hat der Autor
            keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich
            von allen Inhalten aller verlinkten /verknüpften Seiten, die nach
            der Linksetzung verändert wurden. Diese Feststellung gilt für alle
            innerhalb des eigenen Internetangebotes gesetzten Links und Verweise
            sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern,
            Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen
            anderen Formen von Datenbanken, auf deren Inhalt externe
            Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder
            unvollständige Inhalte und insbesondere für Schäden, die aus der
            Nutzung oder Nichtnutzung solcherart dargebotener Informationen
            entstehen, haftet allein der Anbieter der Seite, auf welche
            verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
            Veröffentlichung lediglich verweist.
          </div>
          <div className="paragraphs">Urheber- und Kennzeichenrecht</div>
          <div className="paragraphs">
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte
            zu beachten, von ihm selbst erstellte Bilder, Grafiken,
            Tondokumente, Videosequenzen und Texte zu nutzen oder auf
            lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte
            zurückzugreifen.
          </div>
          <div className="paragraphs">
            Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
            geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
            Bestimmungen des jeweils gültigen Kennzeichenrechts und den
            Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein
            aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass
            Markenzeichen nicht durch Rechte Dritter geschützt sind! Das
            Copyright für veröffentlichte, vom Autor selbst erstellte Objekte
            bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder
            Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte
            in anderen elektronischen oder gedruckten Publikationen ist ohne
            ausdrückliche Zustimmung des Autors nicht gestattet.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
