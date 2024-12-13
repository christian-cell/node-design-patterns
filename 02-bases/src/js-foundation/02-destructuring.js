const { SHELL , HOMEBREW_PREFIX } = process.env || {};

// console.table({ SHELL , HOMEBREW_PREFIX });

const characteres = ['superman','batman','Green Lantern','flash'];

const [_, __, flash] = characteres;
const [, batman, ] = characteres;

