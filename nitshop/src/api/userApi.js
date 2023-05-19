import { userEndpoint } from "../endpoints/endpoints";

export async function fetchAllUsers() {
  const res = await fetch(userEndpoint.fetchAll);

  return res.json();
}
