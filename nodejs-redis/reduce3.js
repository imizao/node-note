var result = [
  {
    subject: 'math',
    score: 80
  },
  {
    subject: 'chinese',
    score: 90
  },
  {
    subject: 'english',
    score: 80
  }
]

var dis = {
  math: 0.5,
  chinese: 0.3,
  english: 0.2
}

var sum = result.reduce(function (prev, cur) {
  return cur.score + prev;
}, -10);

var qsum = result.reduce(function (prev, cur) {
  console.log(dis[cur.subject]);
  return cur.score * dis[cur.subject] + prev;
}, 0)

console.log(sum,qsum);
