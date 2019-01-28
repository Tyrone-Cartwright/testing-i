module.exports = {
  success,
  fail,
  repair
};

function enhancedCheck(item) {
  let upgrade = item.enhancement;
  upgrade += 1;
  console.log(upgrade);
  if (upgrade > 20) {
    throw new Error("item");
  } else {
    // item.enhancement += 1;
    let name = item.origName;
    switch (upgrade) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        item.name = `[+${upgrade}] ${name}`;
        break;
      case 16:
        item.name = `[PRI] ${name}`;
        break;
      case 17:
        item.name = `[DUO] ${name}`;
        break;
      case 18:
        item.name = `[TRI] ${name}`;
        break;
      case 19:
        item.name = `[TET] ${name}`;
        break;
      case 20:
        item.name = `[PEN] ${name}`;
        break;
    }
  }
}

function success(item) {
  if (!item) return null;
  if (item.type !== "armour" && item.type !== "weapon") {
    return console.error({ error: "can enhance weapon and armour only" });
  } else {
    enhancedCheck(item);
    console.log(item);
    return {
      origName: item.origName,
      name: `${item.name}`,
      type: item.type,
      durability: item.durability,
      enhancement: item.enhancement + 1
    };
  }
}

function fail(item) {
  return item;
}

function repair(item) {
  item.durability = 100;
  return item;
}
