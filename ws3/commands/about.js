module.exports = {
  description: "What is Menta AI?",
  async run({ api, send, admin }){
    await send({
      attachment: {
        type: "image",
        payload: {
          url: "",
          is_reusable: true
        }
      }
    });
    setTimeout(async () => await send({
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: `🤖 About Menta AI:
Menta AI is your friendly, helpful personal assistant.

💭 Why I named Menta AI as a name of the page bot

❓ Contact us admins if you experienced/encountered any issue regarding to the bot and I will try to fix it. Thankyou for using me as a personal assistant!`,
          buttons: [
            {
              type: "web_url",
              url: "https://www.facebook.com/profile.php?id=61568288608152",
              title: "Like/Follow our Page"
                },
            {
              type: "web_url",
              url: "https://www.facebook.com/profile.php?id=61550037082227",
              title: "Contact Admin 1"
                },
            {
              type: "web_url",
              url: "https://www.facebook.com/profile.php?id=61556388598622",
              title: "Contact Admin 2"
                }
             ]
        }
      }
    }), 2*1000);
  }
}
