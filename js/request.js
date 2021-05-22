const button = document.getElementById("followbtn");
console.log('elemento')

button.addEventListener("click", async () => {
  console.log('on click');
  try {
    const response = await fetch("https://fcm.googleapis.com/fcm/send", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAAOK9Q5JY:APA91bHlHqdTp3gx-BngOckcuMGtl-PUDs7IbkFIw4L0kRJ2M2YKD5OG5lKu-N_ODDj8vSmHn1lDKoITVkW_wji94H7Mni9dPgM8rLEjgnk45w3y-i2a1_t1KNA1ofJ5fRjCEi38LYEQ",
      },
      method: "post",
      body: JSON.stringify({
        to: "eVVvlCl4Aek4jflFx-VyN6:APA91bE9R3-FNRYdB3zrwG2QntIfI4ID91L9Sn8W-7y68J9SvnU4E380VaWmtsFvj9gp2NwDIwMK-XNjbwHM2VtPhKGHwE0EPc8pQL9qjIMeJCp-Ixa4a4-9-43zL7e27rveQBHzbbnk",
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
});
