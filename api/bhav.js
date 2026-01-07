let currentBhav = 76;
let lastUpdated = new Date().toLocaleString();

export default async function handler(request, response) {
  //Handle GEt request
  if (request.method === "GET") {
    return response.status(200).json({
      bhav: currentBhav,
      lastUpdated,
    });
  }

  if (request.method === "POST") {
    //Admin UPDate the Bhav
    try {
      const body = await request.json();

      if (!body.newBhav || isNaN(body.newBhav)) {
        return response.status(400).json({ message: "Invalid Bhav Entered" });
      }
      currentBhav = Number(body.newBhav);
      lastUpdated = new Date().toLocaleString();

      return response.status(200).json({
        message: "Bhav Updated Successfully",
        bhav: currentBhav,
        lastUpdated,
      });
    } catch (err) {
      return response
        .status(500)
        .json({ message: "Error While Updating Bhav" });
    }
  }
  return response.status(405).json({ message: "Method Not Found" });
}
