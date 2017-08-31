db.topic.drop()
db.topic.insert({
  name: "4 how to find best comment",
  deleted: false,
  comments: [{
      comment: "good comment",
      likes: 100
    },
    {
      comment: "normal comment",
      likes: 5
    },
    {
      comment: "bad comment",
      likes: 0
    }
  ]
})
db.topic.insert({
  name: "1 how to find best comment",
  deleted: false,
  comments: [{
      comment: "good comment",
      likes: 10
    },
    {
      comment: "normal comment",
      likes: 5
    },
    {
      comment: "bad comment",
      likes: 0
    }
  ]
})
db.topic.insert({
  name: "3 how to find best comment",
  deleted: true,
  comments: [{
      comment: "good comment",
      likes: 100
    },
    {
      comment: "normal comment",
      likes: 5
    },
    {
      comment: "bad comment",
      likes: 0
    }
  ]
})
db.topic.insert({
  name: "2 how to find best comment",
  deleted: false,
  comments: [{
      comment: "good comment",
      likes: 10
    },
    {
      comment: "normal comment",
      likes: 5
    },
    {
      comment: "bad comment",
      likes: 0
    }
  ]
})
