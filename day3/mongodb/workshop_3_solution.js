db.topic.aggregate({
  $lookup : 
    { from : "user" , localField: "user_id" , foreignField: "_id", as: "owner" } 
  },{ 
  $lookup : 
    { from : "forum" , localField: "forum_id" , foreignField: "_id", as: "room" } 
  },{ 
  $lookup : 
    { from : "comment" , localField: "comment_ids" , foreignField: "_id", as: "comments" } 
  }, { 
    $project: { 
      name: 1,
      tags: 1,
      comments : 1,
      total_comment : { $size : "$comments"},
      owner: { $arrayElemAt: [ "$owner", 0 ] },
      room: { $arrayElemAt: [ "$room", 0 ] } 
    }  
  } 
).pretty()
