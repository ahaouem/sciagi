import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";

const fetchDetails = (subject: string, section: string) => {
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
    .get(`/api/details/${mappedSubject}/${section}`)
    .then((response) => response.data);
};

const DetailsPage = () => {
  const router = useRouter();
  const { subject, section } = router.query;

  if (!subject || !section) {
    return <div>Brakujące dane</div>;
  }

  const {
    data: details,
    isError,
    error,
  } = useQuery(["details", subject, section], () =>
    fetchDetails(subject as string, section as string)
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {subject} - {section}
      </h1>

      {isError && (
        <p className="text-red-500">
          Wystąpił błąd podczas ładowania danych: {(error as Error).message}
        </p>
      )}

      {details && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-4">Podtematy:</h2>
          <ul className="space-y-2">
            {Object.values(details).map((value, index) => {
              if (typeof value === "string") {
                return (
                  <li key={index} className="bg-white p-2 rounded shadow">
                    {value}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
