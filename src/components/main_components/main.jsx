import MainHeader from './mainHeader';
import MainBody from './mainBody';
import { HEADER, SONGS } from './maincontnent.js';

export default function Main() {
    return (
      <div className="main">
        <MainHeader headerContent={HEADER} />
        <MainBody songs={SONGS} />
      </div>
    );
}