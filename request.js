const button = document.getElementById("followbtn");

button.addEventListener("click", async (_) => {
  try {
    const response = await fetch("https://fcm.googleapis.com/fcm/send", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAAOK9Q5JY:APA91bHlHqdTp3gx-BngOckcuMGtl-PUDs7IbkFIw4L0kRJ2M2YKD5OG5lKu-N_ODDj8vSmHn1lDKoITVkW_wji94H7Mni9dPgM8rLEjgnk45w3y-i2a1_t1KNA1ofJ5fRjCEi38LYEQ",
      },
      method: "post",
      body: JSON.stringify({
        to: "dzcjOvu1AKuCt2ZPXCYm15:APA91bEOU_5wvD8vzrIWyqBJCh4rZ-04NQgWT3UElyTYAnF_FqTGm2ATWAtf05wIgDNxniCUwYTwnNgVm8GtStxTei8GZe-wuUixaAFDHoVDc52iPwBVs3ZQr7MkmeVqfFc-c9Q4XUUi",
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
