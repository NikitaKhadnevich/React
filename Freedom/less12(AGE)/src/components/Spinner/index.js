import React from 'react';
import { connect } from 'react-redux';
class SpinnerHome extends React.Component {

  get fetchingState() {
    const { isFetchingCivil, isFetchingUnit, isFetchingStru, isFetchingTech } = this.props;
    // Этот гет служит для нас своеобразным хранилищем - в сонст пропс может быть уйма стэйтов спинера разных компонентов,
    return isFetchingCivil || isFetchingUnit || isFetchingStru || isFetchingTech
    // в ретурн же прописывается через || isFetching
  } 

  render() {
    return this.fetchingState && <div className="blocks">
    <div className="block orange"></div>
    <div className="block blue"></div>
  </div>;
  }
}

export const mapStateToProps = ({ civil, units, structures, technologies }) => ({
  isFetchingCivil: civil.isFetching,
  isFetchingUnit: units.isFetching,
  isFetchingStru: structures.isFetching,
  isFetchingTech: technologies.isFetching
  //Тут будут прелоады с других компонентов
  //isMusicFetching: music.isFetching
});

export default connect(mapStateToProps)(SpinnerHome);