import { commentsEndpoint } from "../endpoints/endpoints";

export async function fetchComments() {
  const res = await fetch(commentsEndpoint.fetchAll);

  return res.json();
}
