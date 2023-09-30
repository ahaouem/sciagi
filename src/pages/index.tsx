import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Link from "next/link";

const fetchSections = (subject: string) => {
  let mappedSubject;

  switch (subject) {
    case "Historia":
      mappedSubject = "sciagahistoria";
      break;
    case "Biologia":
      mappedSubject = "sciagabiologia";
      break;
    case "Chemia":
      mappedSubject = "sciagachemia";
      break;
    default:
      mappedSubject = subject;
  }

  return axios
    .get(`/api/getSubjects?schoolSubject=${mappedSubject}`)
    .then((response) => response.data);
};

const HomePage = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const {
    data: sections = [],
    isError,
    error,
  } = useQuery(
    ["sections", selectedSubject],
    () => fetchSections(selectedSubject),
    {
      enabled: !!selectedSubject,
    }
  );

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Home Page
      </h1>
      <div className="flex justify-center">
        <form className="w-1/3">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Wybierz przedmiot:
            </label>
            <select
              id="subject"
              className="w-full border p-2 rounded text-black"
              onChange={handleSubjectChange}
            >
              <option value="">Wybierz przedmiot</option>
              <option value="Historia">Historia</option>
              <option value="Biologia">Biologia</option>
              <option value="Chemia">Chemia</option>
            </select>
          </div>
        </form>
      </div>

      {isError && (
        <p>
          Wystąpił błąd podczas ładowania danych: {(error as Error).message}
        </p>
      )}

      {sections.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4 text-center text-black">
            Działy:
          </h2>
          <ul className="space-y-2 text-black">
            {sections.map((section: { dzial: string }, index: number) => (
              <li
                key={index}
                className="bg-white p-2 rounded shadow text-black"
              >
                <Link href={`/details/${selectedSubject}/${section.dzial}`}>
                  <p className="text-black">{section.dzial}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
