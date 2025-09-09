import albumCover from '../../assets/default_album_cover.jpg'

export default function MainHeader(){
    return (
      <div className="main_header">
        <div className="img">
          <img src={albumCover} alt="Album Cover" />
        </div>
        <section className="details">
          <div>
            <p>good kid, m.A.A.d city (Deluxe)</p>
            <p className="sm-hide">Kendrick Lamar</p>
            <p className="sm-hide">2012 . 1 hr 32 min . 17 songs</p>
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