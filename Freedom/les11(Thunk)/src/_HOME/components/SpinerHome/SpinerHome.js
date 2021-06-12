import React from 'react';
import { connect } from 'react-redux';

class SpinnerHome extends React.Component {

  get fetchingState() {
    const { isPostsFetching, isTodosFetching } = this.props;
    // Этот гет служит для нас своеобразным хранилищем - в сонст пропс может быть уйма стэйтов спинера разных компонентов,
    return isPostsFetching || isTodosFetching;
    // в ретурн же прописывается через || isFetching
  } 

  render() {
    return this.fetchingState && <div className="blocks">
    <div className="block orange"></div>
    <div className="block blue"></div>
  </div>;
  }
}

export const mapStateToProps = ({ posts, todos }) => ({
  isPostsFetching: posts.isFetching,
  isTodosFetching: todos.isFetching,
  //Тут будут прелоады с других компонентов
  //isMusicFetching: music.isFetching
});

export default connect(mapStateToProps)(SpinnerHome);
