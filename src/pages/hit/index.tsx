import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownContent = `
Czym jest koabitacja? Premier i Prezydent są z dwóch róznych partii.

Czym są prerogatywy? Nadzwyczajne prawa wyłącznie dla Prezydenta które można znaleźć w Konstytucji.

Prerogatywy:

- Prawo łaski, które działa tylko wobec wyroków prawomocnych
- Veto ustawodawcze
- Skierowywanie ustaw do trybunału konstytucyjnego
- Składanie projektów ustawodawczych
- Nadawanie orderów i odznaczeń
- Nadawanie obywatelstwa

Inne uprawnienia Prezydenta wynikające z konstytucji

Polityka zagraniczna:

- Reprezentuję nasz kraj za granicą
- Odwołuje i powołuje ambasadorów
- Ratyfikowanie i wypowiadanie umów międzynarodowych

Bezpieczeństwo państwowe:

- Zwołuje Radę Bezpieczeństwa Narodowego
- Najwyższy Zwierzchnik Sił Zbrojnych w czasie wojny
- Może wprowadzić stan wyjątkowy za zgodą rządu i stan wojenny bez zgody rządu

Relacje z rządem:

- Zwołuje rade gabinetową → obrady rady ministrów pod przewodnictwem prezydenta zamiast premiera, jest doradczym i doraźnym spotkaniem prezydenta z rm
- Powołuje premiera i radę ministrów na wniosek premiera
- Prawo do dymisji i powoływania nowych ministrów, też na wniosek premiera

Relacje z parlamentem:

- Prezydent zarządza wybory parlamentarne
- Zarządza referendum
- Zwołuje pierwsze posiedzenie sejmu i senatu
- Skraca kadencje parlamentu
- Może zavetować, przekazać do TK albo podpisać ustawę

Relacje z władzą sądowniczą:

- Powołuje wszystkich sędziów
- Powołuje pierwszego prezesa sądu najwyższego oraz trybunału konstytucyjnego
`;

const Home: React.FC = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </main>
  );
};

export default Home;
