import Link from "next/link";
import Card from "./Card";

export default async function VenueCatalog({venuesJson}:{venuesJson:Promise<VenueJson>}) {
    const venueJsonReady = await venuesJson
    return (
        <>
        Explore {venueJsonReady.count} venues in our catalog
        <div style={{margin:'20px', display:'flex',
            flexDirection:"row",alignContent:"space-around",
            justifyContent:"space-around", flexWrap:"wrap", padding:"10px"
        }}>
            {
                venueJsonReady.data.map((VenueItem:VenueItem)=>(
                    <Link href={`/venue/${VenueItem.id}`} className="w-1/5" >
                        <Card venueName={VenueItem.name} imgSrc={VenueItem.picture} />
                    </Link>
                ))
            }
        </div>
        </>
    )
}