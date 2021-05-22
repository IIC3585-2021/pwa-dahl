SERVER_KEY='AIzaSyAtjnNNaxMd6Ga8k990SAFcj5vIH_aEnME'
DEVICE_REG_TOKEN='f24xCac8LJRYkOgWtmEAVw:APA91bHT9_KPYHd7HRdD3grp8NJ491YpAdZIdjcK3fuOhTQ4WaSV9Z7Z6GlY5fDXlc3UkkcdITOqFUJaOmKanuQKevwkN7BvVa8z8W99XW9RpRNxX73BHBx_cC2GWnQumFqDl7qEVzOg'

CMD=$(cat <<END
curl -X POST -H "Authorization: key=$SERVER_KEY" -H "Content-Type: application/json"
   -d '{
  "data": {
    "notification": {
        "title": "FCM Message",
        "body": "This is an FCM Message",
        "icon": "/itwonders-web-logo.png",
    }
  },
  "to": "$DEVICE_REG_TOKEN"
}' https://fcm.googleapis.com/fcm/send
END
)

echo $CMD && eval $CMD