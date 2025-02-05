const express = require("express"); 
const router = express.Router(); 
const Group = require("../model/group.js"); 
const User = require("../model/user.js"); 
const GroupMessage = require("../model/groupMessage.js");
const PrivateMessage = require("../model/privateMessage.js"); 


router.post("/group/:groupId/message", async (req, res) => {
    try {
        const groupId = req.params.groupId;
        const { message, sender } = req.body;
 

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ error: "Group not found" });
        }

        const isMember = group.members.includes(sender);
        if (!isMember) {
            return res
                .status(403)
                .json({ error: "Sender is not a member of the group" });
        }


        const newGroupMessage = new GroupMessage({
            message,
            sender,
            group: groupId,
        });
        await newGroupMessage.save(); 

        res.status(201).json(newGroupMessage); 
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});


router.delete("/group/:groupId/message/:messageId", async (req, res) => {
    try {
        const { groupId, messageId } = req.params;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ error: "Group not found" });
        }

        const message = await GroupMessage.findById(messageId);
        if (!message) {
            return res.status(404).json({ error: "Message not found" });
        }

        if (message.group.toString() !== groupId) {
            return res.status(403).json({ error: "Message does not belong to the group" });
        }

        await message.remove();


        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/private/message", async (req, res) => {
    try {
        const { message, sender, receiver } = req.body;

        const senderExists = await User.exists({ _id: sender });
        const receiverExists = await User.exists({ _id: receiver });

        if (!senderExists || !receiverExists) {
            return res.status(404).json({ error: "Sender or receiver not found" });
        }

        const newPrivateMessage =
            new PrivateMessage({ message, sender, receiver });
        
        await newPrivateMessage.save();
        res.status(201).json(newPrivateMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete("/private/message/:messageId", async (req, res) => {
    try {
        const messageId = req.params.messageId;

        const message = await PrivateMessage.findByIdAndDelete(messageId);
        if (!message) {
            return res.status(404).json({ error: "Message not found" });
        }

        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/private/messages", async (req, res) => {
    try {
        const messages = await PrivateMessage
            .find()
            .populate("sender", "username")
            .populate("receiver", "username")
            .select("message createdAt");
        
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;