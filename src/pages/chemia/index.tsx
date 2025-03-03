import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownContent = `
## DNA

**DNA** - kwas deoksyrybonukleinowy

### Zasady azotowe:
- **DNA**:
  - adenina, guanina
  - tymina, cytozyna# **BIAŁKO**

## **1. Czym jest białko?**  
Białka to związki organiczne zbudowane z aminokwasów, pełniące kluczowe funkcje w organizmach żywych.  

- Podstawowa jednostka: **aminokwas**  
- Połączenie aminokwasów: **wiązanie peptydowe**  

---

## **2. Struktura białek**  
Białka mają różne poziomy organizacji:  

1. **Struktura pierwszorzędowa** – kolejność aminokwasów w łańcuchu.  
2. **Struktura drugorzędowa** – układ przestrzenny fragmentów łańcucha (α-helisa, β-harmonijka).  
3. **Struktura trzeciorzędowa** – trójwymiarowy kształt całego łańcucha.  
4. **Struktura czwartorzędowa** – organizacja kilku łańcuchów polipeptydowych.  

---

## **3. Funkcje białek w organizmie**  

- **Budulcowa** – np. kolagen, keratyna.  
- **Enzymatyczna** – np. amylaza, pepsyna.  
- **Transportowa** – np. hemoglobina (transport tlenu).  
- **Regulacyjna** – np. insulina (hormon).  
- **Obronna** – np. przeciwciała.  
- **Motoryczna** – np. aktyna, miozyna (skurcze mięśni).  

---

## **4. Podział białek**  

### **Ze względu na skład:**
- **Proste** – składają się wyłącznie z aminokwasów (np. albuminy, histony).  
- **Złożone** – zawierają część niebiałkową (np. glikoproteiny, lipoproteiny).  

### **Ze względu na funkcję:**
- **Strukturalne** – budujące organizm.  
- **Funkcjonalne** – enzymy, hormony, transportery.  

---

## **5. Denaturacja i renaturacja białek**  

### **Denaturacja** – proces utraty struktury białka pod wpływem:  
- wysokiej temperatury,  
- silnych kwasów i zasad,  
- alkoholu,  
- promieniowania UV.  

➡ Skutkuje utratą funkcji biologicznej białka.  

### **Renaturacja** – proces odwrócenia denaturacji (możliwy tylko w niektórych przypadkach).  

---

## **6. Przykłady białek**  

| Białko     | Funkcja             | Występowanie |
|------------|--------------------|--------------|
| **Kolagen** | Budulcowa          | Skóra, kości |
| **Hemoglobina** | Transport tlenu | Krew        |
| **Insulina** | Regulacja poziomu cukru | Trzustka |
| **Miozyna** | Ruch mięśni        | Mięśnie     |
| **Przeciwciała** | Ochrona immunologiczna | Krew |

---

## **7. Synteza białka – biosynteza**  

Proces produkcji białka w organizmie zachodzi w dwóch etapach:  

1. **Transkrypcja** – przepisanie informacji z DNA na mRNA (jądro komórkowe).  
2. **Translacja** – synteza białka na rybosomach (cytoplazma).  

**Schemat:**  
`;

const Page: React.FC = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </main>
  );
};

export default Page;
