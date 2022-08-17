ratingData = [
  {restaurant: 'KFC', rating:5},
  {restaurant: 'Burger King', rating:4},
  {restaurant: 'KFC', rating:3},
  {restaurant: 'Domino', rating:2},
  {restaurant: 'Subway', rating:3},
  {restaurant: 'Domino', rating:1},
  {restaurant: 'Subway', rating:4},
  {restaurant: 'Pizza Hut', rating:5}
  ]

var items = {};
ratingData.forEach(ele => {
 let restraName = ele.restaurant;
 let restraRating =  ele.rating;
 if(!(restraName in items)){
  items[restraName] = [];
 }
 items[restraName].push(restraRating);
});

var averageRating = {};
let keys = Object.keys(items);
keys.forEach(ele => {
  let restraName = ele;
  let restraRating = items[restraName];
  let sum=0;
  for(let i=0;i<restraRating.length;i++){
      sum = sum+restraRating[i]
  }
  averageRating[restraName] = sum/restraRating.length;
});

var avgRatingForAll  = [];
keys.forEach(ele => {
  let val = {
      Restaurant: ele,
      averageRating: averageRating[ele]
  }
  avgRatingForAll.push(val)
})
console.log(avgRatingForAll);

var avgRatingAbv4 = avgRatingForAll.filter(ele => ele.averageRating>=4);
console.log(avgRatingAbv4);