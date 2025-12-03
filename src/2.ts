const data = `245284-286195,797927-983972,4949410945-4949555758,115-282,8266093206-8266228431,1-21,483873-655838,419252-466133,6190-13590,3876510-4037577,9946738680-9946889090,99954692-100029290,2398820-2469257,142130432-142157371,9797879567-9798085531,209853-240025,85618-110471,35694994-35766376,4395291-4476150,33658388-33694159,680915-772910,4973452995-4973630970,52-104,984439-1009605,19489345-19604283,22-42,154149-204168,7651663-7807184,287903-402052,2244-5558,587557762-587611332,307-1038,16266-85176,422394377-422468141`;

const idPairs = data.split(',').map((pair) => pair.split('-'));

const hasDuplicateSubstring = (id: string) => {
  if (id.length % 2 === 1) return false;
  if (id.slice(0, id.length / 2) === id.slice(id.length / 2)) return true;
  return false;
};

let invalidIdSum = 0;

for (const [start, end] of idPairs) {
  for (let id = parseInt(start!); id <= parseInt(end!); id++) {
    if (hasDuplicateSubstring(id.toString())) {
      invalidIdSum += id;
    }
  }
}

console.log(invalidIdSum);

const hasDuplicateSubstringAll = (id: string) => {
  for (let i = 1; i < id.length; i++) {
    if (id.length / i !== Math.floor(id.length / i)) continue;
    const substring = id.slice(0, i);
    let allDuplicate = true;
    for (let j = 0; j < id.length; j += i) {
      if (id.slice(j, j + i) !== substring) {
        allDuplicate = false;
        break;
      }
    }
    if (allDuplicate) return true;
  }
  return false;
};

invalidIdSum = 0;

for (const [start, end] of idPairs) {
  for (let id = parseInt(start!); id <= parseInt(end!); id++) {
    if (hasDuplicateSubstringAll(id.toString())) {
      invalidIdSum += id;
    }
  }
}

console.log(invalidIdSum);
