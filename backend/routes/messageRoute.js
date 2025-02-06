const express = require("express"); // Import express
const router = express.Router(); // Create a router object
const Group = require("../model/group.js"); // Import group.js
const User = require("../model/user.js"); // Import user.js
const GroupMessage = require("../model/groupMessage.js"); // Import groupMessage.js

// Create a new group message
router.post("/group/:groupId/message", async (req, res) => {
    try {
        const groupId = req.params.groupId;
        const { message, sender } = req.body;

    // Find the group by id
        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ error: "Group not found" });
        }

    // Check if the sender is a member of the group
        const isMember = group.members.includes(sender);
        if (!isMember) {
            return res
                .status(403)
                .json({ error: "Sender is not a member of the group" });
        }


    // Create a new group message
        const newGroupMessage = new GroupMessage({
            message,
            sender,
            group: groupId,
        });
        await newGroupMessage.save(); // Save the message

        res.status(201).json(newGroupMessage); // Send the message
    } catch (error) {
        res.status(500).json({ error: error.message }); // If there is an error, send a 500 error
    }
});


// Delete the group message
router.delete("/group/:groupId/message/:messageId", async (req, res) => {
    try {
        const { groupId, messageId } = req.params;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(404).json({ error: "Group not found" });
        }
        // Check if the message exists
        const message = await GroupMessage.findById(messageId);
        if (!message) {
            return res.status(404).json({ error: "Message not found" });
        }

        // Check if the message belongs to the group
        if (message.group.toString() !== groupId) {
            return res.status(403).json({ error: "Message does not belong to the group" });
        }

        // Delete the message
        await message.remove();


        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 