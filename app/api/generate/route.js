import clientPromise from "@/lib/mongodb";
export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const client = await clientPromise;
  const db = client.db("bitlinkstree");
  const collection = db.collection("linktree");
  // if the handle is already claimed, you cannot create the bit links tree
  const doc = await collection.findOne({ handle: body.handle });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "oops! this bit links tree already exists.",
      result: null,
    });
  }
  const result = await collection.insertOne(body);
  return Response.json({
    success: true,
    error: false,
    //   + added,
    message: "enjoy! your bit links tree is generated.",
    result: result,
  });
}
