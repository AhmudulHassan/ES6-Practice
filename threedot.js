const ages=[12,14,16,13,17];
const ages2=[15,16,12];
const ages3=[25,87,89];
const allAges=ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);

const maximum=Math.max(...ages2);
console.log(maximum);
