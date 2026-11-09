let reels = [
    {
        isMuted:"true",
        username: "rahul_sharma",
        likeCount: 12500,
        isLiked: false,
        commentCount: 340,
        caption: "Life is better when you enjoy every moment ❤️",
        video: "reel/video1.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=12",
        shareCount: 120,
        isFollowed: false
    },
    {
        isMuted:"true",
        username: "priya_singh",
        likeCount: 28400,
        isLiked: true,
        commentCount: 890,
        caption: "Believe in yourself and make it happen ✨",
        video: "reel/video2.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=47",
        shareCount: 450,
        isFollowed: true
    },
    {
        isMuted:"true",
        username: "arjun_verma",
        likeCount: 8700,
        isLiked: false,
        commentCount: 215,
        caption: "Just another beautiful day 🌿",
        video: "reel/video3.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=11",
        shareCount: 85,
        isFollowed: false
    },
    {
        isMuted:"true",
        username: "sneha_gupta",
        likeCount: 45200,
        isLiked: false,
        commentCount: 1250,
        caption: "Collect moments, not things! 🦋",
        video: "reel/video4.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=44",
        shareCount: 980,
        isFollowed: true
    },
    {
        isMuted:"true",
        username: "vikash_kumar",
        likeCount: 15600,
        isLiked: true,
        commentCount: 430,
        caption: "Hard work always pays off 💪",
        video: "reel/video5.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=13",
        shareCount: 210,
        isFollowed: false
    },
    {
        isMuted:"true",
        username: "anjali_mehta",
        likeCount: 32100,
        isLiked: false,
        commentCount: 760,
        caption: "Sunsets and good vibes 🌅",
        video: "reel/video1.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=49",
        shareCount: 670,
        isFollowed: true
    },
    {
        isMuted:"true",
        username: "rohit_yadav",
        likeCount: 9800,
        isLiked: false,
        commentCount: 180,
        caption: "No excuses, just results 🔥",
        video: "reel/video2.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=14",
        shareCount: 95,
        isFollowed: false
    },
    {
        isMuted:"true",
        username: "neha_raj",
        likeCount: 56700,
        isLiked: true,
        commentCount: 1890,
        caption: "Dancing is my therapy 💃❤️",
        video: "reel/video3.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=45",
        shareCount: 1450,
        isFollowed: true
    },
    {
        isMuted:"true",
        username: "aman_singh",
        likeCount: 21300,
        isLiked: false,
        commentCount: 520,
        caption: "Dream big, stay focused 🚀",
        video: "reel/video4.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=15",
        shareCount: 320,
        isFollowed: false
    },
    {
        isMuted:"true",
        username: "kavya_mishra",
        likeCount: 39800,
        isLiked: false,
        commentCount: 970,
        caption: "Happiness looks good on everyone 😊",
        video: "reel/video5.mp4.mp4",
        userprofile: "https://i.pravatar.cc/150?img=48",
        shareCount: 780,
        isFollowed: true
    }
];

let allreels = document.querySelector(".allreels")

let isMuted = true

function addData() {
     let sum = ''
reels.forEach(function(val,idx){
       sum = sum + `
       <div class="reel">
                <video autoplay loop ${val.isMuted?'muted':''} src="${val.video}"></video>
                   <div id="${idx}" class="mute">
                      ${val.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
                   </div>
                <div class="bottom">
                    <div class="user">
                        <img src="${val.userprofile}" alt="">
                        <h4>${val.username}</h4>
                        <button id="${idx}" class="follow" >${val.isFollowed?'Unfollow':'Follow'}</button>
                    </div>
         32qwert           <h3>${val.caption}</h3>
                </div>
                <div class="right">
                    <div id=${idx} class="like">
                        <h4 class="like-icon">${val.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${val.likeCount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${val.commentCount}</h6>
                    </div>
                      <div class="share">
                        <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>${val.shareCount}</h6>
                    </div>
                      <div class="menu">
                        <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                    </div>
                </div>
            </div>
            `
})
allreels.innerHTML = sum
}
addData()

allreels.addEventListener("click",function(dets){
  
    if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
            reels[dets.target.id].likeCount++
        reels[dets.target.id].isLiked = true
    }else{
         reels[dets.target.id].likeCount--
        reels[dets.target.id].isLiked = false
    }
    addData()
    }
    if(dets.target.className == 'follow'){
        if(!reels[dets.target.id].isFollowed){
        reels[dets.target.id].isFollowed = true
    }else{
         reels[dets.target.id].isFollowed = false
    }
     addData()
    }

     if(dets.target.className == 'mute'){
        if(!reels[dets.target.id].isMuted){
        reels[dets.target.id].isMuted = true
    }else{
         reels[dets.target.id].isMuted = false
    }
     addData()
    }

   
})