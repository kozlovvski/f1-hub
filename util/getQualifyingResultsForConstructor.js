import cachedFetch from "util/cachedFetch";

export default async function(constructor, year) {
  const data = await cachedFetch(
    `https://ergast.com/api/f1/${year}/constructors/${constructor}/qualifying.json`
  ).then(res => res.MRData.RaceTable.Races);
  return data;
};