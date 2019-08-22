import cachedFetch from "util/cachedFetch";

export default async function(constructor) {
  const data = await cachedFetch(
    `https://ergast.com/api/f1/constructors/${constructor}/seasons.json?limit=999`
  ).then(res => res.MRData.SeasonTable.Seasons);
  return data;
};