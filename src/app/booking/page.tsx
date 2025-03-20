"use client"

import { TextField, MenuItem, Select, Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(name && tel && venue && bookingDate){
            const item:BookingItem = {
                nameLastname: name,
                tel: tel,
                venue: venue,
                bookDate: dayjs(bookingDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    const [name,setName] = useState<string|null>(null)
    const [tel,setTel] = useState<string|null>(null)
    const [venue,setVenue] = useState<string|null>("Bloom")
    const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
    
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-10">
                <h1 className="text-2xl font-bold text-center mb-5 text-black">Venue Booking</h1>
                <form className="flex flex-col w-80 space-y-4">
                    <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" fullWidth onChange={(e)=>{setName(e.target.value)}} required />
                    <TextField variant="standard" name="Contact-Number" label="Contact-Number" fullWidth onChange={(e)=>{setTel(e.target.value)}} required />
                    <Select variant="standard" id="venue" value={venue} onChange={(e)=>{setVenue(e.target.value)}}>
                        <MenuItem value="Bloom" selected>The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                    <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/>
                    <Button variant="contained" name="Book Venue" onClick={makeBooking}>
                        Book Venue
                    </Button>
                </form>
            </div>
        </main>
    );
}