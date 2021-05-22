const getMessage = async (userToken) => {
  console.log('userToken', await userToken);
  try {
    const response = await fetch("https://fcm.googleapis.com/fcm/send", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAAOK9Q5JY:APA91bHlHqdTp3gx-BngOckcuMGtl-PUDs7IbkFIw4L0kRJ2M2YKD5OG5lKu-N_ODDj8vSmHn1lDKoITVkW_wji94H7Mni9dPgM8rLEjgnk45w3y-i2a1_t1KNA1ofJ5fRjCEi38LYEQ",
      },
      method: "post",
      body: JSON.stringify({
        to: await userToken,
        notification: {
          title: "AA",
          body: "Yellowwwwwwwwwwwwww",
        },
      }),
    });
    console.log("Completed!", response);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};
