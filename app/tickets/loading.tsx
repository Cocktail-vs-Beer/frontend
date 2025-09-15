import Loader from "../../components/Loader";

export default function Loading() {
  return (
    <div className="mt-24 text-center space-y-4">
      <Loader />
      <p className="text-gray-600">Tickets laden...</p>
    </div>
  );
}
