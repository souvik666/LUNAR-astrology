import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Body } from "../components/Body/TextFieldandBannerImage";
import { SignsData } from "../signs";
import { getHoroscope } from "./get.horoscope.data";

export function Horoscoperes() {
  const params = useParams();
  const sign = params["*"].toLowerCase();
  const [data, setData] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    getHoroscope(sign).then((d) => {
      setData(d);
      console.log(d);
      for (let i in SignsData) {
        if (SignsData[i].name.toLowerCase() === sign) {
          return setImg(SignsData[i].link);
        }
      }
    });
    return () => {};
  }, [sign]);
  if (data) {
    var {
     /*  color,
      compatibility, */
      current_date,
      /* date_range, */
      description,
     /*  lucky_number,
      lucky_time,
      mood, */
    } = data;
  }

  return (
    <>
      {data && img ? (
        <Body
          heading={current_date}
          signs={sign}
          descriptions={description}
          pic={img}
        ></Body>
      ) : (
        ""
      )}
    </>
  );
}
