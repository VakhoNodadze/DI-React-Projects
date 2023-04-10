// const video = {
//   title: 'video 1',
//   play: function () {
//     console.log(this)
//   },
// }

// video.play()

// video.stop = function () {
//   console.log(this)
// }
// video.stop()

// console.log(this)

// function playVideo() {
//   console.log(this)
// }

// playVideo()

// function Video(title) {
//   this.title = title
//   console.log(this)
// }

// const myvideo = new Video('video 2')
// const myvideo2 = new Video('video 3')

const video = {
  title: 'video 2',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log('normal function', this, tag)
    })
  },
  showTags2() {
    this.tags.forEach((tag) => {
      console.log('arrow function', this, tag)
    })
  },
  play() {
    console.log('normal', this)
  },
  play2: () => {
    console.log('arrow', this)
  },
}

video.showTags()
video.showTags2()
video.play()
video.play2()
