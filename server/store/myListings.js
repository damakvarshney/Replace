const listings = [
  {
    id: 201,
    title: "Red jacket",
    images: [{ fileName: "jacket1" }],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Gray couch in a great condition",
    images: [{ fileName: "couch2" }],
    categoryId: 1,
    price: 1200,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addMyListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getMyListings = () => listings;

const getMyListing = (id) => listings.find((listing) => listing.id === id);

const filterMyListings = (predicate) => listings.filter(predicate);

module.exports = {
  addMyListing,
  getMyListings,
  getMyListing,
  filterMyListings,
};
