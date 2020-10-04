import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
const DUMMY = [
  {
    id: "p1",
    title: "Zaltopolsky 5",
    description: "My appartment",
    imageUrl:
      "https://lh3.googleusercontent.com/Ex7GOEAQDhfEHNzA9MUD6KaSULhG7fzKsXFzSsV4-C7I7sHE60_SZ0MXQu2Hn8oVfO46REQFW2APN9SHfigUrKSAnuh14IcdiI8rnGTQxlPOArYls4zCmmRZ_vUommfrGyXOXHWgs8FgsblyuIsbiA7iMxkezPdqvaPakeJ-1_mwW4wlnY73pODUDbA-FpY82-lXEcK7WumdHEcYarXxz170nUcjxK5_xyjxWNxihKwjz-FpKNs_K-VL80kppCOJpvvxWtxQkn3NRoETQhuYh6k0ydO5DgCyooy1H8M05cALLEShz5oldX1r6DejIvaUyhy6Um81X3UM9kZeerAR8QFdFcpWzcdWwLypH-kP0NQ8FxU3XGYs8B6peZrFtmepNvfIh1WuqjKHm33fgaXTH5ARaY1WPM-NNyEAXEmwEJ40_vAm-uX5A-2n6fzhkWAhTiBZ_2G8OpN8ckovesgClKtFZl2wKACbUN7hZg6QyEhg2z-ilDee1W2L-NWWJqYC7_caKR9Ifz1bWwRGGAt7E4ipfzEljJ4Sv0HxRrEEPkMbZDjcsYYN2S3nqOtJkWxod9uZIB7Y_vs4qu4eIK1XygPzdw3UY6Jsbhx_L-MROnBib7BMed9dfaXELsloRrPL8YX68E21o-r0QNG1qTTRrXC6n1UsUnOv9AQ1NgT0RPcGKZD_gHfXBia5mpwKgg=w361-h203-no?authuser=0",
    address: "Zaltopolsky 5, TLV",
    location: {
      lat: 32.0880024,
      lng: 34.7731101,
    },
    creatorId: "u1",
  },
  {
    id: "p2",
    title: "Zaltopolsky 5",
    description: "My appartment",
    imageUrl:
      "https://lh3.googleusercontent.com/Ex7GOEAQDhfEHNzA9MUD6KaSULhG7fzKsXFzSsV4-C7I7sHE60_SZ0MXQu2Hn8oVfO46REQFW2APN9SHfigUrKSAnuh14IcdiI8rnGTQxlPOArYls4zCmmRZ_vUommfrGyXOXHWgs8FgsblyuIsbiA7iMxkezPdqvaPakeJ-1_mwW4wlnY73pODUDbA-FpY82-lXEcK7WumdHEcYarXxz170nUcjxK5_xyjxWNxihKwjz-FpKNs_K-VL80kppCOJpvvxWtxQkn3NRoETQhuYh6k0ydO5DgCyooy1H8M05cALLEShz5oldX1r6DejIvaUyhy6Um81X3UM9kZeerAR8QFdFcpWzcdWwLypH-kP0NQ8FxU3XGYs8B6peZrFtmepNvfIh1WuqjKHm33fgaXTH5ARaY1WPM-NNyEAXEmwEJ40_vAm-uX5A-2n6fzhkWAhTiBZ_2G8OpN8ckovesgClKtFZl2wKACbUN7hZg6QyEhg2z-ilDee1W2L-NWWJqYC7_caKR9Ifz1bWwRGGAt7E4ipfzEljJ4Sv0HxRrEEPkMbZDjcsYYN2S3nqOtJkWxod9uZIB7Y_vs4qu4eIK1XygPzdw3UY6Jsbhx_L-MROnBib7BMed9dfaXELsloRrPL8YX68E21o-r0QNG1qTTRrXC6n1UsUnOv9AQ1NgT0RPcGKZD_gHfXBia5mpwKgg=w361-h203-no?authuser=0",
    address: "Zaltopolsky 5, TLV",
    location: {
      lat: 32.0880024,
      lng: 34.7731101,
    },
    creatorId: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY.filter(place=>place.creatorId===userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
