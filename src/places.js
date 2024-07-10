export const initialTravelPlan = {
  0: {
    id: 0,
    title: "(Root)",
    childIds: [1, 42],
  },

  1: {
    id: 1,
    title: "Earth",
    childIds: [2, 10],
  },
  2: {
    id: 2,
    title: "Africa",
    childIds: [3, 4],
  },
  3: {
    id: 3,
    title: "Botswana",
    childIds: [],
  },
  4: {
    id: 4,
    title: "Egypt",
    childIds: [],
  },

  10: {
    id: 10,
    title: "Americas",
    childIds: [11, 12],
  },
  11: {
    id: 11,
    title: "Argentina",
    childIds: [],
  },
  12: {
    id: 12,
    title: "Brazil",
    childIds: [],
  },

  42: {
    id: 42,
    title: "Moon",
    childIds: [43],
  },
  43: {
    id: 43,
    title: "Rheita",
    childIds: [],
  },
};
