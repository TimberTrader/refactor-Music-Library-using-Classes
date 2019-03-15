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
class Library {
  constructor (libName, creator) {
    this.libName = libName,
    this.creator = creator,
    this.playlists = []
  }
  addList(list) {
    this.playlists.push(list)
  }
}

var track1 = new Track('happy', 1, 230);
var track2 = new Track('more happy', 1, 200);
var playlist1 = (new Playlist('just happy songs')).addTrack(track1)
var library1 = new Library('my fave playlists', 'tim')
library1.addList(playlist1)
playlist1.addTrack(track2)