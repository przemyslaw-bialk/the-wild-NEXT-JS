import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

const Reservation = async ({ cabin }) => {
  const settings = await getSettings();
  const bookedDates = await getBookedDatesByCabinId(cabin.id);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        bookedDates={bookedDates}
        settings={settings}
        cabin={cabin}
      />

      <ReservationForm settings={settings} cabin={cabin} />
    </div>
  );
};

export default Reservation;
