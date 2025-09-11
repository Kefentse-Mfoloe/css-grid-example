import albumCover from '../../assets/default_album_cover.jpg'

export default function MainHeader({ headerContent }) {
    return (
      <div className="main_header">
        <div className="img">
          <img src={albumCover} alt="Album Cover" />
        </div>
        <section className="details">
          <div>
            <p>{headerContent.album}</p>
            <p className="sm-hide">{headerContent.artist}</p>
            <p className="sm-hide">
              {headerContent.year} . {headerContent.duration} . {headerContent.songs} songs
            </p>
          </div>
          <div>
            <i className="fa fa-play"> &nbsp;Play all</i>
            <i className="fa fa-plus"> &nbsp;Add to</i>
            <i className="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>
          </div>
        </section>
      </div>
    );
}