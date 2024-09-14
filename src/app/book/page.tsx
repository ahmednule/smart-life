// import BookingForm from "@/components/Booking/BookingForm";
// import BookingSummary from "@/components/Booking/BookingSummary";
import RideBooking from "@/components/Booking/RideBooking";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Page | Smart Life",
  description: "Book your ride easily on Smart Life, an AI-powered platform optimizing vehicle routes and providing real-time tracking.",
  // other metadata
};

const BookingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Booking Page"
        description="Book your ride with Smart Life, an innovative AI-powered platform that optimizes routes and provides real-time vehicle tracking for a smooth travel experience."
      />
      {/* <BookingForm />
      <BookingSummary /> */}
      <RideBooking/>
    </>
  );
};

export default BookingPage;
