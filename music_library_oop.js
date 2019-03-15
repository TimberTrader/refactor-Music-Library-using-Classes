class Track {
  constructor (title, rating, length) {
    this.title = title
    this.rating = rating
    this.playLength = length
  }
}
class Playlist {
  constructor (name) {
    this.name = name,
    this.tracks = []
  }
  addTrack(track) {
    this.tracks.push(track);
    return this;
  }

}
class Playlist {
  constructor (name) {
    this.name = name,
    this.tracks = []
  }
  addTrack(track) {
    this.tracks.push(track);
    return this;
  }
  showRatings(tracks) {
    return this.tracks.reduce( (a, b) => a + b.rating, 0) / this.tracks.length;
  }
  showDuration(tracks) {
    return this.tracks.reduce( (a, b) => a + b.playLength, 0);
  }
}

var track1 = new Track('happy', 1, 230);
var track2 = new Track('more happy', 3, 200);
var track3 = new Track('less happy', 5, 300);
var playlist1 = (new Playlist('just happy songs'))
  .addTrack(track1)
  .addTrack(track2)
  .addTrack(track3);
var library1 = new Library('my fave playlists', 'tim')
console.log(playlist1.showRatings());
console.log(playlist1.showDuration());
library1.addList(playlist1)