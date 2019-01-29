module.exports = {
  success,
  fail,
  repair
};

function success(item) {
  if (item.durability < 25 && item.enhancement <= 14) {
    throw new Error(`The ${item.type}'s durability is too low to be enhanced.`);
  }

  if (item.durability < 10 && item.enhancement >= 15) {
    throw new Error(`The ${item.type}'s durability is too low to be enhanced.`);
  }

  if (item.enhancement >= 0 && item.enhancement < 15) {
    item.enhancement++;
    item.name = `[+${item.enhancement}] ${item.name}`;
  } else if (item.enhancement === 15) {
    item.enhancement++;
    item.name = `PRI ${item.name}`;
  } else if (item.enhancement === 16) {
    item.enhancement++;
    item.name = `DUO ${item.name}`;
  } else if (item.enhancement === 17) {
    item.enhancement++;
    item.name = `TRI ${item.name}`;
  } else if (item.enhancement === 18) {
    item.enhancement++;
    item.name = `TET ${item.name}`;
  } else if (item.enhancement === 19) {
    item.enhancement++;
    item.name = `PEN ${item.name}`;
  }
  return item;
}

function fail(item) {
  if (item.type == "weapon" && item.enhancement <= 7) {
    throw new Error("weapon cannot be enhance.");
  }

  if (item.type == "armor" && item.enhancement <= 5) {
    throw new Error("armor cannot be");
  }

  if (item.enhancement >= 0 && item.enhancement <= 14) {
    item.durability -= 5;
  } else if (item.enhancement >= 15 && item.enhancement <= 16) {
    item.durability -= 10;
  } else if (item.enhancement === 17) {
    item.enhancement--;
    item.durability -= 10;
    item.name = `PRI ${item.name}`;
  } else if (item.enhancement === 18) {
    item.enhancement--;
    item.durability -= 10;
    item.name = `DUO ${item.name}`;
  } else if (item.enhancement === 19) {
    item.enhancement--;
    item.durability -= 10;
    item.name = `TRI ${item.name}`;
  }
  return item;
}

function repair(item) {
  item.durability = 100;
  return item;
}
