const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = ([
    {
    from:"neha",
    to:"priya",
    msg:"send me ur exam sheets",
    created_at: new Date()
    },
    // {
    //     from:"neha",
    //     to:"priya",
    //     msg:"send me ur exam sheets",
    //     created_at: new Date()
    // },
    // {
    //     from:"mohit",
    //     to:"rohit",
    //     msg:"send me ur notes",
    //     created_at: new Date()
    // },
    // {
    //     from:"shobit",
    //     to:"lobhit",
    //     msg:"send me ur javascript sheets",
    //     created_at: new Date()
    // },
    // {
    //     from:"neha",
    //     to:"sneha",
    //     msg:"Don't send me ur exam sheets",
    //     created_at: new Date()
    // },
    // {
    //     from:"neharika",
    //     to:"priyadarshini",
    //     msg:"Give me ur exam sheets",
    //     created_at: new Date()
    // }
]);

Chat.insertMany(allchats);

    


