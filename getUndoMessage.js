/**
 * 获取撤回的消息，并发送
 * @param msg
 * @returns {Promise<void>}
 */
export async function getUndoMessage(msg) {
  const contact = msg.talker(); // 发消息人
  const receiver = msg.to(); // 消息接收人
  const content = msg.text(); // 消息内容
  const room = msg.room(); // 是否是群消息
  const roomName = (await room?.topic()) || null; // 群名称
  const alias = (await contact.alias()) || (await contact.name()); // 发消息人昵称
  const remarkName = await contact.alias(); // 备注名称
  const name = await contact.name(); // 微信名称
  const mentionList = []; // 艾特列表
  mentionList.push(contact);

  if (msg.type() === MessageType.Recalled) {
    const recalledMessage = await msg.toRecalled();
    await room.say(`Message: ${recalledMessage} has been recalled.`);
    console.log(`Message: ${recalledMessage} has been recalled.`);
  }
}
