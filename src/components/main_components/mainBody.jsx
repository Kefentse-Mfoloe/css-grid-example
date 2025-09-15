export default function MainBody({ songs }) {
    return (
      <div className="main_body">
        {songs.map((song) => (
          <div key={song.songNumber}>
            <p>
              {song.songNumber}. {song.title}
            </p>
            <p>{song.artist}</p>
            <p>{song.duration}</p>
            <p>
              <span>CATTY CLOUND SYNC</span>
            </p>
          </div>
        ))}
      </div>
    );
}