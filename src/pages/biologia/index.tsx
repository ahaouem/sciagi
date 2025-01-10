import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownContent = `
# GENETYKA

Genetyka - nauka o dziedziczeniu, przekazywaniu informacji i zmienności organizmu.

**Gen** - podstawowa jednostka dziedziczenia, fragment DNA, który zawiera informacje genetyczną o budowie białka (cecha) lub cząsteczki RNA.

---

## DNA

**DNA** - kwas deoksyrybonukleinowy

### Zasady azotowe:
- **DNA**:
  - adenina, guanina
  - tymina, cytozyna
- **RNA**:
  - uracyl
  - adenina
  - guanina
  - cytozyna

### Zasada komplementarności:
- Adenina - Tymina / Adenina - Uracyl
- Guanina --- Cytozyna

\`\`\`
Sekwencja: A G C T A A G C C T A A
RNA: U C G A U U C G G A U U
\`\`\`

---

# BIOSYNTEZA BIAŁKA

Biosynteza - tworzenie się białka.

### Transkrypcja (jądro komórkowe)
DNA -----------> mRNA (polimeraza)

### Translacja (cytoplazma)
mRNA -----------> białko (tRNA)

1. Inicjacja
2. Elongacja
3. Terminacja

---

## Cechy dominujące u człowieka:
- Ciemne włosy
- Kręcone włosy
- Długie rzęsy
- Ciemne oczy
- Ciemny kolor skóry
- Odstające uszy
- Piegi
- Orli nos
- Grupa krwi Rh+

---

# INNE SPOSOBY DZIEDZICZENIA CECH

- **Niepełna dominacja**
- **Kodominacja** - równorzędność alleli względem siebie.

| Genotyp | Grupa krwi |
| ------- | ---------- |
| AA ; Ai | A          |
| BB ; Bi | B          |
| AB      | AB         |
| ii      | 0          |

---

# MUTACJE

Mutacja - nagła zmiana trwała w materiale genetycznym, która w zależności od miejsca występowania może być dziedziczna lub niedziedziczna.

## Skutki mutacji:
- **Niepożądane**: choroby
- **Pożądane**: adaptacje do środowiska
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
