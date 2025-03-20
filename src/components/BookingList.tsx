"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { useDispatch, UseDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"

export default function ReservationCart() {
  const carItems = useAppSelector((state) => state.bookSlice.bookItems)
  const dispatch = useDispatch<AppDispatch>()


  return (
    <>
      {
        carItems.map((bookingItem) => (
          <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2">
            <div className="text-xl">Name : {bookingItem.nameLastname}</div>
            <div className="text-sm">Tel. {bookingItem.tel}</div>
            <div className="text-sm">Venue: {bookingItem.venue}</div>
            <div className="text-md">Book Date: {bookingItem.bookDate}</div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            onClick={()=>dispatch(removeBooking(bookingItem))}>
              Remove from Booking
            </button>
          </div>
        ))
      }
    </>
  )
}
