import axios from "axios";

export async function getHoroscope(sign) {
  try {
    const res = await axios.post("https://aztro.sameerkumar.website", null, {
      params: {
        sign: sign,
        day: "today",
      },
    });
    return res.data;
  } catch (e) {
    console.log("something wrong with data fetcing" + e);
  }
}
