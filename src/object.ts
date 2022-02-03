export {};

let profile1: object = { name: 'Tom' };
profile1 = { birthYear: 1900 };

let profile2: {
  name: string;
} = { name: 'Tom' };

profile2 = { name: 'Tom' };

// プロパティに対しても型指定ができる