"use server";

type uploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(): Promise<uploadImageActionResult> {
  const makeResult = ({ url = "", error = "" }) => ({ url, error });
  return makeResult({ url: "URL" });
}
